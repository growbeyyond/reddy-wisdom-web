import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock,
  User,
  ArrowRight,
  Filter,
  Star,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react';

// Import topic-specific images
import immunotherapyImg from '@/assets/blog-immunotherapy.jpg';
import breastCancerImg from '@/assets/blog-breast-cancer.jpg';
import nutritionImg from '@/assets/blog-nutrition.jpg';
import lungCancerImg from '@/assets/blog-lung-cancer.jpg';
import sideEffectsImg from '@/assets/blog-side-effects.jpg';
import mentalHealthImg from '@/assets/blog-mental-health.jpg';
import prostateCancerImg from '@/assets/blog-prostate-cancer.jpg';
import colorectalCancerImg from '@/assets/blog-colorectal-cancer.jpg';
import survivorshipImg from '@/assets/blog-survivorship.jpg';
import precisionMedicineImg from '@/assets/blog-precision-medicine.jpg';
import preventionLifestyleImg from '@/assets/blog-prevention-lifestyle.jpg';
import redMeatWhiteMeatImg from '@/assets/blog-red-meat-white-meat.jpg';
import whiteDischargeHealthImg from '@/assets/blog-white-discharge-health.jpg';
import vapingHookahCancerImg from '@/assets/blog-vaping-hookah-cancer.jpg';
import birthPillsCancerImg from '@/assets/blog-birth-pills-cancer.jpg';
import russianVaccineImg from '@/assets/blog-russian-vaccine.jpg';
import vitaminDCancerImg from '@/assets/blog-vitamin-d-cancer.jpg';

