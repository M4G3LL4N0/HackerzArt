export function Footer() {
  return (
    <footer className="border-t border-hackerzart.border/20 bg-surface/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-hackerzart.accent to-hackerzart.secondary bg-clip-text text-transparent">
              HackerzArt
            </span>
          </h2>
          <p className="text-xs text-muted">
            The premium creative engine for machine-rendered monochrome signal systems
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted md:items-end">
          <p className="text-xs uppercase tracking-[0.2em]">A Noaerth company</p>
          <div className="h-px w-16 bg-hackerzart.border/30" />
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
