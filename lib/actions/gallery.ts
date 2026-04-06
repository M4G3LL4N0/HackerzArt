import { createClient } from '@/lib/supabase/client'
import { Generation } from '@/lib/types'

export async function getPublicGenerations(): Promise<Generation[]> {
  const supabase = createClient()
  
  const { data: generations, error } = await supabase
    .from('hackerzart.generations')
    .select('*')
    .eq('is_public', true)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    throw error
  }

  return generations
}
