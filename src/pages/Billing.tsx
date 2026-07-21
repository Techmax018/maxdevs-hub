import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { BillingForm } from "@/components/BillingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Derived state: direct lookup with fallbacks (no useState or useEffect needed)
  const packageName = location.state?.packageName || "Professional Package";
  const packagePrice = location.state?.packagePrice || "Ksh 60 000";

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
              Secure payment processing powered by industry-leading encryption
            </p>
          </div>

          <BillingForm
            packageName={packageName}
            packagePrice={packagePrice}
          />
        </div>
      </section>
    </div>
  );
};

export default Billing;
