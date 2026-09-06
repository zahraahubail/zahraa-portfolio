import type { NavLink } from '../types'

/**
 * Central place for personal details, links and copy that appear in more than
 * one spot. Update these values to keep the whole site in sync.
 *
 * Privacy note: phone number and full residential address are intentionally
 * NOT included here — this file is bundled into the public site.
 */
export const site = {
  name: 'Zahraa Hubail',
  role: 'Aspiring Software Engineer',
  secondaryRole: 'Final-Year Programming Student at Bahrain Polytechnic',
  tagline: 'Full-Stack Developer',
  location: 'Bahrain',

  email: 'zahraa.hubail8@gmail.com',
  links: {
    github: 'https://github.com/zahraahubail',
    linkedin: 'https://www.linkedin.com/in/zahraa-hubail-341b113b2',
    itch: 'https://zahraahubail.itch.io',
  },

  /**
   * The CV lives in /public/assets. Replace the file (keep the name) to update
   * the download without touching any code.
   */
  cvPath: '/assets/Zahraa-Hubail-CV.pdf',

  heroIntro:
    'Final-year programming student at Bahrain Polytechnic with a strong foundation in full-stack development, backend engineering, and software design. I enjoy breaking down hard problems and turning them into practical, well-structured software.',

  university: 'Bahrain Polytechnic',
  degree: "Bachelor's in Programming",
  expectedGraduation: '2027',

  languages: ['Arabic — Native', 'English — Fluent'],
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
