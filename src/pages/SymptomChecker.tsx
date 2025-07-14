import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  ArrowRight,
  ArrowLeft,
  Phone,
  Calendar,
  Clock,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SymptomChecker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [bodyArea, setBodyArea] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');
  const [showResults, setShowResults] = useState(false);

  const symptomCategories = {
    'Breast/Chest': [
      'New lump or thickening in breast',
      'Changes in breast size or shape', 
      'Nipple discharge (not milk)',
      'Nipple inversion or changes',
      'Skin dimpling or puckering',
      'Redness or scaling of skin',
      'Persistent breast pain'
    ],
    'Respiratory': [
      'Persistent cough for over 3 weeks',
      'Coughing up blood',
      'Shortness of breath',
      'Chest pain',
      'Recurring respiratory infections',
      'Hoarseness or voice changes',
      'Difficulty swallowing'
    ],
    'Digestive': [
      'Persistent abdominal pain',
      'Changes in bowel habits',
      'Blood in stool',
      'Difficulty swallowing',
      'Persistent nausea or vomiting',
      'Unexplained weight loss',
      'Loss of appetite'
    ],
    'General': [
      'Unexplained weight loss (>10 lbs)',
      'Extreme fatigue',
      'Persistent fever',
      'Night sweats',
      'Unusual bleeding or bruising',
      'Changes in moles or skin',
      'Persistent headaches'
    ],
    'Gynecological': [
      'Abnormal vaginal bleeding',
      'Pelvic pain or pressure',
      'Changes in menstrual cycle',
      'Post-menopausal bleeding',
      'Unusual vaginal discharge',
      'Pain during intercourse',
      'Abdominal bloating'
    ]
  };

  const durationOptions = [
    'Less than 1 week',
    '1-2 weeks', 
    '2-4 weeks',
    '1-3 months',
    'More than 3 months'
  ];

  const severityOptions = [
    'Mild - Doesn\'t interfere with daily activities',
    'Moderate - Sometimes interferes with activities',
    'Severe - Significantly impacts daily life'
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = () => {
    // Risk scoring logic
    let riskScore = 0;
    let urgencyLevel = 'low';
    let recommendations = [];
    
    // High-risk symptoms
    const highRiskSymptoms = [
      'Coughing up blood',
      'Blood in stool', 
      'New lump or thickening in breast',
      'Unexplained weight loss (>10 lbs)',
      'Post-menopausal bleeding',
      'Difficulty swallowing'
    ];
    
    const mediumRiskSymptoms = [
      'Persistent cough for over 3 weeks',
      'Changes in breast size or shape',
      'Persistent abdominal pain',
      'Changes in bowel habits',
      'Abnormal vaginal bleeding'
    ];

    // Calculate risk score
    selectedSymptoms.forEach(symptom => {
      if (highRiskSymptoms.includes(symptom)) riskScore += 3;
      else if (mediumRiskSymptoms.includes(symptom)) riskScore += 2;
      else riskScore += 1;
    });

    // Duration impact
    if (duration === 'More than 3 months') riskScore += 2;
    else if (duration === '1-3 months') riskScore += 1;

    // Severity impact  
    if (severity === 'Severe - Significantly impacts daily life') riskScore += 2;
    else if (severity === 'Moderate - Sometimes interferes with activities') riskScore += 1;

    // Determine urgency
    if (riskScore >= 8 || selectedSymptoms.some(s => highRiskSymptoms.includes(s))) {
      urgencyLevel = 'high';
    } else if (riskScore >= 4) {
      urgencyLevel = 'medium';
    }

    return { riskScore, urgencyLevel, recommendations };
  };

  const generateRecommendations = () => {
    const analysis = analyzeSymptoms();
    
    switch (analysis.urgencyLevel) {
      case 'high':
        return {
          title: 'Immediate Medical Attention Recommended',
          level: 'high',
          icon: AlertTriangle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          message: 'Your symptoms require prompt medical evaluation. Please contact Dr. Namratha immediately or visit the nearest emergency room.',
          actions: [
            'Call Dr. Namratha: +91 91556 67758',
            'Schedule urgent consultation',
            'Visit emergency room if severe',
            'Do not delay seeking medical care'
          ]
        };
      case 'medium':
        return {
          title: 'Medical Consultation Recommended',
          level: 'medium',
          icon: Info,
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          message: 'Your symptoms should be evaluated by a healthcare professional within the next few days.',
          actions: [
            'Schedule consultation with Dr. Namratha',
            'Monitor symptoms for changes',
            'Keep a symptom diary',
            'Don\'t ignore persistent symptoms'
          ]
        };
      default:
        return {
          title: 'Routine Follow-up Suggested',
          level: 'low',
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-50', 
          borderColor: 'border-green-200',
          message: 'While your symptoms may not be immediately concerning, it\'s always good to discuss them with a healthcare provider.',
          actions: [
            'Consider routine check-up',
            'Monitor symptoms over time',
            'Maintain healthy lifestyle',
            'Schedule if symptoms persist or worsen'
          ]
        };
    }
  };

  const results = showResults ? generateRecommendations() : null;

  const resetChecker = () => {
    setCurrentStep(1);
    setSelectedSymptoms([]);
    setBodyArea('');
    setDuration('');
    setSeverity('');
    setShowResults(false);
  };

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/education" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Education Center
          </Link>
          
          <Badge variant="secondary" className="mb-4">
            Interactive Health Tool
          </Badge>
          
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Cancer Symptom Checker
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This tool helps you understand your symptoms and provides guidance on when to seek medical attention. 
            It's not a substitute for professional medical advice.
          </p>
        </div>

        {/* Disclaimer */}
        <Card className="medical-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This symptom checker is for informational purposes only and should not replace professional medical advice, 
                  diagnosis, or treatment. Always consult with Dr. Namratha or another qualified healthcare provider for 
                  proper medical evaluation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {!showResults ? (
          <Card className="medical-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  Step {currentStep} of 4: {
                    currentStep === 1 ? 'Select Body Area' :
                    currentStep === 2 ? 'Choose Symptoms' :
                    currentStep === 3 ? 'Duration & Severity' : 'Review & Analyze'
                  }
                </CardTitle>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(step => (
                    <div 
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        step <= currentStep ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              {/* Step 1: Body Area Selection */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-6">
                    Which area of your body are you concerned about?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(symptomCategories).map(area => (
                      <button
                        key={area}
                        onClick={() => setBodyArea(area)}
                        className={`p-4 text-left border-2 rounded-lg transition-colors ${
                          bodyArea === area 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium text-foreground">{area}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {symptomCategories[area as keyof typeof symptomCategories].length} symptoms to check
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Symptom Selection */}
              {currentStep === 2 && bodyArea && (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-6">
                    Which of these symptoms are you experiencing? (Select all that apply)
                  </p>
                  <div className="space-y-3">
                    {symptomCategories[bodyArea as keyof typeof symptomCategories].map(symptom => (
                      <div key={symptom} className="flex items-center space-x-3">
                        <Checkbox
                          id={symptom}
                          checked={selectedSymptoms.includes(symptom)}
                          onCheckedChange={() => handleSymptomToggle(symptom)}
                        />
                        <label
                          htmlFor={symptom}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {symptom}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Duration & Severity */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-4">How long have you been experiencing these symptoms?</p>
                    <div className="space-y-2">
                      {durationOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => setDuration(option)}
                          className={`w-full p-3 text-left border rounded-lg transition-colors ${
                            duration === option 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground mb-4">How would you rate the severity?</p>
                    <div className="space-y-2">
                      {severityOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => setSeverity(option)}
                          className={`w-full p-3 text-left border rounded-lg transition-colors ${
                            severity === option 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Review Your Information</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/20 rounded-lg">
                        <div className="font-medium text-foreground mb-1">Body Area</div>
                        <div className="text-sm text-muted-foreground">{bodyArea}</div>
                      </div>

                      <div className="p-4 bg-accent/20 rounded-lg">
                        <div className="font-medium text-foreground mb-2">Selected Symptoms ({selectedSymptoms.length})</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {selectedSymptoms.map(symptom => (
                            <li key={symptom}>• {symptom}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-accent/20 rounded-lg">
                          <div className="font-medium text-foreground mb-1">Duration</div>
                          <div className="text-sm text-muted-foreground">{duration}</div>
                        </div>
                        <div className="p-4 bg-accent/20 rounded-lg">
                          <div className="font-medium text-foreground mb-1">Severity</div>
                          <div className="text-sm text-muted-foreground">{severity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      (currentStep === 1 && !bodyArea) ||
                      (currentStep === 2 && selectedSymptoms.length === 0) ||
                      (currentStep === 3 && (!duration || !severity))
                    }
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowResults(true)}
                    variant="appointment"
                  >
                    Analyze Symptoms
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Results */
          <div className="space-y-6">
            <Card className={`border-2 ${results?.borderColor} ${results?.bgColor}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${results?.bgColor} flex items-center justify-center`}>
                    {results && <results.icon className={`h-6 w-6 ${results.color}`} />}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl font-semibold ${results?.color} mb-2`}>
                      {results?.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {results?.message}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Recommended Actions:</h4>
                      <ul className="space-y-1">
                        {results?.actions.map((action, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="medical-card">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Call Dr. Namratha</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with Dr. Namratha for immediate guidance
                  </p>
                  <Button variant="appointment" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +91 91556 67758
                  </Button>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Schedule Consultation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a detailed consultation at your convenience
                  </p>
                  <Link to="/contact">
                    <Button variant="default" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Reset Option */}
            <div className="text-center pt-6">
              <Button variant="outline" onClick={resetChecker}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Start New Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;