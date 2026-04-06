export default function InvestorsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Investors
          </h1>
          <p className="text-muted-foreground">
            HackerzArt is proud to be part of the Noaerth ecosystem, 
            bringing cutting-edge creative tools to the digital frontier.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">
              To redefine digital art through the fusion of hacker culture 
              and classical aesthetics, creating a new medium for creative 
              expression.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Why Now?</h2>
            <p className="text-muted-foreground">
              As part of Noaerth's portfolio, we're positioned at the 
              intersection of art and technology, leveraging our parent 
              company's resources to push creative boundaries.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Expansion Path</h2>
            <p className="text-muted-foreground">
              With Noaerth's support, we're building an ecosystem of 
              creative tools, APIs, and marketplaces that will empower 
              a new generation of digital artists.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
