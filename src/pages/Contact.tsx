import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  MessageSquare,
  Navigation as LocationIcon
} from 'lucide-react';


const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Location",
      details: [
        "American Oncology Institute",
        "Nallagandla, Hyderabad",
        "Telangana, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 91556 67758",
        "Emergency Line (24/7)",
        "Appointment Booking"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "drbijivemulanamratha.official@gmail.com",
        "Quick response within 24 hours",
        "Appointment confirmations"
      ]
    },
    {
      icon: Clock,
      title: "Consultation Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Emergency: 24/7 Available",
        "Sunday: By Appointment Only"
      ]
    }
  ];

  const appointmentTypes = [
    {
      title: "Initial Consultation",
      duration: "60-90 minutes",
      description: "Comprehensive evaluation for new patients"
    },
    {
      title: "Follow-up Visit",
      duration: "30-45 minutes", 
      description: "Progress review and treatment adjustments"
    },
    {
      title: "Second Opinion",
      duration: "45-60 minutes",
      description: "Expert review of diagnosis and treatment plan"
    },
    {
      title: "Emergency Consultation",
      duration: "As needed",
      description: "Urgent medical concerns and emergencies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Get in Touch
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Schedule Your{' '}
            <span className="text-primary">Consultation</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards expert cancer care. Reach out to schedule 
            your consultation or get answers to your questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="appointment" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment Now
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call +91 91556 67758
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for appointments, consultations, or any questions 
              about cancer care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="medical-card group text-center">
                <CardContent className="p-6">
                  <div className="medical-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <Card className="medical-card">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Appointment Types & Location */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Appointment Types
                </h2>
                <div className="space-y-4">
                  {appointmentTypes.map((type, index) => (
                    <Card key={index} className="border border-border hover:border-primary/20 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{type.title}</h3>
                          <Badge variant="outline">{type.duration}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Clinic Location
                </h2>
                <Card className="medical-card">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8747693847647!2d78.39089!3d17.4508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sAmerican%20Oncology%20Institute!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                        width="100%"
                        height="192"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="healing-gradient w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <LocationIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          American Oncology Institute
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Nallagandla, Hyderabad<br />
                          Telangana, India
                        </p>
                        <Button variant="outline" size="sm">
                          <LocationIcon className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="medical-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Need Immediate Medical Attention?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our emergency support line is available 24/7 for urgent medical concerns. 
            Don't hesitate to reach out if you need immediate assistance.
          </p>
          
          <div className="space-y-4">
            <Button variant="appointment" size="hero">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: +91 91556 67758
            </Button>
            <p className="text-sm text-muted-foreground">
              Available 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding medical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Have Questions Before Your Visit?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We understand that you may have questions about cancer care, treatments, 
            or what to expect during your consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <MessageSquare className="h-5 w-5 mr-2" />
              Common Questions
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="h-5 w-5 mr-2" />
              Prepare for Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;