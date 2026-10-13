import { createAdminClient, corsHeaders, getPayHeroAuthorization, jsonResponse } from "../_shared/payhero.ts";

const packages = {
  startup: { name: "Startup Package", amount: 40000 },
  professional: { name: "Professional Package", amount: 60000 },
} as const;

const normalizeKenyanPhone = (value: unknown) => {
  if (typeof value !== "string") return null;
  const digits = value.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `254${digits.slice(1)}` : digits;
  return /^254[17]\d{8}$/.test(international) ? international : null;
};

const markOrderInitiationFailed = async (
  supabase: ReturnType<typeof createAdminClient>,
  orderId: string,
) => {
  const { error } = await supabase
    .from("payment_orders")
    .update({ status: "initiation_failed", updated_at: new Date().toISOString() })
    .eq("id", orderId);
  if (error) console.error("Unable to record failed PayHero initiation:", error.message);
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405);

  try {
    const body = await request.json();
    const packageId = body?.packageId;
    const selectedPackage = packages[packageId as keyof typeof packages];
    const customerName =
      typeof body?.customerName === "string" ? body.customerName.trim() : "";
    const phoneNumber = normalizeKenyanPhone(body?.phoneNumber);

    if (!selectedPackage) return jsonResponse({ error: "Select a valid package." }, 400);
    if (!customerName || customerName.length > 100) {
      return jsonResponse({ error: "Enter a name of up to 100 characters." }, 400);
    }
    if (!phoneNumber) {
      return jsonResponse({ error: "Enter a valid Kenyan M-Pesa phone number." }, 400);
    }

    const supabase = createAdminClient();
    const rateLimitSince = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count, error: rateLimitError } = await supabase
      .from("payment_orders")
      .select("id", { count: "exact", head: true })
      .eq("customer_phone", phoneNumber)
      .gte("created_at", rateLimitSince);
    if (rateLimitError) {
      console.error("Unable to check recent payment requests:", rateLimitError.message);
      throw new Error("Unable to validate your payment request. Please try again.");
    }
    if (count !== null && count >= 3) {
      return jsonResponse(
        { error: "Too many payment prompts were requested for this phone. Please wait 10 minutes." },
        429,
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const channelIdValue = Deno.env.get("PAYHERO_CHANNEL_ID");
    const channelId = Number(channelIdValue);
    const authorization = getPayHeroAuthorization();
    if (!supabaseUrl || !channelIdValue || !Number.isSafeInteger(channelId) || channelId <= 0) {
      throw new Error("PayHero channel configuration is missing or invalid.");
    }

    const orderId = crypto.randomUUID();
    const externalReference = `MD-${crypto.randomUUID().replaceAll("-", "").slice(0, 20)}`;
    const { error: insertError } = await supabase.from("payment_orders").insert({
      id: orderId,
      external_reference: externalReference,
      package_id: packageId,
      amount: selectedPackage.amount,
      customer_name: customerName,
      customer_phone: phoneNumber,
      status: "initiating",
    });
    if (insertError) {
      console.error("Unable to create payment order:", insertError.message);
      throw new Error("Unable to create your order. Please try again.");
    }

    const callbackUrl =
      Deno.env.get("PAYHERO_CALLBACK_URL") ??
      `${supabaseUrl.replace(/\/$/, "")}/functions/v1/payhero-callback`;
    const payHeroResponse = await fetch("https://backend.payhero.co.ke/api/v2/payments", {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: selectedPackage.amount,
        phone_number: phoneNumber,
        channel_id: channelId,
        provider: "m-pesa",
        external_reference: externalReference,
        customer_name: customerName,
        callback_url: callbackUrl,
      }),
    });

    if (!payHeroResponse.ok) {
      console.error("PayHero payment initiation failed with status:", payHeroResponse.status);
      await markOrderInitiationFailed(supabase, orderId);
      return jsonResponse({ error: "PayHero could not start the payment. Please try again." }, 502);
    }

    const result = await payHeroResponse.json();
    if (result.success !== true || typeof result.reference !== "string") {
      console.error("PayHero returned an incomplete payment initiation response.");
      await markOrderInitiationFailed(supabase, orderId);
      return jsonResponse({ error: "PayHero could not start the payment. Please try again." }, 502);
    }

    const { error: updateError } = await supabase
      .from("payment_orders")
      .update({
        payhero_reference: result.reference,
        checkout_request_id:
          typeof result.CheckoutRequestID === "string" ? result.CheckoutRequestID : null,
        status: "pending",
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId);
    if (updateError) {
      console.error("PayHero started a payment but its reference could not be saved:", updateError.message);
      return jsonResponse({
        error: "Payment was started but could not be tracked. Contact support before trying again.",
      }, 500);
    }

    return jsonResponse({ orderId, status: "pending" }, 201);
  } catch (error) {
    console.error("Unable to start PayHero payment:", error);
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unable to start the payment." },
      500,
    );
  }
});
