<<<<<<< HEAD
import { Rocket, Users, Award, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChatBot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About MaxDevs
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Your trusted partner for professional web development in Kenya
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-muted-foreground">
              MaxDevs is a professional web development agency dedicated to helping Kenyan
              businesses establish and grow their online presence. We believe in transparency,
              quality, and delivering measurable results for every client.
            </p>
          </div>

          {/* Values */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Rocket className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We use the latest technologies and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                Your success is our success. We work closely with you every step of the way.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Every project undergoes rigorous testing to ensure it meets our high standards.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-medium border border-border">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We respect your time and deadlines, delivering projects when promised.
              </p>
            </div>
          </section>

          {/* Development Methodology */}
          <section className="bg-secondary p-8 md:p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Development Roadmap</h2>
            <p className="text-muted-foreground mb-8">
              For complex projects (KSh 40,000+), we follow a proven methodology:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Discovery & Architecture</h3>
                  <p className="text-muted-foreground">
                    Comprehensive requirement gathering, technical specification writing, and
                    database architecture design.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">UX/UI Design Sprints</h3>
                  <p className="text-muted-foreground">
                    Wireframing, prototyping, user testing, and design sign-off to ensure the
                    perfect user experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Development & Iteration</h3>
                  <p className="text-muted-foreground">
                    Weekly or bi-weekly sprints with continuous integration and client demo sessions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">QA & Deployment</h3>
                  <p className="text-muted-foreground">
                    Rigorous testing, final performance audit, and secure cloud deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Launch & Training</h3>
                  <p className="text-muted-foreground">
                    Go-live event, client training on CMS/System, and handover of documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-card p-8 md:p-12 rounded-lg shadow-medium border border-border">
            <h2 className="text-3xl font-bold mb-6">Flexible Payment Planning</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Standard Payment Terms</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>50% upfront deposit to initiate work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>25% upon key milestone completion (e.g., Design Sign-off)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>25% final payment upon launch</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Installment Options</h3>
              <p className="text-muted-foreground mb-4">
                For projects over KSh 100,000, we offer flexible 3-month or 6-month payment plans
                to help you manage your budget while building your online presence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Accepted Payment Methods</h3>
              <p className="text-muted-foreground">
                Credit Card • Bank Transfer • M-Pesa • PayPal
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
=======
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  const process = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and unique challenges. This foundation ensures every design decision drives real results."
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Our team creates wireframes and mockups that prioritize user experience and conversion. You'll see exactly what you're getting before development begins."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your website using modern technology, ensuring it's fast, secure, and mobile-friendly. Rigorous testing guarantees everything works flawlessly."
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "After a smooth launch, we provide ongoing support and training. Your success doesn't end at deployment—we're here to help you grow."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Focused",
      description: "We don't just build websites—we create digital solutions that drive measurable business outcomes."
    },
    {
      icon: Lightbulb,
      title: "Transparent Process",
      description: "No surprises, no hidden fees. You'll always know exactly what you're getting and what it costs."
    },
    {
      icon: Rocket,
      title: "Modern Technology",
      description: "We use cutting-edge tools and frameworks to ensure your website is fast, secure, and built to scale."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your success is our success. We work collaboratively to understand your vision and bring it to life."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About <span className="text-primary">MaxDevs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate web developers dedicated to helping businesses 
            succeed online through professional, results-driven websites.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Mission</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At MaxDevs, we believe that every business deserves a professional online presence 
                that drives growth. We combine technical excellence with strategic thinking to deliver 
                websites that don't just look great—they deliver measurable results. Our transparent 
                pricing and fixed-scope packages mean you always know what you're getting, with no 
                surprises along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The MaxDevs Process */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The MaxDevs Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step approach to delivering exceptional websites
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Businesses Choose MaxDevs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Fixed-Scope Packages</h3>
              <p className="text-muted-foreground">
                No hourly billing surprises. Our transparent packages include everything 
                you need, clearly defined upfront.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Mobile-First Approach</h3>
              <p className="text-muted-foreground">
                Every website is designed and tested for perfect mobile performance, 
                because that's where most of your customers are.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SEO-Ready</h3>
              <p className="text-muted-foreground">
                Built-in optimization for search engines means your site is ready to rank 
                from day one, driving organic traffic.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p className="text-muted-foreground">
                From 30 to 90 days of post-launch support (depending on package), 
                we're here to ensure your success.
              </p>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Work Together?
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect solution for your business goals.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Get Started Today
                </Link>
              </Button>
            </CardContent>
          </Card>
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

export default About;
