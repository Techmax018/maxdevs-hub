import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Smartphone, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional Websites.<br />
              Transparent Prices.<br />
              <span className="text-primary">Built for Mobile.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your business online with fixed-scope web development packages. 
              High-performance, SEO-ready websites that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8">
                <Link to="/packages">
                  View Packages
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Why Choose MaxDevs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mobile-First</h3>
                <p className="text-muted-foreground">
                  Every website is built with mobile users in mind, ensuring perfect responsiveness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fixed Pricing</h3>
                <p className="text-muted-foreground">
                  No surprises. Transparent, fixed-scope packages with clear deliverables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fast Performance</h3>
                <p className="text-muted-foreground">
                  Optimized for speed with top Google PageSpeed scores for better SEO.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Results-Driven</h3>
                <p className="text-muted-foreground">
                  We focus on measurable outcomes that grow your business online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold">Startup Package</h3>
                <p className="text-3xl font-bold text-primary">$1,800</p>
                <p className="text-muted-foreground">
                  Perfect for solo entrepreneurs and basic informational sites
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 5 Pages included</li>
                  <li>✓ Mobile responsive</li>
                  <li>✓ Basic SEO setup</li>
                  <li>✓ 30 days support</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/packages">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg scale-105">
              <CardContent className="pt-6 space-y-4">
                <div className="text-4xl">✨</div>
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold">Professional Package</h3>
                <p className="text-3xl font-bold text-primary">$4,500</p>
                <p className="text-muted-foreground">
                  Growing SMBs requiring custom features and robust CMS
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Up to 12 pages + Blog</li>
                  <li>✓ Dedicated CMS</li>
                  <li>✓ Advanced SEO</li>
                  <li>✓ 60 days support</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/packages">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="text-4xl">🌐</div>
                <h3 className="text-2xl font-bold">Enterprise Package</h3>
                <p className="text-3xl font-bold text-primary">Custom</p>
                <p className="text-muted-foreground">
                  Complex functionality, payments, and API integrations
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Custom page count</li>
                  <li>✓ Database integration</li>
                  <li>✓ Payment gateway</li>
                  <li>✓ 90 days premium support</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Get a free consultation and discover how MaxDevs can transform your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8">
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
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

export default Home;
