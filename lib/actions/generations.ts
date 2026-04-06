import { createClient } from '@/lib/supabase/client'
import { Generation } from '@/lib/types'

export async function createGeneration(prompt: string, styleSlug: string) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    throw new Error('Unauthorized')
  }

  const { data: generation, error } = await supabase
    .from('hackerzart.generations')
    .insert({
      user_id: session.user.id,
      prompt,
      style_slug: styleSlug,
      status: 'pending'
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return generation
}

export async function getRecentGenerations(userId: string): Promise<Generation[]> {
  const supabase = createClient()
  
  const { data: generations, error } = await supabase
    .from('hackerzart.generations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    throw error
  }

  return generations
}
