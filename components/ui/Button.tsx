import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg px-6 py-3 font-medium transition-all',
        variant === 'primary' && 
          'bg-hackerzart-accent text-white hover:bg-hackerzart-accent/90',
        variant === 'secondary' &&
          'border border-hackerzart-border bg-hackerzart-surface text-hackerzart-muted hover:bg-hackerzart-surface/80',
        className
      )}
      {...props}
    />
  )
}
