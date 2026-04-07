import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-hackerzart-border bg-hackerzart-surface p-6',
        className
      )}
      {...props}
    />
  )
}
