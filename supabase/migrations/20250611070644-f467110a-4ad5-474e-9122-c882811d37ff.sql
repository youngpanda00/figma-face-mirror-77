
-- Create table for demo requests / agent registration applications
create table public.demo_requests (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  work_email text not null,
  phone_number text not null,
  user_licenses text not null,
  role text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.demo_requests enable row level security;

-- Create policy to allow anyone to insert demo requests
create policy "Anyone can insert demo requests" on public.demo_requests
  for insert with check (true);

-- Create policy to allow admins to view all demo requests (optional)
create policy "Service role can view all demo requests" on public.demo_requests
  for select using (auth.role() = 'service_role');
