import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  BookOpen,
  ArrowLeft,
  Heart,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, this would fetch from an API
  const blogPosts = {
    "1": {
      title: "Understanding Immunotherapy: Revolutionary Cancer Treatment in 2024",
      category: "Treatment Updates",
      author: "Dr. Namratha Sai Reddy",
      publishDate: "December 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      content: {
        introduction: "Immunotherapy has emerged as one of the most promising approaches in modern cancer treatment, offering new hope for patients who previously had limited treatment options. This revolutionary therapy harnesses the power of your own immune system to fight cancer cells more effectively than ever before.",
        
        sections: [
          {
            heading: "What is Immunotherapy?",
            content: "Immunotherapy, also known as biologic therapy, is a type of cancer treatment that boosts or enhances the immune system's natural ability to fight cancer. Unlike traditional treatments like chemotherapy that directly attack cancer cells, immunotherapy works by helping your immune system recognize and destroy cancer cells more effectively.",
            type: "info"
          },
          {
            heading: "Types of Immunotherapy",
            content: "There are several types of immunotherapy currently available:",
            type: "list",
            items: [
              "**Checkpoint Inhibitors**: These drugs block proteins that prevent immune cells from attacking cancer cells.",
              "**CAR-T Cell Therapy**: Modified immune cells are created in the lab and infused back into the patient.",
              "**Monoclonal Antibodies**: Lab-made antibodies that target specific cancer cell proteins.",
              "**Cancer Vaccines**: Vaccines that help the immune system recognize and attack cancer cells.",
              "**Cytokines**: Proteins that boost the immune system's response to cancer."
            ]
          },
          {
            heading: "Who Can Benefit from Immunotherapy?",
            content: "Immunotherapy has shown remarkable success in treating various types of cancer, including:",
            type: "success",
            items: [
              "Melanoma (skin cancer)",
              "Lung cancer (non-small cell)",
              "Kidney cancer",
              "Bladder cancer", 
              "Head and neck cancers",
              "Hodgkin lymphoma",
              "Certain breast cancers"
            ]
          },
          {
            heading: "Benefits and Side Effects",
            content: "While immunotherapy offers significant advantages, it's important to understand both benefits and potential side effects:",
            type: "warning",
            benefits: [
              "Often more tolerable than chemotherapy",
              "Can provide long-lasting results",
              "May work when other treatments fail",
              "Can improve quality of life during treatment"
            ],
            sideEffects: [
              "Fatigue and weakness",
              "Skin reactions at injection site",
              "Flu-like symptoms",
              "Digestive issues",
              "Autoimmune reactions (rare but serious)"
            ]
          },
          {
            heading: "The Future of Immunotherapy",
            content: "Research in immunotherapy continues to advance rapidly. New combination therapies, personalized treatments based on genetic testing, and novel approaches are being developed. At our clinic, we stay at the forefront of these developments to provide our patients with the most advanced treatment options available.",
            type: "highlight"
          }
        ],
        
        conclusion: "Immunotherapy represents a paradigm shift in cancer treatment, offering hope and improved outcomes for many patients. If you're interested in learning whether immunotherapy might be right for your specific situation, I encourage you to schedule a consultation to discuss your treatment options in detail.",
        
        keyTakeaways: [
          "Immunotherapy uses your immune system to fight cancer",
          "Multiple types are available for different cancer types", 
          "Side effects are generally more manageable than chemotherapy",
          "Combination with other treatments often enhances effectiveness",
          "Personalized treatment plans are essential for optimal outcomes"
        ]
      }
    },
    "2": {
      title: "Breast Cancer Prevention: Early Detection Saves Lives",
      category: "Breast Cancer", 
      author: "Dr. Namratha Sai Reddy",
      publishDate: "December 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
      content: {
        introduction: "Breast cancer is one of the most common cancers affecting women worldwide, but early detection and prevention strategies can significantly improve outcomes. Understanding your risk factors and following screening guidelines can literally save your life.",
        
        sections: [
          {
            heading: "Understanding Breast Cancer Risk Factors",
            content: "While we cannot change some risk factors, understanding them helps in making informed decisions about prevention and screening:",
            type: "info",
            items: [
              "**Age**: Risk increases with age, especially after 50",
              "**Family History**: Having relatives with breast or ovarian cancer",
              "**Genetic Mutations**: BRCA1 and BRCA2 gene mutations",
              "**Personal History**: Previous breast cancer or certain benign breast conditions",
              "**Lifestyle Factors**: Diet, exercise, alcohol consumption, and weight"
            ]
          },
          {
            heading: "Screening Guidelines by Age",
            content: "Regular screening is crucial for early detection. Here are the current recommendations:",
            type: "success",
            items: [
              "**Ages 20-39**: Monthly self-exams, clinical breast exams every 1-3 years",
              "**Ages 40-49**: Annual mammograms (discuss with your doctor)",
              "**Ages 50-74**: Annual mammograms are strongly recommended", 
              "**75+**: Discuss continued screening with your healthcare provider",
              "**High Risk**: May need earlier or more frequent screening"
            ]
          },
          {
            heading: "Self-Examination Techniques",
            content: "Monthly breast self-exams help you become familiar with your breasts and notice changes:",
            type: "highlight",
            steps: [
              "**Visual Inspection**: Look for changes in size, shape, or skin texture",
              "**Manual Examination**: Feel for lumps using circular motions",
              "**Check Different Positions**: Lying down, standing, and in the shower",
              "**Include the Armpit**: Check lymph nodes in the armpit area",
              "**Note Any Changes**: Report unusual findings to your doctor immediately"
            ]
          },
          {
            heading: "Warning Signs to Watch For",
            content: "Contact your healthcare provider immediately if you notice any of these changes:",
            type: "warning",
            items: [
              "New lump or thickening in breast or armpit",
              "Changes in breast size or shape",
              "Skin dimpling or puckering",
              "Nipple discharge (other than breast milk)",
              "Nipple inversion or changes",
              "Red, scaly, or inflamed skin",
              "Persistent breast pain"
            ]
          },
          {
            heading: "Prevention Strategies",
            content: "While not all breast cancers can be prevented, these lifestyle changes can reduce your risk:",
            type: "success",
            items: [
              "Maintain a healthy weight",
              "Exercise regularly (at least 150 minutes per week)",
              "Limit alcohol consumption",
              "Avoid smoking",
              "Eat a balanced diet rich in fruits and vegetables",
              "Consider breastfeeding if possible",
              "Limit hormone therapy use"
            ]
          }
        ],
        
        conclusion: "Early detection through regular screening and awareness of changes in your body remains the most powerful tool in the fight against breast cancer. Remember, most breast changes are not cancer, but it's always better to have any concerns evaluated by a healthcare professional.",
        
        keyTakeaways: [
          "Regular screening saves lives - follow age-appropriate guidelines",
          "Monthly self-exams help you know what's normal for you",
          "Know your family history and discuss it with your doctor",
          "Lifestyle changes can reduce your risk significantly",
          "Don't ignore changes - early detection is key"
        ]
      }
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/education">
            <Button variant="default">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Education Center
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case 'info': return <Info className="h-5 w-5 text-blue-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'highlight': return <Lightbulb className="h-5 w-5 text-primary" />;
      default: return <BookOpen className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto">
          <Link to="/education" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Education Center
          </Link>
          
          <Badge variant="outline" className="mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.publishDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
          />

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="text-lg text-muted-foreground leading-relaxed mb-8 p-6 bg-accent/20 rounded-lg border-l-4 border-primary">
              {post.content.introduction}
            </div>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <Card key={index} className="medical-card mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {getIconForType(section.type)}
                    <h2 className="text-2xl font-heading font-bold text-foreground">
                      {section.heading}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {/* List Items */}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Steps for procedures */}
                  {section.steps && (
                    <ol className="space-y-3">
                      {section.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="medical-gradient w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Benefits and Side Effects */}
                  {section.benefits && section.sideEffects && (
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {section.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-600 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Possible Side Effects
                        </h4>
                        <ul className="space-y-2">
                          {section.sideEffects.map((effect, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                              {effect}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Conclusion */}
            <div className="text-lg text-muted-foreground leading-relaxed mb-8 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Conclusion</h3>
              {post.content.conclusion}
            </div>

            {/* Key Takeaways */}
            <Card className="medical-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {post.content.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Author Bio & CTA */}
          <Card className="medical-card mt-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Dr. Namratha Sai Reddy</h4>
                  <p className="text-muted-foreground mb-4">
                    Leading Medical Oncologist with 7+ years of experience in comprehensive cancer care. 
                    Specializes in immunotherapy, targeted therapy, and personalized treatment plans.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="default">
                      Schedule Consultation
                    </Button>
                    <Button variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="medical-card group cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Treatment Updates</Badge>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Managing Cancer Treatment Side Effects
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practical strategies to cope with common side effects of cancer treatments.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">5 min read</span>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card group cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Nutrition</Badge>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Nutrition During Cancer Treatment
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete nutritional guide for cancer patients during treatment.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">10 min read</span>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;