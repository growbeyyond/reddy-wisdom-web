import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const defaultMeta = {
  title: "Dr. Doe Oncology - Expert Cancer Care & Treatment",
  description: "Leading oncology practice providing comprehensive cancer care, advanced treatments, and compassionate support. Expert oncologist with personalized treatment plans.",
  keywords: "oncology, cancer treatment, oncologist, chemotherapy, radiation therapy, cancer care, tumor treatment, medical oncology",
};

const pageMetadata: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: "Dr. Doe Oncology - Expert Cancer Care & Treatment",
    description: "Leading oncology practice providing comprehensive cancer care, advanced treatments, and compassionate support. Expert oncologist with personalized treatment plans.",
    keywords: "oncology, cancer treatment, oncologist, chemotherapy, radiation therapy, cancer care"
  },
  '/about': {
    title: "About Dr. Doe - Experienced Oncologist | Cancer Specialist",
    description: "Meet Dr. Doe, board-certified oncologist with years of experience in cancer treatment. Learn about his expertise, education, and commitment to patient care.",
    keywords: "Dr. Doe, oncologist biography, cancer specialist, medical experience, board certified"
  },
  '/services': {
    title: "Cancer Treatment Services | Oncology Care",
    description: "Comprehensive cancer treatment services including chemotherapy, immunotherapy, radiation therapy, and personalized treatment plans for all cancer types.",
    keywords: "cancer treatment services, chemotherapy, immunotherapy, radiation therapy, oncology services"
  },
  '/education': {
    title: "Patient Education | Cancer Information & Resources",
    description: "Educational resources for cancer patients and families. Learn about treatments, side effects, prevention, and living with cancer.",
    keywords: "cancer education, patient resources, cancer information, treatment guides"
  },
  '/contact': {
    title: "Contact Us | Schedule Cancer Consultation",
    description: "Contact Dr. Doe's oncology practice to schedule a consultation or learn more about our cancer treatment services. We're here to help.",
    keywords: "contact oncologist, cancer consultation, appointment scheduling, oncology office"
  },
  '/book-appointment': {
    title: "Book Appointment | Cancer Treatment Consultation",
    description: "Schedule your cancer treatment consultation with Dr. Doe. Easy online booking for new and existing patients.",
    keywords: "book oncology appointment, cancer consultation, schedule treatment"
  },
  '/patient-portal': {
    title: "Patient Portal | Secure Access to Medical Records",
    description: "Secure patient portal for accessing medical records, test results, appointment scheduling, and communication with your oncology team.",
    keywords: "patient portal, medical records, test results, secure access"
  },
  '/tools/symptom-checker': {
    title: "Cancer Symptom Checker | Early Detection Tool",
    description: "Interactive symptom checker to help identify potential cancer symptoms. For educational purposes - consult with Dr. Doe for proper diagnosis.",
    keywords: "cancer symptoms, symptom checker, early detection, cancer signs"
  },
  '/tools/risk-assessment': {
    title: "Cancer Risk Assessment | Evaluate Your Risk Factors",
    description: "Assess your cancer risk factors with our comprehensive risk assessment tool. Understanding your risk helps with prevention and early detection.",
    keywords: "cancer risk assessment, risk factors, cancer prevention, genetic risk"
  },
  '/prepare-visit': {
    title: "Prepare for Your Visit | What to Expect",
    description: "Prepare for your oncology appointment with Dr. Doe. Learn what to bring, what to expect, and how to make the most of your visit.",
    keywords: "prepare for oncology visit, cancer appointment, what to expect"
  },
  '/faq': {
    title: "Frequently Asked Questions | Cancer Treatment FAQ",
    description: "Common questions about cancer treatment, oncology services, insurance, and what to expect during your cancer care journey.",
    keywords: "cancer treatment FAQ, oncology questions, treatment information"
  },
  '/terms': {
    title: "Terms of Service | Dr. Doe Oncology",
    description: "Terms of service for Dr. Doe's oncology practice website and patient portal services.",
    keywords: "terms of service, medical practice terms, patient agreements"
  },
  '/privacy': {
    title: "Privacy Policy | Patient Privacy & HIPAA Compliance",
    description: "Privacy policy and HIPAA compliance information for Dr. Doe's oncology practice. Your privacy and medical information security.",
    keywords: "privacy policy, HIPAA compliance, medical privacy, patient data protection"
  }
};

const SEOHead = ({ title, description, keywords, canonical }: SEOHeadProps) => {
  const location = useLocation();
  
  useEffect(() => {
    const pageMeta = pageMetadata[location.pathname] || { title: '', description: '', keywords: '' };
    const finalTitle = title || pageMeta.title || defaultMeta.title;
    const finalDescription = description || pageMeta.description || defaultMeta.description;
    const finalKeywords = keywords || pageMeta.keywords || defaultMeta.keywords;
    
    // Update document title
    document.title = finalTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    
    // Handle canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }
    
    // Add structured data for medical practice
    const addStructuredData = () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) return;
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Dr. Doe Oncology",
        "description": "Expert oncology practice providing comprehensive cancer care and treatment",
        "url": window.location.origin,
        "telephone": "+1-555-123-4567",
        "email": "info@drdoeoncology.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Medical Center Drive",
          "addressLocality": "City",
          "addressRegion": "State",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "medicalSpecialty": "Oncology",
        "areaServed": "United States",
        "sameAs": [
          "https://www.instagram.com/drdoeoncology"
        ]
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };
    
    addStructuredData();
  }, [location.pathname, title, description, keywords, canonical]);
  
  return null;
};

export default SEOHead;