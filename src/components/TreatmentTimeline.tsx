import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Clock, Calendar, FileText, Download } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'scheduled';
  description: string;
  details?: string[];
  documents?: string[];
  nextSteps?: string[];
}

const TreatmentTimeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: 'Initial Consultation & Diagnosis',
      date: '2025-06-15',
      status: 'completed',
      description: 'Comprehensive evaluation, staging, and initial treatment planning',
      details: [
        'Physical examination completed',
        'Imaging studies reviewed (CT, MRI, PET scan)',
        'Biopsy results confirmed diagnosis',
        'TNM staging determined: T2N1M0'
      ],
      documents: ['Pathology Report', 'Imaging Summary', 'Treatment Plan']
    },
    {
      id: 2,
      title: 'Multidisciplinary Team Review',
      date: '2025-06-22',
      status: 'completed',
      description: 'Case discussed with surgical, medical, and radiation oncology teams',
      details: [
        'Surgical options evaluated',
        'Chemotherapy regimen selected',
        'Radiation therapy plan developed',
        'Patient preferences incorporated'
      ],
      documents: ['MDT Meeting Notes', 'Treatment Protocol']
    },
    {
      id: 3,
      title: 'Pre-operative Preparation',
      date: '2025-06-28',
      status: 'completed',
      description: 'Medical optimization and surgical preparation',
      details: [
        'Pre-operative testing completed',
        'Anesthesia consultation done',
        'Cardiac clearance obtained',
        'Patient education provided'
      ]
    },
    {
      id: 4,
      title: 'Surgical Resection',
      date: '2025-07-05',
      status: 'completed',
      description: 'Primary tumor resection with lymph node sampling',
      details: [
        'Surgery completed successfully (3 hours)',
        'Clear surgical margins achieved',
        '2 of 15 lymph nodes positive',
        'No intraoperative complications'
      ],
      documents: ['Operative Report', 'Final Pathology']
    },
    {
      id: 5,
      title: 'Post-operative Recovery',
      date: '2025-07-12',
      status: 'completed',
      description: 'Recovery monitoring and wound healing assessment',
      details: [
        'Wound healing well',
        'Pain controlled adequately',
        'Early mobilization achieved',
        'Discharged home on POD 3'
      ]
    },
    {
      id: 6,
      title: 'Adjuvant Chemotherapy - Cycle 1',
      date: '2025-07-20',
      status: 'in-progress',
      description: 'First cycle of adjuvant chemotherapy treatment',
      details: [
        'Pre-chemotherapy labs normal',
        'Infusion completed without reactions',
        'Anti-nausea medications effective',
        'Patient education on side effects provided'
      ],
      nextSteps: [
        'Monitor for side effects',
        'Labs to be drawn in 1 week',
        'Next cycle scheduled for August 10'
      ]
    },
    {
      id: 7,
      title: 'Chemotherapy - Cycle 2',
      date: '2025-08-10',
      status: 'scheduled',
      description: 'Second cycle of adjuvant chemotherapy',
      nextSteps: [
        'Pre-chemo labs and vitals',
        'Review interval history',
        'Dose modifications if needed'
      ]
    },
    {
      id: 8,
      title: 'Mid-treatment Assessment',
      date: '2025-09-15',
      status: 'upcoming',
      description: 'Comprehensive evaluation of treatment response',
      nextSteps: [
        'CT scan chest/abdomen/pelvis',
        'Tumor marker levels',
        'Toxicity assessment',
        'Quality of life evaluation'
      ]
    },
    {
      id: 9,
      title: 'Chemotherapy - Cycles 3-4',
      date: '2025-10-01',
      status: 'upcoming',
      description: 'Continuation of adjuvant chemotherapy based on assessment'
    },
    {
      id: 10,
      title: 'Treatment Completion & Follow-up Planning',
      date: '2025-11-15',
      status: 'upcoming',
      description: 'End of treatment assessment and surveillance planning',
      nextSteps: [
        'End-of-treatment imaging',
        'Survivorship care plan',
        'Follow-up schedule established'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'scheduled':
        return 'bg-orange-500';
      case 'upcoming':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-orange-100 text-orange-800">Scheduled</Badge>;
      case 'upcoming':
        return <Badge variant="outline">Upcoming</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Treatment Timeline
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your complete treatment journey from diagnosis through recovery. 
            Each milestone includes detailed information and next steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(event.status)} relative z-10 mt-2`} />
                  
                  {/* Content */}
                  <Card className="flex-1 medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        {getStatusBadge(event.status)}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{event.description}</p>
                      
                      {event.details && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Details:</h4>
                          <ul className="space-y-1">
                            {event.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {event.nextSteps && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-blue-600">Next Steps:</h4>
                          <ul className="space-y-1">
                            {event.nextSteps.map((step, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Circle className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {event.documents && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Documents:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.documents.map((doc, i) => (
                              <Button key={i} variant="outline" size="sm">
                                <FileText className="h-3 w-3 mr-1" />
                                {doc}
                                <Download className="h-3 w-3 ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Treatment Progress Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">1</div>
                <div className="text-sm text-muted-foreground">Scheduled</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-600">3</div>
                <div className="text-sm text-muted-foreground">Upcoming</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-semibold">Overall Progress: 60% Complete</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TreatmentTimeline;