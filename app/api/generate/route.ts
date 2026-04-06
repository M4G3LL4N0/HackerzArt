import { NextResponse } from 'next/server'
import { renderAsciiArt } from '@/lib/ascii/renderer'
import { StylePreset } from '@/lib/ascii/presets'
import { createClient } from '@/lib/supabase/client'

export interface GenerateRequest {
  prompt: string
  style: StylePreset
  width?: number
  density?: string
  contrast?: string
  sourceImage?: string
}

export async function POST(request: Request) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body: GenerateRequest = await request.json()
  
  if (!body.prompt || !body.style) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const asciiOutput = renderAsciiArt({
      prompt: body.prompt,
      preset: body.style,
      width: body.width,
      density: body.density,
      contrast: body.contrast,
      sourceImage: body.sourceImage
    })

    // Save generation to database
    const { data: generation, error } = await supabase
      .from('hackerzart.generations')
      .insert({
        user_id: session.user.id,
        prompt: body.prompt,
        style_slug: body.style.slug,
        ascii_output: asciiOutput,
        width: body.width,
        density: body.density,
        contrast: body.contrast,
        status: 'completed'
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({
      id: generation.id,
      output: asciiOutput,
      createdAt: generation.created_at
    })
    
  } catch (error) {
    return NextResponse.json({ 
      error: 'Generation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
