import type { IncomingMessage, ServerResponse } from "http";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

const PAYHERO_API_URL = "https://backend.payhero.co.ke/api/v2/payments";

const PACKAGE_PRICES: Record<string, number> = {
  startup: 40000,
  professional: 60000,
};

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 10) return "254" + digits.slice(1);
  if (digits.startsWith("254") && digits.length === 12) return digits;
  if (digits.startsWith("7") && digits.length === 9) return "254" + digits;
  throw new Error("Invalid M-Pesa number. Use format 0712345678 or +254712345678.");
}

async function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let body: { packageId?: string; customerName?: string; phoneNumber?: string };
  try {
    body = JSON.parse(await readBody(req));
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Invalid JSON body." }));
    return;
  }

  const { packageId, customerName, phoneNumber } = body;

  if (!packageId || !customerName?.trim() || !phoneNumber?.trim()) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "packageId, customerName and phoneNumber are required." }));
    return;
  }

  const amount = PACKAGE_PRICES[packageId];
  if (!amount) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: `Unknown packageId "${packageId}".` }));
    return;
  }

  let normalizedPhone: string;
  try {
    normalizedPhone = normalizePhone(phoneNumber.trim());
  } catch (err) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: (err as Error).message }));
    return;
  }

  // Insert pending order into Postgres
  const client = await pool.connect();
  let orderId: string;
  try {
    const result = await client.query<{ id: string }>(
      `INSERT INTO orders (package_id, customer_name, phone_number, status)
       VALUES ($1, $2, $3, 'pending') RETURNING id`,
      [packageId, customerName.trim(), normalizedPhone],
    );
    orderId = result.rows[0].id;
  } finally {
    client.release();
  }

  // Trigger PayHero STK push
  const siteUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : (process.env.SITE_URL ?? "https://maxdevs-hub.vercel.app");

  const payheroRes = await fetch(PAYHERO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.PAYHERO_BASIC_TOKEN!,
    },
    body: JSON.stringify({
      amount,
      phone_number: normalizedPhone,
      channel_id: Number(process.env.PAYHERO_CHANNEL_ID),
      provider: "m-pesa",
      external_reference: orderId,
      callback_url: `${siteUrl}/api/payhero-webhook`,
    }),
  });

  if (!payheroRes.ok) {
    const errText = await payheroRes.text();
    console.error("PayHero STK push failed:", payheroRes.status, errText);
    res.statusCode = 502;
    res.end(JSON.stringify({ error: "Failed to initiate M-Pesa payment. Please try again." }));
    return;
  }

  const payheroData = (await payheroRes.json()) as { reference?: string };

  if (payheroData.reference) {
    await pool.query(
      `UPDATE orders SET payhero_reference = $1 WHERE id = $2`,
      [payheroData.reference, orderId],
    );
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ orderId }));
}
