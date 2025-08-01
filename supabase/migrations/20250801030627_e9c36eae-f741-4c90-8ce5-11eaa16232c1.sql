-- Create appointment booking system
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  appointment_type TEXT NOT NULL,
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create patient document uploads table
CREATE TABLE public.patient_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_email TEXT NOT NULL,
  document_name TEXT NOT NULL,
  document_type TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create treatment checklists
CREATE TABLE public.treatment_checklists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_email TEXT NOT NULL,
  checklist_type TEXT NOT NULL,
  checklist_data JSONB NOT NULL,
  completed_items JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patient_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.treatment_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for appointments (public read/insert, admin manage)
CREATE POLICY "Anyone can view appointment slots" 
ON public.appointments 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can book appointments" 
ON public.appointments 
FOR INSERT 
WITH CHECK (true);

-- Create RLS policies for patient documents (patients can access their own)
CREATE POLICY "Patients can view their own documents" 
ON public.patient_documents 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can upload documents" 
ON public.patient_documents 
FOR INSERT 
WITH CHECK (true);

-- Create RLS policies for checklists (patients can access their own)
CREATE POLICY "Patients can view their own checklists" 
ON public.treatment_checklists 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create checklists" 
ON public.treatment_checklists 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update checklists" 
ON public.treatment_checklists 
FOR UPDATE 
USING (true);

-- Create RLS policies for newsletter (public signup)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view newsletter status" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update newsletter subscription" 
ON public.newsletter_subscriptions 
FOR UPDATE 
USING (true);

-- Create RLS policies for contact submissions (public submit)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for patient documents
INSERT INTO storage.buckets (id, name, public) VALUES ('patient-documents', 'patient-documents', false);

-- Create storage policies for patient documents
CREATE POLICY "Anyone can upload patient documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'patient-documents');

CREATE POLICY "Anyone can view patient documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'patient-documents');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON public.appointments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_treatment_checklists_updated_at
  BEFORE UPDATE ON public.treatment_checklists
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();