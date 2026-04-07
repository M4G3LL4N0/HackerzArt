import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Turn signal into identity.
        </h1>
        <p className="text-hackerzart-muted">
          The premium engine for machine-rendered monochrome systems.
        </p>
        <div className="flex gap-4">
          <Button>Start Creating</Button>
          <Button variant="secondary">Explore Gallery</Button>
        </div>
      </Card>
    </main>
  )
}
