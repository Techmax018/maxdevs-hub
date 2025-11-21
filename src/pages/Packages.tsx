import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import PaymentModal from "@/components/PaymentModal";

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
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
      <Header />
      <ChatBot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Packages & Pricing
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Transparent, fixed-scope packages designed for every business stage
          </p>

          {/* Web Development Packages */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Web Development Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Startup Package */}
              <div className="bg-card p-8 rounded-lg shadow-medium border-2 border-border">
                <div className="text-sm font-semibold text-accent mb-2">🚀 STARTUP PACKAGE</div>
                <h3 className="text-3xl font-bold mb-2">KSh 40,000</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for solo entrepreneurs and basic informational sites
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">5 pages (Home, About, Services, Contact, Privacy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Basic SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Contact forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">30 days post-launch bug fixes</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Startup Package")} className="w-full bg-gradient-accent">
                  Select Starter
                </Button>
              </div>

              {/* Professional Package */}
              <div className="bg-card p-8 rounded-lg shadow-large border-2 border-accent relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-sm font-semibold text-accent mb-2">✨ PROFESSIONAL PACKAGE</div>
                <h3 className="text-3xl font-bold mb-2">KSh 60,000</h3>
                <p className="text-muted-foreground mb-6">
                  Ideal for growing SMBs requiring custom features
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Up to 12 pages + Blog setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated CMS installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced on-page SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Content review & optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1 hour training session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">60 days post-launch support</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Professional Package")} className="w-full bg-gradient-accent">
                  Select Professional
                </Button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-card p-8 rounded-lg shadow-medium border-2 border-border">
                <div className="text-sm font-semibold text-accent mb-2">🌐 ENTERPRISE/E-COMMERCE</div>
                <h3 className="text-3xl font-bold mb-2">Custom Quote</h3>
                <p className="text-muted-foreground mb-6">
                  Starts at KSh 80,000 for complex functionality
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom page count based on complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom database integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Payment gateway setup (Stripe, M-Pesa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced security audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">90 days premium support included</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Enterprise Package")} className="w-full" variant="secondary">
                  Request Free Quote
                </Button>
              </div>
            </div>
          </section>

          {/* Website Updates & Maintenance */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Website Updates & Maintenance</h2>
            <p className="text-muted-foreground mb-8">
              For clients with existing sites needing maintenance or updates
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Update */}
              <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
                <div className="text-sm font-semibold text-accent mb-2">🔧 BASIC UPDATE</div>
                <h3 className="text-3xl font-bold mb-2">KSh 12,000</h3>
                <p className="text-muted-foreground mb-6">
                  Small text/image changes and quick fixes
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10 total revisions/fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Broken link fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Browser compatibility check</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Basic Update Package")} className="w-full bg-gradient-accent">
                  Start Basic Update
                </Button>
              </div>

              {/* Technical Update */}
              <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
                <div className="text-sm font-semibold text-accent mb-2">⚙️ TECHNICAL/SECURITY</div>
                <h3 className="text-3xl font-bold mb-2">KSh 25,000</h3>
                <p className="text-muted-foreground mb-6">
                  Security patches and performance optimization
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">CMS core updates (WordPress, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security hardening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Backup setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Minor speed optimization</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Technical Update Package")} className="w-full bg-gradient-accent">
                  Start Technical Update
                </Button>
              </div>

              {/* Content Refresh */}
              <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
                <div className="text-sm font-semibold text-accent mb-2">📝 CONTENT & SEO REFRESH</div>
                <h3 className="text-3xl font-bold mb-2">KSh 38,000</h3>
                <p className="text-muted-foreground mb-6">
                  Adding new pages and SEO optimization
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Add 2-3 new pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Blog content formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keyword analysis for 5 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Image optimization</span>
                  </li>
                </ul>
                <Button onClick={() => openModal("Content & SEO Refresh")} className="w-full bg-gradient-accent">
                  Start Content Refresh
                </Button>
              </div>
            </div>
          </section>

          {/* Comprehensive Restructure */}
          <section className="mb-20 bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Restructure & Redesign</h2>
            <p className="text-muted-foreground mb-6">
              For older websites needing a complete functional or aesthetic overhaul
            </p>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Initial Site Audit & Strategy Session</h3>
              <div className="text-4xl font-bold text-accent mb-4">KSh 10,000</div>
              <p className="text-muted-foreground mb-6">
                This fee is credited toward your final project cost
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Comprehensive site analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Technical assessment report</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Redesign strategy & roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Detailed cost estimate</span>
                </li>
              </ul>
              <Button onClick={() => openModal("Site Audit & Strategy")} className="w-full bg-gradient-accent">
                Book Your Site Audit Now
              </Button>
            </div>
          </section>

          {/* Payment Planning */}
          <section className="bg-gradient-hero text-primary-foreground p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Flexible Payment Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Standard Payment Terms</h3>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• 50% upfront deposit to initiate work</li>
                  <li>• 25% upon key milestone completion</li>
                  <li>• 25% final payment upon launch</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Installment Options</h3>
                <p className="text-primary-foreground/90 mb-4">
                  3-6 month payment plans available for projects over KSh 100,000
                </p>
                <p className="text-sm text-primary-foreground/80">
                  Accepted methods: Credit Card, Bank Transfer, M-Pesa
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage}
      />

      <Footer />
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
