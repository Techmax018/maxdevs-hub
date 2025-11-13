import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Zap, Users, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Apex Logistics",
      service: "Full Rebrand & Web Development",
      keyResult: "45% reduction in bounce rate",
      description: "Modern logistics platform with real-time tracking",
      icon: TrendingUp,
      challenge: "Apex Logistics had a dated website with poor mobile experience and no real-time tracking functionality. Their bounce rate was extremely high at 72%, and they were losing potential clients to competitors with more modern online presences.",
      solution: [
        "Complete UX/UI redesign with mobile-first approach",
        "Implementation of React front-end for dynamic user interfaces",
        "Integration with real-time tracking API",
        "Custom dashboard for clients to monitor shipments",
        "Advanced SEO optimization and page speed improvements"
      ],
      results: [
        { label: "Bounce Rate", value: "Reduced by 45%" },
        { label: "Mobile Traffic", value: "Increased by 68%" },
        { label: "Page Load Time", value: "Improved from 4.2s to 1.1s" }
      ]
    },
    {
      id: 2,
      title: "HealthFirst Clinic",
      service: "Healthcare Portal & Booking System",
      keyResult: "3x increase in online bookings",
      description: "Patient portal with appointment scheduling",
      icon: Users,
      challenge: "HealthFirst Clinic relied heavily on phone bookings, leading to staff overwhelm and appointment scheduling errors. They needed a modern patient portal that would streamline operations and improve patient experience.",
      solution: [
        "Custom patient portal with secure authentication",
        "Real-time appointment booking system",
        "Integration with existing practice management software",
        "HIPAA-compliant data handling and security measures",
        "Automated email and SMS appointment reminders"
      ],
      results: [
        { label: "Online Bookings", value: "300% increase" },
        { label: "Phone Call Volume", value: "Reduced by 52%" },
        { label: "No-Show Rate", value: "Decreased by 38%" }
      ]
    },
    {
      id: 3,
      title: "TechGear E-commerce",
      service: "E-commerce Platform Development",
      keyResult: "2.3x revenue growth in 6 months",
      description: "High-performance online store with custom features",
      icon: ShoppingCart,
      challenge: "TechGear's existing e-commerce platform was slow, lacked modern payment options, and had a confusing checkout process that resulted in a 78% cart abandonment rate.",
      solution: [
        "Headless CMS architecture for maximum performance",
        "Stripe and PayPal payment gateway integration",
        "One-click checkout and guest checkout options",
        "Advanced product filtering and search functionality",
        "Automated inventory management system"
      ],
      results: [
        { label: "Revenue", value: "230% growth" },
        { label: "Cart Abandonment", value: "Reduced to 34%" },
        { label: "Average Order Value", value: "Increased by 41%" }
      ]
    },
    {
      id: 4,
      title: "GreenEnergy Solutions",
      service: "Corporate Website & Lead Generation",
      keyResult: "5x increase in qualified leads",
      description: "Professional corporate site with lead capture",
      icon: Zap,
      challenge: "GreenEnergy Solutions had minimal online presence and struggled to generate quality leads. Their outdated website didn't effectively communicate their value proposition or expertise in renewable energy solutions.",
      solution: [
        "Strategic content architecture focused on lead generation",
        "Custom lead qualification forms with smart routing",
        "Interactive solar calculator tool",
        "Case study section showcasing successful installations",
        "Blog platform for thought leadership content"
      ],
      results: [
        { label: "Qualified Leads", value: "500% increase" },
        { label: "Organic Traffic", value: "Increased by 215%" },
        { label: "Time on Site", value: "Improved from 1:22 to 4:18" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects. Measurable results. See how we've helped businesses 
            transform their online presence and drive growth.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="group hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{project.service}</Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-muted-foreground">Key Result</p>
                      <p className="text-lg font-bold text-primary">{project.keyResult}</p>
                    </div>

                    <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <a href={`#case-${project.id}`}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl space-y-16 md:space-y-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Dive deep into how we solved real business challenges
            </p>
          </div>

          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} id={`case-${project.id}`} className="scroll-mt-24">
                <Card className="border-2">
                  <CardContent className="pt-8 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <Badge variant="secondary" className="mt-2">{project.service}</Badge>
                      </div>
                    </div>

                    {/* The Challenge */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">The Client Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* The Solution */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">The MaxDevs Solution</h4>
                      <ul className="space-y-2">
                        {project.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
                      <h4 className="text-xl font-semibold mb-4 text-foreground">Measurable Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center md:text-left">
                            <p className="text-sm text-muted-foreground mb-1">{result.label}</p>
                            <p className="text-2xl font-bold text-primary">{result.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how MaxDevs can deliver measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/packages">
                View Packages
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

export default Portfolio;
