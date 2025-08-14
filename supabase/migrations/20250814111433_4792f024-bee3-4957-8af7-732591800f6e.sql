-- CRITICAL SECURITY FIX: Remove public access and implement proper RLS policies

-- Drop all existing dangerous public policies
DROP POLICY IF EXISTS "Anyone can view appointment slots" ON public.appointments;
DROP POLICY IF EXISTS "Anyone can book appointments" ON public.appointments;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Anyone can update newsletter subscription" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Anyone can view newsletter status" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Anyone can upload documents" ON public.patient_documents;
DROP POLICY IF EXISTS "Patients can view their own documents" ON public.patient_documents;
DROP POLICY IF EXISTS "Anyone can create checklists" ON public.treatment_checklists;
DROP POLICY IF EXISTS "Anyone can update checklists" ON public.treatment_checklists;
DROP POLICY IF EXISTS "Patients can view their own checklists" ON public.treatment_checklists;

-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'patient',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get current user profile
CREATE OR REPLACE FUNCTION public.get_current_user_profile()
RETURNS public.profiles
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT * FROM public.profiles WHERE user_id = auth.uid();
$$;

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at trigger for profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- SECURE RLS POLICIES

-- Profiles: Users can only see and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Appointments: Users can only see their own appointments
CREATE POLICY "Users can view own appointments" ON public.appointments
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can book appointments" ON public.appointments
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Contact submissions: Only allow inserts for authenticated users
CREATE POLICY "Authenticated users can submit contact forms" ON public.contact_submissions
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Newsletter: Only allow user to manage their own subscription
CREATE POLICY "Users can manage own newsletter subscription" ON public.newsletter_subscriptions
  FOR ALL USING (
    auth.uid() IS NOT NULL AND 
    email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Patient documents: Users can only access their own documents
CREATE POLICY "Users can view own documents" ON public.patient_documents
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can upload own documents" ON public.patient_documents
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Treatment checklists: Users can only access their own checklists
CREATE POLICY "Users can view own checklists" ON public.treatment_checklists
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can manage own checklists" ON public.treatment_checklists
  FOR ALL USING (
    auth.uid() IS NOT NULL AND 
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );