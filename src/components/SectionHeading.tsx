import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** Two-digit index shown as a monospace eyebrow, e.g. "02". */
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/**
 * Consistent section header: a small code-style label, the heading, and an
 * optional lead paragraph.
 */
export function SectionHeading({
  index,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 flex items-center gap-2 font-mono text-xs text-accent">
        <span className="text-ink-500">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border-subtle" />
        <span className="uppercase tracking-[0.2em]">{title}</span>
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-400">{description}</p>
      )}
    </Reveal>
  )
}
