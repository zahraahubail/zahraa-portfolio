import { useMemo } from 'react'
import type { Project } from '../types'
import { Badge } from './Badge'
import { Button } from './Button'
import { Icon, type IconName } from './Icon'
import { Modal } from './Modal'
import { ProjectGallery, type GalleryImage } from './ProjectGallery'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const linkIcon: Record<Project['links'][number]['type'], IconName> = {
  github: 'github',
  demo: 'play',
  download: 'download',
  external: 'external',
}

/** Builds the carousel image list, falling back to the single card image. */
function galleryImagesFor(project: Project): GalleryImage[] {
  if (project.images && project.images.length > 0) return project.images
  return [{ src: project.image, alt: `${project.name} preview` }]
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = 'project-modal-title'
  const images = useMemo(
    () => (project ? galleryImagesFor(project) : []),
    [project],
  )

  return (
    <Modal open={project !== null} onClose={onClose} titleId={titleId}>
      {project && (
        <>
          <ProjectGallery
            // Remount when the project changes so the carousel resets to slide 1.
            key={project.slug}
            images={images}
          />

          <div className="overflow-y-auto p-6">
            <ul className="mb-3 flex flex-wrap gap-1.5">
              {project.categories.map((category) => (
                <li key={category}>
                  <Badge variant="solid">{category}</Badge>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline justify-between gap-4">
              <h2 id={titleId} className="text-2xl font-semibold text-ink-100">
                {project.name}
              </h2>
              <span className="shrink-0 font-mono text-sm text-ink-500">
                {project.year}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              {project.description}
            </p>

            {project.note && (
              <aside className="mt-4 rounded-lg border border-accent/30 bg-navy-850 px-4 py-3 text-sm leading-relaxed text-ink-300">
                <span className="font-semibold text-ink-100">Project scope: </span>
                {project.note}
              </aside>
            )}

            <section className="mt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Key Features
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-ink-300">
                    <Icon
                      name="arrowRight"
                      size={15}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {project.levels && project.levels.length > 0 && (
              <section className="mt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Levels
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.levels.map((level) => (
                    <li
                      key={level}
                      className="rounded-lg border border-border-subtle bg-navy-850 px-3 py-1.5 text-sm text-ink-300"
                    >
                      {level}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.outcomes && project.outcomes.length > 0 && (
              <section className="mt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Results
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-lg border border-accent-strong/30 bg-accent-strong/10 px-3 py-1.5 text-sm text-accent-soft"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Technologies
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </section>

            {project.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <Button
                    key={link.href}
                    href={link.href}
                    variant={i === 0 ? 'primary' : 'secondary'}
                    size="sm"
                    icon={linkIcon[link.type]}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Modal>
  )
}
