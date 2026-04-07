const pillars = [
  {
    title: 'Why now',
    body:
      'AI makes structured visual transformation dramatically more accessible, while retro-computing and hacker aesthetics are re-emerging as a premium cultural language.',
  },
  {
    title: 'Market wedge',
    body:
      'HackerzArt starts as a high-distinction ASCII and monochrome generation product for creators, developers, identity builders, and culture-native internet audiences.',
  },
  {
    title: 'Platform expansion',
    body:
      'The long-term business extends into API rendering, creator workflows, public galleries, programmable identity kits, brand assets, and aesthetic infrastructure.',
  },
]

const roadmap = [
  'Premium web generator and user workspace',
  'Public gallery and shareable generation pages',
  'Advanced image-to-ASCII rendering pipeline',
  'Developer API and batch rendering',
  'Identity-mode outputs for avatars, banners, and brand systems',
]

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Investors
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight">
              Building the AI-native hacker aesthetic engine.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-white/65">
              HackerzArt is a creative tooling company focused on transforming
              prompts and images into premium monochrome signal systems inspired
              by terminal art, keygens, engravings, and computational visual
              culture.
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              A Noaerth company
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative rounded-3xl border border-hackerzart.border/20 bg-gradient-to-b from-white/5 to-white/[0.01] p-6 backdrop-blur-sm transition-all hover:shadow-glow"
            >
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-hackerzart.secondary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                {pillar.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {pillar.body}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              Vision
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              From creative tool to aesthetic infrastructure
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
              <p>
                The initial wedge is a premium generation product that produces
                visually distinctive monochrome outputs for creators and
                culture-native users.
              </p>
              <p>
                The broader opportunity is to own a category around programmable
                visual identity systems: output formats, rendering APIs, creator
                tooling, galleries, and aesthetic engines for software and media
                products.
              </p>
              <p>
                HackerzArt is designed to look small only at launch. The product
                direction supports expansion into a much larger platform layer.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              Roadmap
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Execution path
            </h2>
            <div className="mt-5 grid gap-3">
              {roadmap.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Phase {index + 1}
                  </p>
                  <p className="mt-2 text-sm text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-white/40">
            Business model
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-medium">Subscriptions</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Free, Pro, and Studio tiers for creators and advanced users.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">API revenue</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Usage-based rendering access for apps, tools, and platforms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Platform expansion</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Identity kits, visual systems, enterprise creative tooling, and
                future marketplace layers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
