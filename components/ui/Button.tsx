import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hackerzart-accent/50',
        'disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' && 
          'bg-hackerzart-accent text-white hover:bg-hackerzart-accent/90',
        variant === 'secondary' &&
          'border border-hackerzart-border bg-hackerzart-surface text-white hover:bg-hackerzart-surface/80',
        variant === 'ghost' &&
          'text-hackerzart-muted hover:text-white hover:bg-hackerzart-surface/50',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    />
  )
}
