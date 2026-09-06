import type { ReactNode } from 'react'

interface SectionProps {
  /** Anchor id, used by the navbar links and scroll spy. */
  id: string
  children: ReactNode
  /** Accessible label for the landmark region. */
  ariaLabel: string
  /** Alternate background for visual rhythm between sections. */
  tone?: 'base' | 'raised'
  className?: string
}

/** Full-width page section with a centred content container. */
export function Section({
  id,
  children,
  ariaLabel,
  tone = 'base',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        tone === 'raised' ? 'bg-navy-950/40' : ''
      } ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
