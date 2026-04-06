-- Create hackerzart schema
create schema hackerzart;

-- Profiles table
create table hackerzart.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz default now()
);

-- Generations table
create table hackerzart.generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt text,
  style_slug text,
  source_image_url text,
  ascii_output text,
  preview_image_url text,
  status text,
  width int,
  density text,
  contrast text,
  is_public boolean default false,
  created_at timestamptz default now()
);

-- Style presets table
create table hackerzart.style_presets (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  name text,
  description text,
  prompt_bias text,
  created_at timestamptz default now()
);

-- User settings table
create table hackerzart.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  default_style_slug text,
  theme text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on all tables
alter table hackerzart.profiles enable row level security;
alter table hackerzart.generations enable row level security;
alter table hackerzart.style_presets enable row level security;
alter table hackerzart.user_settings enable row level security;
