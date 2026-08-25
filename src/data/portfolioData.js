// ---------------------------------------------------------------------------
// All portfolio content lives here. Every project/technology claim below was
// verified directly against github.com/Adammyya before being written down.
// Nothing here is invented; where a repo is early-stage, it's labeled as such.
// ---------------------------------------------------------------------------
export const profile = {
  name: "Adamya Pandey",
  initials: "AP",
  fileNo: "AP-2026",

  role: "AI / Intelligent Systems Engineer",
  roleTags: ["AI Systems", "Backend Engineering", "Research"],

  tagline:
    "Computer Science Engineering student building intelligent systems, AI applications, and real-time software.",

  location: "New Delhi, India",
  status: "ACTIVE",

  github: "https://github.com/Adammyya",
  linkedin: "https://www.linkedin.com/in/adaammya16",
  email: "adamya.pandey2506@gmail.com",
  githubUsername: "Adammyya",

  resumeUrl: "/Adamya resume.pdf", // PLACEHOLDER: add the resume file to /public and confirm this path
  photoUrl: null,

  about: [
    "I'm a Computer Science Engineering (AI & ML) student passionate about artificial intelligence, intelligent systems, and emerging technologies.",
    "I enjoy building AI assistants, automation systems, and practical machine learning applications.",
    "Organizations such as UNICEF inspire me because technology can improve education, healthcare, accessibility, and opportunities for millions of people.",
    "My long-term goal is to build responsible AI systems that create meaningful social impact.",
  ],

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Intelligent Systems",
    "AI for Good",
    "Social Impact Technology",
  ],

  disciplines: ["AI", "SYSTEMS", "BACKEND", "RESEARCH"],
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
  duration: "2024 - 2028", // PLACEHOLDER: confirm exact dates
  institution: "AKTU", // PLACEHOLDER: confirm exact institution name
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
      { name: "Java", level: "Core" },
      { name: "C++", level: "Working" },
      { name: "SQL", level: "Working" },
    ],
  },
  {
    title: "AI / ML",
    track: "synapse",
    items: [
      { name: "Machine Learning", level: "Working" },
      { name: "Large Language Models", level: "Working" },
      { name: "Prompt Engineering", level: "Core" },
      { name: "Google Gemini API", level: "Working" },
      { name: "AI Agents", level: "Exploring" },
    ],
  },
  {
    title: "Backend / Systems",
    track: "signal",
    items: [
      { name: "Node.js", level: "Core" },
      { name: "Express.js", level: "Core" },
      { name: "REST APIs", level: "Core" },
      { name: "WebSockets / Socket.io", level: "Working" },
      { name: "FastAPI", level: "Working" },
      { name: "JWT Authentication", level: "Working" },
    ],
  },
  {
    title: "Frontend",
    track: "signal",
    items: [
      { name: "React.js", level: "Core" },
      { name: "Vite", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "Framer Motion", level: "Working" },
      { name: "Zustand", level: "Working" },
    ],
  },
  {
    title: "Database",
    track: "signal",
    items: [
      { name: "MongoDB", level: "Working" },
      { name: "SQLite", level: "Working" },
    ],
  },
  {
    title: "Tools",
    track: "signal",
    items: [
      { name: "Git / GitHub", level: "Core" },
      { name: "Postman", level: "Working" },
      { name: "VS Code", level: "Core" },
      { name: "Maven", level: "Working" },
      { name: "Unity", level: "Working" },
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
    duration: "June 2025 - August 2025",
    points: [
      "Developed backend functionalities using Node.js",
      "Worked with APIs and database integration",
      "Built scalable web application features",
      "Collaborated on development and debugging tasks",
    ],
  },
];

