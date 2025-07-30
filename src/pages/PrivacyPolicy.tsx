import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we protect and handle your personal health information
            </p>
          </div>

          <div className="space-y-8">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">HIPAA Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our practice is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). 
                  We are committed to protecting the privacy and security of your protected health information (PHI).
                </p>
                <p className="text-muted-foreground">
                  This notice describes how medical information about you may be used and disclosed 
                  and how you can get access to this information.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Personal identification information (name, address, phone number, email)</li>
                  <li>Medical history and current health conditions</li>
                  <li>Insurance and billing information</li>
                  <li>Treatment records and test results</li>
                  <li>Emergency contact information</li>
                  <li>Website usage data for improving our services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Your health information may be used for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Treatment:</strong> Providing, coordinating, or managing your healthcare</li>
                  <li><strong>Payment:</strong> Billing and collecting payment for services</li>
                  <li><strong>Healthcare Operations:</strong> Quality improvement and staff training</li>
                  <li><strong>Required by Law:</strong> When disclosure is mandated by federal, state, or local law</li>
                  <li><strong>Public Health:</strong> Reporting as required for disease prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Information Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical, administrative, and physical safeguards to protect 
                  your health information against unauthorized access, use, or disclosure.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Encrypted data transmission and storage</li>
                  <li>Secure access controls and user authentication</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on privacy and security practices</li>
                  <li>Physical security measures for paper records</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Request access to your medical records</li>
                  <li>Request amendments to your health information</li>
                  <li>Request restrictions on use or disclosure of your information</li>
                  <li>Request confidential communications</li>
                  <li>File a complaint about our privacy practices</li>
                  <li>Request an accounting of disclosures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Website Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our website may use cookies and similar technologies to improve user experience. 
                  We do not sell, trade, or share your personal information with third parties for 
                  marketing purposes without your consent.
                </p>
                <p className="text-muted-foreground">
                  Any forms submitted through our website are transmitted securely and handled 
                  in accordance with our privacy practices.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about this privacy policy or our privacy practices, 
                  please contact our Privacy Officer during regular business hours.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  This notice is effective as of: {new Date().toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;