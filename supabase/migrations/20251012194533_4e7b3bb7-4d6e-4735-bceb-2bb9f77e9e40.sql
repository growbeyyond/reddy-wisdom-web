-- ============================================
-- CRITICAL SECURITY FIX: Role-Based Access Control
-- ============================================

-- 1. Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'patient');

-- 2. Create user_roles table with proper security
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Only admins can view roles (prevents role enumeration)
CREATE POLICY "Only admins can view user roles"
  ON public.user_roles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur
      WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
    )
  );

-- No one can modify roles through the API (database admin only)
-- This prevents privilege escalation attacks

-- 3. Migrate existing roles from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT user_id, role::public.app_role
FROM public.profiles
WHERE role IS NOT NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- 4. Remove role column from profiles (breaking change)
ALTER TABLE public.profiles DROP COLUMN role;

-- 5. Create security definer function for role checks
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- ============================================
-- FIX: Appointments Table Access Control
-- ============================================

-- Drop the existing SELECT policy that references profiles table
DROP POLICY IF EXISTS "Users can view their own appointments" ON public.appointments;

-- Add new SELECT policy for users to view their own appointments
CREATE POLICY "Users can view their own appointments"
  ON public.appointments FOR SELECT
  USING (
    auth.uid() IS NOT NULL AND 
    email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Admins and staff can view all appointments
CREATE POLICY "Admins and staff can view all appointments"
  ON public.appointments FOR SELECT
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins and staff can update appointments (e.g., change status)
CREATE POLICY "Admins and staff can update appointments"
  ON public.appointments FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins can delete appointments
CREATE POLICY "Admins can delete appointments"
  ON public.appointments FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- FIX: Newsletter Subscriptions Access Control
-- ============================================

-- Admins and staff can view newsletter subscriptions
CREATE POLICY "Admins and staff can view newsletter subscriptions"
  ON public.newsletter_subscriptions FOR SELECT
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins and staff can update subscriptions (e.g., change status)
CREATE POLICY "Admins and staff can update newsletter subscriptions"
  ON public.newsletter_subscriptions FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins can delete subscriptions
CREATE POLICY "Admins can delete newsletter subscriptions"
  ON public.newsletter_subscriptions FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- FIX: Contact Submissions Access Control
-- ============================================

-- Admins and staff can view contact submissions
CREATE POLICY "Admins and staff can view contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins and staff can update contact submissions (e.g., change status)
CREATE POLICY "Admins and staff can update contact submissions"
  ON public.contact_submissions FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins can delete contact submissions
CREATE POLICY "Admins can delete contact submissions"
  ON public.contact_submissions FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- BONUS: Patient Documents Admin Access
-- ============================================

-- Drop existing SELECT policy
DROP POLICY IF EXISTS "Users can view their own documents" ON public.patient_documents;

-- Recreate with proper user check
CREATE POLICY "Users can view their own documents"
  ON public.patient_documents FOR SELECT
  USING (
    auth.uid() IS NOT NULL AND
    patient_email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Admins and staff can view all patient documents
CREATE POLICY "Admins and staff can view all patient documents"
  ON public.patient_documents FOR SELECT
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins and staff can update patient documents
CREATE POLICY "Admins and staff can update patient documents"
  ON public.patient_documents FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Admins can delete patient documents
CREATE POLICY "Admins can delete patient documents"
  ON public.patient_documents FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));