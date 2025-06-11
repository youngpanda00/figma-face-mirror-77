
-- Check if demo_requests table exists and its structure
SELECT 
    table_schema,
    table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'demo_requests' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check the exact count of rows
SELECT COUNT(*) as row_count FROM public.demo_requests;

-- Try to see if there are any rows at all (bypassing potential RLS issues)
SET row_security = off;
SELECT COUNT(*) as total_count_no_rls FROM public.demo_requests;
SET row_security = on;

-- Check current RLS policies
SELECT 
    schemaname,
    tablename, 
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename = 'demo_requests';

-- Check if RLS is enabled on the table
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'demo_requests';
