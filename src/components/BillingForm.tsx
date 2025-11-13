import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BillingFormProps {
  packageName: string;
  packagePrice: string;
}

export const BillingForm = ({ packageName, packagePrice }: BillingFormProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingData, setBillingData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: ""
  });

  const handleChange = (field: string, value: string) => {
    setBillingData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : cleaned;
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Payment Processing",
      description: "Your payment is being processed. We'll send you a confirmation email shortly.",
    });

    setIsProcessing(false);
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Billing Information
        </CardTitle>
        <div className="pt-2 flex justify-between items-center">
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
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Information */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              Secure Payment Details
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="cardName">Cardholder Name *</Label>
              <Input
                id="cardName"
                required
                value={billingData.cardName}
                onChange={(e) => handleChange("cardName", e.target.value)}
                placeholder="John Smith"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                required
                value={billingData.cardNumber}
                onChange={(e) => handleChange("cardNumber", formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date *</Label>
                <Input
                  id="expiry"
                  required
                  value={billingData.expiry}
                  onChange={(e) => handleChange("expiry", formatExpiry(e.target.value))}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  required
                  type="password"
                  value={billingData.cvv}
                  onChange={(e) => handleChange("cvv", e.target.value.replace(/\D/g, ''))}
                  placeholder="123"
                  maxLength={4}
                />
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-semibold">Billing Address</h3>
            
            <div className="space-y-2">
              <Label htmlFor="billingAddress">Street Address *</Label>
              <Input
                id="billingAddress"
                required
                value={billingData.billingAddress}
                onChange={(e) => handleChange("billingAddress", e.target.value)}
                placeholder="123 Main Street"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  required
                  value={billingData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="San Francisco"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  required
                  value={billingData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  placeholder="94102"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                required
                value={billingData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                placeholder="United States"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ${packagePrice}`}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              🔒 Your payment information is secure and encrypted
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
