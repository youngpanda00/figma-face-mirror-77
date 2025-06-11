
-- Disable RLS completely for demo_requests table since it's a public form
ALTER TABLE public.demo_requests DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow anonymous demo request submissions" ON public.demo_requests;
DROP POLICY IF EXISTS "Service role can read all demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.demo_requests;
DROP POLICY IF EXISTS "Enable read access for service role" ON public.demo_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON public.demo_requests;
