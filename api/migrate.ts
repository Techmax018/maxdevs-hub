import type { IncomingMessage, ServerResponse } from "http";
import { Pool } from "pg";

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");

  // Use non-pooling URL for DDL migrations (Prisma/pgbouncer URL breaks CREATE TABLE)
  const connString =
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL;

  if (!connString) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        ok: false,
        error: "No Postgres connection string found. Set POSTGRES_URL_NON_POOLING in Vercel environment variables.",
        available_env_keys: Object.keys(process.env).filter((k) =>
          k.toLowerCase().includes("postgres") || k.toLowerCase().includes("database")
        ),
      })
    );
    return;
  }

  const pool = new Pool({
    connectionString: connString,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  });

  const client = await pool.connect().catch((err: Error) => {
    return { error: err.message };
  });

  if ("error" in client) {
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: `DB connect failed: ${client.error}` }));
    await pool.end();
    return;
  }

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
        package_id        TEXT NOT NULL,
        customer_name     TEXT NOT NULL,
        phone_number      TEXT NOT NULL,
        status            TEXT NOT NULL DEFAULT 'pending'
                            CHECK (status IN ('pending', 'success', 'failed')),
        payhero_reference TEXT
      );

      CREATE INDEX IF NOT EXISTS orders_status_idx     ON orders (status);
      CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
    `);

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true, message: "Migration complete — orders table ready." }));
  } catch (err) {
    const msg = (err as Error).message;
    console.error("Migration query failed:", msg);
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: msg }));
  } finally {
    client.release();
    await pool.end();
  }
}
