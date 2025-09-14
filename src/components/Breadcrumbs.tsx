import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
  className?: string;
}

const routeLabels: Record<string, string> = {
  "/home": "Home",
  "/about": "About Dr. Namratha Sai Reddy",
  "/services": "Our Services",
  "/education": "Patient Education",
  "/contact": "Contact Us",
  "/book-appointment": "Book Appointment",
  "/upload-documents": "Upload Documents",
  "/treatment-checklist": "Treatment Checklist",
  "/newsletter": "Newsletter Signup",
  "/patient-portal": "Patient Portal",
  "/risk-assessment": "Risk Assessment",
  "/symptom-checker": "Symptom Checker",
  "/terms": "Terms of Service",
  "/privacy": "Privacy Policy",
  "/faq": "FAQ",
  "/prepare-visit": "Prepare for Your Visit",
};

const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(segment => segment !== "");
  
  // Don't show breadcrumbs on home page
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = routeLabels[path] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = index === pathSegments.length - 1;

    return {
      path,
      label,
      isLast,
    };
  });

  return (
    <div className={`bg-secondary/30 border-b border-border/50 ${className}`}>
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/home" className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {breadcrumbItems.length > 0 && <BreadcrumbSeparator />}
            
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={item.path}>
                {item.isLast ? (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      to={item.path}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
                {!item.isLast && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;