import {
  createAdminClient,
  corsHeaders,
  jsonResponse,
  syncPayHeroStatus,
  type PaymentOrder,
} from "../_shared/payhero.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405);

  try {
    const body = await request.json();
    if (typeof body?.orderId !== "string") {
      return jsonResponse({ error: "A payment order reference is required." }, 400);
    }
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(body.orderId)) {
      return jsonResponse({ error: "Invalid payment order reference." }, 400);
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_orders")
      .select("id, external_reference, payhero_reference, checkout_request_id, status")
      .eq("id", body.orderId)
      .maybeSingle();

    if (error) {
      console.error("Unable to find payment order:", error.message);
      throw new Error("Unable to check this payment.");
    }
    if (!data) return jsonResponse({ error: "Payment order not found." }, 404);

    if (data.status === "success") return jsonResponse({ status: "success" });
    if (data.status === "initiation_failed") return jsonResponse({ status: "failed" });
    const status = await syncPayHeroStatus(supabase, data as PaymentOrder);
    return jsonResponse({ status });
  } catch (error) {
    console.error("Unable to check PayHero payment status:", error);
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unable to check payment status." },
      502,
    );
  }
});
