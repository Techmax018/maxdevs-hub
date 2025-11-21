import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChatBot />

     {/* Hero Section */}
<section 
  className="pt-32 pb-20 px-4 text-gray-900 relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
  }}
>
  <div className="container mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      <span className=""text-gray-800>Professional</span> <span className="text-indigo-600">Websites.</span><br />
      <span className="text-gray-800">Transparent</span> <span className="text-pink-500">Prices.</span><br />
      <span className="text-gray-800">Built for</span> <span className="text-green-500">Mobile.</span>
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
      Grow your business online with fixed-scope web development packages starting at <span className="text-red-500 font-bold text-xl">KSh 40,000</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg hover:from-indigo-600 hover:to-purple-700 font-semibold">
        <Link to="/packages">
          View Packages <ArrowRight className="ml-2" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="secondary" className="text-lg bg-gray-800 text-white hover:bg-gray-900">
        <Link to="/portfolio">See Our Work</Link>
      </Button>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose MaxDevs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Fixed-scope packages with clear pricing. No hidden fees, no surprises.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">
                Every site is optimized for mobile devices, where most of your customers are.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">SEO Ready</h3>
              <p className="text-muted-foreground">
                Built-in SEO optimization to help your business get found online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Preview */}
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
              View all packages and pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote within 24 hours. No commitment required.
          </p>
          <Button asChild size="lg" className="bg-gradient-accent text-lg">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
