const pillars = [
  {
    title: 'Rendering core',
    description:
      'HackerzArt is structured around a rendering layer that translates prompts, settings, and future source-image inputs into monochrome signal output.',
  },
  {
    title: 'Style systems',
    description:
      'Each preset is treated as a visual language with its own density, contrast, framing, and tonal logic rather than a simple cosmetic filter.',
  },
  {
    title: 'Platform direction',
    description:
      'The architecture is designed to expand from a generation product into gallery infrastructure, identity tooling, and future rendering APIs.',
  },
]

const stack = [
  'Next.js App Router frontend',
  'Supabase auth and persistence layer',
  'Structured ASCII rendering utilities',
  'Preset-aware generation workflow',
  'Future-ready image-to-ASCII pipeline path',
]

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Technology
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Technology built for machine-rendered monochrome output
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-white/65">
            HackerzArt combines a premium frontend workspace, structured style
            systems, and a rendering architecture designed to evolve from ASCII
            generation into broader aesthetic infrastructure.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                Core system
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {pillar.description}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Prompt, preset, structure, output
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
              <p>
                The current product shell is designed around a clean generation
                path: define the composition, choose a rendering language,
                control width and density, then produce a monochrome artifact.
              </p>
              <p>
                Over time, this flow can support richer image parsing, more
                sophisticated ASCII translation, batch rendering, public share
                pages, and API access without replacing the core user
                experience.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4">
              <pre className="text-[10px] leading-[1.2] text-white/75">
{`INPUT  ->  PROMPT / IMAGE / STYLE / SETTINGS
   |     
   v
RENDERING LAYER
   |
   +--> preset logic
   +--> density logic
   +--> contrast logic
   +--> output formatting
   |
   v
MONOCHROME SIGNAL OUTPUT
   |
   +--> workspace history
   +--> gallery publishing
   +--> future API access`}
              </pre>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Foundation stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Product-ready from the start
            </h2>
            <div className="mt-5 grid gap-3">
              {stack.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Layer {index + 1}
                  </p>
                  <p className="mt-2 text-sm text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