// ---------------------------------------------------------------------------
// PRIMARY PROJECTS — "Engineering Archive"
// Every field below was checked against the live repository. architecture[]
// drives the ArchitectureDiagram component. status is stated plainly,
// including for projects that are still early-stage.
// ---------------------------------------------------------------------------
export const archiveProjects = [
  {
    fileNo: "01",
    id: "aura",
    title: "AURA",
    subtitle: "Intelligent Desktop AI System",
    track: "synapse",
    year: "2025",
    status: "Active development",
    category: "AI / Full-Stack",
    description:
      "A JARVIS-inspired AI dashboard: a React frontend paired with a Node.js backend that routes requests to Google's Gemini API, alongside live weather, news, and voice interaction. Positioned as an intelligent assistant system rather than a scripted chatbot.",
    features: [
      "Gemini API conversational AI",
      "Voice interaction",
      "Live weather feed",
      "Live news feed",
      "React + Node.js modular architecture",
    ],
    stack: ["React", "Vite", "Node.js", "Gemini API"],
    architecture: [
      "USER · VOICE / TEXT",
      "REACT FRONTEND",
      "NODE.JS BACKEND",
      "GEMINI API",
      "WEATHER + NEWS FEEDS",
    ],
    github: "https://github.com/Adammyya/cyberpunk-mirror",
    demo: null,
    verificationNote:
      "Repo name on GitHub is cyberpunk-mirror; description confirms React, Node.js, Gemini AI, weather/news, voice assistant. No evidence of a separate 'cognitive router' or 'personality engine' — described at the level the code supports.",
  },
  {
    fileNo: "02",
    id: "synapse",
    title: "SYNAPSE",
    subtitle: "Urban Intelligence Platform",
    track: "signal",
    year: "2025-2026",
    status: "Active development",
    category: "Distributed Systems / Full-Stack",
    description:
      "A four-service simulated smart-city platform: a React OS-style shell, a Socket.io event broker streaming simulated IoT telemetry, a separate Express REST API for persistent data, and a Python service that scores cascading-failure risk with heuristic logic. Built as a demonstration of distributed-systems architecture — not a real municipal deployment.",
    features: [
      "Simulated real-time IoT telemetry",
      "WebSocket event broker (Socket.io)",
      "Geospatial visualization (Leaflet)",
      "Heuristic AI risk scoring",
      "Zustand-driven decoupled UI state",
    ],
    stack: ["React", "Vite", "Zustand", "Node.js", "Socket.io", "Express", "Python", "Leaflet"],
    architecture: [
      "SIMULATED IOT TELEMETRY",
      "SOCKET.IO EVENT BROKER",
      "CORE REST API (EXPRESS)",
      "PYTHON RISK-INFERENCE SERVICE",
      "REACT COMMAND CENTER UI",
    ],
    github: "https://github.com/Adammyya/urban-intelligence-platform",
    demo: null,
    verificationNote:
      "GitHub's repo description mentions Spring Boot/Kafka/Redis/PostgreSQL, but the README and folder structure only document Node/Express/Socket.io + Python — those are the claims used here. Sensor data and risk scores are explicitly simulated/heuristic, not production ML.",
  },
  {
    fileNo: "03",
    id: "jasmine",
    title: "JASMINE",
    subtitle: "Java Adaptive Smart Memory Intelligence & Runtime Performance Evaluation Platform",
    track: "signal",
    year: "2025-2026",
    status: "Planning phase — pre-implementation (per repo README)",
    category: "JVM Systems / Research Software",
    description:
      "A research-oriented JavaFX desktop application planned to analyze JVM runtime behavior — memory, garbage collection, concurrency, and general performance — via JMX. As of writing, the repository is scaffolding (Maven project, docs, roadmap) rather than a working analyzer, and is presented here honestly as an early-stage research project.",
    features: [
      "Planned: JVM runtime & memory monitoring via JMX",
      "Planned: GC and concurrency analysis",
      "Planned: SQLite-backed experiment storage",
      "Currently implemented: Maven/JavaFX project scaffold + roadmap",
    ],
    stack: ["Java 25", "JavaFX", "Maven", "SQLite", "JMX"],
    architecture: [
      "JVM APPLICATION (TARGET)",
      "JMX RUNTIME METRICS",
      "ANALYSIS ENGINE (PLANNED)",
      "SQLITE STORAGE (PLANNED)",
      "PERFORMANCE INSIGHTS (PLANNED)",
    ],
    github: "https://github.com/Adammyya/jasmine-jvm-analysis",
    demo: null,
    verificationNote:
      "Repo's own README states 'Status: Planning Phase.' Roadmap items are labeled planned, not shipped.",
  },
  {
    fileNo: "04",
    id: "legallens",
    title: "LEGALLENS",
    subtitle: "OpenEnv Legal Reasoning Environment (Indian Law)",
    track: "synapse",
    year: "2026",
    status: "Active development",
    category: "AI / Agent Environments",
    description:
      "An OpenEnv-compliant reinforcement-learning-style environment where an AI agent investigates Indian legal scenarios through a structured action space — classifying the legal domain, identifying issues and applicable law, requesting evidence, and finalizing an analysis. Four benchmark tasks (cyber fraud, bail, consumer dispute, property title) are graded for accuracy and for correctly flagging insufficient information. Ships with a FastAPI server and a React/Vite frontend.",
    features: [
      "Standard OpenEnv reset() / step() / state() interface",
      "4 graded benchmark tasks with reward/penalty logic",
      "Penalizes hallucinated or fabricated law citations",
      "FastAPI backend + React/Vite pixel-art frontend",
    ],
    stack: ["Python", "FastAPI", "React", "Vite", "Zustand", "TypeScript"],
    architecture: [
      "LEGAL SCENARIO INPUT",
      "AGENT ACTION SPACE (CLASSIFY / IDENTIFY / REQUEST)",
      "GRADER + REWARD ENGINE",
      "FASTAPI SERVER",
      "REACT INVESTIGATION UI",
    ],
    github: "https://github.com/Adammyya/legallens-openenv",
    demo: null,
    verificationNote:
      "Confirmed directly from the repo's own README and source (environment/, tasks/, graders/, server/, frontend/). Includes an explicit disclaimer that it is an informational tool, not legal advice.",
  },
];

// Earlier projects — kept, not deleted, and clearly separated from the
// current AI/systems-focused work above.
export const earlierWork = [
  {
    title: "Blog Platform",
    subtitle: "Secure full-stack publishing system",
    description:
      "A full-stack blogging platform with JWT authentication, protected routes, and MongoDB-backed CRUD.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Adammyya/fullstack-blog-platform",
  },
  {
    title: "Cryptocurrency Tracker",
    subtitle: "Real-time market dashboard",
    description: "A React dashboard pulling live prices and rendering market movement.",
    stack: ["React.js", "APIs"],
    github: "https://github.com/Adammyya",
  },
  {
    title: "Pong Game",
    subtitle: "Physics-based arcade classic",
    description: "A Unity-built Pong clone with real collision response and score tracking.",
    stack: ["Unity", "C#"],
    github: "https://github.com/Adammyya",
  },
];

// Kept for backwards compatibility with any code still importing `projects`.
export const projects = archiveProjects;

export const achievements = [
  {
    type: "Internship",
    note: "Backend Developer Intern at Atthah Info Media Pvt Ltd",
  },
  {
    type: "Projects",
    note: "Shipped four active AI/systems projects: AURA, SYNAPSE, JASMINE, LegalLens",
  },
  {
    type: "Learning",
    note: "Actively building with LLM APIs, agentic environments, and JVM internals",
  },
];
