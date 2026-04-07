const tiers = [
  {
    name: 'Free',
    price: '$0',
    description:
      'A clean way into the HackerzArt workspace for early exploration and public signal creation.',
    features: [
      'Limited generations per month',
      'Core style presets',
      'Basic preview output',
      'Public gallery browsing',
    ],
  },
  {
    name: 'Pro',
    price: '$19/mo',
    description:
      'For creators and builders who want more output, more control, and a deeper monochrome workflow.',
    features: [
      'Higher monthly generation limits',
      'Advanced density and contrast controls',
      'Saved history and workspace defaults',
      'Private output management',
    ],
  },
  {
    name: 'Studio',
    price: '$79/mo',
    description:
      'For advanced creative operators, teams, and future API users building with aesthetic infrastructure.',
    features: [
      'Priority rendering access',
      'Batch generation workflows',
      'API-ready positioning',
      'Future team and brand system features',
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Pricing
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Pricing for programmable monochrome output
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-white/65">
            Start free, scale into premium creative workflows, and grow into API
            and infrastructure-grade usage over time.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                  Tier
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {tier.name}
                </h2>
                <div className="text-2xl font-medium text-white/90">
                  {tier.price}
                </div>
                <p className="text-sm leading-7 text-white/65">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="/signup"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            Monetization logic
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-medium">Creator subscriptions</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Recurring revenue from artists, developers, and identity-focused
                users who want distinctive output.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Premium workflows</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Higher-value controls, saved generations, private workspaces, and
                future batch operations increase expansion revenue.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">API expansion</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                The long-term upside includes rendering infrastructure for other
                products, creative tools, and visual systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
