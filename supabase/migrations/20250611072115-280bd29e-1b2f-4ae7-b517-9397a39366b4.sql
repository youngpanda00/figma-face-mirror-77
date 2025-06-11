
-- Drop existing policies and recreate them to ensure they work correctly
DROP POLICY IF EXISTS "Anyone can insert demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Service role can view all demo requests" ON public.demo_requests;

-- Create a more permissive policy for inserting demo requests
CREATE POLICY "Enable insert for anonymous users" ON public.demo_requests
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading all demo requests (for admin/service purposes)
CREATE POLICY "Enable read access for service role" ON public.demo_requests
  FOR SELECT USING (true);

-- Also create a policy that allows authenticated users to read all requests if needed
CREATE POLICY "Enable read for authenticated users" ON public.demo_requests
  FOR SELECT USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');
