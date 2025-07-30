import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      id: "item-1",
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office during business hours, using our online booking system, or visiting our 'Book Appointment' page. We recommend booking in advance as appointments fill up quickly."
    },
    {
      id: "item-2", 
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or test results, and a list of questions you'd like to discuss with the doctor."
    },
    {
      id: "item-3",
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans. Please contact our office with your insurance information, and we'll verify your coverage and explain any out-of-pocket costs before your appointment."
    },
    {
      id: "item-4",
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in a cancellation fee. We understand emergencies happen and handle them on a case-by-case basis."
    },
    {
      id: "item-5",
      question: "How can I access my test results?",
      answer: "Test results are available through our secure patient portal. You'll receive an email notification when results are ready. You can also call our office to discuss results with our medical staff."
    },
    {
      id: "item-6",
      question: "Do you provide emergency care?",
      answer: "Our office provides urgent care during business hours. For after-hours emergencies, please call 911 or visit your nearest emergency room. Our answering service can help direct you to appropriate care."
    },
    {
      id: "item-7",
      question: "How do I refill my prescriptions?",
      answer: "Prescription refills can be requested through our patient portal, by calling our office, or by having your pharmacy contact us directly. Please allow 48 hours for processing non-urgent refill requests."
    },
    {
      id: "item-8",
      question: "What safety measures do you have in place?",
      answer: "We follow all recommended health and safety protocols, including regular sanitization, appropriate personal protective equipment, and screening procedures. Patient and staff safety is our top priority."
    },
    {
      id: "item-9",
      question: "Do you offer telemedicine appointments?",
      answer: "Yes, we offer telemedicine consultations for appropriate conditions. These virtual appointments can be convenient for follow-ups, medication reviews, and certain types of consultations. Contact us to see if your needs can be met via telemedicine."
    },
    {
      id: "item-10",
      question: "How do I get my medical records transferred?",
      answer: "To transfer medical records, please fill out our medical records release form (available at our office or online). We can send records to other healthcare providers or provide copies to you directly. Processing typically takes 3-5 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our medical practice and services
            </p>
          </div>

          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Common Patient Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-border/50">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="medical-card mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you can't find the answer you're looking for, don't hesitate to contact our office. 
                Our friendly staff is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="medical-button text-center">
                  Contact Us
                </a>
                <a href="/book-appointment" className="medical-button text-center">
                  Book Appointment
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;