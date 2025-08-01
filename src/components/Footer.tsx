import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsletterSignup from './NewsletterSignup';
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
              <a href="https://www.facebook.com/profile.php?id=61576557545109" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/drbijivemulanamratha/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://x.com/Dr_Bijivemula" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Dr. Namratha</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Cancer Education</Link></li>
              <li><Link to="/book-appointment" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/upload-documents" className="text-muted-foreground hover:text-primary transition-colors">Upload Documents</Link></li>
              <li><Link to="/treatment-checklist" className="text-muted-foreground hover:text-primary transition-colors">Treatment Checklist</Link></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Patient Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/tools/symptom-checker" className="text-muted-foreground hover:text-primary transition-colors">Symptom Checker</Link></li>
              <li><Link to="/tools/risk-assessment" className="text-muted-foreground hover:text-primary transition-colors">Risk Assessment</Link></li>
              <li><Link to="/prepare-visit" className="text-muted-foreground hover:text-primary transition-colors">Prepare for Visit</Link></li>
              <li><Link to="/patient-portal" className="text-muted-foreground hover:text-primary transition-colors">Patient Portal</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Dr. Namratha Sai Reddy. All rights reserved. 
            <span className="ml-2">
              Developed by <a 
                href="https://www.growbeyyond.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Grow Beyyond
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;