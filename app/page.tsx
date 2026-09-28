import Link from 'next/link'
import { Header } from '@/components/Header'
import { AsciiPanel } from '@/components/AsciiPanel'
import { renderAscii } from '@/lib/ascii/renderer'

const sampleAsciiArt = `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣶⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
  ⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀
  ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
  ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
  ⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀
  ⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

const styles = [
  { name: 'Hacker', slug: 'hacker', desc: 'Cyberpunk signal processing' },
  { name: 'Keygen', slug: 'keygen', desc: 'Digital authenticity markers' },
  { name: 'Gothic', slug: 'gothic', desc: 'Ornate architectural forms' },
  { name: 'Baroque', slug: 'baroque', desc: 'Classical decorative systems' },
  { name: 'Terminal', slug: 'terminal', desc: 'Minimal machine interface' },
]

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
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-hackerzart-secondary/80">
                ASCII identity studio
              </p>
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
                The engine for machine-rendered monochrome crests. You type a prompt,
                pick a style grammar, and keep the still. This is a studio — not a
                live user count.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/dashboard/generate"
                    className="inline-flex items-center justify-center rounded-lg bg-hackerzart-accent px-6 py-3 text-base font-medium text-white transition hover:bg-hackerzart-accent/90 hover:shadow-glow"
                  >
                    Generate First Signal
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center rounded-lg border border-hackerzart-border bg-hackerzart-surface px-6 py-3 text-base font-medium text-white transition hover:bg-hackerzart-surface/80 hover:shadow-glow-secondary"
                  >
                    Explore Gallery
                  </Link>
                </div>
                <p className="font-mono text-xs text-hackerzart-muted/80">
                  $ render --style keygen --keep-still · paid model APIs are not required to browse
                </p>
              </div>
            </div>
            <div className="relative" style={{animationDuration: '8s'}}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
              <AsciiPanel
                code={sampleAsciiArt}
                className="ascii-panel border-hackerzart-border/50 shadow-ascii-glow hover:shadow-ascii-glow/50 transition-all"
              />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-hackerzart-muted">
                Labeled sample crest
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="micro-border pb-6">
              <p className="micro-label">HackerzArt / Sample frames</p>
              <h2 className="text-3xl font-semibold tracking-tight mt-2">ASCII art preview</h2>
              <p className="mt-2 max-w-2xl text-sm text-hackerzart-muted">
                These panels are static renderer samples for two prompts. They are not
                a live feed of customer generations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative rounded-xl border border-hackerzart-border/20 p-6">
                <AsciiPanel
                  code={renderAscii({
                    prompt: 'Cyberpunk cityscape',
                    width: 60,
                    density: 'medium',
                    contrast: 'high'
                  })}
                  className="ascii-panel border-hackerzart-border/50 shadow-ascii-glow hover:shadow-ascii-glow/50 transition-all"
                />
                <p className="mt-3 text-xs text-hackerzart-muted">Prompt: Cyberpunk cityscape</p>
              </div>
              <div className="relative rounded-xl border border-hackerzart-border/20 p-6">
                <AsciiPanel
                  code={renderAscii({
                    prompt: 'Futuristic interface',
                    width: 60,
                    density: 'high',
                    contrast: 'medium'
                  })}
                  className="ascii-panel border-hackerzart-border/50 shadow-ascii-glow hover:shadow-ascii-glow/50 transition-all"
                />
                <p className="mt-3 text-xs text-hackerzart-muted">Prompt: Futuristic interface</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="micro-border pb-6">
              <p className="micro-label">HackerzArt / Style System</p>
              <h2 className="text-3xl font-semibold tracking-tight mt-2">Style System</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {styles.map((style) => (
                <div
                  key={style.slug}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-hackerzart-border/20 bg-hackerzart-surface/50 p-6 transition-all hover:border-hackerzart-accent/50 hover:shadow-glow"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-cyan-300" />
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
