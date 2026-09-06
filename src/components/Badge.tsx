import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  /** `solid` for category labels, `outline` for tech tags. */
  variant?: 'solid' | 'outline'
  className?: string
}

/** Small pill used for technology tags and category labels. */
export function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const styles =
    variant === 'solid'
      ? 'border-accent/80 bg-navy-950/95 font-semibold text-ink-100 shadow-md backdrop-blur-sm'
      : 'bg-navy-850 text-ink-400 border-border-subtle'

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs tracking-tight ${styles} ${className}`}
    >
      {children}
    </span>
  )
}
