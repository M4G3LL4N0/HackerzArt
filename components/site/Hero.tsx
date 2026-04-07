export function Hero() {
  return (
    <section className="relative h-[800px] overflow-hidden bg-gradient-radial">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
            HackerzArt
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The premium creative engine for machine-rendered monochrome signal systems
          </p>
        </div>
        
        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-hackerzart.accent px-8 py-3 text-sm font-medium text-black transition hover:opacity-90">
            Start Creating
          </button>
          <button className="rounded-full border border-hackerzart.border bg-surface px-8 py-3 text-sm font-medium text-white transition hover:border-hackerzart.accent">
            Explore Gallery
          </button>
        </div>
      </div>

      {/* ASCII Art Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
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
    </section>
  )
}
