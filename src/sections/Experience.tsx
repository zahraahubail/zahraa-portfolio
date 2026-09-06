import { Badge } from '../components/Badge'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'
import { recommendations } from '../data/recommendations'

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Professional experience">
      <SectionHeading
        index="02"
        title="Experience"
        description="Where I've applied and grown my software engineering skills in practice."
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, i) => (
          <Reveal
            key={`${item.organization}-${item.period}`}
            delay={(i % 3) as 0 | 1 | 2}
            as="article"
            className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-white text-accent sm:h-20 sm:w-20">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className={`h-full w-full object-contain p-1 ${
                        item.organization.startsWith('Shura Council')
                          ? '-translate-x-[3%] translate-y-[6%] scale-[1.6]'
                          : ''
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Icon name="briefcase" size={20} />
                  )}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink-100">{item.role}</h3>
                  <p className="text-sm text-accent">{item.organization}</p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-ink-500">
                    <Icon name="mapPin" size={13} />
                    {item.location}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-md border border-border-subtle bg-navy-850 px-3 py-1.5 font-mono text-xs text-ink-400">
                {item.period}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-300">{item.summary}</p>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-sm text-ink-300">
                  <Icon
                    name="arrowRight"
                    size={15}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            {item.note && (
              <p className="mt-4 rounded-lg border border-border-subtle bg-navy-850 px-4 py-3 text-xs leading-relaxed text-ink-400">
                <span className="font-mono text-ink-500">note: </span>
                {item.note}
              </p>
            )}

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Recommendation letters — both from the Shura Council internship above */}
      <Reveal className="mt-10" as="div">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <Icon name="quote" size={15} />
          Recommendation letters
        </h3>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2">
          {recommendations.map((rec) => (
            <li key={rec.slug} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 shadow-card">
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-300">
                  &ldquo;{rec.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border-subtle pt-4">
                  <p className="text-sm font-semibold text-ink-100">{rec.name}</p>
                  <p className="mt-0.5 text-xs text-ink-400">
                    {rec.title}, {rec.organization}
                  </p>
                  <a
                    href={rec.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-soft focus-visible:outline-none"
                  >
                    Read the full letter (PDF)
                    <Icon name="external" size={14} />
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
