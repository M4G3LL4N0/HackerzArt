const galleryItems = [
  {
    id: 'GH-001',
    title: 'Cathedral Signal',
    style: 'Gothic',
    description:
      'Dense engraved symmetry with ritual framing and dramatic monochrome weight.',
  },
  {
    id: 'GH-002',
    title: 'Keygen Relic',
    style: 'Keygen',
    description:
      'A cracked-digital intro composition with retro underground line energy.',
  },
  {
    id: 'GH-003',
    title: 'Terminal Crown',
    style: 'Terminal',
    description:
      'Minimal command-line severity shaped into a clean structural icon.',
  },
  {
    id: 'GH-004',
    title: 'Black Signal Frame',
    style: 'Hacker',
    description:
      'High-contrast machine texture built for aggressive identity visuals.',
  },
  {
    id: 'GH-005',
    title: 'Baroque Engine',
    style: 'Baroque',
    description:
      'Luxurious monochrome ornament translated into computational density.',
  },
  {
    id: 'GH-006',
    title: 'Monastery Render',
    style: 'Gothic',
    description:
      'Cathedral-inspired ASCII composition with carved visual hierarchy.',
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Gallery
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Public Signal Gallery
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-white/65">
            A curated index of machine-rendered monochrome compositions across
            hacker, keygen, gothic, baroque, and terminal visual systems.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-hackerzart.accent/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                    {item.id}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                  {item.style}
                </span>
              </div>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4 transition group-hover:border-hackerzart.accent/30">
                <pre className="text-[9px] leading-[1.2] text-white/75 font-mono">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@ ${item.style.toUpperCase()} OUTPUT @@@@@@
@@ ${item.id} :: ${item.title.padEnd(16, ' ').slice(0, 16)} @@
@@ monochrome signal artifact @@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
                </pre>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-white/35">
                  Public piece
                </span>
                <a
                  href="/signup"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Create your own
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
