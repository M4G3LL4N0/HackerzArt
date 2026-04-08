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
                <span className="text-gradient bg-clip-text text-transparent">
                  Turn signal
                </span>
                <br />
                <span className="text-white relative before:absolute before:-left-1 before:-right-1 before:bottom-0 before:h-1 before:bg-hackerzart-secondary before:opacity-30 before:rounded-full">
                  into identity.
                </span>
              </h1>
              <p className="text-xl text-hackerzart-muted">
                The premium engine for machine-rendered monochrome systems.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Button className="animate-pulse hover:shadow-glow relative overflow-hidden">
                    <span className="relative z-10">Start Creating</span>
                    <div className="absolute inset-0 bg-hackerzart-accent/10 animate-hover-glow pointer-events-none" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="hover:shadow-glow-secondary relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Gallery</span>
                    <div className="absolute inset-0 bg-hackerzart-secondary/10 animate-hover-glow pointer-events-none" />
                  </Button>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Enter command..." 
                    className="terminal-input w-full bg-transparent border-b border-hackerzart-border/50 py-2 pl-2 pr-8 font-mono text-xs tracking-tight focus:border-hackerzart-secondary focus:ring-0 transition-colors placeholder:text-hackerzart-muted/50"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-hackerzart-secondary animate-caret-blink group-hover:text-hackerzart-accent transition-colors">_</span>
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-hackerzart-secondary transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 h-px w-full opacity-10 bg-hackerzart-secondary" />
                </div>
              </div>
            </div>
            <div className="relative animate-float hover:animate-none hover:scale-[1.02] transition-transform will-change-transform" style={{animationDelay: '1s', animationDuration: '8s'}}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 relative before:absolute before:-left-6 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-hackerzart-secondary before:to-transparent">
              {[
                { name: 'Hacker', slug: 'hacker', desc: 'Cyberpunk signal processing' },
                { name: 'Keygen', slug: 'keygen', desc: 'Digital authenticity markers' },
                { name: 'Gothic', slug: 'gothic', desc: 'Ornate architectural forms' },
                { name: 'Baroque', slug: 'baroque', desc: 'Classical decorative systems' },
                { name: 'Terminal', slug: 'terminal', desc: 'Minimal machine interface' },
              ].map((style) => (
                <div 
                  key={style.slug}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-hackerzart-border/20 bg-hackerzart-surface/50 p-6 transition-all hover:border-hackerzart-accent/50 hover:shadow-glow hover:shadow-hackerzart-accent/20 style-card-hover animate-pulse"
                  style={{
                    animationDuration: `${Math.random() * 2 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b from-hackerzart-styles-${style.slug}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-hackerzart-styles-${style.slug}/5 animate-hover-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-hackerzart-styles-${style.slug}`} />
                      <span className="font-mono text-xs uppercase tracking-widest text-hackerzart-muted">
                        {style.slug}
                      </span>
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
