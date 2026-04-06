export function formatAsciiTitle(title: string, width = 40): string {
  return title
    .toUpperCase()
    .slice(0, width)
    .padEnd(width, ' ')
}

export function formatAsciiMetadata(
  key: string,
  value: string,
  width = 20
): string {
  return `${key.toUpperCase().slice(0, 10).padEnd(10)} :: ${value
    .slice(0, width)
    .padEnd(width)}`
}
