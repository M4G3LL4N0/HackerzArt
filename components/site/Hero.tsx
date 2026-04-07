export function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[800px] overflow-hidden bg-gradient-to-b from-hackerzart.DEFAULT via-hackerzart.surface/10 to-hackerzart.DEFAULT">
      {/* Ornamental border elements */}
      <div className="absolute left-0 top-0 h-full w-20 border-r border-hackerzart.border/10" />
      <div className="absolute right-0 top-0 h-full w-20 border-l border-hackerzart.border/10" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
            <span className="bg-gradient-to-r from-hackerzart.accent to-hackerzart.secondary bg-clip-text text-transparent">
              HackerzArt
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The premium creative engine for machine-rendered monochrome signal systems
          </p>
        </div>
        
        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-gradient-to-r from-hackerzart.accent to-hackerzart.secondary px-8 py-3 text-sm font-medium text-black transition hover:opacity-90">
            Start Creating
          </button>
          <button className="rounded-full border border-hackerzart.border/50 bg-surface/50 px-8 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-hackerzart.accent hover:bg-surface/70">
            Explore Gallery
          </button>
        </div>
      </div>

      {/* ASCII Art Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <pre className="text-[10px] leading-[0.8] text-muted">
          {`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
        </pre>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 z-0 bg-[url('/public/scanlines.svg')] opacity-10 mix-blend-overlay" />
      
      {/* Glow */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-hackerzart.accent/10 via-transparent to-transparent" />
    </section>
  )
}
