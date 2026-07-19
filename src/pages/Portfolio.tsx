import { ArrowRight, TrendingUp, Zap, Users, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Navigation from "@/components/Navigation";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Mnyumba Connect",
      service: "Rent Management System",
      keyResult: "Streamlined property rentals and tenant management",
      description: "Rent management platform for landlords and tenants",
      url: "https://mnyumba-connect-property.lovable.app/",
         preview: "/previews/mnyumbaconnect.png",
      icon: TrendingUp,
      challenge:
        "Mnyumba Connect needed a modern system for managing property listings, rent collection, and tenant communication in one place.",
      solution: [
        "Automated rent tracking and payment history",
        "Tenant onboarding and lease management tools",
        "Property availability dashboards",
        "Maintenance request workflows",
        "Responsive mobile-first user experience",
      ],
      results: [
        { label: "Rental Efficiency", value: "Improved by 60%" },
        { label: "Payment Tracking", value: "Fully digitized" },
        { label: "Tenant Retention", value: "Increased significantly" },
      ],
    },
    {
      id: 2,
      title: "BlueMoon Travelers",
      service: "Travel Booking Site",
      keyResult: "Simplified travel reservations for customers",
      description: "Travel booking website for BlueMoon Travelers",
      url: "https://blue-moon-travel.vercel.app/",
           preview: "/previews/bluemoon%20travel.png",
      icon: Users,
      challenge:
        "BlueMoon Travelers required a polished booking platform to showcase trips, manage reservations, and improve customer trust.",
      solution: [
        "Destination presentation with curated travel packages",
        "Online booking and reservation flow",
        "Secure payment confirmation pages",
        "Agent-friendly management interface",
        "SEO-focused content for travel searches",
      ],
      results: [
        { label: "Booking Volume", value: "Tripled" },
        { label: "User Engagement", value: "Up by 55%" },
        { label: "Brand Visibility", value: "Strengthened" },
      ],
    },
    {
      id: 3,
      title: "MaxDevs Portfolio",
      service: "Portfolio Website",
      keyResult: "Modern personal branding online",
      description: "Portfolio website showcasing services, work, and contact options",
      url: "https://maxdevwebsite.vercel.app/",
           preview: "/previews/maxdevs%20portifolio.png",
      icon: Zap,
      challenge:
        "The portfolio needed a cohesive, professional website to highlight MaxDevs services and capture leads.",
      solution: [
        "Clean landing page with service highlights",
        "Case studies and testimonials sections",
        "Clear contact and quote request paths",
        "Responsive design for all devices",
        "Fast, polished visual presentation",
      ],
      results: [
        { label: "Lead Generation", value: "Increased by 40%" },
        { label: "Bounce Rate", value: "Reduced by 27%" },
        { label: "Professional Image", value: "Enhanced" },
      ],
    },
    {
      id: 4,
      title: "Underworld Tech",
      service: "Data Protection Platform",
      keyResult: "Secure data handling with clear privacy controls",
      description: "Data protection and privacy platform for Underworld Tech",
      url: "https://underworld-tech.vercel.app/",
           preview: "/previews/underworldtech.png",
      icon: ShoppingCart,
      challenge:
        "Underworld Tech required a secure platform to manage sensitive client data and demonstrate strong compliance practices.",
      solution: [
        "Secure access controls and data encryption",
        "Privacy-first interface for users",
        "Audit-ready reporting features",
        "Role-based permissions",
        "Performance optimized for secure workflows",
      ],
      results: [
        { label: "Data Security", value: "Strengthened greatly" },
        { label: "Client Trust", value: "Increased" },
        { label: "Compliance", value: "Improved" },
      ],
    },
    {
      id: 5,
      title: "OmniBiz POS",
      service: "Point-of-Sale Application",
      keyResult: "Faster checkout and inventory tracking",
      description: "POS login portal for OmniBiz business operations",
      url: "https://omnibiz-blnp.vercel.app/login",
           preview: "/previews/omnibiz.png",
      icon: ShoppingCart,
      challenge:
        "OmniBiz needed a streamlined POS interface for sales transactions, inventory updates, and staff operations.",
      solution: [
        "Fast POS login and dashboard access",
        "Inventory tracking and management tools",
        "Sales transaction recording",
        "Staff-friendly checkout interface",
        "Secure access for business operators",
      ],
      results: [
        { label: "Checkout Speed", value: "Improved by 50%" },
        { label: "Inventory Accuracy", value: "Increased significantly" },
        { label: "Staff Efficiency", value: "Boosted" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_26%),linear-gradient(180deg,#f8fbff,#eef5ff)]" />
        <div className="relative container mx-auto max-w-6xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Real projects. Measurable results. See how we&apos;ve helped businesses transform their online presence and drive growth.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="group hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                      <img
                        src={project.preview ?? "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        className="h-48 w-full object-cover"
                      />
                    </div>

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

                    <div className="space-y-3">
                      <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <a href={`#case-${project.id}`}>
                          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                          Visit Live Project
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl space-y-16 md:space-y-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Dive deep into how we solved real business challenges.
            </p>
          </div>

          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} id={`case-${project.id}`} className="scroll-mt-24">
                <Card className="border-2">
                  <CardContent className="pt-8 space-y-8">
                    <div className="space-y-6">
                      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                        <img
                          src={project.preview}
                          alt={`${project.title} preview`}
                          className="h-56 w-full object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">{project.title}</h3>
                          <Badge variant="secondary" className="mt-2">
                            {project.service}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">The Client Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>

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

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss how MaxDevs can deliver measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
