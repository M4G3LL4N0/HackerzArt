import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { AsciiPanel } from '@/components/AsciiPanel'

const sampleAsciiArt = `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣶⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
  ⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀
  ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
  ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
  ⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀
  ⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-radial">
      <div className="absolute inset-0 bg-layer pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      <Header />
      <main className="flex flex-1 flex-col px-6 py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <section className="grid gap-16 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
                <span className="text-gradient animate-float">Turn signal</span>
                <br />
                <span className="text-white">into identity.</span>
              </h1>
              <p className="text-xl text-hackerzart-muted">
                The premium engine for machine-rendered monochrome systems.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Button className="animate-pulse">Start Creating</Button>
                  <Button variant="secondary">Explore Gallery</Button>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Enter command..." 
                    className="terminal-input w-full bg-transparent border-b border-hackerzart-border/50 py-2 pl-2 pr-8 font-mono text-sm focus:border-hackerzart-secondary focus:ring-0 transition-colors"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-hackerzart-secondary animate-caret-blink group-hover:text-hackerzart-accent transition-colors">_</span>
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-hackerzart-secondary transition-all duration-300" />
                </div>
              </div>
            </div>
            <div className="relative animate-float hover:animate-none hover:scale-[1.02] transition-transform" style={{animationDelay: '1s', animationDuration: '8s'}}>
              <AsciiPanel 
                code={sampleAsciiArt} 
                className="ascii-panel border-hackerzart-border/50 shadow-ascii-glow hover:shadow-ascii-glow/50 transition-all" 
              />
              <div className="absolute inset-0 bg-scanlines pointer-events-none" />
              <div className="absolute inset-0 bg-grid pointer-events-none" />
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </section>

          <section className="space-y-6">
            <div className="micro-border pb-6">
              <p className="micro-label">HackerzArt / Style System</p>
              <h2 className="text-3xl font-semibold tracking-tight mt-2">Style System</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {[
                { name: 'Hacker', slug: 'hacker', desc: 'Cyberpunk signal processing' },
                { name: 'Keygen', slug: 'keygen', desc: 'Digital authenticity markers' },
                { name: 'Gothic', slug: 'gothic', desc: 'Ornate architectural forms' },
                { name: 'Baroque', slug: 'baroque', desc: 'Classical decorative systems' },
                { name: 'Terminal', slug: 'terminal', desc: 'Minimal machine interface' },
              ].map((style) => (
                <div 
                  key={style.slug}
                  className={`group relative aspect-square overflow-hidden rounded-xl border border-hackerzart-border/20 bg-hackerzart-surface/50 p-6 transition-all hover:border-hackerzart-styles-${style.slug}/50 hover:shadow-glow hover:shadow-hackerzart-styles-${style.slug}/20 style-card-hover animate-pulse`}
                  style={{animationDuration: '3s'}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b from-hackerzart-styles-${style.slug}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex h-full flex-col justify-between">
                    <div className="font-mono text-xs uppercase tracking-widest text-hackerzart-muted">
                      {style.slug}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">{style.name}</h3>
                      <p className="text-sm text-hackerzart-muted">{style.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
