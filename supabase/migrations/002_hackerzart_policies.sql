-- Enable Row Level Security
ALTER TABLE hackerzart.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.style_presets ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackerzart.user_settings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" 
ON hackerzart.profiles 
FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON hackerzart.profiles
FOR UPDATE
USING (auth.uid() = id);

-- Generations policies
CREATE POLICY "Users can create their own generations"
ON hackerzart.generations
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own generations"
ON hackerzart.generations
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own generations"
ON hackerzart.generations
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own generations"
ON hackerzart.generations
FOR DELETE
USING (auth.uid() = user_id);

CREATE POLICY "Public can view public gallery generations"
ON hackerzart.generations
FOR SELECT
USING (is_public = true);

-- Style presets policies
CREATE POLICY "All users can view style presets"
ON hackerzart.style_presets
FOR SELECT
USING (true);

-- User settings policies
CREATE POLICY "Users can view their own settings"
ON hackerzart.user_settings
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own settings"
ON hackerzart.user_settings
FOR UPDATE
USING (auth.uid() = user_id);
