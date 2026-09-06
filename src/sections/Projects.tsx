import { useCallback, useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projectCategories, projects } from '../data/projects'
import type { Project, ProjectCategory } from '../types'

type Filter = 'All' | ProjectCategory

const filters: Filter[] = ['All', ...projectCategories]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <Section id="projects" ariaLabel="Projects" tone="raised">
      <SectionHeading
        index="03"
        title="Projects"
        description="A selection of work across full-stack web, mobile, machine learning, and game development. Click any project for a full breakdown."
      />

      {/* Category filter */}
      <Reveal className="mt-10">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            const count =
              filter === 'All'
                ? projects.length
                : projects.filter((p) => p.categories.includes(filter)).length
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-accent bg-accent-strong/15 text-accent-soft'
                    : 'border-border-subtle bg-surface text-ink-400 hover:border-accent/40 hover:text-ink-100'
                }`}
              >
                {filter}
                <span className="font-mono text-xs text-ink-500">{count}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Project grid */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <li key={project.slug} className="h-full">
            <ProjectCard project={project} onOpen={setSelected} />
          </li>
        ))}
      </ul>

      {visibleProjects.length === 0 && (
        <p className="mt-8 text-sm text-ink-400">No projects in this category yet.</p>
      )}

      <ProjectModal project={selected} onClose={closeModal} />
    </Section>
  )
}
