import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface GenerationCardProps {
  id: string
  prompt: string
  output: string
  createdAt: string
}

export function GenerationCard({
  id,
  prompt,
  output,
  createdAt,
}: GenerationCardProps) {
  return (
    <Card className="hover:border-primary/20 transition-colors duration-300 group">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <time className="text-xs uppercase tracking-wide text-secondary">
              {new Date(createdAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <h3 className="text-base font-medium mt-1 line-clamp-2 leading-snug">
              {prompt || "Untitled generation"}
            </h3>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="sr-only">View details</span>
            →
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none opacity-80" />
          <pre className="text-xs bg-muted/50 p-4 rounded-md border border-border/50 whitespace-pre-wrap max-h-40 overflow-hidden">
            {output}
          </pre>
        </div>
      </div>
    </Card>
  )
}
