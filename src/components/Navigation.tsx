import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar, User, LogOut, Shield } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Cancer Education', href: '/education' },
    { name: 'Patient Portal', href: '/patient-portal' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Dr. Namratha Sai Reddy" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="hidden xl:inline">{profile?.full_name || user.email}</span>
                    <User className="h-4 w-4 xl:hidden" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem disabled>
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/patient-portal" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Patient Portal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden xl:inline">Patient Login</span>
                </Button>
              </Link>
            )}
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+91 91556 67758</span>
            </Button>
            <a href="https://www.americanoncology.com/bookanappointment?dr=dr-b-namratha-sai-reddy&location=Hyderabad&spe=medical-oncology" target="_blank" rel="noopener noreferrer">
              <Button variant="appointment" size="sm" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-up">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-sm text-muted-foreground border rounded-md">
                      <Shield className="h-4 w-4 inline mr-2" />
                      {profile?.full_name || user.email}
                    </div>
                    <Link to="/patient-portal" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full justify-center">
                        <User className="h-4 w-4 mr-2" />
                        Patient Portal
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="justify-center text-red-600 hover:text-red-600"
                      onClick={() => {
                        setIsOpen(false);
                        signOut();
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full justify-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Patient Login
                    </Button>
                  </Link>
                )}
                <Button variant="outline" size="sm" className="justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 91556 67758
                </Button>
                <a href="https://www.americanoncology.com/bookanappointment?dr=dr-b-namratha-sai-reddy&location=Hyderabad&spe=medical-oncology" target="_blank" rel="noopener noreferrer">
                  <Button variant="appointment" size="sm" className="justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;