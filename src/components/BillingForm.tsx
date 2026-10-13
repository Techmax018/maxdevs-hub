import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FunctionsFetchError } from "@supabase/supabase-js";
import { CheckCircle2, CreditCard, LoaderCircle, Smartphone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BillingFormProps {
  packageId: string;
  packageName: string;
  packagePrice: string;
}

type PaymentStatus = "idle" | "initiating" | "pending" | "success" | "failed";

const getFunctionErrorMessage = async (error: unknown, fallback: string) => {
  if (error instanceof FunctionsFetchError) {
    return "Cannot connect to Supabase. Check that Vercel's VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY point to your active Supabase project, then redeploy.";
  }

  if (error && typeof error === "object" && "context" in error && error.context instanceof Response) {
    try {
      const body: unknown = await error.context.clone().json();
      if (body && typeof body === "object" && "error" in body && typeof body.error === "string") {
        return body.error;
      }
    } catch (parseError) {
      console.error("Unable to read the payment service error response:", parseError);
    }
  }
  return fallback;
};

export const BillingForm = ({ packageId, packageName, packagePrice }: BillingFormProps) => {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "pending" || !orderId) return;

    let checking = false;
    const checkPayment = async () => {
      if (checking) return;
      checking = true;

      try {
        const { data, error } = await supabase.functions.invoke("payhero-payment-status", {
          body: { orderId },
        });

        if (error) throw error;
        if (!data || !["pending", "success", "failed"].includes(data.status)) {
          throw new Error("PayHero returned an unrecognized payment status.");
        }

        setStatusError(null);
        if (data.status === "success") {
          setStatus("success");
          toast({
            title: "Payment received",
            description: `Your ${packageName} payment was confirmed.`,
          });
        } else if (data.status === "failed") {
          setStatus("failed");
          toast({
            title: "Payment was not completed",
            description: "You can try again with the same package.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Unable to check PayHero payment status:", error);
        setStatusError(
          await getFunctionErrorMessage(error, "We couldn't check the payment status. We'll keep trying automatically."),
        );
      } finally {
        checking = false;
      }
    };

    void checkPayment();
    const intervalId = window.setInterval(() => void checkPayment(), 5000);
    return () => window.clearInterval(intervalId);
  }, [orderId, packageName, status, toast]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("initiating");
    setStatusError(null);

    try {
      const { data, error } = await supabase.functions.invoke("payhero-payment", {
        body: {
          packageId,
          customerName: customerName.trim(),
          phoneNumber: phoneNumber.trim(),
        },
      });

      if (error) throw error;
      if (!data?.orderId) throw new Error("The payment service did not return an order reference.");

      setOrderId(data.orderId);
      setStatus("pending");
      toast({
        title: "M-Pesa prompt sent",
        description: "Check your phone and enter your M-Pesa PIN to complete payment.",
      });
    } catch (error) {
      console.error("Unable to start PayHero payment:", error);
      setStatus("idle");
      toast({
        title: "Couldn't start payment",
        description: await getFunctionErrorMessage(
          error,
          "Please check your details and try again. If this continues, contact us.",
        ),
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          M-Pesa Checkout
        </CardTitle>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm text-muted-foreground">Selected Package</p>
            <p className="font-semibold">{packageName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-2xl font-bold text-primary">{packagePrice}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {status === "success" ? (
          <div className="space-y-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5 text-center" role="status">
            <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
            <h2 className="text-lg font-semibold">Payment confirmed</h2>
            <p className="text-sm text-muted-foreground">
              Thank you. We have received your payment for the {packageName}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-sm text-muted-foreground">
              Enter your details and PayHero will send an M-Pesa STK prompt to your phone. Approve it using your M-Pesa PIN.
            </p>

            <div className="space-y-2">
              <Label htmlFor="customerName">Full name</Label>
              <Input
                id="customerName"
                autoComplete="name"
                required
                maxLength={100}
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Your name"
                disabled={status === "initiating" || status === "pending"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">M-Pesa phone number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                maxLength={20}
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="0712 345 678"
                disabled={status === "initiating" || status === "pending"}
              />
              <p className="text-xs text-muted-foreground">
                Use a Kenyan M-Pesa number, for example 0712 345 678 or +254 712 345 678.
              </p>
            </div>

            {status === "pending" && (
              <div className="space-y-2 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm" role="status" aria-live="polite">
                <div className="flex items-center gap-2 font-medium">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Waiting for M-Pesa confirmation
                </div>
                <p className="text-muted-foreground">
                  Approve the payment prompt on your phone. This page will update when PayHero confirms the result.
                </p>
                {statusError && <p className="text-destructive">{statusError}</p>}
              </div>
            )}

            {status === "failed" && (
              <p className="text-sm text-destructive" role="alert">
                The payment was declined or cancelled. You can try again.
              </p>
            )}

            <Button type="submit" className="w-full" disabled={status === "initiating" || status === "pending"}>
              {status === "initiating" ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Sending M-Pesa prompt...
                </>
              ) : status === "pending" ? (
                "Waiting for payment..."
              ) : (
                <>
                  <Smartphone className="h-4 w-4" />
                  Pay {packagePrice} with M-Pesa
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Payments are securely processed by PayHero. Never share your M-Pesa PIN.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
