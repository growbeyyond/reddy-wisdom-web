-- Fix Function Search Path Mutable warning
ALTER FUNCTION public.update_updated_at_column() 
SET search_path = '';

-- Fix the existing function to be properly secured
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;