import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, CheckCircle, User, Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import LoadingSpinner from '@/components/ui/loading-spinner';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const NewsletterSignup = ({ variant = 'full', className = '' }: NewsletterSignupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    try {
      // Check if email already exists
      const { data: existingSubscription } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .eq('email', data.email)
        .single();

      if (existingSubscription) {
        if (existingSubscription.status === 'active') {
          toast({
            title: 'Already Subscribed',
            description: 'This email is already subscribed to our newsletter.',
          });
          setIsSubscribed(true);
          return;
        } else {
          // Reactivate subscription
          const { error } = await supabase
            .from('newsletter_subscriptions')
            .update({ 
              status: 'active', 
              name: data.name || existingSubscription.name,
              unsubscribed_at: null 
            })
            .eq('email', data.email);

          if (error) throw error;
        }
      } else {
        // Create new subscription
        const { error } = await supabase
          .from('newsletter_subscriptions')
          .insert({
            email: data.email,
            name: data.name || null,
            status: 'active',
          });

        if (error) throw error;
      }

      setIsSubscribed(true);
      toast({
        title: 'Successfully Subscribed!',
        description: 'Thank you for subscribing to our newsletter. You\'ll receive updates about cancer care and health tips.',
      });

      form.reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: 'Subscription Failed',
        description: 'There was an error subscribing you to our newsletter. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Stay Informed
          </h3>
          <p className="text-sm text-muted-foreground">
            Get the latest cancer care updates and health tips
          </p>
        </div>

        {isSubscribed ? (
          <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
              Thank You for Subscribing!
            </h4>
            <p className="text-sm text-green-800 dark:text-green-300">
              You'll receive our newsletter with valuable health information and updates.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email address" 
                        type="email"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background to-secondary/30 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                Stay Connected
              </CardTitle>
              <CardDescription className="text-lg">
                Subscribe to our newsletter for the latest cancer care updates, health tips, and support resources
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isSubscribed ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Welcome to Our Community!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for subscribing to our newsletter. You'll receive valuable health information, 
                    treatment updates, and support resources directly to your inbox.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Monthly health tips and preventive care guidance</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Latest treatment options and medical advances</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Support resources for patients and families</span>
                    </div>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Name (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Subscribe to Newsletter
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. You can unsubscribe at any time. 
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;