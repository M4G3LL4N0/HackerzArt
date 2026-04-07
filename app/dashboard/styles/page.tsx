const stylePresets = [
  {
    name: 'Hacker',
    slug: 'hacker',
    description:
      'Aggressive terminal-born signal with dense monochrome contrast, coded framing, and sharp machine texture.',
  },
  {
    name: 'Keygen',
    slug: 'keygen',
    description:
      'A throwback to 90s and 2000s intro screens with ornamental linework, cracked-digital symmetry, and underground aura.',
  },
  {
    name: 'Gothic',
    slug: 'gothic',
    description:
      'Cathedral-weight composition with engraved drama, sacred symmetry, and dark decorative density.',
  },
  {
    name: 'Baroque',
    slug: 'baroque',
    description:
      'Luxurious monochrome ornament with elaborate framing, historical richness, and sculpted visual rhythm.',
  },
  {
    name: 'Terminal',
    slug: 'terminal',
    description:
      'Minimal but severe command-line atmosphere with brutal structure, clean spacing, and pure machine restraint.',
  },
]

export default function StylesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Styles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Style System
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white/65">
            Each preset is a visual language, not just a filter. Shape output
            tone, contrast, structure, and ornament with a distinct monochrome
            rendering philosophy.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stylePresets.map((preset) => (
            <article
              key={preset.slug}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                    Preset
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {preset.name}
                  </h2>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                  {preset.slug}
                </span>
              </div>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4">
                <pre className="text-[9px] leading-[1.2] text-white/75">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@ ${preset.name.toUpperCase()} SIGNAL @@@@@@
@@  structured monochrome output  @@
@@  rendered with preset logic    @@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
                </pre>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {preset.description}
              </p>

              <a
                href="/dashboard/generate"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 transition hover:bg-black/40"
              >
                Use {preset.name}
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
