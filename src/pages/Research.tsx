import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, FileText, Users, Calendar, Award, ExternalLink, Download } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Immunotherapy Research",
      description: "Investigating novel immunotherapy approaches for various cancer types, including checkpoint inhibitors and CAR-T cell therapy.",
      status: "Ongoing",
      participants: "150+",
      startDate: "2023"
    },
    {
      title: "Personalized Medicine",
      description: "Developing personalized treatment protocols based on genetic profiling and biomarker analysis.",
      status: "Recruiting",
      participants: "75+",
      startDate: "2024"
    },
    {
      title: "Early Detection Methods",
      description: "Advancing screening techniques for early cancer detection using AI and molecular diagnostics.",
      status: "Completed",
      participants: "200+",
      startDate: "2022"
    }
  ];

  const publications = [
    {
      title: "Advances in Breast Cancer Immunotherapy: A Comprehensive Review",
      journal: "International Journal of Oncology",
      year: "2024",
      impact: "High Impact"
    },
    {
      title: "Personalized Treatment Approaches in Medical Oncology",
      journal: "Cancer Research Today",
      year: "2023",
      impact: "Peer Reviewed"
    },
    {
      title: "Early Detection Strategies for Improved Patient Outcomes",
      journal: "Journal of Clinical Medicine",
      year: "2023",
      impact: "Research Article"
    }
  ];

  const clinicalTrials = [
    {
      title: "Phase II Study of Novel Immunotherapy Combination",
      phase: "Phase II",
      condition: "Advanced Breast Cancer",
      status: "Recruiting",
      expectedCompletion: "2025"
    },
    {
      title: "Biomarker-Guided Precision Medicine Trial",
      phase: "Phase III",
      condition: "Multiple Cancer Types",
      status: "Active",
      expectedCompletion: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Research & Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Advancing Cancer Care Through Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to research drives innovation in cancer treatment, 
              improving outcomes and quality of life for patients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Current Research Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring cutting-edge treatments and methodologies to revolutionize cancer care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Microscope className="h-8 w-8 text-primary" />
                    <Badge variant={area.status === 'Ongoing' ? 'default' : area.status === 'Recruiting' ? 'secondary' : 'outline'}>
                      {area.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Participants:
                      </span>
                      <span className="font-medium">{area.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Started:
                      </span>
                      <span className="font-medium">{area.startDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Recent Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contributing to the global knowledge base through peer-reviewed research
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {pub.journal}
                        </span>
                        <span>{pub.year}</span>
                        <Badge variant="outline">{pub.impact}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Active Clinical Trials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pioneering new treatments through carefully designed clinical studies
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {clinicalTrials.map((trial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="default">{trial.phase}</Badge>
                        <Badge variant={trial.status === 'Recruiting' ? 'secondary' : 'outline'}>
                          {trial.status}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{trial.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Condition:</strong> {trial.condition}</p>
                        <p><strong>Expected Completion:</strong> {trial.expectedCompletion}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="ml-4">
                      Learn More
                    </Button>
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
            <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Join Our Research Community
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Interested in participating in our research studies or learning more about our clinical trials? 
              Contact us to explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Research Opportunities
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Research Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;