const Education = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogCategories = [
    'All', 'Breast Cancer', 'Lung Cancer', 'Prostate Cancer', 'Colorectal Cancer', 'Prevention', 
    'Treatment Updates', 'Nutrition', 'Mental Health', 'Research', 'Survivorship', 'Precision Medicine',
    'Technology', 'Diagnostics'
  ];

  const featuredBlogs = [
    {
      id: 1,
      title: "Understanding Immunotherapy: Revolutionary Cancer Treatment in 2025",
      excerpt: "Discover how immunotherapy is changing cancer treatment outcomes and what patients need to know about this breakthrough therapy.",
      category: "Treatment Updates", 
      readTime: "8 min read",
      publishDate: "June 5, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: immunotherapyImg,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "Breast Cancer Prevention: Early Detection Saves Lives",
      excerpt: "Essential screening guidelines, self-examination techniques, and lifestyle factors that can significantly reduce breast cancer risk.",
      category: "Breast Cancer",
      readTime: "6 min read", 
      publishDate: "June 12, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: breastCancerImg,
      featured: true
    },
    {
      id: 3,
      title: "Nutrition During Cancer Treatment: What Every Patient Should Know",
      excerpt: "Complete nutritional guide for cancer patients, including foods to eat, avoid, and how to manage treatment side effects through diet.",
      category: "Nutrition",
      readTime: "10 min read",
      publishDate: "June 18, 2025", 
      author: "Dr. Namratha Sai Reddy",
      image: nutritionImg,
      featured: true
    },
    {
      id: 4,
      title: "Lung Cancer: Understanding Symptoms and Treatment Options",
      excerpt: "Comprehensive guide to lung cancer types, symptoms, risk factors, and modern treatment approaches including targeted therapy.",
      category: "Lung Cancer",
      readTime: "12 min read",
      publishDate: "June 25, 2025",
      author: "Dr. Namratha Sai Reddy", 
      image: lungCancerImg
    },
    {
      id: 5,
      title: "Managing Cancer Treatment Side Effects: A Patient's Guide",
      excerpt: "Practical strategies to cope with common side effects of chemotherapy, radiation, and immunotherapy treatments.",
      category: "Treatment Updates",
      readTime: "9 min read",
      publishDate: "July 2, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: sideEffectsImg
    },
    {
      id: 6,
      title: "Mental Health and Cancer: Supporting Your Emotional Journey", 
      excerpt: "Understanding the psychological impact of cancer diagnosis and practical ways to maintain mental wellness during treatment.",
      category: "Mental Health",
      readTime: "7 min read",
      publishDate: "July 8, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: mentalHealthImg
    },
    {
      id: 7,
      title: "Prostate Cancer Screening: Essential Guide for Men Over 50",
      excerpt: "Comprehensive overview of PSA testing, digital rectal exams, early detection strategies, and treatment options for prostate cancer. Learn about risk factors, symptoms, and preventive measures.",
      category: "Prostate Cancer",
      readTime: "11 min read",
      publishDate: "July 15, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: prostateCancerImg,
      trending: true
    },
    {
      id: 8,
      title: "Colorectal Cancer Prevention: Screening Guidelines and Early Detection",
      excerpt: "Complete guide to colonoscopy procedures, FIT tests, and lifestyle modifications for colorectal cancer prevention. Understand symptoms, family history factors, and screening schedules.",
      category: "Colorectal Cancer",
      readTime: "9 min read",
      publishDate: "July 20, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: colorectalCancerImg
    },
    {
      id: 9,
      title: "Cancer Survivorship: Life After Treatment and Long-term Wellness",
      excerpt: "Navigate post-treatment life with expert guidance on follow-up care, managing late effects, exercise programs, and building a strong support network for cancer survivors.",
      category: "Survivorship",
      readTime: "13 min read",
      publishDate: "July 24, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: survivorshipImg,
      featured: true
    },
    {
      id: 10,
      title: "Precision Medicine in Cancer Care: Personalized Treatment Revolution",
      excerpt: "Explore how genetic testing, biomarker analysis, and targeted therapies are revolutionizing cancer treatment. Learn about genomic sequencing and personalized medicine approaches.",
      category: "Precision Medicine",
      readTime: "10 min read",
      publishDate: "July 26, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: precisionMedicineImg,
      trending: true
    },
    {
      id: 11,
      title: "Cancer Prevention Lifestyle: Evidence-Based Strategies for Risk Reduction",
      excerpt: "Scientifically-proven lifestyle modifications including diet, exercise, tobacco cessation, and environmental factors that significantly reduce cancer risk and promote overall health.",
      category: "Prevention",
      readTime: "8 min read",
      publishDate: "July 27, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: preventionLifestyleImg
    },
    {
      id: 12,
      title: "AI-Powered Cancer Diagnosis: How Artificial Intelligence is Revolutionizing Early Detection in 2025",
      excerpt: "Discover how AI technology is detecting cancer earlier and more accurately than ever before, potentially saving millions of lives through revolutionary diagnostic capabilities.",
      category: "Technology",
      readTime: "11 min read",
      publishDate: "August 1, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: precisionMedicineImg,
      featured: true,
      trending: true
    },
    {
      id: 13,
      title: "Liquid Biopsy Breakthrough: Blood Tests That Detect Cancer Before Symptoms Appear",
      excerpt: "Revolutionary blood test technology that identifies circulating tumor DNA months before symptoms develop, transforming cancer prevention strategies.",
      category: "Diagnostics",
      readTime: "9 min read",
      publishDate: "August 4, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: preventionLifestyleImg,
      featured: true,
      trending: true
    },
    {
      id: 14,
      title: "CAR-T Cell Therapy Success Stories: Revolutionary Cancer Treatment Changing Lives in 2025",
      excerpt: "Real patient experiences with CAR-T cell therapy demonstrate how this groundbreaking immunotherapy is curing previously incurable blood cancers.",
      category: "Treatment Updates",
      readTime: "12 min read",
      publishDate: "August 7, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: immunotherapyImg,
      featured: true,
      trending: true
    },
    {
      id: 15,
      title: "Red Meat vs White Meat: Understanding Cancer Risk and Making Healthier Choices",
      excerpt: "Expert analysis by Dr. Namratha Sai Reddy on how different meat types affect cancer risk, with evidence-based dietary recommendations for optimal health.",
      category: "Prevention",
      readTime: "8 min read",
      publishDate: "August 15, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: redMeatWhiteMeatImg,
      trending: true
    },
    {
      id: 16,
      title: "White Discharge in Women: When to Worry About Cancer Signs",
      excerpt: "Dr. Namratha Sai Reddy explains normal vs concerning vaginal discharge patterns and when white discharge might indicate gynecological cancers.",
      category: "Prevention",
      readTime: "7 min read",
      publishDate: "August 18, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: whiteDischargeHealthImg,
      featured: true
    },
    {
      id: 17,
      title: "Vaping and Hookah: Hidden Cancer Risks You Need to Know",
      excerpt: "Comprehensive guide by Dr. Namratha Sai Reddy on how vaping, e-cigarettes, and hookah smoking increase cancer risk despite marketing claims.",
      category: "Prevention",
      readTime: "9 min read",
      publishDate: "August 20, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: vapingHookahCancerImg,
      trending: true
    },
    {
      id: 18,
      title: "Birth Control Pills and Cancer Risk: What Every Woman Should Know",
      excerpt: "Dr. Namratha Sai Reddy examines the complex relationship between hormonal contraceptives and cancer risk, providing evidence-based guidance for women.",
      category: "Prevention",
      readTime: "10 min read",
      publishDate: "August 22, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: birthPillsCancerImg,
      featured: true
    },
    {
      id: 19,
      title: "Russian Cancer Vaccine Breakthrough: Revolutionary Sputnik-V Cancer Treatment",
      excerpt: "Dr. Namratha Sai Reddy analyzes Russia's innovative cancer vaccine developments and their potential impact on global cancer treatment protocols.",
      category: "Treatment Updates",
      readTime: "11 min read",
      publishDate: "August 25, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: russianVaccineImg,
      trending: true
    },
    {
      id: 20,
      title: "Vitamin D Deficiency and Cancer Risk: The Sunshine Vitamin Connection",
      excerpt: "Dr. Namratha Sai Reddy explores how vitamin D deficiency increases cancer risk and provides actionable strategies for optimal vitamin D levels.",
      category: "Prevention",
      readTime: "8 min read",
      publishDate: "August 28, 2025",
      author: "Dr. Namratha Sai Reddy",
      image: vitaminDCancerImg,
      featured: true
    }
  ];

  const filteredBlogs = blogCategories.includes(selectedCategory) && selectedCategory !== 'All' 
    ? featuredBlogs.filter(blog => blog.category === selectedCategory)
    : featuredBlogs;

  const searchFilteredBlogs = searchTerm
    ? filteredBlogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredBlogs;

  const trendingTopics = [
    "Immunotherapy Advances",
    "Precision Medicine", 
    "Cancer Prevention",
    "Mental Health Support",
    "Nutrition Guidelines",
    "Treatment Side Effects"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Cancer Education Center
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Knowledge is Your{' '}
            <span className="text-primary">Best Medicine</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay informed with the latest cancer research, treatment options, and expert guidance. 
            Empower yourself with knowledge for better health decisions.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search cancer topics, treatments..." 
              className="pl-10 pr-4 py-3 text-center"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Trending Topics */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Trending:</span>
            {trendingTopics.slice(0, 4).map((topic, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10">
                <TrendingUp className="h-3 w-3 mr-1" />
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <span className="text-sm font-medium text-foreground mr-4 whitespace-nowrap">Filter by:</span>
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          {searchFilteredBlogs.length > 0 && (
            <Card className="medical-card mb-12 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={searchFilteredBlogs[0].image} 
                    alt={searchFilteredBlogs[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="default">Featured</Badge>
                    {searchFilteredBlogs[0].trending && (
                      <Badge variant="secondary">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {searchFilteredBlogs[0].category}
                  </Badge>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {searchFilteredBlogs[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {searchFilteredBlogs[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {searchFilteredBlogs[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {searchFilteredBlogs[0].publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {searchFilteredBlogs[0].readTime}
                    </div>
                  </div>
                  <Link to={`/education/blog/${searchFilteredBlogs[0].id}`}>
                    <Button variant="default" size="lg">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredBlogs.slice(1).map((blog) => (
              <Card key={blog.id} className="medical-card group cursor-pointer overflow-hidden">
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="outline" className="absolute top-3 left-3 bg-background/90">
                    {blog.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {blog.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                  <Link to={`/education/blog/${blog.id}`}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchFilteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Educational Tools */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Interactive Health Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our interactive tools to better understand your health and cancer risk factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="medical-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cancer Risk Assessment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Evaluate your personal cancer risk factors with our comprehensive assessment tool.
                </p>
                <Link to="/tools/risk-assessment">
                  <Button variant="outline" size="sm">Start Assessment</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="medical-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="healing-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Symptom Checker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check your symptoms and understand when to seek medical attention.
                </p>
                <Link to="/tools/symptom-checker">
                  <Button variant="outline" size="sm">Check Symptoms</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="medical-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="trust-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Treatment Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive guide to understand different cancer treatment options.
                </p>
                <Link to="/tools/treatment-guide">
                  <Button variant="outline" size="sm">Explore Treatments</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding medical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Stay Updated with Latest Cancer Research
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest cancer research updates, treatment breakthroughs, and health tips 
            delivered directly to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Join 1000+ patients staying informed about cancer care advances.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;