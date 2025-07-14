import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Video, 
  Upload, 
  Clock, 
  Pill, 
  Apple,
  FileText,
  User,
  Heart,
  Activity,
  Phone,
  Mail,
  Bell,
  Camera,
  Mic,
  MicOff,
  VideoOff,
  Share2,
  Download,
  Plus,
  CheckCircle,
  AlertCircle,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PatientPortal = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Appointment Booking State
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');

  // Video Call State
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // Document Upload State
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Medication Reminder State
  const [medications, setMedications] = useState([
    { id: 1, name: 'Tamoxifen', dosage: '20mg', frequency: 'Once daily', time: '08:00', taken: false },
    { id: 2, name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once daily', time: '08:00', taken: true },
    { id: 3, name: 'Ondansetron', dosage: '8mg', frequency: 'As needed', time: '12:00', taken: false }
  ]);

  // New Medication Form State
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: ''
  });

  // Screen Share State
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  // Nutrition Tracker State
  const [dailyNutrition, setDailyNutrition] = useState({
    calories: 1850,
    protein: 75,
    water: 6,
    targetCalories: 2000,
    targetProtein: 80,
    targetWater: 8
  });

  const appointmentTypes = [
    'Initial Consultation',
    'Follow-up Visit',
    'Treatment Discussion',
    'Second Opinion',
    'Lab Results Review',
    'Chemotherapy Session'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const treatmentMilestones = [
    { id: 1, title: 'Initial Diagnosis', date: '2024-06-15', status: 'completed', description: 'Comprehensive evaluation and staging' },
    { id: 2, title: 'Treatment Planning', date: '2024-06-22', status: 'completed', description: 'Multidisciplinary team consultation' },
    { id: 3, title: 'Surgery', date: '2024-07-05', status: 'completed', description: 'Successful tumor resection' },
    { id: 4, title: 'Chemotherapy Phase 1', date: '2024-07-20', status: 'in-progress', description: 'First cycle of adjuvant therapy' },
    { id: 5, title: 'Mid-treatment Assessment', date: '2024-09-15', status: 'upcoming', description: 'Imaging and blood work evaluation' },
    { id: 6, title: 'Chemotherapy Phase 2', date: '2024-10-01', status: 'upcoming', description: 'Second phase of treatment' }
  ];

  const handleAppointmentBooking = () => {
    if (!selectedDate || !selectedTime || !appointmentType) {
      toast({
        title: "Incomplete Information",
        description: "Please select date, time, and appointment type.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Requested",
      description: `Your ${appointmentType} appointment for ${selectedDate.toDateString()} at ${selectedTime} has been submitted for confirmation.`,
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
    toast({
      title: "Files Uploaded",
      description: `${files.length} file(s) uploaded successfully.`,
    });
  };

  const toggleMedication = (id: number) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  const startVideoCall = () => {
    setIsVideoCallActive(true);
    toast({
      title: "Video Call Started",
      description: "You are now connected to your healthcare provider.",
    });
  };

  const endVideoCall = () => {
    setIsVideoCallActive(false);
    setIsMuted(false);
    setIsVideoOff(false);
    setIsScreenSharing(false);
    toast({
      title: "Video Call Ended",
      description: "Thank you for using our telemedicine service.",
    });
  };

  const handleJoinOnline = () => {
    setActiveTab('telemedicine');
    toast({
      title: "Redirecting to Video Call",
      description: "Switching to video consultation tab...",
    });
  };

  const handleReschedule = () => {
    setActiveTab('appointments');
    toast({
      title: "Reschedule Appointment",
      description: "Please select a new date and time below.",
    });
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    toast({
      title: isScreenSharing ? "Screen Share Stopped" : "Screen Share Started",
      description: isScreenSharing ? "You are no longer sharing your screen." : "You are now sharing your screen.",
    });
  };

  const handleDownloadDocument = (docName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${docName}...`,
    });
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: `${docName} has been downloaded to your device.`,
      });
    }, 2000);
  };

  const addNewMedication = () => {
    if (!newMedication.name || !newMedication.dosage || !newMedication.frequency || !newMedication.time) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all medication details.",
        variant: "destructive"
      });
      return;
    }

    const newMed = {
      id: medications.length + 1,
      name: newMedication.name,
      dosage: newMedication.dosage,
      frequency: newMedication.frequency,
      time: newMedication.time,
      taken: false
    };

    setMedications(prev => [...prev, newMed]);
    setNewMedication({ name: '', dosage: '', frequency: '', time: '' });
    
    toast({
      title: "Medication Added",
      description: `${newMedication.name} has been added to your medication list.`,
    });
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications: 1 appointment reminder, 1 lab result, 1 medication refill needed.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground">Patient Portal</h1>
              <p className="text-muted-foreground mt-2">Your comprehensive healthcare management center</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Active Patient
              </Badge>
              <Button variant="outline" size="sm" onClick={handleNotifications}>
                <Bell className="h-4 w-4 mr-2" />
                Notifications (3)
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="telemedicine">Video Calls</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Next Appointment</p>
                      <p className="text-lg font-semibold">July 25, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Treatment Progress</p>
                      <p className="text-lg font-semibold">60% Complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Medications Today</p>
                      <p className="text-lg font-semibold">2 of 3 taken</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Overall Health</p>
                      <p className="text-lg font-semibold">Good</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Treatment Timeline Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Treatment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {treatmentMilestones.slice(0, 3).map((milestone) => (
                    <div key={milestone.id} className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{milestone.title}</p>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                      <Badge variant={
                        milestone.status === 'completed' ? 'default' :
                        milestone.status === 'in-progress' ? 'secondary' : 'outline'
                      }>
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book New Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Appointment Type</label>
                  <select 
                    className="w-full p-3 border rounded-lg"
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                  >
                    <option value="">Select appointment type</option>
                    {appointmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Available Time Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button onClick={handleAppointmentBooking} className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Follow-up Consultation</p>
                      <p className="text-sm text-muted-foreground">July 25, 2025 at 10:00 AM</p>
                      <p className="text-sm text-muted-foreground">Dr. Namratha Sai Reddy</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleJoinOnline}>
                        <Video className="h-4 w-4 mr-2" />
                        Join Online
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleReschedule}>Reschedule</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Telemedicine Tab */}
          <TabsContent value="telemedicine" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Video Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isVideoCallActive ? (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Video className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Ready for Video Consultation</h3>
                    <p className="text-muted-foreground">Click the button below to start your video call with Dr. Namratha</p>
                    <Button onClick={startVideoCall} size="lg">
                      <Video className="h-4 w-4 mr-2" />
                      Start Video Call
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative">
                      <div className="text-white text-center">
                        <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="opacity-75">Video Call in Progress</p>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <Button 
                          variant={isMuted ? "destructive" : "secondary"}
                          size="sm"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant={isVideoOff ? "destructive" : "secondary"}
                          size="sm"
                          onClick={() => setIsVideoOff(!isVideoOff)}
                        >
                          {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant={isScreenSharing ? "destructive" : "secondary"} 
                          size="sm"
                          onClick={toggleScreenShare}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={endVideoCall}>
                          End Call
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Medical Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Upload lab results, imaging reports, or other medical documents
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Uploaded Files:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDownloadDocument(file.name)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Blood Test Results - July 2025', date: '2025-07-10', type: 'Lab Report' },
                    { name: 'CT Scan Report - June 2025', date: '2025-06-28', type: 'Imaging' },
                    { name: 'Treatment Plan Update', date: '2025-06-25', type: 'Treatment' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.type} • {doc.date}</p>
                        </div>
                      </div>
                    <Button variant="ghost" size="sm" onClick={() => handleDownloadDocument(doc.name)}>
                      <Download className="h-4 w-4" />
                    </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medications Tab */}
          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full ${med.taken ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <div>
                          <p className="font-medium">{med.name}</p>
                          <p className="text-sm text-muted-foreground">{med.dosage} • {med.frequency}</p>
                          <p className="text-sm text-muted-foreground">Take at {med.time}</p>
                        </div>
                      </div>
                      <Button
                        variant={med.taken ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleMedication(med.id)}
                      >
                        {med.taken ? 'Taken' : 'Mark Taken'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add Medication */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Medication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="p-3 border rounded-lg" 
                    placeholder="Medication name"
                    value={newMedication.name}
                    onChange={(e) => setNewMedication(prev => ({...prev, name: e.target.value}))}
                  />
                  <input 
                    className="p-3 border rounded-lg" 
                    placeholder="Dosage"
                    value={newMedication.dosage}
                    onChange={(e) => setNewMedication(prev => ({...prev, dosage: e.target.value}))}
                  />
                  <input 
                    className="p-3 border rounded-lg" 
                    placeholder="Frequency"
                    value={newMedication.frequency}
                    onChange={(e) => setNewMedication(prev => ({...prev, frequency: e.target.value}))}
                  />
                  <input 
                    className="p-3 border rounded-lg" 
                    placeholder="Time" 
                    type="time"
                    value={newMedication.time}
                    onChange={(e) => setNewMedication(prev => ({...prev, time: e.target.value}))}
                  />
                </div>
                <Button className="w-full mt-4" onClick={addNewMedication}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Daily Calories</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {dailyNutrition.calories}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    of {dailyNutrition.targetCalories} target
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(dailyNutrition.calories / dailyNutrition.targetCalories) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Protein Intake</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {dailyNutrition.protein}g
                  </div>
                  <div className="text-sm text-muted-foreground">
                    of {dailyNutrition.targetProtein}g target
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(dailyNutrition.protein / dailyNutrition.targetProtein) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Water Intake</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {dailyNutrition.water}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    of {dailyNutrition.targetWater} glasses
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(dailyNutrition.water / dailyNutrition.targetWater) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nutrition Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Cancer Treatment Nutrition Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Foods to Emphasize</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        High-protein foods (lean meats, fish, eggs, legumes)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Colorful fruits and vegetables
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Whole grains and complex carbohydrates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Healthy fats (avocado, nuts, olive oil)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Foods to Limit</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        Processed and red meats
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        Sugary drinks and excessive sweets
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        Alcohol consumption
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        High-sodium processed foods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientPortal;