import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, FileText, Clock, AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ChecklistItem {
  id: string;
  text: string;
  description?: string;
  completed: boolean;
  required: boolean;
}

interface TreatmentChecklistData {
  id: string;
  patient_email: string;
  checklist_type: string;
  checklist_data: ChecklistItem[];
  completed_items: string[];
  created_at: string;
  updated_at?: string;
}

const predefinedChecklists = {
  'pre-consultation': {
    title: 'Pre-Consultation Checklist',
    description: 'Items to complete before your first consultation',
    items: [
      {
        id: 'medical-history',
        text: 'Gather complete medical history',
        description: 'Include all previous diagnoses, surgeries, and treatments',
        required: true,
      },
      {
        id: 'current-medications',
        text: 'List current medications and supplements',
        description: 'Include dosages and frequency',
        required: true,
      },
      {
        id: 'insurance-cards',
        text: 'Bring insurance cards and ID',
        description: 'Primary and secondary insurance information',
        required: true,
      },
      {
        id: 'family-history',
        text: 'Prepare family medical history',
        description: 'Cancer history in immediate family members',
        required: false,
      },
      {
        id: 'questions-list',
        text: 'Write down questions for the doctor',
        description: 'Prepare questions about diagnosis and treatment options',
        required: false,
      },
      {
        id: 'support-person',
        text: 'Arrange for a support person',
        description: 'Consider bringing a family member or friend',
        required: false,
      },
    ],
  },
  'pre-treatment': {
    title: 'Pre-Treatment Checklist',
    description: 'Preparation steps before starting treatment',
    items: [
      {
        id: 'dental-checkup',
        text: 'Complete dental examination',
        description: 'Address any dental issues before treatment',
        required: true,
      },
      {
        id: 'baseline-tests',
        text: 'Complete baseline tests',
        description: 'Blood work, heart function, and other required tests',
        required: true,
      },
      {
        id: 'nutrition-consult',
        text: 'Meet with nutritionist',
        description: 'Discuss dietary needs during treatment',
        required: false,
      },
      {
        id: 'fertility-consult',
        text: 'Fertility consultation (if applicable)',
        description: 'Discuss fertility preservation options',
        required: false,
      },
      {
        id: 'port-placement',
        text: 'Port placement procedure',
        description: 'For patients receiving chemotherapy',
        required: false,
      },
      {
        id: 'treatment-calendar',
        text: 'Review treatment schedule',
        description: 'Understand timeline and appointment schedule',
        required: true,
      },
    ],
  },
  'post-treatment': {
    title: 'Post-Treatment Checklist',
    description: 'Follow-up care and monitoring',
    items: [
      {
        id: 'follow-up-scheduled',
        text: 'Schedule follow-up appointments',
        description: 'Regular monitoring and surveillance visits',
        required: true,
      },
      {
        id: 'survivorship-plan',
        text: 'Receive survivorship care plan',
        description: 'Long-term care and monitoring guidelines',
        required: true,
      },
      {
        id: 'support-groups',
        text: 'Connect with support groups',
        description: 'Cancer survivor support networks',
        required: false,
      },
      {
        id: 'lifestyle-changes',
        text: 'Implement lifestyle changes',
        description: 'Diet, exercise, and wellness recommendations',
        required: false,
      },
      {
        id: 'symptom-monitoring',
        text: 'Learn symptom monitoring',
        description: 'Recognize signs that require medical attention',
        required: true,
      },
    ],
  },
};

