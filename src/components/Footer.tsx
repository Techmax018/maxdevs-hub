import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Max<span className="text-accent">Devs</span>
            </h3>
            <p className="text-primary-foreground/80">
              Professional web development with transparent pricing. Built for growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Web Development</li>
              <li>Website Updates</li>
              <li>Site Redesign</li>
              <li>E-commerce Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={16} />
                <span>info@maxdevs.co.ke</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={16} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} MaxDevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
