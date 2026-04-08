const stats = [
  { 
    label: 'Generations', 
    value: '128', 
    detail: 'All-time signal renders',
    trend: '+42% this month' 
  },
  { 
    label: 'Public Pieces', 
    value: '19', 
    detail: 'In community gallery',
    highlight: '3 trending' 
  },
  { 
    label: 'Active Style', 
    value: 'Hacker', 
    detail: 'Your signature look',
    meta: 'Competitive edge' 
  },
  { 
    label: 'Efficiency', 
    value: '87%', 
    detail: 'Style mastery',
    progress: true 
  },
]

const recentGenerations = [
  {
    title: 'Black Cathedral Signal',
    style: 'Gothic',
    status: 'Complete',
    time: '14 min ago',
  },
  {
    title: 'Keygen Relic Frame',
    style: 'Keygen',
    status: 'Complete',
    time: '42 min ago',
  },
  {
    title: 'Terminal Portrait Study',
    style: 'Hacker',
    status: 'Rendering',
    time: '1 hr ago',
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Dashboard
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight">
                Your signal workspace
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-white/65">
                Generate monochrome compositions, manage output history, and
                shape a distinct terminal-born visual identity.
              </p>
            </div>

            <a
              href="/dashboard/generate"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Generate New Artwork
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                {stat.label}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {stat.value}
              </h2>
              <p className="mt-2 text-sm text-white/60">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Recent Activity
                </p>
                <h2 className="mt-2 text-lg font-medium">Latest generations</h2>
              </div>
              <a
                href="/dashboard/history"
                className="text-sm text-white/60 transition hover:text-white"
              >
                View history
              </a>
            </div>

            <div className="grid gap-4">
              {recentGenerations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                      {item.style}
                    </span>
                    <div className="relative">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        {item.status}
                      </span>
                      {item.status === 'Rendering' && (
                        <div className="absolute inset-0 rounded-full border border-white/10">
                          <div 
                            className="h-full rounded-full bg-hackerzart-secondary/20 animate-progress"
                            style={{
                              width: '50%',
                              animationDuration: '2s',
                              animationTimingFunction: 'linear',
                              animationIterationCount: 'infinite'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/45">{item.time}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Style Insights
              </p>
              <h2 className="mt-2 text-lg font-medium">Your Style Profile</h2>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Top Style</h3>
                  <span className="rounded-full bg-hackerzart-secondary/10 px-2 py-1 text-xs text-hackerzart-secondary">
                    Hacker
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div 
                    className="h-2 rounded-full bg-hackerzart-secondary" 
                    style={{ width: '87%' }}
                  />
                </div>
                <p className="mt-2 text-xs text-white/50">
                  87% of your generations use this style
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <h3 className="text-sm font-medium">Style Recommendations</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Try Keygen for authenticity</span>
                    <button className="rounded-full bg-hackerzart-accent/10 px-2 py-1 text-xs text-hackerzart-accent">
                      Explore
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Experiment with Gothic</span>
                    <button className="rounded-full bg-hackerzart-accent/10 px-2 py-1 text-xs text-hackerzart-accent">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              <a
                href="/dashboard/styles"
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75 transition hover:bg-black/40"
              >
                <span>View all style presets</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-hackerzart-secondary">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
