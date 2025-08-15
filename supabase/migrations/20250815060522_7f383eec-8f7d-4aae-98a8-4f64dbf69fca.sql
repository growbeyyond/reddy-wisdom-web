-- Fix newsletter subscriptions security issue
-- Currently newsletter_subscriptions allows public SELECT access
-- This should be restricted to prevent email harvesting

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can view newsletter status" ON public.newsletter_subscriptions;

-- Add proper restricted SELECT policy
-- Users can only see their own subscription status
CREATE POLICY "Users can view own newsletter subscription" ON public.newsletter_subscriptions
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND 
    email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

-- Update the ALL policy to be more specific
DROP POLICY IF EXISTS "Users can manage own newsletter subscription" ON public.newsletter_subscriptions;

-- Replace with specific INSERT and UPDATE policies
CREATE POLICY "Users can create newsletter subscription" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update own newsletter subscription" ON public.newsletter_subscriptions
  FOR UPDATE USING (
    auth.uid() IS NOT NULL AND 
    email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
  );