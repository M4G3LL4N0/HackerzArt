const features = [
  {
    title: 'Prompt-to-signal generation',
    description:
      'Turn text prompts into monochrome compositions shaped by hacker, keygen, gothic, baroque, and terminal visual systems.',
  },
  {
    title: 'Image-to-ASCII direction',
    description:
      'Build toward structured source-image interpretation with future-ready rendering architecture and saved generation history.',
  },
  {
    title: 'Programmable identity output',
    description:
      'Create visuals for profiles, banners, covers, galleries, and creator-facing digital identity systems.',
  },
]

const styles = ['Hacker', 'Keygen', 'Gothic', 'Baroque', 'Terminal']

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-10 md:py-14">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm">
          <a href="/" className="text-sm font-medium tracking-[0.2em] text-white">
            HACKERZART
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <a href="/technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="/gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="/pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="/investors" className="transition hover:text-white">
              Investors
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden text-sm text-white/65 transition hover:text-white md:inline-flex"
            >
              Login
            </a>
            <a
              href="/signup"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start generating
            </a>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              A Noaerth company
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
                Turn images into signal.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/65">
                HackerzArt is the AI-native hacker aesthetic engine for
                machine-rendered monochrome artwork, prompt-driven ASCII
                compositions, and premium terminal-born visual identity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/dashboard/generate"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Generate artwork
              </a>
              <a
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition hover:bg-white/[0.06]"
              >
                View gallery
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {styles.map((style) => (
                <span
                  key={style}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/45"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                    Live signal preview
                  </p>
                  <h2 className="mt-2 text-lg font-medium">Monochrome engine</h2>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  Demo render
                </span>
              </div>

              <pre className="overflow-x-auto text-[10px] leading-[1.2] text-white/75">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%#*++==--::..   ..::--==++*#%@@@@@@@@@@
@@@@@@@@@@@@@@@@%*+=-:.                           .:-=+*%@@@@@
@@@@@@@@@@@@@#+-.        H A C K E R Z A R T           .-+#@@@@
@@@@@@@@@@#=.      machine-rendered monochrome signal     .=#@@
@@@@@@@@@*:     prompt / image / style driven output       :*@@
@@@@@@@@%-      gothic + keygen + terminal structures      -%@@
@@@@@@@@#:      baroque density with hacker-era energy      :#@@
@@@@@@@@@:      creator tooling for visual identity         :@@@
@@@@@@@@#:      future API / gallery / workspace layer      :#@@
@@@@@@@@%-                                                -%@@@@
@@@@@@@@@*:                                              :*@@@@@
@@@@@@@@@@#=.                                          .=#@@@@@@
@@@@@@@@@@@@@#+-.                                  .-+#@@@@@@@@@
@@@@@@@@@@@@@@@@%*+=-:.                      .:-=+*%@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%#*++==--::..  ..::--==++*#%@@@@@@@@@@@@@@`}
              </pre>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                Core capability
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              How it works
            </p>
            <div className="mt-5 grid gap-4">
              {[
                'Write a prompt or upload a source image',
                'Choose a visual system and rendering density',
                'Generate a monochrome signal artifact',
                'Save, refine, publish, or expand into identity assets',
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-sm text-white/75">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Company direction
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Aesthetic engine first. Platform next.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
              <p>
                HackerzArt starts as a premium generation tool and expands into
                a broader system for programmable visual identity, creator
                workflows, public galleries, and rendering infrastructure.
              </p>
              <p>
                The wedge is cultural distinction. The long-term opportunity is
                owning a category around AI-native aesthetic engines.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/pricing"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 transition hover:bg-black/40"
              >
                Explore pricing
              </a>
              <a
                href="/investors"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 transition hover:bg-black/40"
              >
                Read investor thesis
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
