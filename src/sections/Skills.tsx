import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { skillCategories, softSkills } from '../data/skills'

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills" tone="raised">
      <SectionHeading
        index="04"
        title="Skills"
        description="Technologies and areas I've worked with across coursework, projects, and my internship — plus the strengths I bring to a team."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            delay={(i % 3) as 0 | 1 | 2}
            className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-5 shadow-card transition-colors hover:border-accent/40"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-ink-100">{category.title}</h3>
              <span className="font-mono text-[11px] text-ink-500">
                {category.namespace}.*
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border-subtle bg-navy-850 px-2.5 py-1 text-xs text-ink-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-card sm:p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-ink-100">Soft Skills</h3>
            <span className="font-mono text-[11px] text-ink-500">soft.*</span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-accent/25 bg-accent-strong/5 px-3 py-1.5 text-sm text-ink-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
