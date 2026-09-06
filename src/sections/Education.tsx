import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { SmartImage } from '../components/SmartImage'
import { education } from '../data/education'

export function Education() {
  return (
    <Section id="education" ariaLabel="Education">
      <SectionHeading
        index="05"
        title="Education"
        description="My academic background in programming and the sciences."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal
            key={item.institution}
            delay={(i % 2) as 0 | 1}
            as="article"
            className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 shadow-card"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-navy-850">
                {item.logo ? (
                  <SmartImage
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    fallbackSrc="/assets/logos/bahrain-polytechnic.svg"
                    className="h-full w-full object-contain p-1.5"
                  />
                ) : (
                  <Icon name="graduation" size={22} className="text-accent" />
                )}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-100">
                  {item.institution}
                </h3>
                <p className="text-sm text-ink-400">{item.program}</p>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs text-ink-500">{item.period}</p>

            {item.achievement && (
              <div className="mt-3 inline-flex w-max items-center gap-2 rounded-md border border-accent-strong/30 bg-accent-strong/10 px-3 py-1.5 text-sm font-medium text-accent-soft">
                <Icon name="award" size={15} />
                {item.achievement}
              </div>
            )}

            {item.details && (
              <p className="mt-4 text-sm leading-relaxed text-ink-400">{item.details}</p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
