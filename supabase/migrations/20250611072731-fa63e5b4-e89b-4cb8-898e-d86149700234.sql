
-- Check if the table exists and has the correct structure
SELECT table_name, column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'demo_requests' 
ORDER BY ordinal_position;

-- Count total rows in the table
SELECT COUNT(*) as total_rows FROM public.demo_requests;

-- Check all data in the table (if any exists)
SELECT * FROM public.demo_requests;

-- Check RLS policies on the table
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'demo_requests';
