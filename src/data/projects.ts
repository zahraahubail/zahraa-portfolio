import type { Project, ProjectCategory } from '../types'

/**
 * Project catalogue — the single source of truth for the Projects section.
 *
 * To add a project: append an object below. To add a real screenshot: drop an
 * image in `public/assets/projects/` and set `image` to its path, e.g.
 * `/assets/projects/rentify.png`. Placeholder SVGs are used until then and the
 * site keeps working with or without the real images.
 */

/** Order of the filter buttons in the Projects section. */
export const projectCategories: ProjectCategory[] = [
  'Full-Stack',
  'Web Application',
  'Mobile Development',
  'Machine Learning',
  'Game Development',
]

export const projects: Project[] = [
  {
    slug: 'rentify',
    name: 'Rentify – Property Management System',
    categories: ['Full-Stack'],
    year: '2026',
    summary:
      'A property management and leasing platform for properties, tenants, payments, maintenance, and real-time notifications.',
    description:
      'Rentify is a full-stack property management and leasing platform designed to manage properties, units, tenants, lease applications, payments, maintenance requests, and reporting. It combines an MVC web application, a REST API, and a reporting portal, with real-time notifications delivered through SignalR.',
    technologies: [
      'ASP.NET Core 9',
      'ASP.NET MVC',
      'C#',
      'ASP.NET Web API',
      'SQL Server',
      'SignalR',
      'LINQ',
      'HTML',
      'CSS',
      'Microsoft Azure',
      'SSMS',
      'Visual Studio',
    ],
    features: [
      'Property and unit management',
      'Tenant onboarding',
      'Lease applications',
      'Payment tracking',
      'Maintenance requests',
      'Reporting and reporting portal',
      'Real-time notifications (SignalR)',
      'REST API alongside the MVC application',
    ],
    image: '/assets/projects/rentify/01-home-page.jpg',
    images: [
      {
        src: '/assets/projects/rentify/01-home-page.jpg',
        alt: 'Rentify home page',
        caption: 'Home Page',
      },
      {
        src: '/assets/projects/rentify/02-public-maintenance-request-lookup.jpg',
        alt: 'Rentify public lookup for a maintenance request',
        caption: 'Public Lookup for Maintenance Request',
      },
      {
        src: '/assets/projects/rentify/03-sign-in-page.jpg',
        alt: 'Rentify sign-in page',
        caption: 'Sign-In Page',
      },
      {
        src: '/assets/projects/rentify/04-dashboard.jpg',
        alt: 'Rentify management dashboard',
        caption: 'Dashboard',
      },
      {
        src: '/assets/projects/rentify/05-properties-listing.jpg',
        alt: 'Rentify properties listing',
        caption: 'Properties Listing',
      },
      {
        src: '/assets/projects/rentify/06-unit-management.jpg',
        alt: 'Rentify unit management page',
        caption: 'Unit Management',
      },
      {
        src: '/assets/projects/rentify/07-user-management.jpg',
        alt: 'Rentify user management page',
        caption: 'User Management',
      },
      {
        src: '/assets/projects/rentify/08-notifications-page.jpg',
        alt: 'Rentify notifications page',
        caption: 'Notifications Page',
      },
      {
        src: '/assets/projects/rentify/09-real-time-notifications.jpg',
        alt: 'Real-time notifications in Rentify',
        caption: 'Real-Time Notifications',
      },
      {
        src: '/assets/projects/rentify/10-maintenance-requests.jpg',
        alt: 'Rentify maintenance requests page',
        caption: 'Maintenance Requests',
      },
      {
        src: '/assets/projects/rentify/11-create-tenant-account.jpg',
        alt: 'Rentify form for creating a tenant account',
        caption: 'Create Tenant Account',
      },
      {
        src: '/assets/projects/rentify/12-upload-image-functionality.jpg',
        alt: 'Image upload functionality in Rentify',
        caption: 'Upload Image Functionality',
      },
      {
        src: '/assets/projects/rentify/13-reports-and-analytics-1.jpg',
        alt: 'Rentify reports and analytics view',
        caption: 'Reports & Analytics',
      },
      {
        src: '/assets/projects/rentify/14-reports-and-analytics-2.jpg',
        alt: 'Additional Rentify reports and analytics view',
        caption: 'Reports & Analytics',
      },
      {
        src: '/assets/projects/rentify/15-reports-and-analytics-3.jpg',
        alt: 'Additional Rentify analytics report',
        caption: 'Reports & Analytics',
      },
      {
        src: '/assets/projects/rentify/16-payment-records.jpg',
        alt: 'Rentify payment records page',
        caption: 'Payment Records',
      },
      {
        src: '/assets/projects/rentify/17-pop-up-messages.jpg',
        alt: 'Pop-up messages displayed in Rentify',
        caption: 'Pop-up Messages',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/NorainAlmajed/Advanced-Project-S6-G2.git',
        type: 'github',
      },
    ],
  },
  {
    slug: 'time-voyager',
    name: 'Time Voyager – First-Person Adventure Game',
    categories: ['Game Development'],
    year: '2026',
    summary:
      'A first-person adventure game with six unique worlds, each with its own quests, enemies, mechanics, and storyline.',
    description:
      'Time Voyager is a first-person adventure game featuring six unique worlds connected through portals: Lab, Samurai, Horror Mansion, Kingdom, Dungeon, and Future / Sci-Fi City. Each level has different quests, enemies, mechanics, and storylines, supported by a modular architecture with reusable gameplay systems.',
    technologies: ['C#', 'Unity', 'Game Development'],
    features: [
      'Quest system',
      'Inventory system',
      'JSON save/load',
      'Enemy AI',
      'Boss battles',
      'Shooting and melee systems',
      'Health system',
      'Voice lines',
      'Vehicle mechanics',
      'Portal-based world transitions',
    ],
    levels: [
      'Lab',
      'Samurai',
      'Horror Mansion',
      'Kingdom',
      'Dungeon',
      'Future / Sci-Fi City',
    ],
    image: '/assets/projects/time-voyager/01-official-game-artwork.jpg',
    images: [
      {
        src: '/assets/projects/time-voyager/01-official-game-artwork.jpg',
        alt: 'Official artwork for the Time Voyager game',
        caption: 'Time Voyager Cover',
      },
      {
        src: '/assets/projects/time-voyager/02-lab-level.jpg',
        alt: 'Time Voyager laboratory level',
        caption: 'Lab Level',
      },
      {
        src: '/assets/projects/time-voyager/03-samurai-level-npc.jpg',
        alt: 'NPC in the Time Voyager samurai level',
        caption: 'Samurai Level NPC',
      },
      {
        src: '/assets/projects/time-voyager/04-samurai-level-map.jpg',
        alt: 'Map of the Time Voyager samurai level',
        caption: 'Samurai Level Map',
      },
      {
        src: '/assets/projects/time-voyager/05-samurai-level-enemy.jpg',
        alt: 'Enemy in the Time Voyager samurai level',
        caption: 'Samurai Level Enemy',
      },
      {
        src: '/assets/projects/time-voyager/06-pause-screen.jpg',
        alt: 'Time Voyager pause screen',
        caption: 'Pause Screen',
      },
      {
        src: '/assets/projects/time-voyager/07-losing-screen.jpg',
        alt: 'Time Voyager losing screen',
        caption: 'Losing Screen',
      },
      {
        src: '/assets/projects/time-voyager/08-horror-mansion-level.jpg',
        alt: 'Time Voyager horror mansion level',
        caption: 'Horror Mansion Level',
      },
      {
        src: '/assets/projects/time-voyager/09-horror-level-enemies-1.jpg',
        alt: 'Enemies in the Time Voyager horror level',
        caption: 'Horror Level Enemies',
      },
      {
        src: '/assets/projects/time-voyager/10-horror-level-enemies-2.jpg',
        alt: 'Additional enemies in the Time Voyager horror level',
        caption: 'Horror Level Enemies',
      },
      {
        src: '/assets/projects/time-voyager/11-code-panel.jpg',
        alt: 'Interactive code panel in Time Voyager',
        caption: 'Code Panel',
      },
      {
        src: '/assets/projects/time-voyager/12-horror-level-npc.jpg',
        alt: 'NPC in the Time Voyager horror level',
        caption: 'Horror Level NPC',
      },
      {
        src: '/assets/projects/time-voyager/13-kingdom-level.jpg',
        alt: 'Time Voyager kingdom level',
        caption: 'Kingdom Level',
      },
      {
        src: '/assets/projects/time-voyager/14-kingdom-level-enemies.jpg',
        alt: 'Enemies in the Time Voyager kingdom level',
        caption: 'Kingdom Level Enemies',
      },
      {
        src: '/assets/projects/time-voyager/15-kingdom-level-npc-fairy.jpg',
        alt: 'Fairy NPC in the Time Voyager kingdom level',
        caption: 'Kingdom Level NPC (Fairy)',
      },
      {
        src: '/assets/projects/time-voyager/16-dungeon-level.jpg',
        alt: 'Time Voyager dungeon level',
        caption: 'Dungeon Level',
      },
      {
        src: '/assets/projects/time-voyager/17-dungeon-level-enemy.jpg',
        alt: 'Enemy in the Time Voyager dungeon level',
        caption: 'Dungeon Level Enemy',
      },
      {
        src: '/assets/projects/time-voyager/18-hidden-code.jpg',
        alt: 'Hidden code in Time Voyager',
        caption: 'Hidden Code',
      },
      {
        src: '/assets/projects/time-voyager/19-dungeon-level-dragon.jpg',
        alt: 'Dragon in the Time Voyager dungeon level',
        caption: 'Dungeon Level Dragon',
      },
      {
        src: '/assets/projects/time-voyager/20-portal.jpg',
        alt: 'Portal connecting worlds in Time Voyager',
        caption: 'Portal',
      },
      {
        src: '/assets/projects/time-voyager/21-sci-fi-city-level.jpg',
        alt: 'Time Voyager science-fiction city level',
        caption: 'Sci-Fi City Level',
      },
      {
        src: '/assets/projects/time-voyager/22-sci-fi-city-level-npc.jpg',
        alt: 'NPC in the Time Voyager science-fiction city level',
        caption: 'Sci-Fi City Level NPC',
      },
      {
        src: '/assets/projects/time-voyager/23-driving-interactive-car.jpg',
        alt: 'Interactive drivable car in Time Voyager',
        caption: 'Driving Interactive Car',
      },
      {
        src: '/assets/projects/time-voyager/24-sci-fi-city-level-enemy.jpg',
        alt: 'Enemy in the Time Voyager science-fiction city level',
        caption: 'Sci-Fi City Level Enemy',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Manaf-10/Time-Voyager.git',
        type: 'github',
      },
      {
        label: 'Download from itch.io',
        href: 'https://zahraahubail.itch.io/time-voyager',
        type: 'download',
      },
    ],
  },
  {
    slug: 'stock-market-ml',
    name: 'Stock Market Analysis using Machine Learning',
    categories: ['Machine Learning'],
    year: '2025',
    summary:
      'A machine learning pipeline analysing 34 million+ stock market records for risk segmentation and price prediction.',
    description:
      'A machine learning pipeline for analysing more than 34 million stock market records. The workflow covers full data preprocessing and feature engineering, K-Means clustering for stock risk segmentation, and Linear Regression with a log transformation for price prediction, followed by model evaluation.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'K-Means Clustering',
      'Linear Regression',
      'Feature Engineering',
      'Machine Learning',
    ],
    features: [
      'Data preprocessing',
      'Feature engineering',
      'K-Means clustering for stock risk segmentation',
      'Linear Regression with log transformation',
      'Model evaluation',
    ],
    outcomes: [
      '1.36% MAPE on price prediction',
      '0.94 R² on the regression model',
      'Analysis across 1,900+ tickers',
    ],
    image: '/assets/projects/AI/stock-market-final-clusters.jpg',
    images: [
      {
        src: '/assets/projects/AI/stock-market-final-clusters.jpg',
        alt: 'Scatter plot showing the final three stock clusters by volatility and maximum drawdown',
        caption: 'Final Stock Clusters (k = 3)',
      },
      {
        src: '/assets/projects/AI/stock-market-actual-vs-predicted.jpg',
        alt: 'Log-log scatter plot comparing actual and predicted stock prices',
        caption: 'Actual vs. Predicted Prices (Log-Log Scale)',
      },
    ],
    links: [],
  },
  {
    slug: 'the-binge-box',
    name: 'The Binge Box – Movie Management & Review Platform',
    categories: ['Full-Stack'],
    year: '2026',
    summary:
      'A full-stack movie management and review platform with separate user and administrator functionality.',
    description:
      'The Binge Box is a full-stack movie management and review platform with separate user and administrator roles. It supports movie CRUD, ratings and comments, advanced and live search backed by AJAX, TMDB API integration, email verification, and PDF reporting, all behind a responsive UI.',
    technologies: ['PHP', 'MySQL', 'SQL', 'AJAX', 'HTML', 'CSS'],
    features: [
      'User authentication',
      'Role-based access (user / admin)',
      'Movie CRUD',
      'Ratings and comments',
      'Advanced search with AJAX live search',
      'TMDB API integration',
      'Email verification',
      'PDF reporting',
      'Responsive UI',
    ],
    image: '/assets/projects/the-binge-box/01-dashboard.JPG',
    images: [
      {
        src: '/assets/projects/the-binge-box/01-dashboard.JPG',
        alt: 'The Binge Box dashboard',
        caption: 'Dashboard',
      },
      {
        src: '/assets/projects/the-binge-box/02-search-movies.JPG',
        alt: 'Movie search interface in The Binge Box',
        caption: 'Search Movies',
      },
      {
        src: '/assets/projects/the-binge-box/03-filtering.JPG',
        alt: 'Movie filtering interface in The Binge Box',
        caption: 'Filtering',
      },
      {
        src: '/assets/projects/the-binge-box/04-registration-page.JPG',
        alt: 'The Binge Box user registration page',
        caption: 'Registration Page',
      },
      {
        src: '/assets/projects/the-binge-box/05-email-verification-1.JPG',
        alt: 'First step of email verification in The Binge Box',
        caption: 'Email Verification',
      },
      {
        src: '/assets/projects/the-binge-box/06-email-verification-2.JPG',
        alt: 'Second step of email verification in The Binge Box',
        caption: 'Email Verification',
      },
      {
        src: '/assets/projects/the-binge-box/07-email-verification-3.JPG',
        alt: 'Third step of email verification in The Binge Box',
        caption: 'Email Verification',
      },
      {
        src: '/assets/projects/the-binge-box/08-creator-dashboard.JPG',
        alt: 'Creator dashboard in The Binge Box',
        caption: 'Creator Dashboard',
      },
      {
        src: '/assets/projects/the-binge-box/09-adding-movies.JPG',
        alt: 'Interface for adding movies in The Binge Box',
        caption: 'Adding Movies',
      },
      {
        src: '/assets/projects/the-binge-box/10-rate-and-review.JPG',
        alt: 'Movie rating and review interface in The Binge Box',
        caption: 'Rate & Review',
      },
      {
        src: '/assets/projects/the-binge-box/11-view-reviews.JPG',
        alt: 'Movie reviews displayed in The Binge Box',
        caption: 'View Reviews',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/zahraa-hubail/TheBingeBox.git',
        type: 'github',
      },
    ],
  },
  {
    slug: 'course-attendance',
    name: 'Course Attendance & Absence Management System',
    categories: ['Web Application'],
    year: '2026',
    summary:
      'A role-based web application for managing employee course attendance, temporary absences, analytics, and PDF reports.',
    description:
      'A role-based enterprise web application developed during my software engineering internship at Shura Council and used by the Parliamentary Performance Development Department during training courses to track employee attendance and temporary absences. It provides separate employee and supervisor flows, live course controls, record management, analytics, reporting, and PDF generation. The interface was refined iteratively through layout, interaction, animation, and user-experience improvements based on project requirements.',
    note:
      'The React and jQuery interface was developed during the internship. We did not have enough time to complete the backend before the internship ended, so the Shura Council team completed it afterward.',
    technologies: ['React', 'jQuery', 'Node.js', 'Postman'],
    features: [
      'Role-based employee and supervisor interfaces',
      'Attendance and permission tracking',
      'Manual attendance record management',
      'Present and absent status controls',
      'Attendance percentages and total-hours analytics',
      'Course breaks, late-arrival settings, and manual course closure',
      'Daily, weekly, and overall reporting views',
      'PDF report generation',
      'Iterative UI/UX refinement and animated transitions',
    ],
    image: '/assets/projects/course-attendance/01-login-page.jpg',
    images: [
      {
        src: '/assets/projects/course-attendance/01-login-page.jpg',
        alt: 'Course attendance system login page',
        caption: 'Login Page',
      },
      {
        src: '/assets/projects/course-attendance/02-todays-courses.jpg',
        alt: "Employee view of today's available courses",
        caption: "Today's Courses",
      },
      {
        src: '/assets/projects/course-attendance/03-course-registration-page.jpg',
        alt: 'Course attendance registration page',
        caption: 'Course Registration Page',
      },
      {
        src: '/assets/projects/course-attendance/04-supervisor-dashboard.jpg',
        alt: 'Course attendance system supervisor dashboard',
        caption: 'Supervisor Dashboard',
      },
      {
        src: '/assets/projects/course-attendance/05-course-details-page.jpg',
        alt: 'Supervisor view of course details',
        caption: 'Course Details Page',
      },
      {
        src: '/assets/projects/course-attendance/06-edit-attendance-records.jpg',
        alt: 'Interface for editing employee attendance records',
        caption: 'Edit Attendance Records',
      },
      {
        src: '/assets/projects/course-attendance/07-end-the-course.jpg',
        alt: 'Supervisor control for ending a course',
        caption: 'End the Course',
      },
      {
        src: '/assets/projects/course-attendance/08-start-a-break.jpg',
        alt: 'Supervisor control for starting a course break',
        caption: 'Start a Break',
      },
      {
        src: '/assets/projects/course-attendance/09-modify-late-allowance.jpg',
        alt: 'Interface for modifying the allowed late-arrival time',
        caption: 'Modify the Late Allowance',
      },
      {
        src: '/assets/projects/course-attendance/10-course-attendance-report.jpg',
        alt: 'Attendance report for an individual course',
        caption: 'Course Attendance Report',
      },
      {
        src: '/assets/projects/course-attendance/11-all-courses-attendance-report.jpg',
        alt: 'Attendance report across all courses',
        caption: 'All Courses Attendance Report',
      },
    ],
    links: [],
  },
  {
    slug: 'nourish-bahrain',
    name: 'Nourish Bahrain – iOS Donation Application',
    categories: ['Mobile Development', 'Full-Stack'],
    year: '2025',
    summary:
      'An iOS app that simplifies food donation by connecting donors with verified NGOs to redistribute surplus food.',
    description:
      'Nourish Bahrain is an iOS application designed to simplify food donations by connecting donors with verified NGOs and helping redistribute surplus food. It uses Firebase for authentication and data services and Cloudinary for media storage, with the interface and user flows prototyped in Figma.',
    technologies: ['Swift', 'Xcode', 'Firebase', 'Cloudinary', 'Figma', 'iOS Development'],
    features: [
      'User Registration, Authentication, and Profile',
      'Settings Management & Account Control',
      'Customize Dashboard',
      'Impact Tracking',
      'Admin User Controls (CRUD) and NGO Approvals',
      'Real-Time Notifications',
      'Donation and Status Management',
      'NGO Discovery',
      'Food Donation Creation',
      'Pickup Scheduling & Recurring Donation Schedules',
      'Search and Filter Tools',
      'Chat / Support Chat',
      'Media Export Functionality',
      'Donations Representation in Charts',
    ],
    image: '/assets/projects/nourish-bahrain/01-dashboard.JPG',
    images: [
      {
        src: '/assets/projects/nourish-bahrain/01-dashboard.JPG',
        alt: 'Nourish Bahrain dashboards for administrator, donor, and NGO roles',
        caption: 'Dashboard',
      },
      {
        src: '/assets/projects/nourish-bahrain/02-donations-page.JPG',
        alt: 'Nourish Bahrain donations list with search and status filters',
        caption: 'Donations Page',
      },
      {
        src: '/assets/projects/nourish-bahrain/03-splash-screen.JPG',
        alt: 'Nourish Bahrain application splash screen',
        caption: 'Splash Screen',
      },
      {
        src: '/assets/projects/nourish-bahrain/04-notifications-page.JPG',
        alt: 'Nourish Bahrain donation notifications page',
        caption: 'Notifications Page',
      },
      {
        src: '/assets/projects/nourish-bahrain/05-real-time-chat.JPG',
        alt: 'Nourish Bahrain real-time support chat shown on two devices',
        caption: 'Real-Time Chat',
      },
      {
        src: '/assets/projects/nourish-bahrain/06-donation-details.JPG',
        alt: 'Nourish Bahrain donation details with pickup information and donation summary',
        caption: 'Donation Details',
      },
      {
        src: '/assets/projects/nourish-bahrain/07-ios-share-screen.JPG',
        alt: 'Nourish Bahrain donation report displayed in the iOS share screen',
        caption: 'iOS Share Screen Integration',
      },
      {
        src: '/assets/projects/nourish-bahrain/08-donation-details-pdf.JPG',
        alt: 'Generated Nourish Bahrain donation details PDF report',
        caption: 'Donation Details PDF Generation',
      },
      {
        src: '/assets/projects/nourish-bahrain/09-browse-ngos.JPG',
        alt: 'Nourish Bahrain screen for searching and browsing NGOs',
        caption: 'Browse NGOs',
      },
      {
        src: '/assets/projects/nourish-bahrain/10-ngo-details.JPG',
        alt: 'Nourish Bahrain NGO details page with mission and contact information',
        caption: 'NGO Details',
      },
      {
        src: '/assets/projects/nourish-bahrain/11-donation-form.JPG',
        alt: 'Nourish Bahrain donation form with food details and image upload',
        caption: 'Donation Form',
      },
      {
        src: '/assets/projects/nourish-bahrain/12-admin-panel.JPG',
        alt: 'Nourish Bahrain admin panel for managing NGO accounts',
        caption: 'Admin Panel',
      },
      {
        src: '/assets/projects/nourish-bahrain/13-ngo-edit-form.JPG',
        alt: 'Nourish Bahrain form for editing an NGO profile',
        caption: 'NGO Edit Form',
      },
      {
        src: '/assets/projects/nourish-bahrain/14-add-new-user.JPG',
        alt: 'Nourish Bahrain admin screen with options to add a new NGO or donor',
        caption: 'Add New User',
      },
      {
        src: '/assets/projects/nourish-bahrain/15-account-settings.JPG',
        alt: 'Nourish Bahrain donor account settings screen',
        caption: 'Account Settings',
      },
      {
        src: '/assets/projects/nourish-bahrain/16-sort-and-filter.JPG',
        alt: 'Nourish Bahrain donation sorting and filtering screen',
        caption: 'Sort and Filter',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/NorainAlmajed/MP_Project_S2G3.git',
        type: 'github',
      },
      {
        label: 'Figma Mockups',
        href: 'https://www.figma.com/design/sKvXfn3DFvLxXsHe8iW3dp/Mock-ups-Flow?t=opEZcYVjX5VVtDMT-1',
        type: 'external',
      },
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/design/pjhGEXtYTg8tw7nbe63wFR/Nourish-Bahrain?t=opEZcYVjX5VVtDMT-1',
        type: 'external',
      },
    ],
  },
  {
    slug: 'flappy-bird',
    name: 'Flappy Bird',
    categories: ['Game Development'],
    year: '2026',
    summary:
      'A Unity recreation of the classic Flappy Bird, built as an introduction to game development.',
    description:
      'A Unity recreation of the classic Flappy Bird game, developed as an introduction to game development. The focus was on core game mechanics, physics, UI, player interaction, and Unity fundamentals.',
    technologies: ['C#', 'Unity', 'Game Development'],
    features: [
      'Core game mechanics',
      'Physics-based movement',
      'UI and scoring',
      'Player interaction',
      'Unity fundamentals',
    ],
    image: '/assets/projects/Flappy-Bird/flappy-bird-main-menu.JPG',
    images: [
      {
        src: '/assets/projects/Flappy-Bird/flappy-bird-main-menu.JPG',
        alt: 'Flappy Bird main menu with play and quit options',
        caption: 'Main menu',
      },
      {
        src: '/assets/projects/Flappy-Bird/flappy-bird-gameplay.JPG',
        alt: 'Flappy Bird gameplay showing the bird navigating pipes with a score of three',
        caption: 'Gameplay',
      },
      {
        src: '/assets/projects/Flappy-Bird/flappy-bird-game-over.JPG',
        alt: 'Flappy Bird game-over screen showing a score of three',
        caption: 'Game-over screen',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/zahraa-hubail/Flappy-Bird.git',
        type: 'github',
      },
      {
        label: 'Download from itch.io',
        href: 'https://zahraahubail.itch.io/flappy-bird',
        type: 'download',
      },
    ],
  },
  {
    slug: 'machlatna',
    name: 'Machlatna – Grocery Delivery App Prototype',
    categories: ['Mobile Development'],
    year: '2025',
    summary:
      'A Figma prototype for a mobile grocery delivery app that connects people with local Bahraini farmers and artisans.',
    description:
      'Machlatna is a mobile grocery delivery app prototype designed in Figma that connects users with local Bahraini farmers and artisans. It covers the full shopping journey, including product browsing, search, cart, checkout, and order tracking, alongside notifications, customer support, and profile management, with the experience built around promoting local products and sustainable food accessibility.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    features: [
      'Product browsing',
      'Search',
      'Shopping cart',
      'Checkout',
      'Order tracking',
      'Notifications',
      'Customer support',
      'Profile management',
    ],
    image: '/assets/projects/machlatna/01-splash-screen.jpg',
    images: [
      {
        src: '/assets/projects/machlatna/01-splash-screen.jpg',
        alt: 'Machlatna splash screen screen',
        caption: 'Splash Screen',
      },
      {
        src: '/assets/projects/machlatna/02-registration-page.jpg',
        alt: 'Machlatna registration page screen',
        caption: 'Registration Page',
      },
      {
        src: '/assets/projects/machlatna/03-login-page.jpg',
        alt: 'Machlatna login page screen',
        caption: 'Login Page',
      },
      {
        src: '/assets/projects/machlatna/04-sign-up-page.jpg',
        alt: 'Machlatna sign-up page screen',
        caption: 'Sign-Up Page',
      },
      {
        src: '/assets/projects/machlatna/05-otp.jpg',
        alt: 'Machlatna otp screen',
        caption: 'OTP',
      },
      {
        src: '/assets/projects/machlatna/06-dashboard.jpg',
        alt: 'Machlatna dashboard screen',
        caption: 'Dashboard',
      },
      {
        src: '/assets/projects/machlatna/07-listing-categories.jpg',
        alt: 'Machlatna listing categories screen',
        caption: 'Listing Categories',
      },
      {
        src: '/assets/projects/machlatna/08-listing-products.jpg',
        alt: 'Machlatna listing products screen',
        caption: 'Listing Products',
      },
      {
        src: '/assets/projects/machlatna/09-product-details.jpg',
        alt: 'Machlatna product details screen',
        caption: 'Product Details',
      },
      {
        src: '/assets/projects/machlatna/10-my-cart.jpg',
        alt: 'Machlatna my cart screen',
        caption: 'My Cart',
      },
      {
        src: '/assets/projects/machlatna/11-my-cart.jpg',
        alt: 'Machlatna my cart screen',
        caption: 'My Cart',
      },
      {
        src: '/assets/projects/machlatna/12-notifications.jpg',
        alt: 'Machlatna notifications screen',
        caption: 'Notifications',
      },
      {
        src: '/assets/projects/machlatna/13-profile-settings.jpg',
        alt: 'Machlatna profile settings screen',
        caption: 'Profile Settings',
      },
      {
        src: '/assets/projects/machlatna/14-edit-profile.jpg',
        alt: 'Machlatna edit profile screen',
        caption: 'Edit Profile',
      },
      {
        src: '/assets/projects/machlatna/15-chat-with-us.jpg',
        alt: 'Machlatna chat with us screen',
        caption: 'Chat with Us',
      },
      {
        src: '/assets/projects/machlatna/16-my-addresses.jpg',
        alt: 'Machlatna my addresses screen',
        caption: 'My Addresses',
      },
      {
        src: '/assets/projects/machlatna/17-add-new-address.jpg',
        alt: 'Machlatna add new address screen',
        caption: 'Add New Address',
      },
      {
        src: '/assets/projects/machlatna/18-orders-history.jpg',
        alt: 'Machlatna orders history screen',
        caption: 'Orders History',
      },
      {
        src: '/assets/projects/machlatna/19-order-details.jpg',
        alt: 'Machlatna order details screen',
        caption: 'Order Details',
      },
      {
        src: '/assets/projects/machlatna/20-delivery-details.jpg',
        alt: 'Machlatna delivery details screen',
        caption: 'Delivery Details',
      },
      {
        src: '/assets/projects/machlatna/21-my-following.jpg',
        alt: 'Machlatna my following screen',
        caption: 'My Following',
      },
    ],
    links: [],
  },
]
