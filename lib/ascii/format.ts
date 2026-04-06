export function formatAsciiPreview(ascii: string, width: number = 80): string {
  const lines = ascii.split('\n')
  const formattedLines = lines.map(line => {
    if (line.length > width) {
      return line.slice(0, width)
    }
    return line.padEnd(width, ' ')
  })
  return formattedLines.join('\n')
}

export function generatePreviewImage(ascii: string): string {
  // This will be replaced with actual image generation
  return `data:image/svg+xml;base64,${Buffer.from(ascii).toString('base64')}`
}
