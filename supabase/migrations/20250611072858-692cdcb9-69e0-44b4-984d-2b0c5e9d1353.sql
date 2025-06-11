
-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.demo_requests;
DROP POLICY IF EXISTS "Enable read access for service role" ON public.demo_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON public.demo_requests;

-- Create a policy that allows anonymous users to insert demo requests
CREATE POLICY "Allow anonymous demo request submissions" ON public.demo_requests
  FOR INSERT WITH CHECK (true);

-- Create a policy for service role to read all requests
CREATE POLICY "Service role can read all demo requests" ON public.demo_requests
  FOR SELECT USING (auth.role() = 'service_role');
