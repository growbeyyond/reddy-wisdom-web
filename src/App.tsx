import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Breadcrumbs from "./components/Breadcrumbs";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Education = lazy(() => import("./pages/Education"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SymptomChecker = lazy(() => import("./pages/SymptomChecker"));
const RiskAssessment = lazy(() => import("./pages/RiskAssessment"));
const Contact = lazy(() => import("./pages/Contact"));
const PatientPortal = lazy(() => import("./pages/PatientPortal"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const TreatmentTimeline = lazy(() => import("./components/TreatmentTimeline"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrepareVisit = lazy(() => import("./pages/PrepareVisit"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Breadcrumbs />
          <main className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/education" element={<Education />} />
                <Route path="/education/blog/:id" element={<BlogPost />} />
                <Route path="/tools/symptom-checker" element={<SymptomChecker />} />
                <Route path="/tools/risk-assessment" element={<RiskAssessment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/patient-portal" element={<PatientPortal />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/treatment-timeline" element={<TreatmentTimeline />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/prepare-visit" element={<PrepareVisit />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
