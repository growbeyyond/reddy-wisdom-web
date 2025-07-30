import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our medical services
            </p>
          </div>

          <div className="space-y-8">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">1. Medical Services Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By booking an appointment or using our medical services, you agree to these terms of service. 
                  Our practice is committed to providing high-quality healthcare in accordance with medical standards and regulations.
                </p>
                <p className="text-muted-foreground">
                  All medical services are provided by licensed healthcare professionals in compliance with 
                  applicable laws and medical board regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">2. Patient Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Patients are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Providing accurate and complete medical history information</li>
                  <li>Following prescribed treatment plans and medication instructions</li>
                  <li>Attending scheduled appointments or providing 24-hour notice for cancellations</li>
                  <li>Paying for services in accordance with our billing policies</li>
                  <li>Treating staff and other patients with respect and courtesy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">3. Privacy and Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to protecting your health information in accordance with HIPAA regulations. 
                  Your medical records and personal health information will be kept confidential and only 
                  shared with authorized individuals involved in your care.
                </p>
                <p className="text-muted-foreground">
                  Please refer to our Privacy Policy for detailed information about how we collect, 
                  use, and protect your personal and medical information.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">4. Appointment and Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Appointments must be cancelled at least 24 hours in advance. Late cancellations or 
                  no-shows may result in a cancellation fee. Emergency situations will be handled on 
                  a case-by-case basis.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to reschedule appointments due to medical emergencies or 
                  unforeseen circumstances, with appropriate notice provided to patients.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our practice maintains appropriate medical malpractice insurance. The information 
                  provided on our website is for educational purposes only and does not constitute 
                  medical advice. Always consult with a qualified healthcare provider for medical concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">6. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about these terms of service, please contact our office 
                  during regular business hours or visit our contact page for more information.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;