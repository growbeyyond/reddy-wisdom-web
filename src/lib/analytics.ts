import { useEffect } from 'react';

interface AnalyticsConfig {
  measurementId: string;
  enableDebug?: boolean;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initializeAnalytics = (config: AnalyticsConfig) => {
  // Initialize Google Analytics 4
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${config.measurementId}', {
      debug_mode: ${config.enableDebug || false},
      send_page_view: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: false
    });
  `;
  document.head.appendChild(script2);

  window.gtag = window.gtag || function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
};

export const trackEvent = (
  eventName: string,
  parameters?: {
    category?: string;
    label?: string;
    value?: number;
    custom_parameters?: Record<string, any>;
  }
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters?.category,
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters?.custom_parameters,
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Medical-specific tracking events
export const trackAppointmentBooking = (appointmentType: string) => {
  trackEvent('appointment_booking_started', {
    category: 'medical_conversion',
    label: appointmentType,
    custom_parameters: {
      appointment_type: appointmentType,
    },
  });
};

export const trackAppointmentComplete = (appointmentType: string) => {
  trackEvent('appointment_booking_completed', {
    category: 'medical_conversion',
    label: appointmentType,
    value: 1,
    custom_parameters: {
      appointment_type: appointmentType,
    },
  });
};

export const trackContactFormSubmission = (subject: string) => {
  trackEvent('contact_form_submission', {
    category: 'engagement',
    label: subject,
    custom_parameters: {
      form_type: 'contact',
      subject: subject,
    },
  });
};

export const trackDocumentUpload = (documentType: string) => {
  trackEvent('document_upload', {
    category: 'patient_engagement',
    label: documentType,
    custom_parameters: {
      document_type: documentType,
    },
  });
};

export const trackTreatmentChecklistUsage = (checklistType: string) => {
  trackEvent('treatment_checklist_used', {
    category: 'patient_tools',
    label: checklistType,
    custom_parameters: {
      checklist_type: checklistType,
    },
  });
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    category: 'engagement',
    label: 'footer_newsletter',
    value: 1,
  });
};

// Hook for tracking page views
export const usePageTracking = () => {
  useEffect(() => {
    const path = window.location.pathname;
    const title = document.title;
    trackPageView(path, title);
  }, []);
};

// Hook for tracking user engagement
export const useEngagementTracking = () => {
  useEffect(() => {
    let startTime = Date.now();
    let isActive = true;

    const trackEngagement = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) { // Only track if user spent more than 10 seconds
        trackEvent('page_engagement', {
          category: 'engagement',
          value: timeSpent,
          custom_parameters: {
            time_spent: timeSpent,
            page_path: window.location.pathname,
          },
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        trackEngagement();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      if (isActive) {
        trackEngagement();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      trackEngagement();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};