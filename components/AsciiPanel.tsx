import { cn } from '@/lib/utils'

interface AsciiPanelProps {
  className?: string
  code: string
}

export function AsciiPanel({ className, code }: AsciiPanelProps) {
  return (
    <div className={cn(
      'relative rounded-xl border border-white/10 bg-black/60 p-6 backdrop-blur',
      'overflow-hidden font-mono text-xs leading-[1.1] tracking-tight',
      'before:absolute before:inset-0 before:bg-grid before:bg-[length:20px_20px]',
      'after:absolute after:inset-0 after:bg-glass after:pointer-events-none',
      className
    )}>
      <pre className="whitespace-pre-wrap overflow-auto max-h-[500px]">
        {code}
      </pre>
      <div className="absolute inset-0 glow border border-white/5 rounded-xl pointer-events-none" />
    </div>
  )
}
