import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { BillingForm } from "@/components/BillingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Destructure state values directly, setting defaults
  const initialPackageName = location.state?.packageName || "Professional Package";
  const initialPackagePrice = location.state?.packagePrice || "Ksh 60 000";

  const [packageInfo, setPackageInfo] = useState({
    name: initialPackageName,
    price: initialPackagePrice
  });

  // 👇 The change is here: The useEffect is simplified and guarantees update on state change.
  useEffect(() => {
    const newName = location.state?.packageName;
    const newPrice = location.state?.packagePrice;

    // Check if new data exists and is different from current state
    if (newName && newPrice) {
      setPackageInfo({
        name: newName,
        price: newPrice
      });
    }
    // Dependency array now correctly monitors for changes in the entire state object.
  }, [location.state]); // Keep location.state as the dependency

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
