import { NextResponse } from 'next/server'

const galleryItems = [
  {
    id: 'GH-001',
    title: 'Cathedral Signal',
    style: 'gothic',
    description:
      'Dense engraved symmetry with ritual framing and dramatic monochrome weight.',
    isPublic: true,
  },
  {
    id: 'GH-002',
    title: 'Keygen Relic',
    style: 'keygen',
    description:
      'A cracked-digital intro composition with retro underground line energy.',
    isPublic: true,
  },
  {
    id: 'GH-003',
    title: 'Terminal Crown',
    style: 'terminal',
    description:
      'Minimal command-line severity shaped into a clean structural icon.',
    isPublic: true,
  },
]

export async function GET() {
  return NextResponse.json({
    items: galleryItems,
    count: galleryItems.length,
  })
}