const TreatmentChecklist = () => {
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState('pre-consultation');
  const [checklists, setChecklists] = useState<TreatmentChecklistData[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createChecklist = async () => {
    if (!email) {
      toast({
        title: 'Email Required',
        description: 'Please enter your email address',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const checklistTemplate = predefinedChecklists[selectedType as keyof typeof predefinedChecklists];
      const checklistItems = checklistTemplate.items.map(item => ({
        ...item,
        completed: false,
      }));

      const { data, error } = await supabase
        .from('treatment_checklists')
        .insert({
          patient_email: email,
          checklist_type: selectedType,
          checklist_data: checklistItems,
          completed_items: [],
        })
        .select()
        .single();

      if (error) throw error;

      setChecklists(prev => [...prev, {
        ...data,
        checklist_data: data.checklist_data as unknown as ChecklistItem[],
        completed_items: data.completed_items as unknown as string[]
      } as TreatmentChecklistData]);
      
      toast({
        title: 'Checklist Created',
        description: 'Your treatment checklist has been created successfully',
      });

    } catch (error) {
      console.error('Error creating checklist:', error);
      toast({
        title: 'Creation Failed',
        description: 'There was an error creating your checklist',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleChecklistItem = async (checklistId: string, itemId: string) => {
    try {
      const checklist = checklists.find(c => c.id === checklistId);
      if (!checklist) return;

      const completedItems = checklist.completed_items.includes(itemId)
        ? checklist.completed_items.filter(id => id !== itemId)
        : [...checklist.completed_items, itemId];

      const { error } = await supabase
        .from('treatment_checklists')
        .update({ completed_items: completedItems })
        .eq('id', checklistId);

      if (error) throw error;

      setChecklists(prev => prev.map(c => 
        c.id === checklistId 
          ? { ...c, completed_items: completedItems }
          : c
      ));

    } catch (error) {
      console.error('Error updating checklist:', error);
      toast({
        title: 'Update Failed',
        description: 'There was an error updating your checklist',
        variant: 'destructive',
      });
    }
  };

  const getCompletionPercentage = (checklist: TreatmentChecklistData) => {
    const totalItems = checklist.checklist_data.length;
    const completedItems = checklist.completed_items.length;
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const loadChecklists = async () => {
    if (!email) return;

    try {
      const { data, error } = await supabase
        .from('treatment_checklists')
        .select('*')
        .eq('patient_email', email)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setChecklists((data || []).map(item => ({
        ...item,
        checklist_data: item.checklist_data as unknown as ChecklistItem[],
        completed_items: item.completed_items as unknown as string[]
      })) as TreatmentChecklistData[]);
    } catch (error) {
      console.error('Error loading checklists:', error);
    }
  };

  useEffect(() => {
    if (email) {
      loadChecklists();
    }
  }, [email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                Treatment Checklists
              </CardTitle>
              <CardDescription className="text-lg">
                Organize and track your cancer treatment journey
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Checklist Type</Label>
                  <Tabs value={selectedType} onValueChange={setSelectedType}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="pre-consultation">Pre-Consult</TabsTrigger>
                      <TabsTrigger value="pre-treatment">Pre-Treatment</TabsTrigger>
                      <TabsTrigger value="post-treatment">Post-Treatment</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(predefinedChecklists).map(([key, checklist]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{checklist.title}</CardTitle>
                        <CardDescription>{checklist.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {checklist.items.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 p-3 border rounded-lg">
                              <div className="mt-0.5">
                                {item.required ? (
                                  <AlertCircle className="h-5 w-5 text-orange-500" />
                                ) : (
                                  <Circle className="h-5 w-5 text-muted-foreground" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">{item.text}</p>
                                  {item.required && (
                                    <Badge variant="secondary">Required</Badge>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </div>

              <Button
                onClick={createChecklist}
                disabled={!email || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Creating Checklist...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Create {predefinedChecklists[selectedType as keyof typeof predefinedChecklists].title}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {checklists.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Your Checklists</h2>
              
              {checklists.map((checklist) => {
                const template = predefinedChecklists[checklist.checklist_type as keyof typeof predefinedChecklists];
                const completionPercentage = getCompletionPercentage(checklist);
                
                return (
                  <Card key={checklist.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{template.title}</CardTitle>
                          <CardDescription>
                            Created on {new Date(checklist.created_at).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {completionPercentage}%
                          </div>
                          <div className="text-sm text-muted-foreground">Complete</div>
                        </div>
                      </div>
                      <Progress value={completionPercentage} className="mt-4" />
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        {checklist.checklist_data.map((item) => (
                          <div 
                            key={item.id} 
                            className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => toggleChecklistItem(checklist.id, item.id)}
                          >
                            <div className="mt-0.5">
                              {checklist.completed_items.includes(item.id) ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className={`font-medium ${
                                  checklist.completed_items.includes(item.id) 
                                    ? 'line-through text-muted-foreground' 
                                    : ''
                                }`}>
                                  {item.text}
                                </p>
                                {item.required && (
                                  <Badge variant="secondary">Required</Badge>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentChecklist;