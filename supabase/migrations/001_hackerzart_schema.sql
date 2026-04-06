-- Create hackerzart schema
CREATE SCHEMA hackerzart;

-- Enable Row Level Security
ALTER TABLE hackerzart.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.style_presets ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.user_settings ENABLE ROW LEVEL SECURITY;

-- Profiles table
CREATE TABLE hackerzart.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Generations table
CREATE TABLE hackerzart.generations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  prompt text NOT NULL,
  style_slug text NOT NULL,
  source_image_url text,
  ascii_output text NOT NULL,
  preview_image_url text,
  status text NOT NULL DEFAULT 'pending',
  width int NOT NULL,
  density text NOT NULL,
  contrast text NOT NULL,
  is_public boolean DEFAULT false NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Style presets table
CREATE TABLE hackerzart.style_presets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  prompt_bias text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- User settings table
CREATE TABLE hackerzart.user_settings (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  default_style_slug text REFERENCES hackerzart.style_presets(slug),
  theme text DEFAULT 'dark' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);
