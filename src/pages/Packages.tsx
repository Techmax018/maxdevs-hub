import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, AlertCircle, Wrench, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import PaymentModal from "@/components/PaymentModal";

const Packages = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSelectPackage = (packageName: string, packagePrice: string) => {
    navigate("/billing", { state: { packageName, packagePrice } });
  };

  const openModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-sky-100 via-cyan-50 to-white">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Packages & <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Transparent, fixed-scope packages designed to fit your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">New Website Development</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 border-slate-200 bg-white/95 shadow-lg hover:border-primary/60 transition-all">
              <CardHeader>
                <div className="text-4xl mb-2">🚀</div>
                <CardTitle className="text-2xl">Startup Package</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">KSh 40,000</p>
                  <p className="text-sm text-slate-500 mt-2">Fixed price</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">Ideal for solo entrepreneurs and basic informational sites.</p>

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

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => handleSelectPackage("Startup Package", "KSh 40,000")}>Select Starter</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-sky-200 bg-white shadow-2xl scale-100 lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="text-4xl mb-2">✨</div>
                <CardTitle className="text-2xl">Professional Package</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">KSh 60,000</p>
                  <p className="text-sm text-slate-500 mt-2">Fixed price</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">Growing SMBs requiring custom features and robust CMS.</p>

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

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => handleSelectPackage("Professional Package", "KSh 60,000")}>Select Professional</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-white/95 shadow-lg hover:border-primary/60 transition-all">
              <CardHeader>
                <div className="text-4xl mb-2">🌐</div>
                <CardTitle className="text-2xl">Enterprise / E-commerce</CardTitle>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">Custom</p>
                  <p className="text-sm text-slate-500 mt-2">Starts at KSh 80,000</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">Complex functionality, payments, or API integrations.</p>

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
                </div>

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => handleSelectPackage("Enterprise Package", "Custom Quote")}>Request Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Website Updates & Maintenance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-3">
              For clients with existing sites needing maintenance or updates.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-2 border-slate-200 bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-600">
                  <Wrench className="h-4 w-4" />
                  Basic Update
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-3xl font-bold text-primary">KSh 12,000</p>
                <p className="text-slate-600">Small text/image changes and quick fixes.</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10 total revisions/fixes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Broken link fixes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Browser compatibility check</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => navigate("/contact")}>Start Basic Update</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-600">
                  <ShieldCheck className="h-4 w-4" />
                  Technical/Security
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-3xl font-bold text-primary">KSh 25,000</p>
                <p className="text-slate-600">Security patches and performance optimization.</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">CMS core updates (WordPress, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security hardening</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Backup setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Minor speed optimization</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => navigate("/contact")}>Start Technical Update</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-600">
                  <FileText className="h-4 w-4" />
                  Content & SEO Refresh
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-3xl font-bold text-primary">KSh 38,000</p>
                <p className="text-slate-600">Adding new pages and SEO optimization.</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Add 2-3 new pages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Blog content formatting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keyword analysis for 5 pages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Image optimization</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => navigate("/contact")}>Start Content Refresh</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Restructure & Redesign</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-3">
              For older websites needing a complete functional or aesthetic overhaul.
            </p>
          </div>

          <Card className="mx-auto max-w-3xl border-2 border-slate-200 bg-white shadow-2xl">
            <CardContent className="space-y-6 py-10 px-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Initial Site Audit & Strategy Session</p>
                <p className="text-5xl font-bold text-primary">KSh 10,000</p>
                <p className="text-slate-600">This fee is credited toward your final project cost.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Comprehensive site analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Technical assessment report</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Redesign strategy & roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Detailed cost estimate</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white hover:from-sky-400 hover:to-cyan-500" onClick={() => navigate("/contact")}>Book Your Site Audit Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Not Sure Which Package Is Right for You?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the perfect solution for your business.
          </p>
          <Button size="lg" onClick={() => navigate("/contact")}>Get Free Consultation</Button>
        </div>
      </section>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageName={selectedPackage} />
    </div>
  );
};

export default Packages;
