import { createClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase env vars not found - auth disabled')
    return response
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options) {
            response.cookies.set({ name, value, ...options })
          },
          remove(name: string, options) {
            response.cookies.set({ name, value: '', ...options })
          }
        }
      }
    )
    const { data: { session } } = await supabase.auth.getSession()

    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  } catch (error) {
    console.error('Middleware error:', error)
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*'],
  unstable_allowDynamic: ['/node_modules/@supabase/**'],
}
