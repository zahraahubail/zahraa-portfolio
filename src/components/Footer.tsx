import { site } from '../data/site'
import { Icon, type IconName } from './Icon'

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'GitHub', href: site.links.github, icon: 'github' },
  { label: 'LinkedIn', href: site.links.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-navy-950/50">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink-100">{site.name}</p>
          <p className="mt-1 text-sm text-ink-400">{site.role}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
            <Icon name="mapPin" size={14} />
            {site.location}
          </p>
        </div>

        <ul className="flex items-center gap-3">
          {socials.map((s) => {
            const isExternal = s.href.startsWith('http')
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-100"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="border-t border-border-subtle/60">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
