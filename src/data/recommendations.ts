import type { Recommendation } from '../types'

/**
 * Recommendation letters from the Shura Council internship.
 *
 * `quote` is a short verbatim excerpt shown on the card. `pdf` points to the
 * full letter in `public/assets/recommendations/` — drop the PDF there (keep the
 * filename) to update it.
 */
export const recommendations: Recommendation[] = [
  {
    slug: 'hashim-al-alawi',
    quote:
      'She absorbed unfamiliar material quickly, retained what she was taught, and reached the point of working with minimal supervision earlier than most.',
    name: 'Hashim Al Alawi',
    title: 'Head of Systems and Digital Transformation',
    organization: 'Shura Council',
    pdf: '/assets/recommendations/hashim-al-alawi-shura-council.pdf',
  },
  {
    slug: 'deena-abbas-ali',
    quote:
      'When given a task, you can trust that she will complete it responsibly and to a high standard.',
    name: 'Deena Abbas Ali',
    title: 'Senior Systems and Digital Transformation Specialist',
    organization: 'Shura Council',
    pdf: '/assets/recommendations/deena-abbas-ali-shura-council.pdf',
  },
]
