import { NextRequest, NextResponse } from 'next/server'

type GeneratePayload = {
  prompt?: string
  style?: string
  width?: number
  density?: string
  contrast?: string
  sourceImageUrl?: string | null
}

function buildAsciiOutput({
  prompt = 'untitled signal',
  style = 'hacker',
  width = 120,
  density = 'high',
  contrast = 'dramatic',
}: Required<Pick<GeneratePayload, 'prompt' | 'style' | 'width' | 'density' | 'contrast'>>) {
  const normalizedPrompt = prompt.trim() || 'untitled signal'
  const promptLine = normalizedPrompt.slice(0, 42).padEnd(42, ' ')
  const styleLine = style.toUpperCase().slice(0, 12).padEnd(12, ' ')
  const densityLine = density.toUpperCase().slice(0, 10).padEnd(10, ' ')
  const contrastLine = contrast.toUpperCase().slice(0, 10).padEnd(10, ' ')
  const widthLine = String(width).padEnd(4, ' ')

  return `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@%#*+=-:.   H A C K E R Z A R T   .:-=+*#%@@@@
@@@@%+-        GENERATED MONOCHROME SIGNAL        -+%@
@@@#:   PROMPT   :: ${promptLine} :#@
@@@#:   STYLE    :: ${styleLine}                   :#@
@@@#:   DENSITY  :: ${densityLine}                 :#@
@@@#:   CONTRAST :: ${contrastLine}                 :#@
@@@#:   WIDTH    :: ${widthLine}                        :#@
@@@@%+-                                            -+%@
@@@@@@@%#*+=-:.                            .:-=+*#%@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GeneratePayload

    const prompt = body.prompt?.trim()
    const style = body.style?.trim() || 'hacker'
    const width = Number.isFinite(body.width) ? Number(body.width) : 120
    const density = body.density?.trim() || 'high'
    const contrast = body.contrast?.trim() || 'dramatic'
    const sourceImageUrl = body.sourceImageUrl ?? null

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required.' },
        { status: 400 }
      )
    }

    const ascii = buildAsciiOutput({
      prompt,
      style,
      width,
      density,
      contrast,
    })

    return NextResponse.json({
      success: true,
      generation: {
        id: `hz_${Date.now()}`,
        prompt,
        style,
        width,
        density,
        contrast,
        sourceImageUrl,
        status: 'complete',
        asciiOutput: ascii,
        createdAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to generate output.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'HackerzArt generate endpoint is live.',
  })
}
