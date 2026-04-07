import Link from 'next/link'
import { Button } from './ui/Button'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-hackerzart-border/50 bg-hackerzart-surface/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono font-medium tracking-wider">HACKERZART</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/generate" className="text-sm font-medium text-hackerzart-muted transition-colors hover:text-white">
            Create
          </Link>
          <Link href="/styles" className="text-sm font-medium text-hackerzart-muted transition-colors hover:text-white">
            Styles
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-hackerzart-muted transition-colors hover:text-white">
            Gallery
          </Link>
          <Link href="/pricing">
            <Button size="sm" variant="secondary">
              Get Pro
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
