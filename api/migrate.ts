import type { IncomingMessage, ServerResponse } from "http";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_NON_POOLING ?? process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");

  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
        package_id       TEXT NOT NULL,
        customer_name    TEXT NOT NULL,
        phone_number     TEXT NOT NULL,
        status           TEXT NOT NULL DEFAULT 'pending'
                           CHECK (status IN ('pending', 'success', 'failed')),
        payhero_reference TEXT
      );

      CREATE INDEX IF NOT EXISTS orders_status_idx ON orders (status);
      CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
    `);

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true, message: "Migration complete — orders table ready." }));
  } catch (err) {
    console.error("Migration failed:", err);
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: (err as Error).message }));
  } finally {
    client.release();
  }
}
