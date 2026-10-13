import type { IncomingMessage, ServerResponse } from "http";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

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

  let body: { orderId?: string };
  try {
    body = JSON.parse(await readBody(req));
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Invalid JSON body." }));
    return;
  }

  const { orderId } = body;
  if (!orderId) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "orderId is required." }));
    return;
  }

  const client = await pool.connect();
  try {
    const result = await client.query<{ status: string }>(
      `SELECT status FROM orders WHERE id = $1`,
      [orderId],
    );

    if (result.rows.length === 0) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Order not found." }));
      return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ status: result.rows[0].status }));
  } finally {
    client.release();
  }
}
