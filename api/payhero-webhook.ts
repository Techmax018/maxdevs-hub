import type { IncomingMessage, ServerResponse } from "http";
import { Pool } from "pg";

let pool: Pool | null = null;
function getPool(): Pool {
  if (!pool) {
    const connString =
      process.env.POSTGRES_URL_NON_POOLING ??
      process.env.POSTGRES_URL ?? "";
    const url = connString.includes("sslmode=")
      ? connString.replace(/sslmode=[^&]+/, "sslmode=no-verify")
      : connString + (connString.includes("?") ? "&" : "?") + "sslmode=no-verify";
    pool = new Pool({ connectionString: url, connectionTimeoutMillis: 10000 });
  }
  return pool;
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

  let payload: {
    external_reference?: string;
    status?: string;
    ResultCode?: number;
  };

  try {
    payload = JSON.parse(await readBody(req));
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Invalid JSON." }));
    return;
  }

  const orderId = payload.external_reference;
  if (!orderId) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Missing external_reference." }));
    return;
  }

  // PayHero sends status "SUCCESS" or "FAILED"
  const isSuccess =
    payload.status === "SUCCESS" ||
    payload.ResultCode === 0;

  const newStatus = isSuccess ? "success" : "failed";

  await getPool().query(
    `UPDATE orders SET status = $1 WHERE id = $2`,
    [newStatus, orderId],
  );

  res.statusCode = 200;
  res.end(JSON.stringify({ received: true }));
}
