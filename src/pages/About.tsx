import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Calendar,
  CheckCircle,
  Heart,
  Microscope,
  Star
} from 'lucide-react';
import doctorProfile from '@/assets/doctor-profile.png';
import doctorClinic from '@/assets/doctor-clinic.jpg';

const About = () => {
  const qualifications = [
    {
      degree: "MBBS",
      institution: "Narayana Medical College",
      year: "2009",
      description: "Strong foundation in medical sciences"
    },
    {
      degree: "MD - Radiation Oncology",
      institution: "RGUHS (Gold Medalist)",
      year: "Gold Medal",
      description: "Specialized in precision radiation therapies"
    },
    {
      degree: "DrNB - Medical Oncology",
      institution: "NBE, New Delhi",
      year: "Board Certified",
      description: "Advanced training in comprehensive cancer management"
    },
    {
      degree: "ECMO Certification",
      institution: "European Standards",
      year: "International",
      description: "Expertise in global oncology standards"
    },
    {
      degree: "PDCR",
      institution: "Clinical Research",
      year: "Specialized",
      description: "In-depth knowledge of clinical trials and research"
    }
  ];

  const expertise = [
    "All Solid Tumors Treatment",
    "Immunotherapy Administration",
    "Targeted Therapy Protocols",
    "Clinical Trial Management",
    "Liquid Biopsy Analysis",
    "Genomic Profiling",
    "Personalized Treatment Plans",
    "Multidisciplinary Care Coordination"
  ];

  const philosophy = [
    {
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to the individual patient's needs, ensuring the best possible outcomes while prioritizing quality of life.",
      icon: Heart
    },
    {
      title: "Evidence-Based Treatment",
      description: "Utilizing the latest research and clinical evidence to provide cutting-edge cancer treatments with proven efficacy.",
      icon: Microscope
    },
    {
      title: "Compassionate Support",
      description: "Guiding patients and families through every step of their cancer journey with empathy, understanding, and unwavering support.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "Staying at the forefront of oncology through ongoing research, continuing education, and participation in clinical trials.",
      icon: BookOpen
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
                About Dr. Namratha
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                  Dr. B. Namratha{' '}
                  <span className="text-primary">Sai Reddy</span>
                </h1>
                <p className="text-xl text-primary font-semibold">
                  Leading Medical Oncologist, Hyderabad
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With seven years of specialized experience in oncology and a commitment to 
                  advancing cancer care through research and compassionate treatment, Dr. Namratha 
                  represents the pinnacle of modern oncological expertise.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Gold</div>
                  <div className="text-sm text-muted-foreground">Medalist MD</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">ECMO</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              </div>

              <Button variant="appointment" size="lg">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="relative animate-fade-up">
              <img 
                src={doctorProfile} 
                alt="Dr. Namratha Sai Reddy" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Professional Journey & Excellence
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Dr. Namratha's journey in oncology is marked by academic excellence, continuous learning, 
              and an unwavering commitment to patient care. Her qualifications represent the highest 
              standards in medical education and specialized training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="medical-card group">
                <CardContent className="p-6">
                  <div className="medical-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{qual.degree}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{qual.institution}</p>
                  <Badge variant="outline" className="mb-3">{qual.year}</Badge>
                  <p className="text-sm text-muted-foreground">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive oncology expertise covering the full spectrum of cancer care, 
              from diagnosis to survivorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Treatment Philosophy & Approach
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Dr. Namratha's approach to cancer care is built on four fundamental pillars that 
              ensure comprehensive, compassionate, and cutting-edge treatment for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <Card key={index} className="medical-card group">
                <CardContent className="p-8">
                  <div className="healing-gradient w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliation */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Current Position
              </Badge>
              
              <h2 className="text-3xl font-heading font-bold text-foreground">
                American Oncology Institute, Nallagandla
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Dr. Namratha currently practices at the American Oncology Institute in Nallagandla, 
                one of the premier cancer care centers in Hyderabad. Here, she leads a multidisciplinary 
                team in providing comprehensive cancer care, combining her expertise with state-of-the-art 
                technology and facilities.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Leading the Medical Oncology Department</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Coordinating Multidisciplinary Cancer Care</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Conducting Clinical Research & Trials</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Mentoring Future Oncologists</span>
                </li>
              </ul>
              
              <Button variant="default" size="lg">
                Schedule a Visit
              </Button>
            </div>

            <div className="relative">
              <img 
                src={doctorClinic} 
                alt="American Oncology Institute" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding medical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Experience Expert Cancer Care
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards comprehensive cancer care with Dr. Namratha Sai Reddy. 
            Schedule your consultation today and discover personalized treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="hero">
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
            </Button>
            <Button variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-primary">
              Learn About Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;