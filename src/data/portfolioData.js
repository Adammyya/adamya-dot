// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update copy, links,
// and project details — no need to touch component code for content changes.
// Items marked PLACEHOLDER should be replaced with real info before deploying.
// ---------------------------------------------------------------------------
export const profile = {
  name: "Adamya Pandey",
  initials: "AP",

  role: "AI Engineer in Training",

  roleTags: [
  "AI Explorer",
  "Builder",
  "Future Researcher"
  ],

 tagline:
"Exploring artificial intelligence, intelligent systems, and technology that creates meaningful impact for people.",

  location: "New Delhi, India",

  github: "https://github.com/Adammyya",
  linkedin: "https://www.linkedin.com/in/adaammya16",
  email: "adamya.pandey2506@gmail.com",

  githubUsername: "Adammyya",

  resumeUrl: "/Adamya resume.pdf", // PLACEHOLDER: Add your resume file to the public folder and update this path
  photoUrl: null,

  about: [
    "I'm a Computer Science Engineering (AI & ML) student passionate about artificial intelligence, intelligent systems, and emerging technologies.",
    "I enjoy building AI assistants, automation systems, and practical machine learning applications.",
    "Organizations such as UNICEF inspire me because technology can improve education, healthcare, accessibility, and opportunities for millions of people.",
    "My long-term goal is to build responsible AI systems that create meaningful social impact."
  ],

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Intelligent Systems",
    "AI for Good",
    "Social Impact Technology"
  ]
};

export const bootLines = [
  { text: "booting adamya.os", delay: 0 },
  { text: "loading curiosity.engine", delay: 1 },
  { text: "initializing ai & intelligent systems", delay: 2 },
  { text: "connecting ideas to impact", delay: 3 },
  { text: "mission: build technology that matters", delay: 4 },
  { text: "ready.", delay: 5 },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science Engineering (AI & ML)",
  duration: "2024 - 2028", // PLACEHOLDER
  institution: "AKTU", // PLACEHOLDER
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Organization & Architecture",
    "Discrete Mathematics",
    "Artificial Intelligence",
    "Machine Learning",
    "Calculus & Linear Algebra",
    "Probability & Statistics",
    "Digital Electronics",
    "Basic Mechanical Engineering",
  ],
};

// track: "signal" = systems / backend / engineering, "synapse" = AI / ML
export const skillGroups = [
  {
    title: "Languages",
    track: "signal",
    items: [
      { name: "Python", level: "Core" },
      { name: "JavaScript", level: "Core" },
      {name: "C++", level: "Working" },
      {name: "Java", level: "Core" },
    ],
  },
  {
    title: "Frontend",
    track: "signal",
    items: [
      { name: "React.js", level: "Core" },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
    ],
  },
  {
    title: "Backend",
    track: "signal",
    items: [
      { name: "Node.js", level: "Core" },
      { name: "Express.js", level: "Core" },
    ],
  },
  {
    title: "Database",
    track: "signal",
    items: [{ name: "MongoDB", level: "Working" }],
  },
  {
    title: "Tools & Technologies",
    track: "signal",
    items: [
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "REST APIs", level: "Core" },
      { name: "JWT Authentication", level: "Working" },
      { name: "Postman", level: "Working" },
      { name: "VS Code", level: "Core" },
      { name: "Unity", level: "Working" },
    ],
  },
  {
    title: "AI & Emerging Tech",
    track: "synapse",
    items: [
      { name: "Machine Learning", level: "Working" },
      { name: "Large Language Models", level: "Working" },
      { name: "Prompt Engineering", level: "Core" },
      { name: "AI Agents", level: "Exploring" },
      { name: "Quantum Computing", level: "Exploring" },
    ],
  },
];

export const levelMeta = {
  Core: { width: "92%" },
  Working: { width: "65%" },
  Exploring: { width: "35%" },
};

export const experience = [
  {
    role: "Backend Developer Intern",
    org: "Atthah Info Media Pvt Ltd",
    duration: "June 2025 - August 2025", // PLACEHOLDER
    points: [
      "Developed backend functionalities using Node.js",
      "Worked with APIs and database integration",
      "Built scalable web application features",
      "Collaborated on development and debugging tasks",
    ],
  },
];

export const projects = [
  {
    title: "AI Assistant",
    subtitle: "Friday / Jarvis-inspired desktop assistant",
    track: "synapse",
    category: "AI / Full-Stack",
    description:
      "An intelligent desktop assistant inspired by futuristic AI systems — handling voice interaction, live information lookup, and system monitoring through a modular, multi-component architecture.",
    features: [
      "Voice interaction",
      "Weather information",
      "News updates",
      "System monitoring",
      "AI-powered responses",
      "Multi-component architecture",
    ],
    stack: ["React", "Node.js", "APIs", "AI Integration"],
    github: "https://github.com/Adammyya",
    demo: null,
  },
  {
    title: "Blog Platform",
    subtitle: "Secure full-stack publishing system",
    track: "signal",
    category: "Full-Stack",
    description:
      "A secure full-stack blogging platform with complete authentication and user management — built to handle real user accounts and content, not just a CRUD demo.",
    features: [
      "JWT Authentication",
      "User login & registration",
      "Protected routes",
      "CRUD operations",
      "MongoDB integration",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Adammyya",
    demo: null,
  },
  {
    title: "Cryptocurrency Tracker",
    subtitle: "Real-time market dashboard",
    track: "signal",
    category: "Frontend",
    description:
      "A real-time cryptocurrency monitoring dashboard that pulls live prices and renders market movement in a clean, responsive interface.",
    features: ["Live crypto prices", "Market data visualization", "Responsive UI", "API integration"],
    stack: ["React.js", "APIs"],
    github: "https://github.com/Adammyya",
    demo: null,
  },
  {
    title: "Pong Game",
    subtitle: "Physics-based arcade classic",
    track: "signal",
    category: "Game Dev",
    description:
      "A physics-based Pong game built in Unity, with real collision response, score tracking, and clean game-state management under the hood.",
    features: ["Score tracking", "Physics-based gameplay", "Game state management"],
    stack: ["Unity", "C#"],
    github: "https://github.com/Adammyya",
    demo: null,
  },
];

// Achievements — placeholders by design, per the brief. Replace as you earn them.
export const achievements = [
  {
    type: "Internship",
    note: "Backend Developer Intern at Atthah Info Media Pvt Ltd"
  },
  {
    type: "Projects",
    note: "Built multiple full-stack and AI-focused applications"
  },
  {
    type: "Hackathons",
    note: "Participated in university and national-level hackathons"
  },
  {
    type: "Learning",
    note: "Actively exploring LLMs, AI Agents, and Quantum Computing"
  }
];
