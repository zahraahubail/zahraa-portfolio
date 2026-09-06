import { Button } from '../components/Button'
import { Icon, type IconName } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'

const channels: {
  label: string
  value: string
  href: string
  icon: IconName
  external?: boolean
}[] = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'zahraa-hubail',
    href: site.links.linkedin,
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'zahraahubail',
    href: site.links.github,
    icon: 'github',
    external: true,
  },
]

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" tone="raised">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          index="07"
          title="Contact"
          description="I'm open to software engineering and programming internships and opportunities. The best way to reach me is by email."
          align="center"
        />

        <Reveal className="mt-8">
          <Button href={`mailto:${site.email}`} icon="mail">
            Get in Touch
          </Button>
        </Reveal>

        <Reveal delay={1} className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border-subtle bg-surface p-5 text-center transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-navy-850 text-accent">
                <Icon name={channel.icon} size={20} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                {channel.label}
              </span>
              <span className="text-sm font-medium text-ink-100 group-hover:text-accent">
                {channel.value}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
