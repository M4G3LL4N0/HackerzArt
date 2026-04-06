export function renderAscii({
  prompt = 'untitled signal',
  style = 'hacker',
  width = 80,
  density = 'medium',
  contrast = 'medium',
}: {
  prompt?: string
  style?: string
  width?: number
  density?: string
  contrast?: string
}) {
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
