import { createClient } from './client'
import { createServer } from './server'

export async function getProfile(userId: string) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.profiles')
    .select('*')
    .eq('id', userId)
    .single()
}

export async function createProfile(userId: string, username: string) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.profiles')
    .insert({
      id: userId,
      username,
    })
}

export async function getStylePresets() {
  const supabase = createClient()
  return supabase
    .from('hackerzart.style_presets')
    .select('*')
}

export async function createGeneration(
  userId: string,
  prompt: string,
  stylePresetId: number,
  config: Record<string, any>,
  output: string
) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.generations')
    .insert({
      user_id: userId,
      prompt,
      style_preset_id: stylePresetId,
      config,
      output,
    })
}

export async function getUserGenerations(userId: string) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.generations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
}

export async function getUserSettings(userId: string) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.user_settings')
    .select('*')
    .eq('user_id', userId)
    .single()
}

export async function updateUserSettings(
  userId: string,
  settings: Record<string, any>
) {
  const supabase = createClient()
  return supabase
    .from('hackerzart.user_settings')
    .upsert({
      user_id: userId,
      ...settings,
    })
}
