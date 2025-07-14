import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Shield, ArrowLeft, ArrowRight, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "What is your age?",
      options: ["Under 30", "30-39", "40-49", "50-59", "60-69", "70+"],
      weights: [0, 1, 2, 3, 4, 5]
    },
    {
      id: 1,
      question: "Do you have a family history of cancer?",
      options: ["No family history", "Distant relatives", "Immediate family (parent/sibling)", "Multiple family members"],
      weights: [0, 1, 3, 4]
    },
    {
      id: 2,
      question: "Do you smoke or have you smoked?",
      options: ["Never smoked", "Former smoker (quit >10 years)", "Former smoker (quit <10 years)", "Current smoker"],
      weights: [0, 1, 2, 4]
    },
    {
      id: 3,
      question: "How would you describe your alcohol consumption?",
      options: ["No alcohol", "Occasional (1-2 drinks/week)", "Moderate (3-7 drinks/week)", "Heavy (>7 drinks/week)"],
      weights: [0, 0, 1, 2]
    },
    {
      id: 4,
      question: "What is your current weight status?",
      options: ["Normal weight", "Slightly overweight", "Moderately overweight", "Significantly overweight"],
      weights: [0, 1, 2, 3]
    },
    {
      id: 5,
      question: "How often do you exercise?",
      options: ["Regular exercise (4+ times/week)", "Moderate exercise (2-3 times/week)", "Light exercise (1 time/week)", "No regular exercise"],
      weights: [0, 1, 2, 3]
    },
    {
      id: 6,
      question: "Have you had any previous cancer diagnosis?",
      options: ["No", "Benign tumors only", "Yes, successfully treated", "Yes, currently in treatment"],
      weights: [0, 1, 2, 3]
    }
  ];

  const calculateRisk = () => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, answerIndex]) => {
      const question = questions[parseInt(questionId)];
      const weight = question.weights[parseInt(answerIndex)];
      totalScore += weight;
    });

    if (totalScore <= 5) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-50' };
    if (totalScore <= 12) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'High', color: 'text-red-600', bg: 'bg-red-50' };
  };

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-2xl mx-auto">
        <Link to="/education" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Education Center
        </Link>

        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">Cancer Risk Assessment</Badge>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Know Your Cancer Risk
          </h1>
          <p className="text-muted-foreground">
            Answer a few questions to understand your personal cancer risk factors.
          </p>
        </div>

        {!showResults ? (
          <Card className="medical-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= currentQuestion ? 'bg-primary' : 'bg-muted'}`} />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-6">{questions[currentQuestion].question}</h3>
              
              <RadioGroup 
                value={answers[currentQuestion]?.toString() || ''} 
                onValueChange={(value) => setAnswers({...answers, [currentQuestion]: value})}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent/50">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                
                {currentQuestion < questions.length - 1 ? (
                  <Button 
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    disabled={!answers[currentQuestion]}
                  >
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setShowResults(true)}
                    disabled={!answers[currentQuestion]}
                    variant="appointment"
                  >
                    See Results
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className={`border-2 ${calculateRisk().bg}`}>
              <CardContent className="p-6 text-center">
                <Shield className={`h-16 w-16 mx-auto mb-4 ${calculateRisk().color}`} />
                <h2 className={`text-2xl font-bold ${calculateRisk().color} mb-4`}>
                  {calculateRisk().level} Risk Level
                </h2>
                <p className="text-muted-foreground mb-6">
                  Based on your responses, your cancer risk level is {calculateRisk().level.toLowerCase()}. 
                  {calculateRisk().level === 'High' && " We recommend immediate consultation with Dr. Namratha."}
                  {calculateRisk().level === 'Moderate' && " Consider regular screening and lifestyle modifications."}
                  {calculateRisk().level === 'Low' && " Continue healthy habits and routine screening."}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="appointment">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +91 91556 67758
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskAssessment;