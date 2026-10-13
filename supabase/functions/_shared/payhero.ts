import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

export const createAdminClient = () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase server credentials are not configured.");
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};

export const getPayHeroAuthorization = () => {
  const token = Deno.env.get("PAYHERO_BASIC_AUTH_TOKEN")?.trim();
  if (!token) throw new Error("PAYHERO_BASIC_AUTH_TOKEN is not configured.");
  return token.startsWith("Basic ") ? token : `Basic ${token}`;
};

export interface PaymentOrder {
  id: string;
  external_reference: string;
  payhero_reference: string | null;
  checkout_request_id: string | null;
  status: string;
}

export const syncPayHeroStatus = async (
  supabase: ReturnType<typeof createAdminClient>,
  order: PaymentOrder,
) => {
  if (!order.payhero_reference) {
    throw new Error("The PayHero transaction reference is not available yet.");
  }

  const response = await fetch(
    `https://backend.payhero.co.ke/api/v2/transaction-status?reference=${encodeURIComponent(order.payhero_reference)}`,
    { headers: { Authorization: getPayHeroAuthorization() } },
  );

  if (!response.ok) {
    console.error("PayHero status lookup failed with status:", response.status);
    throw new Error("PayHero could not confirm the payment status.");
  }

  const result = await response.json();
  const payHeroStatus = typeof result.status === "string" ? result.status.toUpperCase() : "";
  const status =
    payHeroStatus === "SUCCESS" && result.success === true
      ? "success"
      : payHeroStatus === "FAILED"
        ? "failed"
        : "pending";
  const update: Record<string, string | null> = {
    status,
    provider_reference:
      typeof result.provider_reference === "string" ? result.provider_reference : null,
    result_description:
      typeof result.status === "string" ? `PayHero status: ${result.status}` : null,
    updated_at: new Date().toISOString(),
  };

  if (order.status !== "success") {
    const { error } = await supabase.from("payment_orders").update(update).eq("id", order.id);
    if (error) {
      console.error("Unable to save PayHero payment status:", error.message);
      throw new Error("Unable to save the payment status.");
    }
  }

  return order.status === "success" ? "success" : status;
};
