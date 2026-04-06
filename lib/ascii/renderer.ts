import { StylePreset } from './presets'

export interface RenderOptions {
  prompt: string
  preset: StylePreset
  width?: number
  density?: string
  contrast?: string
  sourceImage?: string
}

export function renderAsciiArt(options: RenderOptions): string {
  const { prompt, preset, width = 80, density = 'medium', contrast = 'normal' } = options
  
  // Generate a deterministic hash from the input
  const hash = Array.from(prompt).reduce((acc, char) => 
    ((acc << 5) - acc) + char.charCodeAt(0), 0)
  
  // Create a base pattern based on the hash
  const pattern = Array.from({ length: width }, (_, i) => {
    const charCode = Math.abs(hash + i) % 94 + 33
    return String.fromCharCode(charCode)
  }).join('')

  // Apply preset-specific transformations
  let output = pattern
  switch (preset.slug) {
    case 'hacker':
      output = output.replace(/./g, (char) => 
        Math.random() > 0.5 ? char : '#$%&@'.charAt(Math.floor(Math.random() * 5)))
      break
    case 'keygen':
      output = `╔${'═'.repeat(width - 2)}╗\n` +
        `║${' '.repeat(width - 2)}║\n` +
        `║ ${pattern.slice(0, width - 4)} ║\n` +
        `║${' '.repeat(width - 2)}║\n` +
        `╚${'═'.repeat(width - 2)}╝`
      break
    case 'gothic':
      output = output.replace(/./g, (char) => 
        char === ' ' ? ' ' : '▓▒░'.charAt(Math.floor(Math.random() * 3)))
      break
    case 'baroque':
      output = output.replace(/./g, (char) => 
        char === ' ' ? ' ' : '╬╫╪'.charAt(Math.floor(Math.random() * 3)))
      break
    case 'terminal':
      output = output.replace(/./g, (char) => 
        char === ' ' ? ' ' : '█▄▀'.charAt(Math.floor(Math.random() * 3)))
      break
  }

  return output
}
