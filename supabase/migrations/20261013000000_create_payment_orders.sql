create table if not exists public.payment_orders (
  id uuid primary key,
  external_reference text not null unique,
  payhero_reference text,
  checkout_request_id text,
  package_id text not null check (package_id in ('startup', 'professional')),
  amount integer not null check (amount > 0),
  customer_name text not null,
  customer_phone text not null,
  status text not null default 'initiating'
    check (status in ('initiating', 'pending', 'success', 'failed', 'initiation_failed')),
  provider_reference text,
  result_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.payment_orders enable row level security;

create index if not exists payment_orders_phone_created_at_idx
  on public.payment_orders (customer_phone, created_at desc);
