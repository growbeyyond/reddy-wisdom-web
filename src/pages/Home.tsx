import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  Award, 
  Heart, 
  Shield, 
  Users, 
  Microscope, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

import doctorProfile from '@/assets/doctor-profile.png';
import doctorClinic from '@/assets/doctor-clinic.jpg';
import consultationRoom from '@/assets/consultation-room.jpg';
import doctorConsultation from '@/assets/doctor-consultation.jpg';

const Home = () => {
  const achievements = [
    { icon: Award, title: "Gold Medalist", subtitle: "MD Radiation Oncology, RGUHS" },
    { icon: Microscope, title: "7+ Years", subtitle: "Specialized Cancer Care" },
    { icon: Users, title: "1000+", subtitle: "Lives Touched" },
    { icon: Heart, title: "ECMO Certified", subtitle: "European Standards" }
  ];

  const services = [
    {
      title: "Cancer Consultations",
      description: "Comprehensive cancer evaluations and treatment planning",
      icon: Shield
    },
    {
      title: "Immunotherapy",
      description: "Advanced immune system-based cancer treatments",
      icon: Microscope
    },
    {
      title: "Targeted Therapy",
      description: "Precision medicine targeting specific cancer cells",
      icon: CheckCircle
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock emergency support for patients",
      icon: Clock
    }
  ];

  const testimonials = [
    {
      name: "Preeti Reddy",
      condition: "Breast Cancer Survivor",
      text: "Dr. Namratha's expertise and kindness gave me a second chance at life. Her personalized treatment plan and constant support made all the difference during my healing journey.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      name: "K Shiva Sharma",
      condition: "Lung Cancer Patient",
      text: "Her immunotherapy approach turned my lung cancer battle around. Dr. Namratha explained every step clearly and gave me hope when I needed it most.",
      rating: 5,
      location: "Secunderabad"
    },
    {
      name: "Rekha Patel",
      condition: "Ovarian Cancer Survivor",
      text: "From the first visit to remission, Dr. Namratha guided me with compassion and clarity. She truly cares about her patients beyond just treatment.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      name: "Rajesh Kumar",
      condition: "Prostate Cancer Patient",
      text: "The targeted therapy Dr. Namratha recommended was incredibly effective. Her expertise in precision medicine gave me the best possible outcome.",
      rating: 5,
      location: "Nizamabad"
    },
    {
      name: "Sunitha Rao",
      condition: "Lymphoma Survivor",
      text: "Dr. Namratha's comprehensive approach to cancer care helped me beat lymphoma. Her team's 24/7 support was invaluable throughout my treatment.",
      rating: 5,
      location: "Warangal"
    },
    {
      name: "Mohan Reddy",
      condition: "Colorectal Cancer Patient",
      text: "The immunotherapy treatment plan was explained so well. Dr. Namratha's confidence and expertise helped me stay positive throughout the entire process.",
      rating: 5,
      location: "Karimnagar"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <Badge variant="secondary" className="w-fit">
                Leading Oncologist in Hyderabad
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  Your Cancer Care,{' '}
                  <span className="text-primary">Our Priority</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  I am Dr. Namratha Sai Reddy, a dedicated oncologist committed to providing 
                  personalized, compassionate cancer treatment using the latest advancements 
                  in medical science.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.americanoncology.com/bookanappointment?dr=dr-b-namratha-sai-reddy&location=Hyderabad&spe=medical-oncology" target="_blank" rel="noopener noreferrer">
                <Button variant="appointment" size="hero" className="animate-scale-in">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </a>
                <Button variant="outline" size="hero" className="animate-scale-in">
                  <Phone className="h-5 w-5 mr-2" />
                  Second Opinion
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Lives Touched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up">
              <div className="relative">
                <img 
                  src={doctorProfile} 
                  alt="Dr. Namratha Sai Reddy" 
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">Emergency</div>
                      <div className="text-sm">+91 91556 67758</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Recognized Excellence in Cancer Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated to advancing cancer treatment through expertise, research, and compassionate care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="medical-card group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Comprehensive Cancer Care Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From diagnosis to recovery, we provide complete oncology services using the latest medical advancements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="medical-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="healing-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/c188e20e-ba2c-4652-93f2-6297055eebad.png"
                alt="Dr. Namratha Sai Reddy - American Oncology Institute Welcome Card"
                className="w-full h-auto rounded-xl shadow-lg object-contain bg-white p-4"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <Badge variant="secondary" className="w-fit">About Dr. Namratha</Badge>
              
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Compassionate Expertise in Cancer Treatment
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Dr. B. Namratha Sai Reddy is one of the leading medical oncologists in Hyderabad, 
                with seven years of specialized experience in comprehensive cancer care. She topped 
                her MD exam from RGUHS and secured a gold medal, demonstrating her academic excellence.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Specializes in all solid tumors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Expert in immunotherapy & targeted therapy</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Active in clinical research & trials</span>
                </li>
              </ul>
              
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Dr. Namratha
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials & Reviews */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Patient Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Stories of Hope & Healing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real stories from patients who found hope and healing through compassionate cancer care
            </p>
            
            {/* Overall Rating Display */}
            <div className="flex items-center justify-center gap-4 mt-8 mb-12">
              <div className="text-center">
                <div className="flex items-center gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Based on {testimonials.length} reviews</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="medical-card group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.condition}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <div className="text-center">
            <Card className="medical-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Share Your Experience
                </h3>
                <p className="text-muted-foreground mb-6">
                  Help others by sharing your journey with Dr. Namratha's cancer care
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://www.google.com/search?q=Dr.+Namratha+Sai+Reddy+American+Oncology+Institute+Hyderabad&rlz=1C1GCEU_enIN831IN831&oq=Dr.+Namratha+Sai+Reddy+American+Oncology+Institute+Hyderabad&aqs=chrome..69i57j33i160l3.1319j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bcb99e8607b11cf:0x5a86a14702f984f8,3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="default" size="lg">
                      <Star className="h-4 w-4 mr-2" />
                      Leave a Google Review
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Send Feedback
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding medical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait to get the expert cancer care you deserve. Schedule a consultation 
            today and take the first step towards better health.
          </p>
          
          {/* Prominent Phone Number Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/80 text-sm">Call Dr. Namratha Now</div>
                  <div className="text-white text-2xl font-bold tracking-wider">+91 91556 67758</div>
                  <div className="text-white/70 text-sm">Available 24/7 for emergencies</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.americanoncology.com/bookanappointment?dr=dr-b-namratha-sai-reddy&location=Hyderabad&spe=medical-oncology" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="hero">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </a>
            <a href="tel:+919155667758">
              <Button variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;