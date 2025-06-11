
-- Query the demo_requests table to verify the data exists
SELECT 
  id,
  first_name,
  last_name,
  work_email,
  phone_number,
  user_licenses,
  role,
  created_at
FROM public.demo_requests 
WHERE id = '1e746b5d-3dfa-4b54-8d95-a5b95a7faf69'
ORDER BY created_at DESC;

-- Also check all records in the table
SELECT 
  id,
  first_name,
  last_name,
  work_email,
  phone_number,
  user_licenses,
  role,
  created_at
FROM public.demo_requests 
ORDER BY created_at DESC;
