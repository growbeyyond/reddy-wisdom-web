import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img src={logo} alt="Dr. Namratha Sai Reddy" className="h-12 w-auto" />
            <p className="text-muted-foreground text-sm">
              Leading oncologist in Hyderabad, dedicated to providing personalized, 
              compassionate cancer care with the latest treatment advancements.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Dr. Namratha</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Cancer Education</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">Patient Stories</Link></li>
              <li><Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Cancer Consultations</span></li>
              <li><span className="text-muted-foreground">Chemotherapy</span></li>
              <li><span className="text-muted-foreground">Immunotherapy</span></li>
              <li><span className="text-muted-foreground">Targeted Therapy</span></li>
              <li><span className="text-muted-foreground">Second Opinions</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  American Oncology Institute<br />
                  Nallagandla, Hyderabad<br />
                  Telangana, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 91556 67758</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">drbijivemulanamratha.official@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Dr. Namratha Sai Reddy. All rights reserved. 
            <span className="ml-2">
              Website developed with care for better patient experience.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;