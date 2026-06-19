import {
  EMAIL,
  PHONE,
  RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  GESTURE_SOURCE_URL,
  GESTURE_DEMO_URL,
  MOODLE_GITHUB_URL,
} from '../constants/links';
import profileImage from '../assets/profile.jpg';

export const personal = {
  name: 'Sanjana Gondariya',
  email: EMAIL,
  phone: PHONE,
  location: 'Fort Wayne, IN',
  locationFull: 'Fort Wayne, United States',
  school: 'Purdue University Fort Wayne',
  gpa: '3.61',
  graduation: 'May 2027',
  role: 'Front-End Developer',
  growthLabel: 'Full-Stack Growth',
  focus: 'React UI',
  currentBuild: 'Moodle platform',
};

const base = import.meta.env.BASE_URL;
export const assets = {
  profileImage,
  // TODO: Add Gesture Platform screenshot at public/projects/gesture-platform.png
  gestureImage: `${base}projects/gesture-platform.png`,
  resumeUrl: `${base}resume.pdf`,
};

export const links = {
  email: EMAIL,
  phone: PHONE,
  resume: RESUME_URL,
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  gestureSource: GESTURE_SOURCE_URL,
  gestureDemo: GESTURE_DEMO_URL,
  moodleGithub: MOODLE_GITHUB_URL,
};

export const heroContent = {
  label: 'PLAYER_01 / SANJANA_GONDARIYA',
  headline: 'Building polished interfaces with a frontend-first mindset.',
  headlineAccent: 'frontend-first',
  subheadline: 'CS student leveling up into full-stack development.',
  paragraph:
    "I'm a front-end focused Computer Science student at Purdue University Fort Wayne. I build responsive, interactive web experiences with React, JavaScript, and Tailwind CSS, and I'm expanding into backend/database development through coursework and a Moodle-inspired project.",
};

export const hudStats = [
  { label: 'ROLE', value: 'FRONTEND_DEVELOPER' },
  { label: 'STATUS', value: 'OPEN_TO_INTERNSHIPS' },
  { label: 'XP', value: 'FULL_STACK_IN_PROGRESS' },
  { label: 'LOCATION', value: 'FORT_WAYNE_IN' },
];

export const aboutPanels = [
  {
    id: 'CORE_IDENTITY',
    title: 'Core Identity',
    content:
      "I'm a Computer Science student at Purdue University Fort Wayne, graduating in May 2027. My strongest experience is in front-end development, where I build responsive, interactive interfaces using React, JavaScript, and Tailwind CSS.",
  },
  {
    id: 'CURRENT_FOCUS',
    title: 'Current Focus',
    content:
      'I enjoy projects that combine design, logic, and real user interaction. My gesture and face-controlled game platform helped me explore real-time webcam input, gesture tracking, and polished UI development in the browser.',
  },
  {
    id: 'WHY_I_BUILD',
    title: 'Why I Build',
    content:
      "I've also taken Database coursework and I'm currently expanding into backend development through a Moodle-inspired project with database-driven features.",
  },
];

export const aboutStats = [
  { label: 'GPA', value: '3.61' },
  { label: 'Graduation', value: 'May 2027' },
  { label: 'Focus', value: 'React + Full-Stack Growth' },
  { label: 'Location', value: 'Fort Wayne, IN' },
];

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    emphasis: true,
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 'programming',
    label: 'Programming',
    items: ['Java', 'C', 'JavaScript'],
  },
  {
    id: 'backend',
    label: 'Backend & Database Growth',
    growth: true,
    items: [
      'Database Design',
      'Database Coursework',
      'REST APIs',
      'Backend Fundamentals',
      'Moodle-inspired full-stack project',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Linux', 'VirtualBox', 'Microsoft 365', 'TeamDynamix'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    items: [
      'Computer Networks',
      'Computer Security',
      'Agile/Scrum',
      'UI Accessibility',
      'Responsive Design',
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: ['English', 'French'],
  },
];

