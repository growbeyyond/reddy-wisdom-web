-- Fix OTP expiry security warning by setting recommended OTP expiry times
UPDATE auth.config SET 
  otp_expiry = 3600  -- 1 hour instead of default 24 hours
WHERE id = 'default';