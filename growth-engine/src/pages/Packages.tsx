import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Packages = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (packageName: string, packagePrice: string) => {
    navigate('/billing', { state: { packageName, packagePrice } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Packages & <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, fixed-scope packages designed to fit your business needs. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Web Development Packages */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            New Website Development
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Startup Package */}
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-2">🚀</div>
                <CardTitle className="text-2xl">Startup Package</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">$1,800</p>
                  <p className="text-sm text-muted-foreground mt-2">Fixed price</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Ideal for solo entrepreneurs and basic informational sites.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>5 Pages</strong> (Home, About, Services, Contact, Privacy)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mobile responsive design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Basic SEO setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Contact forms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>30 days</strong> post-launch bug fixes</span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => handleSelectPackage("Startup Package", "$1,800")}
                >
                  Select Starter
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="border-2 border-primary shadow-xl scale-105 lg:scale-110 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="text-4xl mb-2">✨</div>
                <CardTitle className="text-2xl">Professional Package</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">$4,500</p>
                  <p className="text-sm text-muted-foreground mt-2">Fixed price</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Growing SMBs requiring custom features and robust CMS.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Up to 12 pages</strong> + Blog setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated CMS installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced on-page SEO</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Content review & optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1 hour training session</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>60 days</strong> support & minor updates</span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => handleSelectPackage("Professional Package", "$4,500")}
                >
                  Select Professional
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-2">🌐</div>
                <CardTitle className="text-2xl">Enterprise / E-commerce</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">Custom</p>
                  <p className="text-sm text-muted-foreground mt-2">Starts at $8,000</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Complex functionality, payments, or API integrations.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom page count based on complexity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom database integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Payment gateway setup (Stripe, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced security audit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>90 days</strong> premium support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maintenance plan included</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleSelectPackage("Enterprise Package", "Custom Quote")}
                >
                  Request Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Restructure & Redesign */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Is Your Current Website <span className="text-destructive">Costing You Customers?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in transforming underperforming websites into conversion machines. 
              Improve load speed, update UX/UI for mobile, and modernize your code for better search rankings.
            </p>
          </div>

          <Card className="border-2 border-primary/50">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Initial Site Audit & Strategy Session</p>
                  <p className="text-2xl font-bold text-primary mt-1">$599</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    (Credited toward the final project cost)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">The MaxDevs Redesign Process</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Performance Audit</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive analysis of speed, SEO, and user experience issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">UX/UI Wireframing</h4>
                      <p className="text-sm text-muted-foreground">
                        Design modern, mobile-first interfaces that convert visitors.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Modern Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Rebuild with cutting-edge technology for maximum performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">SEO & Launch</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimize for search engines and deploy with zero downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/contact')}
              >
                Book Your Site Audit Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the perfect solution for your business.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 MaxDevs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Packages;
