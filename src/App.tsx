import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Education from "./pages/Education";
import BlogPost from "./pages/BlogPost";
import SymptomChecker from "./pages/SymptomChecker";
import RiskAssessment from "./pages/RiskAssessment";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Stories from "./pages/Stories";
import PatientPortal from "./pages/PatientPortal";
import TreatmentTimeline from "./components/TreatmentTimeline";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/education" element={<Education />} />
              <Route path="/education/blog/:id" element={<BlogPost />} />
              <Route path="/tools/symptom-checker" element={<SymptomChecker />} />
              <Route path="/tools/risk-assessment" element={<RiskAssessment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/research" element={<Research />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/patient-portal" element={<PatientPortal />} />
              <Route path="/treatment-timeline" element={<TreatmentTimeline />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
