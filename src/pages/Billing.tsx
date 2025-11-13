import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { BillingForm } from "@/components/BillingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [packageInfo, setPackageInfo] = useState({
    name: "Professional Package",
    price: "$4,500"
  });

  useEffect(() => {
    // Get package info from navigation state if available
    if (location.state?.packageName && location.state?.packagePrice) {
      setPackageInfo({
        name: location.state.packageName,
        price: location.state.packagePrice
      });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/packages')}
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
            packageName={packageInfo.name}
            packagePrice={packageInfo.price}
          />
        </div>
      </section>
    </div>
  );
};

export default Billing;
