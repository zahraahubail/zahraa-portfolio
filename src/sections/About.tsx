import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'

const focusAreas = [
  'Full-stack web development',
  'Backend & API engineering',
  'Software design & architecture',
  'Data-driven applications',
]

const quickFacts = [
  { label: 'Location', value: site.location },
  { label: 'University', value: site.university },
  { label: 'Degree', value: site.degree },
  { label: 'Graduating', value: site.expectedGraduation },
]

export function About() {
  return (
    <Section id="about" ariaLabel="About Zahraa Hubail">
      <SectionHeading
        index="01"
        title="About"
        description="A short introduction to who I am and how I approach building software."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-ink-300">
          <p>
            I&apos;m a final-year programming student at {site.university}, working towards
            a {site.degree} with an expected graduation in {site.expectedGraduation}. My
            focus is on full-stack and backend software engineering, designing systems,
            building APIs, and turning requirements into reliable, maintainable code.
          </p>
          <p>
            I enjoy solving problems and thinking creatively about how systems can be
            structured and built. I like learning new technologies and understanding how
            the pieces fit together, from the database up to the interface.
          </p>
          <p>
            I&apos;m continuously developing my skills through academic projects, practical
            work, and internships, most recently a software engineering internship at the
            Shura Council, where I built internal tools and automated document workflows.
          </p>

          <ul className="!mt-6 flex flex-wrap gap-2">
            {site.languages.map((lang) => (
              <li
                key={lang}
                className="rounded-md border border-border-subtle bg-navy-850 px-3 py-1.5 font-mono text-xs text-ink-400"
              >
                {lang}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={1} className="space-y-6">
          <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-card">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Focus areas
            </p>
            <ul className="mt-4 space-y-2.5">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-ink-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="bg-surface p-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-100">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
