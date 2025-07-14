import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Quote, Star, Calendar, MapPin, Trophy, Users } from "lucide-react";

const Stories = () => {
  const patientStories = [
    {
      name: "Sarah M.",
      age: 45,
      condition: "Breast Cancer",
      stage: "Stage II",
      treatment: "Surgery + Chemotherapy",
      outcome: "Complete Remission",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Dr. Namratha's compassionate care and expertise gave me hope during my darkest moments. Today, I'm cancer-free and living life to the fullest.",
      story: "When I was first diagnosed, I felt overwhelmed and scared. Dr. Namratha took the time to explain everything clearly and involved me in every decision. Her personalized approach and the support from her team made all the difference in my recovery journey."
    },
    {
      name: "Rajesh K.",
      age: 58,
      condition: "Lung Cancer",
      stage: "Stage III",
      treatment: "Targeted Therapy",
      outcome: "Stable Disease",
      duration: "12 months",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The innovative treatment approach and continuous monitoring helped me maintain my quality of life while fighting cancer.",
      story: "As a lung cancer patient, I was concerned about the treatment's impact on my daily life. Dr. Namratha's team developed a treatment plan that was both effective and allowed me to continue working and spending time with my family."
    },
    {
      name: "Priya S.",
      age: 34,
      condition: "Ovarian Cancer",
      stage: "Stage I",
      treatment: "Surgery + Immunotherapy",
      outcome: "Disease-Free",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1594824388853-2c5039d6ac52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Early detection and prompt treatment saved my life. I'm grateful for the comprehensive care I received.",
      story: "Being diagnosed at a young age was devastating, but the early detection and Dr. Namratha's swift action made all the difference. The treatment was challenging, but the support system here helped me through every step."
    },
    {
      name: "Kumar R.",
      age: 62,
      condition: "Prostate Cancer",
      stage: "Stage II",
      treatment: "Radiation Therapy",
      outcome: "Complete Response",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The precision of the treatment and the care from the entire team exceeded my expectations. I'm back to my normal activities.",
      story: "I was worried about the side effects of treatment, but Dr. Namratha's expertise in precision medicine meant I had minimal complications. The follow-up care has been exceptional, and I feel confident about my future."
    }
  ];

  const survivorStats = [
    { label: "5-Year Survival Rate", value: "92%", icon: Trophy },
    { label: "Patients Treated", value: "500+", icon: Users },
    { label: "Success Stories", value: "400+", icon: Heart },
    { label: "Years of Experience", value: "7+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Patient Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Stories of Hope and Healing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real patients who found hope, healing, and renewed life 
              through compassionate cancer care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {survivorStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Patient Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each story represents a journey of courage, hope, and healing. 
              These are the faces behind our mission.
            </p>
          </div>

          <div className="space-y-12">
            {patientStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                  <div className="lg:w-1/3">
                    <img 
                      src={story.image} 
                      alt={`${story.name} - Cancer Survivor`}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{story.name}</h3>
                      <Badge variant="outline">{story.condition}</Badge>
                      <Badge variant="secondary">{story.outcome}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Age:</span>
                        <div className="font-medium">{story.age}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stage:</span>
                        <div className="font-medium">{story.stage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Treatment:</span>
                        <div className="font-medium">{story.treatment}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <div className="font-medium">{story.duration}</div>
                      </div>
                    </div>

                    <div className="relative bg-muted/50 p-6 rounded-lg mb-6">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-lg italic text-muted-foreground">{story.quote}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The trust and confidence our patients place in us drives everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Anita D.",
                condition: "Cervical Cancer",
                rating: 5,
                text: "The team's dedication and Dr. Namratha's expertise made my treatment journey bearable. I'm grateful for their compassionate care."
              },
              {
                name: "Mohan P.",
                condition: "Colorectal Cancer",
                rating: 5,
                text: "Professional, caring, and always available when I had questions. The treatment plan was explained clearly and executed perfectly."
              },
              {
                name: "Lakshmi V.",
                condition: "Lymphoma",
                rating: 5,
                text: "From diagnosis to recovery, every step was handled with care and precision. I couldn't have asked for better treatment."
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.condition} Survivor</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Your Story Matters
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              If you're facing a cancer diagnosis, know that you're not alone. 
              Every journey is unique, and we're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;