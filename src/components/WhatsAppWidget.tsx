import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, X, Phone, Calendar, User } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919155667758"; // Dr. Namratha's WhatsApp number
  
  const quickMessages = [
    {
      text: "Hi Dr. Namratha, I would like to book an appointment for cancer consultation.",
      icon: Calendar,
      label: "Book Appointment"
    },
    {
      text: "Hello, I need a second opinion for my cancer diagnosis. Can you help?",
      icon: User,
      label: "Second Opinion"
    },
    {
      text: "I'm experiencing side effects from my current treatment. Need guidance.",
      icon: Phone,
      label: "Treatment Support"
    },
    {
      text: "I have questions about cancer prevention and screening. Please advise.",
      icon: MessageSquare,
      label: "General Inquiry"
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Window */}
          {isOpen && (
            <Card className="absolute bottom-16 right-0 w-80 medical-card animate-scale-in shadow-2xl">
              <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Dr. Namratha</h3>
                    <p className="text-xs text-white/80">Oncologist • Usually replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div className="text-sm text-muted-foreground mb-4">
                  👋 Hi! I'm Dr. Namratha. How can I help you today?
                </div>
                
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => sendWhatsAppMessage(msg.text)}
                    className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <msg.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-foreground">{msg.label}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{msg.text}</div>
                      </div>
                    </div>
                  </button>
                ))}
                
                <div className="pt-2 border-t border-border">
                  <Button
                    onClick={() => sendWhatsAppMessage("Hello Dr. Namratha, I have a question about cancer care.")}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Custom Chat
                  </Button>
                </div>
                
                <div className="text-xs text-center text-muted-foreground pt-2">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available 24/7 for emergencies
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Main WhatsApp Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 relative"
            size="icon"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <>
                <MessageSquare className="h-6 w-6" />
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;