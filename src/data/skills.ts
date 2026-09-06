import type { SkillCategory } from '../types'

/**
 * Soft skills — rendered as a separate block below the technical grid in the
 * Skills section.
 */
export const softSkills: string[] = [
  'Problem Solving',
  'Analytical & Critical Thinking',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Leadership',
  'Decision-Making',
  'Adaptability',
  'Presentation & Public Speaking',
  'Continuous Learning',
]

/**
 * Skills grouped by area. Order here is the order shown on the page.
 * These reflect coursework, projects and internship experience — not claims of
 * expert-level mastery in every item.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    namespace: 'lang',
    skills: ['C#', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL', 'Swift', 'Octave'],
  },
  {
    title: 'Frameworks & Libraries',
    namespace: 'framework',
    skills: [
      'ASP.NET Core MVC',
      '.NET 9',
      'Web API',
      'SignalR',
      'React.js',
      'jQuery',
      'Node.js',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'Firebase',
      'Cloudinary',
    ],
  },
  {
    title: 'Software Development',
    namespace: 'engineering',
    skills: [
      'Object-Oriented Programming',
      'Full-Stack Web Development',
      'RESTful Web APIs',
      'iOS Mobile Development',
      'Database Design & Management',
      'Game Development',
      'Enterprise Architecture',
    ],
  },
  {
    title: 'Machine Learning & Data Science',
    namespace: 'ml',
    skills: [
      'Linear Regression',
      'Logistic Regression',
      'K-Means Clustering',
      'Pandas',
      'Scikit-Learn',
      'Feature Engineering',
    ],
  },
  {
    title: 'Databases',
    namespace: 'data',
    skills: ['SQL Server', 'MySQL', 'SQL Server Management Studio'],
  },
  {
    title: 'Tools & Platforms',
    namespace: 'tooling',
    skills: [
      'Git',
      'GitHub',
      'Gitea',
      'Visual Studio',
      'Visual Studio Code',
      'Postman',
      'Xcode',
      'Unity',
      'Figma',
      'SharePoint',
      'Microsoft Power Automate',
      'NetBeans',
      'Linux',
    ],
  },
  {
    title: 'Networking & Cybersecurity',
    namespace: 'security',
    skills: [
      'Cisco Networking',
      'Cybersecurity Fundamentals',
      'Penetration Testing',
      'Cryptography Basics',
    ],
  },
]
