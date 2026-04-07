const sampleGenerations = [
  {
    id: 'HZ-001',
    title: 'Ornate Terminal Crest',
    style: 'Gothic',
    status: 'Complete',
    createdAt: 'Today · 2:14 PM',
    prompt:
      'Create an ornate monochrome crest with engraved terminal symmetry and cathedral-like ASCII density.',
  },
  {
    id: 'HZ-002',
    title: 'Keygen Cathedral Frame',
    style: 'Keygen',
    status: 'Complete',
    createdAt: 'Today · 1:41 PM',
    prompt:
      'Generate a dramatic hacker intro frame with layered keygen-era ornament and sharp contrast.',
  },
  {
    id: 'HZ-003',
    title: 'Signal Portrait Draft',
    style: 'Hacker',
    status: 'Rendering',
    createdAt: 'Today · 12:58 PM',
    prompt:
      'Convert a portrait concept into aggressive monochrome terminal signal with coded framing.',
  },
]

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / History
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Generation History
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white/65">
            Review your recent outputs, track render states, and revisit saved
            signal compositions.
          </p>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Workspace Log
              </p>
              <h2 className="mt-2 text-lg font-medium">
                Recent monochrome generations
              </h2>
            </div>

            <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
              {sampleGenerations.length} entries
            </div>
          </div>

          <div className="grid gap-4">
            {sampleGenerations.map((generation) => (
              <article
                key={generation.id}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-medium">{generation.title}</h3>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        {generation.style}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        {generation.status}
                      </span>
                    </div>

                    <p className="max-w-3xl text-sm leading-7 text-white/65">
                      {generation.prompt}
                    </p>
                  </div>

                  <div className="text-sm text-white/45">
                    {generation.createdAt}
                  </div>
                </div>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4">
                  <pre className="text-[10px] leading-[1.2] text-white/75">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@%#*+=-:.   ${generation.id}   .:-=+*#%@@@@@@@
@@@@%+-      ${generation.style.toUpperCase()} RENDER       -+%@@@@
@@@#:   signal trace / monochrome output   :#@@@
@@@#:   prompt-indexed aesthetic artifact   :#@@@
@@@@%+-                                 -+%@@@@
@@@@@@@%#*+=-:.                 .:-=+*#%@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
                  </pre>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
