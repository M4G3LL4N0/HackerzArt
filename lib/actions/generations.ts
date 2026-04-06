import { Generation } from '@/lib/types'

export async function createGeneration(
  values: Partial<Generation>
): Promise<Generation> {
  return {
    id: `hz_${Date.now()}`,
    user_id: 'demo',
    prompt: values.prompt || 'untitled signal',
    style_slug: values.style_slug || 'hacker',
    source_image_url: values.source_image_url || null,
    ascii_output: '',
    preview_image_url: null,
    status: 'pending',
    width: values.width || 80,
    density: values.density || 'medium',
    contrast: values.contrast || 'medium',
    is_public: false,
    created_at: new Date().toISOString(),
  }
}
