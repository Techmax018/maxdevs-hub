import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { BillingForm } from "@/components/BillingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Fallback map so direct /billing navigation still works
const PACKAGE_DEFAULTS: Record<string, { name: string; price: string }> = {
  startup:             { name: "Startup Package",            price: "KSh 40,000" },
  professional:        { name: "Professional Package",       price: "KSh 60,000" },
  "basic-update":      { name: "Basic Update",               price: "KSh 12,000" },
  "technical-security":{ name: "Technical / Security Update",price: "KSh 25,000" },
  "content-seo":       { name: "Content & SEO Refresh",      price: "KSh 38,000" },
  "site-audit":        { name: "Site Audit & Strategy",      price: "KSh 10,000" },
};

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const stateId    = location.state?.packageId   as string | undefined;
  const stateName  = location.state?.packageName as string | undefined;
  const statePrice = location.state?.packagePrice as string | undefined;

  // Use whatever was passed; fall back to defaults map; last resort: startup
  const packageId    = stateId ?? "startup";
  const defaults     = PACKAGE_DEFAULTS[packageId] ?? PACKAGE_DEFAULTS["startup"];
  const packageName  = stateName  ?? defaults.name;
  const packagePrice = statePrice ?? defaults.price;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/packages")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Packages
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Your <span className="text-primary">Order</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Pay securely by M-Pesa with PayHero
            </p>
          </div>

          <BillingForm
            packageId={packageId}
            packageName={packageName}
            packagePrice={packagePrice}
          />
        </div>
      </section>
    </div>
  );
};

export default Billing;
