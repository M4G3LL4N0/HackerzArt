import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HackerzArt',
  description: 'The AI-native hacker aesthetic engine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
