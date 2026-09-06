import type { EducationItem } from '../types'

/**
 * Education history. Add a `logo` path (under /public/assets/logos) to show an
 * institution logo on the card.
 */
export const education: EducationItem[] = [
  {
    institution: 'Bahrain Polytechnic',
    program: "Bachelor's in Programming",
    period: 'September 2023 – June 2027 (expected)',
    achievement: 'GPA 3.97 / 4.00',
    details:
      'Coursework across full-stack web development, enterprise architecture, databases, mobile development, machine learning, and networking.',
    logo: '/assets/logos/bahrain-polytechnic.png',
  },
  {
    institution: 'Jidhafs Secondary Girls School',
    program: 'Tawjihiya Certificate — Science Major',
    period: 'September 2020 – June 2023',
    achievement: '99.1%, with Honours',
    logo: '/assets/logos/jidhafs-secondary.png',
  },
]
