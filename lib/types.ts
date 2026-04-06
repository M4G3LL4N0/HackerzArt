export interface UserProfile {
  id: string
  email: string
  created_at: string
}

export interface Generation {
  id: string
  user_id: string
  prompt: string
  style_slug: string
  source_image_url?: string
  ascii_output: string
  preview_image_url?: string
  status: string
  width?: number
  density?: string
  contrast?: string
  is_public: boolean
  created_at: string
}

export interface StylePreset {
  slug: string
  name: string
  description: string
  prompt_bias: string
}

export interface UserSettings {
  user_id: string
  default_style_slug?: string
  theme?: string
  created_at: string
  updated_at: string
}
