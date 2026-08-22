export const profile = {
  name: "Kunal MK",
  title: "AI/ML & Software Engineer",
  tagline: "Building intelligent systems across AI, software, and emerging technologies.",
  location: "Mysore, Karnataka, India",
  education: "PES College of Engineering, Mandya",
  graduation: "2027",
  cgpa: "8.79",
  focus: ["AI/ML", "Software Development", "Blockchain", "MERN Stack"],
  github: "https://github.com/KunalMK25",
  linkedin: "https://www.linkedin.com/in/kunal-m-k-256153171/",
  email: "kunalmk2005@gmail.com",
  resume: "/resume/Kunal_MK_Resume.pdf",
};

export type Project = {
  index: string;
  title: string;
  stack: string[];
  description: string;
  github: string | null;
  status?: string;
  year?: string;
};

export const selectedProjects: Project[] = [
  {
    index: "01",
    title: "Flood Risk Zonation",
    stack: ["Python", "GeoPandas", "Streamlit", "Folium", "Random Forest"],
    description:
      "A geospatial machine-learning system for flood-risk zonation using GIS and ML techniques, built on satellite elevation data.",
    github: "https://github.com/KunalMK25/flood-risk-zonation",
  },
  {
    index: "02",
    title: "MetroMeet AI",
    stack: ["Dijkstra's Algorithm", "Graph Theory", "Node.js", "Express.js"],
    description:
      "A hangout-planning system that uses metro-station distances and Dijkstra-based routing to evaluate travel fairness between participants.",
    github: "https://github.com/KunalMK25/metromeet-ai",
  },
  {
    index: "03",
    title: "ComPawNion",
    stack: ["C#", ".NET 8", "WPF", "SkiaSharp", "Clean Architecture"],
    description:
      "A Windows AI pet companion built with a custom SkiaSharp rendering pipeline and a Clean Architecture desktop codebase.",
    github: null,
    status: "In development — no public repo yet",
  },
  {
    index: "04",
    title: "ShieldChain",
    stack: ["Stellar", "Soroban", "Smart Contracts", "AI Agents"],
    description:
      "A blockchain-focused project involving AI-assisted smart-contract analysis on the Stellar network.",
    github: "https://github.com/KunalMK25/shieldchain",
  },
];

export const additionalProjects: Project[] = [
  {
    index: "01",
    title: "EduLMS",
    year: "2025",
    stack: ["MongoDB", "Node.js", "Express.js", "React.js", "JWT", "TailwindCSS"],
    description:
      "A full-stack learning management system with JWT-based auth and role-based access across Student, Instructor, and Admin roles. Modular Express APIs and MongoDB models support course creation, enrollments, lessons, quizzes, and assignments.",
    github: "https://github.com/KunalMK25/EduLMS",
  },
  {
    index: "02",
    title: "ClaraMed AI",
    year: "2026",
    stack: ["Python", "LangChain", "Groq", "Llama 3.1"],
    description:
      "An AI-powered medical information assistant using LLMs to provide accessible, conversational responses and analyze health-related information.",
    github: "https://github.com/KunalMK25/claramed",
  },
  {
    index: "03",
    title: "ThreadCrawl",
    year: "2026",
    stack: ["Python", "Multithreading"],
    description:
      "A concurrent Python web crawler built for high-throughput crawling using thread pools, a producer-consumer architecture, and thread-safe shared state.",
    github: "https://github.com/KunalMK25/threadcrawl",
  },
];

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / Machine Learning",
    skills: [
      "LLMs", "LangChain", "RAG", "Multi-Agent Systems", "Prompt Engineering",
      "Hugging Face", "Scikit-learn", "LightGBM", "Random Forest", "SVM",
      "NumPy", "Pandas", "Matplotlib", "FAISS", "ChromaDB", "Groq API",
    ],
  },
  {
    label: "Programming & CS Fundamentals",
    skills: [
      "Python", "Java", "C++", "C", "SQL", "Data Structures & Algorithms",
      "Object-Oriented Programming", "System Design", "DBMS",
      "Operating Systems", "Computer Networks",
    ],
  },
  {
    label: "Backend & APIs",
    skills: ["REST APIs", "FastAPI", "Streamlit", "JWT Authentication"],
  },
  {
    label: "Data & Geospatial",
    skills: ["GeoPandas", "Rasterio", "Folium", "NASA SRTM"],
  },
  {
    label: "Systems",
    skills: ["C#", ".NET 8", "WPF", "SkiaSharp", "Clean Architecture"],
  },
  {
    label: "Blockchain",
    skills: ["Stellar", "Soroban", "Smart Contracts", "IPFS", "SHA-256", "On-chain Data Anchoring"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Google Cloud", "Firebase", "Git", "GitHub", "GitHub Actions (CI/CD)", "Vercel", "Render"],
  },
  {
    label: "Frontend & Full Stack",
    skills: [
      "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "React.js", "Node.js",
      "Express.js", "MongoDB", "Mongoose",
    ],
  },
];

export type LeadershipEntry = {
  title: string;
  org: string;
  period?: string;
  description: string;
  photo?: string;
  isLogo?: boolean;
};

export const leadership: LeadershipEntry[] = [
  {
    title: "Google Developer Groups (GDG) on Campus",
    org: "Lead",
    description:
      "Selected as Lead for GDG on Campus at PES College of Engineering, Mandya.",
    photo: "/photos/gdg-organizer.jpg",
  },
  {
    title: "Student Placement Coordinator",
    org: "Dept. of Training & Placement, PESCE Mandya",
    description:
      "Coordinates placement activities and communication between recruiters and students.",
    photo: "/photos/placement-coordinator.jpg",
  },
  {
    title: "Departmental Club Head",
    org: "Matrixz CSE",
    description:
      "Founded and leads a departmental technical club, guiding its vision and initiatives.",
    photo: "/photos/club-head.jpg",
  },
  {
    title: "Institution Innovation Council (IIC)",
    org: "Member",
    description: "Member of the Institution Innovation Council at PESCE Mandya.",
    photo: "/photos/iic-logo.png",
    isLogo: true,
  },
];

export type Achievement = { title: string; description: string };

export const achievements: Achievement[] = [
  {
    title: "InnoVista",
    description: "Won a college-level hackathon.",
  },
  {
    title: "Hack With Infy 2026",
    description: "Progressed through the competitive rounds to the final stage.",
  },
  {
    title: "Flipkart GRiD 8.0",
    description: "Progressed through multiple rounds, reaching Round 3.",
  },
  {
    title: "Competitive Programming",
    description: "Active competitive programmer on LeetCode.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
