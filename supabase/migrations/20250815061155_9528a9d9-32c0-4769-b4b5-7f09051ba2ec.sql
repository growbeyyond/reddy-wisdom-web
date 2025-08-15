-- Fix remaining security warnings

-- 1. Remove redundant RLS policy on treatment_checklists
-- The ALL policy already covers SELECT, so the SELECT-only policy is redundant
DROP POLICY IF EXISTS "Users can view their own treatment checklists" ON public.treatment_checklists;