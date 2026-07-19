import { Link } from "react-router-dom";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const process = [
  {
    step: "1",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, target audience, and unique challenges. This foundation ensures every design decision drives real results.",
  },
  {
    step: "2",
    title: "Design & Planning",
    description:
      "Our team creates wireframes and mockups that prioritize user experience and conversion. You'll see exactly what you're getting before development begins.",
  },
  {
    step: "3",
    title: "Development & Testing",
    description:
      "We build your website using modern technology, ensuring it's fast, secure, and mobile-friendly. Rigorous testing guarantees everything works flawlessly.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description:
      "After a smooth launch, we provide ongoing support and training. Your success doesn't end at deployment—we're here to help you grow.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We don't just build websites—we create digital solutions that drive measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Transparent Process",
    description:
      "No surprises, no hidden fees. You'll always know exactly what you're getting and what it costs.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description:
      "We use cutting-edge tools and frameworks to ensure your website is fast, secure, and built to scale.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your success is our success. We work collaboratively to understand your vision and bring it to life.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About <span className="text-primary">MaxDevs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate web developers dedicated to helping businesses succeed
            online through professional, results-driven websites.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Mission</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At MaxDevs, we believe that every business deserves a professional online
                presence that drives growth. We combine technical excellence with strategic
                thinking to deliver websites that don't just look great—they deliver measurable
                results. Our transparent pricing and fixed-scope packages mean you always know
                what you're getting, with no surprises along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border border-border/60">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Process</h2>
          <div className="space-y-6">
            {process.map((item) => (
              <Card key={item.step} className="border border-border/60">
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to build something exceptional?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's talk about your project and create a website that reflects your brand and grows
            your business.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
