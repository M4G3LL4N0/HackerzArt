export interface Generation {
  id: string
  user_id: string
  prompt: string
  style_slug: string
  source_image_url: string | null
  ascii_output: string
  preview_image_url: string | null
  status: 'pending' | 'processing' | 'completed' | 'failed'
  width: number
  density: 'low' | 'medium' | 'high'
  contrast: 'low' | 'medium' | 'high'
  is_public: boolean
  created_at: string
}

export interface StylePreset {
  id: string
  slug: string
  name: string
  description: string
  prompt_bias: string
  created_at: string
}

export interface UserSettings {
  user_id: string
  default_style_slug: string
  theme: 'dark' | 'light'
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  email: string
  created_at: string
}

export interface GenerationFormValues {
  prompt: string
  style_slug: string
  source_image_url?: string
  width: number
  density: 'low' | 'medium' | 'high'
  contrast: 'low' | 'medium' | 'high'
}
