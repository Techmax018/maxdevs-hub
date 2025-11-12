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
    </div>
  );
};

export default About;
