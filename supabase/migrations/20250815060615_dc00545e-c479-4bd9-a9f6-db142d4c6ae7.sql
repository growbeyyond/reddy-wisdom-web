-- Fix newsletter subscription to work for unauthenticated users
-- The newsletter signup should be available to all users, not just authenticated ones
-- But we still need to prevent email harvesting

-- Drop the current restrictive policies
DROP POLICY IF EXISTS "Users can view own newsletter subscription" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Users can create newsletter subscription" ON public.newsletter_subscriptions;  
DROP POLICY IF EXISTS "Users can update own newsletter subscription" ON public.newsletter_subscriptions;

-- Allow public newsletter subscription (INSERT)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow users to update their own subscription status (for unsubscribe)
CREATE POLICY "Users can manage own newsletter subscription" ON public.newsletter_subscriptions
  FOR UPDATE USING (
    -- Allow if user is authenticated and email matches their profile
    (auth.uid() IS NOT NULL AND email = (SELECT email FROM public.profiles WHERE user_id = auth.uid()))
    OR
    -- Allow if this is an unsubscribe operation (status change to 'unsubscribed')
    (status = 'unsubscribed')
  );

-- Prevent reading of newsletter subscriptions to avoid email harvesting
-- Only system/admin should be able to read the subscriber list
CREATE POLICY "Newsletter subscriptions are private" ON public.newsletter_subscriptions
  FOR SELECT USING (false);

-- Add unique constraint to prevent duplicate email subscriptions
ALTER TABLE public.newsletter_subscriptions 
ADD CONSTRAINT unique_newsletter_email UNIQUE (email);

-- Add comment
COMMENT ON TABLE public.newsletter_subscriptions IS 'Newsletter subscriptions - INSERT allowed for all, SELECT restricted to prevent email harvesting';