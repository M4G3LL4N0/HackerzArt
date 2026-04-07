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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col px-6 py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <section className="grid gap-16 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                Turn signal into identity.
              </h1>
              <p className="text-xl text-hackerzart-muted">
                The premium engine for machine-rendered monochrome systems.
              </p>
              <div className="flex gap-4">
                <Button>Start Creating</Button>
                <Button variant="secondary">Explore Gallery</Button>
              </div>
            </div>
            <AsciiPanel code={sampleAsciiArt} />
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Style System</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {['Hacker', 'Keygen', 'Gothic', 'Baroque', 'Terminal'].map((style) => (
                <div 
                  key={style}
                  className="aspect-square rounded-xl border border-hackerzart-border bg-hackerzart-surface p-6 transition-all hover:border-hackerzart-accent/30 hover:shadow-glow"
                >
                  <h3 className="font-medium">{style}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
