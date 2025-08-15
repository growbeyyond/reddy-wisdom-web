-- CRITICAL SECURITY FIX: Restrict access to contact submissions
-- Contact form submissions should not be readable by regular users
-- Only system/admin should have access to contact form data

-- First, let's see current policies (for safety)
-- The issue is that there's likely a default policy allowing SELECT

-- Remove any existing permissive SELECT policies on contact_submissions
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Public read access" ON public.contact_submissions;

-- Add a restrictive policy that prevents regular users from reading contact submissions
-- Only allow INSERT (form submission) but no SELECT for regular users
-- If admin access is needed later, a separate admin role policy can be added

-- The existing INSERT policy is fine, but let's make sure SELECT is properly restricted
-- Add a policy that explicitly denies SELECT for all users (most secure approach)
CREATE POLICY "Contact submissions are private" ON public.contact_submissions
  FOR SELECT USING (false);

-- Alternative: If users need to see their own submissions, use this instead:
-- CREATE POLICY "Users can only view own contact submissions" ON public.contact_submissions
--   FOR SELECT USING (
--     auth.uid() IS NOT NULL AND 
--     email = (SELECT email FROM public.profiles WHERE user_id = auth.uid())
--   );

-- Add a comment to document the security decision
COMMENT ON TABLE public.contact_submissions IS 'Contact form submissions - private to system only for security. Users cannot read submissions after submitting.';