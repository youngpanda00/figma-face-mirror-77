
-- Check all demo requests in the database again after fixing RLS policies
SELECT * FROM public.demo_requests ORDER BY created_at DESC;
