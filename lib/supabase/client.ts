import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

let browserClient: SupabaseClient | null = null

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.warn('Supabase URL or key not found - using mock client')
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null } }),
        signInWithPassword: () => Promise.resolve({ error: null }),
        signUp: () => Promise.resolve({ error: null }),
        signOut: () => Promise.resolve({ error: null }),
      },
    } as unknown as SupabaseClient
  }

  if (!browserClient) {
    browserClient = createBrowserClient(url, key)
  }

  return browserClient
}
