export interface StylePreset {
  slug: string
  name: string
  description: string
  promptBias: string
}

export const DEFAULT_PRESET: StylePreset = {
  slug: 'hacker',
  name: 'Hacker',
  description: 'Classic underground hacker aesthetic with dense patterns and symmetrical motifs',
  promptBias: 'Focus on symmetrical patterns, dense textures, and underground hacker culture'
}

export async function getStylePresets(): Promise<StylePreset[]> {
  // This will be replaced with Supabase query
  return [
    DEFAULT_PRESET,
    {
      slug: 'keygen',
      name: 'Keygen',
      description: 'Inspired by 90s keygen animations with ornate borders and technical details',
      promptBias: 'Emphasize ornate borders, technical details, and retro keygen aesthetics'
    },
    {
      slug: 'gothic',
      name: 'Gothic',
      description: 'Dark gothic engravings with intricate details and dramatic contrast',
      promptBias: 'Create gothic-inspired engravings with intricate details and high contrast'
    },
    {
      slug: 'baroque',
      name: 'Baroque',
      description: 'Ornate baroque-style compositions with flowing curves and decorative elements',
      promptBias: 'Focus on baroque-style ornamentation with flowing curves and decorative motifs'
    },
    {
      slug: 'terminal',
      name: 'Terminal',
      description: 'Minimalist terminal-inspired designs with clean lines and technical precision',
      promptBias: 'Create clean, technical designs inspired by terminal interfaces'
    }
  ]
}
