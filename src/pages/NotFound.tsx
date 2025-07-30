import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background section-padding">
      <div className="text-center max-w-md">
        <div className="medical-card p-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">404</span>
          </div>
          <h1 className="text-2xl font-heading font-bold mb-4 text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
          <a 
            href="/home" 
            className="medical-button inline-block"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
