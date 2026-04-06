import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean
  hoverable?: boolean
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ className, glow = false, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden border border-border/50 bg-background/70 backdrop-blur-sm',
          glow && 'bg-[radial-gradient(circle_at_center,_var(--panel-glow)_0%,_transparent_70%)]',
          hoverable && 'transition-all hover:border-foreground/20 hover:shadow-lg',
          className
        )}
        {...props}
      />
    )
  }
)

Panel.displayName = 'Panel'

export { Panel }
