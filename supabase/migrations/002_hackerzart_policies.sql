-- Profiles policies
create policy "Users can view their own profile"
on hackerzart.profiles
for select using (auth.uid() = id);

create policy "Users can update their own profile"
on hackerzart.profiles
for update using (auth.uid() = id);

-- Generations policies
create policy "Users can create their own generations"
on hackerzart.generations
for insert with check (auth.uid() = user_id);

create policy "Users can view their own generations"
on hackerzart.generations
for select using (auth.uid() = user_id);

create policy "Users can update their own generations"
on hackerzart.generations
for update using (auth.uid() = user_id);

create policy "Users can delete their own generations"
on hackerzart.generations
for delete using (auth.uid() = user_id);

create policy "Public can view public generations"
on hackerzart.generations
for select using (is_public = true);

-- Style presets policies
create policy "Authenticated users can view style presets"
on hackerzart.style_presets
for select using (auth.role() = 'authenticated');

-- User settings policies
create policy "Users can view their own settings"
on hackerzart.user_settings
for select using (auth.uid() = user_id);

create policy "Users can update their own settings"
on hackerzart.user_settings
for update using (auth.uid() = user_id);
