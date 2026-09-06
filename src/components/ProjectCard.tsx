import type { Project } from '../types'
import { Badge } from './Badge'
import { Icon } from './Icon'
import { SmartImage } from './SmartImage'

interface ProjectCardProps {
  project: Project
  /** Opens the details modal. */
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover focus-within:border-accent/60">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block aspect-[16/10] w-full overflow-hidden focus-visible:outline-none"
        aria-label={`View details for ${project.name}`}
      >
        <SmartImage
          src={project.image}
          alt={`${project.name} preview`}
          className={`h-full w-full ${project.slug === 'machlatna' ? 'bg-white object-cover object-[50%_40%]' : 'object-cover transition-transform duration-500 group-hover:scale-105'} ${project.slug === 'rentify' ? 'object-[70%_50%]' : ''}`}
        />
        <span className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {project.categories.map((category) => (
            <Badge key={category} variant="solid">
              {category}
            </Badge>
          ))}
        </span>
        {project.images && project.images.length > 1 && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-navy-950/80 px-2 py-1 font-mono text-xs text-ink-300">
            <Icon name="expand" size={13} />
            {project.images.length}
          </span>
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-navy-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-lg border border-accent/40 bg-navy-900/80 px-4 py-2 text-sm font-medium text-ink-100">
            View details <Icon name="arrowRight" size={16} />
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink-100">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-left transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
            >
              {project.name}
            </button>
          </h3>
          <span className="mt-1 shrink-0 font-mono text-xs text-ink-500">
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li>
              <Badge>+{project.technologies.length - 4}</Badge>
            </li>
          )}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-border-subtle pt-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-soft focus-visible:outline-none"
          >
            Case study <Icon name="arrowRight" size={15} />
          </button>
          <div className="ml-auto flex items-center gap-1">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} — ${project.name}`}
                className="rounded-md p-1.5 text-ink-400 transition-colors hover:bg-navy-850 hover:text-ink-100"
              >
                <Icon
                  name={
                    link.type === 'github'
                      ? 'github'
                      : link.type === 'download'
                        ? 'download'
                        : 'external'
                  }
                  size={17}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
