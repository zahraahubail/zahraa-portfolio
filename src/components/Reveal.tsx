import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  /** Element to render. Defaults to `div`. */
  as?: ElementType
  /** Stagger the entrance by a few steps (0–6). */
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const delays = ['', 'delay-[60ms]', 'delay-[120ms]', 'delay-[180ms]', 'delay-[240ms]', 'delay-[300ms]', 'delay-[360ms]']

/**
 * Wraps content in a scroll-triggered fade/rise animation. Purely decorative —
 * content is always in the DOM and readable without JavaScript.
 */
export function Reveal({ children, as, delay = 0, className = '' }: RevealProps) {
  const Tag = as ?? 'div'
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${delays[delay]} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
