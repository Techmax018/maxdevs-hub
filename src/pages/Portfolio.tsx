<<<<<<< HEAD
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
=======
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Zap, Users, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
>>>>>>> growth/main

const Portfolio = () => {
  const projects = [
    {
<<<<<<< HEAD
      title: "E-Commerce Fashion Store",
      service: "Enterprise Package",
      result: "150% increase in online sales",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      link: "https://beauty-shop-e7176.web.app",
      challenge: "Client needed a modern e-commerce platform with M-Pesa integration",
      solution: "Built a custom E-Commerce solution with mobile-first design and local payment gateways",
      results: [
        "150% increase in online sales within 3 months",
        "Mobile traffic conversion up by 85%",
        "Average order value increased by 40%",
      ],
    },
    {
      title: "Travel Platform",
      service: "Professional Package",
      result: "45% reduction in bounce rate",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      link: "https://blue-moon-travel.vercel.app",
      challenge: "Outdated booking platforms ",
      solution: "Travel booking hub to help you with your holiday plannings",
      results: [
        "45% reduction in bounce rate",
        "3x increase in contact form submissions",
        "Page load time reduced by 60%",
      ],
    },
    {
      title: "Portfolio Website",
      service: "Professional Package",
      result: "200% increase in online reservations",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      link: "https://maxdevwebsite.vercel.app",
      challenge: "Needed an online presence with menu showcase and reservation system",
      solution: "Developed a visually appealing site with integrated booking system and online menu",
      results: [
        "200% increase in online reservations",
        "90% of visitors now check menu online before visiting",
        "Reduced phone inquiries by 50%",
      ],
    },
    {
      title: "Tech Startup Landing Page",
      service: "Startup Package",
      result: "Built MVP in 2 weeks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      challenge: "Startup needed a quick, professional web presence for investor meetings",
      solution: "Clean, modern landing page highlighting value proposition and features",
      results: [
        "Launched in 2 weeks",
        "Successfully closed seed round",
        "1,000+ email signups in first month",
      ],
    },
=======
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
>>>>>>> growth/main
  ];

  return (
    <div className="min-h-screen bg-background">
<<<<<<< HEAD
      <Header />
      <ChatBot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Real projects. Real results. See how we've helped businesses grow online.
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-medium border border-border overflow-hidden hover:shadow-large transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    {project.service}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Key Result</div>
                    <div className="text-lg font-bold text-accent">{project.result}</div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Case Study Example */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-large border border-border">
              <h2 className="text-3xl font-bold mb-8">Featured Case Study</h2>
              
              <h3 className="text-2xl font-semibold mb-4">E-Commerce Fashion Store</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-accent mb-3">The Client Challenge</h4>
                <p className="text-muted-foreground">
                  A growing fashion retailer wanted to expand their business online but faced
                  challenges with their existing platform. They needed a modern, mobile-optimized
                  e-commerce solution with local payment integration (M-Pesa) and the ability to
                  handle high traffic during sales events.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-accent mb-3">The MaxDevs Solution</h4>
                <p className="text-muted-foreground mb-4">
                  We delivered a comprehensive e-commerce platform built on WooCommerce with
                  custom features tailored to the Kenyan market:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile-first responsive design optimized for 3G/4G connections</li>
                  <li>• M-Pesa and card payment gateway integration</li>
                  <li>• Advanced product filtering and search functionality</li>
                  <li>• Automated inventory management system</li>
                  <li>• Customer account area with order tracking</li>
                  <li>• Performance optimization for fast loading times</li>
                </ul>
              </div>

              <div className="bg-gradient-hero text-primary-foreground p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Measurable Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">150%</div>
                    <div className="text-sm text-primary-foreground/80">
                      Increase in online sales
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <div className="text-sm text-primary-foreground/80">
                      Mobile conversion boost
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-sm text-primary-foreground/80">
                      Higher average order value
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
=======
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
>>>>>>> growth/main
    </div>
  );
};

export default Portfolio;
