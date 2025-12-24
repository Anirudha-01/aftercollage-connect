-- Create app_role enum for admin system
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy: Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Create partner_submissions table
CREATE TABLE public.partner_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  user_role TEXT NOT NULL,
  organization_name TEXT,
  areas_of_interest TEXT[] NOT NULL,
  interested_domains TEXT[] NOT NULL,
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on partner_submissions
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

-- RLS: Anyone can insert (public form)
CREATE POLICY "Anyone can submit partner form"
ON public.partner_submissions
FOR INSERT
WITH CHECK (true);

-- RLS: Only admins can view
CREATE POLICY "Admins can view partner submissions"
ON public.partner_submissions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- RLS: Only admins can update status
CREATE POLICY "Admins can update partner submissions"
ON public.partner_submissions
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on contact_submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS: Anyone can insert
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- RLS: Only admins can view
CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- RLS: Only admins can update
CREATE POLICY "Admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Create early_access_submissions table
CREATE TABLE public.early_access_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  user_role TEXT NOT NULL,
  college_organization TEXT,
  city TEXT,
  reason TEXT,
  interested_features TEXT[] NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT true,
  tag TEXT NOT NULL DEFAULT 'early_access',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on early_access_submissions
ALTER TABLE public.early_access_submissions ENABLE ROW LEVEL SECURITY;

-- RLS: Anyone can insert
CREATE POLICY "Anyone can submit early access form"
ON public.early_access_submissions
FOR INSERT
WITH CHECK (true);

-- RLS: Only admins can view
CREATE POLICY "Admins can view early access submissions"
ON public.early_access_submissions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- RLS: Only admins can update
CREATE POLICY "Admins can update early access submissions"
ON public.early_access_submissions
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));