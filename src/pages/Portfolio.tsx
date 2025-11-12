import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      service: "Enterprise Package",
      result: "150% increase in online sales",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      link: "https://login-37da6.web.app",
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
      challenge: "Outdated website with poor mobile experience and low conversion rates",
      solution: "Complete redesign with modern UI, optimized content structure, and clear CTAs",
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
  ];

  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Portfolio;