/** Ordered most recent → oldest */
export const experiences = [
  {
    role: 'International Orientation Leader',
    company: 'Purdue University Fort Wayne',
    period: 'Aug 2025 — Aug 2025',
    location: 'Fort Wayne, United States',
    bullets: [
      'Managed participant lists and attendance records with high accuracy to enable timely follow-up and administrative reporting.',
      'Created and maintained event workflows and volunteer checklists to streamline onboarding, training, and shift handoffs.',
    ],
  },
  {
    role: 'ITS Inventory',
    company: 'Purdue University — Information Technology Services',
    period: 'Oct 2023 — Mar 2024',
    location: 'Fort Wayne, United States',
    bullets: [
      'Maintained structured Excel reports and operational logs to track equipment status across IT workflows, ensuring data accuracy for the support team.',
      'Staged and configured equipment for user appointments and demos, coordinating smooth technical handoffs between staff and end users.',
      'Documented step-by-step processes and built task checklists used to onboard new team members and lay groundwork for workflow automation.',
      'Coordinated vendor handoffs and follow-up via professional email, escalating unresolved issues to maintain SLA compliance.',
    ],
  },
  {
    role: 'Office Assistant Intern',
    company: 'Shreeji Development Enterprise',
    period: 'Jan 2023 — Jul 2023',
    location: 'Bakau, Gambia',
    bullets: [
      'Maintained organized electronic and physical records to support client-facing workflows and enable quick document retrieval.',
      'Processed purchasing and accounting documents with attention to accuracy; managed delivery logs and vendor returns.',
    ],
  },
];

export const certifications = [
  {
    issuer: 'Anthropic',
    title: 'AI Fluency: Framework & Foundations',
  },
  {
    issuer: 'Anthropic',
    title: 'Claude 101',
  },
];

export const gestureProject = {
  title: 'Gesture & Face-Controlled Game Platform',
  period: 'Aug–Dec 2025',
  context: 'Web App Development, Purdue Fort Wayne',
  role: 'Frontend Lead',
  description:
    'Led front-end development for a browser-based gaming platform using React and Tailwind CSS, integrating real-time webcam input via MediaPipe for gesture and facial landmark tracking.',
  games: [
    'Bubble-popping game using index finger tracking',
    'Flappy Bird using nose position control',
    'Rock Paper Scissors using hand gesture recognition',
  ],
  tech: ['React', 'Tailwind CSS', 'MediaPipe', 'JavaScript', 'Webcam Input'],
  teamNote:
    'Collaborated in an Agile-style workflow with a team of 4, adapting scope mid-project and maintaining delivery timelines.',
  caseStudy: [
    {
      label: 'Problem',
      text: 'Create an engaging browser-based game platform that responds to real-world movement using webcam input.',
    },
    {
      label: 'My Role',
      text: 'Led the user-facing layer, designed responsive UI, integrated MediaPipe tracking, and built frontend gameplay interactions.',
    },
    {
      label: 'Technical Challenge',
      text: 'Mapping real-time webcam landmarks to smooth browser-based game controls while maintaining responsiveness and usability.',
    },
    {
      label: 'Outcome',
      text: 'Delivered three playable games with gesture and face-controlled interactions as part of a team-based Web App Development project.',
    },
  ],
  imageAlt: 'Screenshot of the Gesture and Face-Controlled Game Platform',
};

export const moodleProject = {
  title: 'Moodle-Inspired Course Platform',
  role: 'Backend/database growth project',
  description:
    'A Moodle-inspired course platform I am building to strengthen backend and database development skills after taking Database coursework.',
  features: [
    'Course/user management planned',
    'Database-backed application structure in progress',
    'Backend/database implementation in progress',
    'GitHub-based development workflow',
  ],
  tech: ['React', 'Database Design', 'Backend in Progress', 'GitHub'],
};

export const contactContent = {
  subtitle:
    "I'm open to internship opportunities, frontend roles, and collaborative projects that combine thoughtful UI with real technical problem-solving.",
  formPlaceholders: {
    name: 'Your name',
    email: 'your.email@example.com',
    subject: 'Internship opportunity / Project inquiry',
    message: "Hi Sanjana, I'd like to connect about...",
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: RESUME_URL, external: true },
];
