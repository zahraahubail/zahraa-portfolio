/**
 * Shared type definitions for the portfolio content.
 * Content itself lives in `src/data/*` — keeping the shapes here means the
 * editor will flag a typo or a missing field as soon as you change the data.
 */

export type ProjectCategory =
  | 'Full-Stack'
  | 'Web Application'
  | 'Mobile Development'
  | 'Machine Learning'
  | 'Game Development'

export interface ProjectLink {
  label: string
  href: string
  /** `github` renders a code icon, `external` an arrow, `download` a tray. */
  type: 'github' | 'demo' | 'download' | 'external'
}

export interface Project {
  /** Stable identifier, also used as the React key. */
  slug: string
  name: string
  categories: ProjectCategory[]
  /** One-line summary shown on the card. */
  summary: string
  /** Longer paragraph shown in the details modal. */
  description: string
  /** Optional factual scope or completion note shown in the details modal. */
  note?: string
  technologies: string[]
  features: string[]
  /** Optional named levels, worlds, or major environments. */
  levels?: string[]
  /** Optional list of measurable outcomes, shown in the modal. */
  outcomes?: string[]
  /** Path under /public. Replace the placeholder with a real screenshot later. */
  image: string
  /** Optional labeled images shown in the project details modal. */
  images?: Array<{
    src: string
    alt: string
    caption: string
  }>
  links: ProjectLink[]
  year: string
}

export interface Certificate {
  slug: string
  title: string
  organization?: string
  year: string
  /** Path under /public. Replace the placeholder with the real certificate scan. */
  image: string
}

export interface SkillCategory {
  title: string
  /** Short kebab/technical label shown as a caption, e.g. `lang.*`. */
  namespace: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  /** Optional organization logo shown in the experience card header. */
  logo?: string
  location: string
  period: string
  /** Short framing sentence shown under the header. */
  summary: string
  highlights: string[]
  /** Optional honest note, e.g. scope that was intentionally not completed. */
  note?: string
  tags: string[]
}

export interface EducationItem {
  institution: string
  program: string
  period: string
  /** Optional academic distinction, e.g. "99.1%, with Honours". */
  achievement?: string
  details?: string
  /** Optional path under /public for an institution logo. */
  logo?: string
}

export interface Recommendation {
  /** Stable identifier, also used as the React key. */
  slug: string
  /** A short, verbatim excerpt from the letter. */
  quote: string
  name: string
  title: string
  organization: string
  /** Path under /public to the full letter PDF. */
  pdf: string
}

export interface NavLink {
  label: string
  /** Matching section `id` on the page. */
  href: string
}
