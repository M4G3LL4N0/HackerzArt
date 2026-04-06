import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur-sm',
          hoverable && 'transition-all hover:border-foreground/30 hover:shadow-md',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }
