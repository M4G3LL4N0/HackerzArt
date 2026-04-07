export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-hackerzart.border/20 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-hackerzart.accent to-hackerzart.secondary bg-clip-text text-transparent">
              HackerzArt
            </span>
          </h1>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <div className="h-6 w-px bg-hackerzart.border/30" />
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <a href="/gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="/pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="/technology" className="transition hover:text-white">
              Technology
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="rounded-full border border-hackerzart.border bg-surface px-6 py-2 text-sm font-medium text-white transition hover:border-hackerzart.accent"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="rounded-full bg-hackerzart.accent px-6 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
