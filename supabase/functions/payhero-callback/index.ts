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
    const callback = body?.response;
    const externalReference = callback?.ExternalReference;
    const checkoutRequestId = callback?.CheckoutRequestID;
    if (typeof externalReference !== "string" || typeof checkoutRequestId !== "string") {
      return jsonResponse({ error: "Invalid PayHero callback payload." }, 400);
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_orders")
      .select("id, external_reference, payhero_reference, checkout_request_id, status")
      .eq("external_reference", externalReference)
      .maybeSingle();
    if (error) {
      console.error("Unable to match PayHero callback to an order:", error.message);
      throw new Error("Unable to process payment callback.");
    }
    if (!data) return jsonResponse({ error: "Payment order not found." }, 404);
    if (data.checkout_request_id && data.checkout_request_id !== checkoutRequestId) {
      return jsonResponse({ error: "Callback does not match this payment order." }, 400);
    }

    await syncPayHeroStatus(supabase, data as PaymentOrder);
    return jsonResponse({ received: true });
  } catch (error) {
    console.error("Unable to process PayHero callback:", error);
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unable to process payment callback." },
      500,
    );
  }
});
