import type { ExperienceItem } from '../types'

/**
 * Professional experience. Kept as a list so more roles can be added later.
 * Descriptions are deliberately factual — no exaggerated ownership claims.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineering Intern',
    organization: 'Shura Council, Kingdom of Bahrain',
    logo: '/assets/logos/shura-council.png',
    location: 'Manama, Bahrain',
    period: 'June 2026 – August 2026',
    summary:
      'A practical software engineering internship focused on internal digital operations, workflow automation, and web development — applying new tools and concepts in a professional environment.',
    highlights: [
      'Developed and modified SharePoint pages, lists, and libraries supporting internal council operations.',
      'Worked directly with departmental users to understand and clarify their requirements.',
      'Automated incoming and outgoing correspondence workflows using Microsoft Power Automate.',
      'Reduced manual data entry involving sender/receiver reference codes and sequence numbers, removing a recurring source of data-entry error.',
      'Contributed to a course attendance and absence system built with React and jQuery.',
      'Used Postman to validate API endpoints during development.',
      'Used Gitea for version control and collaborative development.',
    ],
    note: 'The backend and MySQL portion of the attendance system was still in progress and not completed during the internship period.',
    tags: ['SharePoint', 'Power Automate', 'React', 'jQuery', 'Postman', 'Gitea'],
  },
  {
    role: 'Participant',
    organization: 'Build Hackathon — Reboot, Zain Bahrain & Bahrain Polytechnic Developers Club',
    logo: '/assets/logos/reboot.png',
    location: 'Bahrain',
    period: '2025',
    summary:
      'A three-day team hackathon building a working web application end to end under a tight time limit.',
    highlights: [
      'Built a web application with a team that recommended dishes based on a user’s selected mood.',
      'Contributed across the front-end, back-end, and data layers using HTML, CSS, and JavaScript.',
      'Practised rapid prototyping, scoping, and collaboration under time pressure.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Teamwork'],
  },
]
