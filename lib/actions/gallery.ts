import { Generation } from '@/lib/types'

interface GalleryItem {
  id: string
  user_id: string
  prompt: string
  style_slug: string
  source_image_url: string | null
  ascii_output: string
  preview_image_url: string | null
  status: 'completed'
  width: number
  density: string
  contrast: string
  is_public: boolean
  created_at: string
}

export async function getPublicGallery(): Promise<GalleryItem[]> {
  return [
    {
      id: 'GH-001',
      user_id: 'system',
      prompt: 'Cathedral Signal',
      style_slug: 'gothic',
      source_image_url: null,
      ascii_output: '',
      preview_image_url: null,
      status: 'completed',
      width: 120,
      density: 'high',
      contrast: 'high',
      is_public: true,
      created_at: new Date().toISOString(),
    },
  ]
}
