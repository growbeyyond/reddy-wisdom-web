import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Microscope, 
  Zap, 
  Calendar, 
  Phone,
  CheckCircle,
  Clock,
  Users,
  Heart,
  Target,
  Dna,
  Activity
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: "Personalized Cancer Consultations",
      description: "Comprehensive cancer evaluations with detailed treatment planning tailored to each patient's unique condition and needs.",
      icon: Shield,
      features: [
        "In-person & virtual consultations",
        "Comprehensive medical history review",
        "Personalized treatment planning",
        "Second opinion consultations",
        "Family counseling sessions"
      ],
      duration: "60-90 minutes",
      availability: "Monday to Saturday"
    },
    {
      title: "Cancer Diagnosis & Staging",
      description: "Advanced diagnostic procedures and accurate cancer staging using the latest medical technology and protocols.",
      icon: Microscope,
      features: [
        "Advanced imaging interpretation",
        "Biopsy coordination & analysis",
        "Molecular profiling",
        "Genetic testing coordination",
        "Multidisciplinary team consultations"
      ],
      duration: "Varies by test",
      availability: "As needed"
    },
    {
      title: "Chemotherapy Management",
      description: "Expert administration and monitoring of chemotherapy treatments with comprehensive supportive care.",
      icon: Zap,
      features: [
        "Personalized chemotherapy protocols",
        "Pre-medication management",
        "Side effect monitoring",
        "Dose modifications as needed",
        "Emergency support protocols"
      ],
      duration: "2-6 hours per session",
      availability: "Daily"
    },
    {
      title: "Immunotherapy Treatments",
      description: "Cutting-edge immunotherapy protocols that harness the body's immune system to fight cancer.",
      icon: Target,
      features: [
        "Checkpoint inhibitor therapy",
        "CAR-T cell therapy coordination",
        "Immune response monitoring",
        "Biomarker testing",
        "Combination therapy protocols"
      ],
      duration: "1-4 hours per session",
      availability: "Weekly protocols"
    },
    {
      title: "Targeted Therapy",
      description: "Precision medicine approach using targeted therapies based on specific genetic markers and cancer characteristics.",
      icon: Dna,
      features: [
        "Genomic profiling analysis",
        "Targeted drug selection",
        "Resistance monitoring",
        "Combination protocols",
        "Clinical trial access"
      ],
      duration: "30 minutes - 2 hours",
      availability: "As prescribed"
    },
    {
      title: "Supportive Cancer Care",
      description: "Comprehensive supportive services to manage symptoms and improve quality of life throughout treatment.",
      icon: Heart,
      features: [
        "Pain management protocols",
        "Nutritional counseling",
        "Psychological support coordination",
        "Palliative care planning",
        "Survivorship programs"
      ],
      duration: "Ongoing",
      availability: "24/7 support available"
    }
  ];

  const specializedServices = [
    {
      title: "Liquid Biopsy",
      description: "Advanced blood-based testing for cancer detection and monitoring",
      icon: Activity
    },
    {
      title: "Clinical Trials",
      description: "Access to cutting-edge experimental treatments",
      icon: Microscope
    },
    {
      title: "Genomic Profiling",
      description: "Genetic analysis for personalized treatment selection",
      icon: Dna
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock medical support for urgent situations",
      icon: Clock
    }
  ];

  const treatmentApproach = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive evaluation of medical history, current condition, and treatment goals"
    },
    {
      step: "02", 
      title: "Diagnostic Planning",
      description: "Coordinated diagnostic tests and staging procedures for accurate assessment"
    },
    {
      step: "03",
      title: "Treatment Strategy",
      description: "Personalized treatment plan development with multidisciplinary team input"
    },
    {
      step: "04",
      title: "Treatment Delivery",
      description: "Expert administration of therapies with continuous monitoring and support"
    },
    {
      step: "05",
      title: "Follow-up Care",
      description: "Ongoing monitoring, survivorship care, and long-term health management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Comprehensive Cancer Care Services
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Expert Oncology Services for{' '}
            <span className="text-primary">Every Patient</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From initial diagnosis to survivorship, we provide comprehensive cancer care services 
            using the latest medical advancements and a patient-centered approach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="appointment" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: +91 91556 67758
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Core Cancer Care Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of oncology services covers every aspect of cancer care, 
              from diagnosis through treatment to long-term survivorship support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="medical-card group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="medical-gradient w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{service.availability}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Specialized Services & Advanced Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access to cutting-edge treatments and specialized services that represent 
              the forefront of modern oncology practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="medical-card group text-center">
                <CardContent className="p-6">
                  <div className="healing-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic, patient-centered approach that ensures comprehensive care 
              at every stage of your cancer journey.
            </p>
          </div>

          <div className="space-y-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="healing-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            24/7 Emergency Support Available
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cancer treatment can present unexpected challenges. Our emergency support line 
            ensures you always have access to expert medical guidance when you need it most.
          </p>
          
          <div className="space-y-4">
            <Button variant="appointment" size="hero">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: +91 91556 67758
            </Button>
            <p className="text-sm text-muted-foreground">
              Available 24 hours a day, 7 days a week for urgent medical concerns
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding medical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Begin Your Treatment Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every cancer journey is unique. Schedule a consultation to discuss your 
            specific needs and explore the best treatment options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="hero">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="h-5 w-5 mr-2" />
              Learn About Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;