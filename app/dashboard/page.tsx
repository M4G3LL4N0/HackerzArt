import { createClient } from '@/lib/supabase/client'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return <div>Not authenticated</div>
  }

  const { data: generations } = await supabase
    .from('hackerzart.generations')
    .select('*')
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false })
    .limit(5)

  const { data: profile } = await supabase
    .from('hackerzart.profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  return (
    <div className="space-y-8 relative">
      <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
        A Noaerth Company
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden transition-all hover:translate-y-[-2px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--panel-glow)_0%,_transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="p-6">
            <h3 className="text-sm uppercase tracking-wider text-secondary mb-1">Total Generations</h3>
            <p className="text-3xl font-light">{generations?.length || 0}</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium">Username</h3>
          <p className="text-2xl font-bold">{profile?.username}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <p className="text-sm">
            Last generation: {generations?.[0]?.created_at}
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Recent Generations</h2>
        {generations?.map((generation) => (
          <Card key={generation.id}>
            <div className="space-y-2">
              <p className="text-sm">{generation.prompt}</p>
              <pre className="text-xs bg-muted p-2 rounded">
                {generation.output}
              </pre>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
