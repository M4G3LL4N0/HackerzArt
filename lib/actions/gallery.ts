import { Generation } from '@/lib/types'

export async function getPublicGallery(): Promise<Generation[]> {
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
