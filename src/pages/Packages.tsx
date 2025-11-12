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
                <h3 className="text-3xl font-bold mb-2">KSh 20,000</h3>
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
                <h3 className="text-3xl font-bold mb-2">KSh 45,000</h3>
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
    </div>
  );
};

export default Packages;
