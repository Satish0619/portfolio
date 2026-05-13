import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Database,
  FileCode2,
  Github,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
  PaintBucket,
  Package,
  Send,
  Server,
  Smartphone,
  Terminal,
  Workflow,
} from "lucide-react";

export const SITE = {
  name: "Satish Mungusmare",
  role: "Frontend Developer",
  email: "Satish.mungusmare@accenture.com",
  phone: "+91 78128 22531",
  phoneRaw: "+917812822531",
  location: "India",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Satish0619",
    githubHandle: "@Satish0619",
    linkedin: "https://www.linkedin.com/in/satish-mungusmare-611628211/",
    linkedinHandle: "/in/satish-mungusmare",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_ROLES = [
  "Frontend Developer",
  "React.js Developer",
  "Next.js Developer",
  "JavaScript Developer",
];

export type Skill = {
  name: string;
  level: number;
  icon: LucideIcon;
};

export const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: "Languages & Frontend",
    items: [
      { name: "JavaScript", level: 92, icon: Braces },
      { name: "HTML5", level: 95, icon: FileCode2 },
      { name: "CSS3", level: 92, icon: PaintBucket },
      { name: "React.js", level: 92, icon: Atom },
      { name: "Next.js", level: 88, icon: Layers },
      { name: "Tailwind CSS", level: 90, icon: PaintBucket },
      { name: "Responsive Design", level: 92, icon: Smartphone },
    ],
  },
  {
    category: "Backend, Auth & Data",
    items: [
      { name: "Node.js (basic)", level: 65, icon: Server },
      { name: "Express.js", level: 65, icon: Workflow },
      { name: "REST APIs", level: 88, icon: Globe },
      { name: "SSO / OAuth", level: 82, icon: KeyRound },
      { name: "MongoDB (familiar)", level: 60, icon: Database },
      { name: "MySQL (basic)", level: 55, icon: Database },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", level: 90, icon: GitBranch },
      { name: "GitHub", level: 90, icon: Github },
      { name: "Postman", level: 85, icon: Send },
      { name: "NPM", level: 88, icon: Package },
      { name: "Adobe Journey Optimizer", level: 80, icon: Workflow },
      { name: "VS Code", level: 95, icon: Terminal },
    ],
  },
];

export type ExperienceGroup = {
  title: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  location: string;
  groups: ExperienceGroup[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Accenture",
    role: "Custom Software Developer",
    duration: "Feb 2023 – Present",
    location: "India",
    groups: [
      {
        title: "Frontend Engineering",
        bullets: [
          "Led frontend development of an AI-powered agent application deployed across Web and Microsoft Teams.",
          "Implemented Single Sign-On (SSO) using OAuth-based authentication for secure, seamless cross-platform access.",
          "Built scalable, high-performance UI components using React.js and Next.js.",
          "Integrated frontend components with backend APIs to support real-time, AI-driven interactions.",
          "Collaborated with cross-functional teams (backend, product, QA) to ensure smooth delivery and system compatibility.",
          "Focused on performance optimization, usability, and enterprise-grade security standards.",
        ],
      },
      {
        title: "Marketing Automation — Adobe Journey Optimizer",
        bullets: [
          "Created and managed customer audiences based on business requirements.",
          "Designed and executed customer journeys for targeted marketing campaigns.",
          "Worked with real-time data triggers and segmentation logic.",
          "Contributed to campaign optimization and improved engagement workflows.",
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: "Web" | "App" | "UI";
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Easy Learn App",
    description:
      "A structured learning platform with chapter-wise content, quizzes, result tracking, a leaderboard, and a review system — built with Next.js routing, API integration, and clean UI state management.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    category: "Web",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "AI Agent — Web & Microsoft Teams",
    description:
      "Enterprise AI-powered agent application with SSO (OAuth) authentication and real-time AI-driven interactions, deployed across Web and Microsoft Teams (Accenture, NDA).",
    tech: ["React.js", "Next.js", "OAuth / SSO", "REST APIs"],
    category: "Web",
    accent: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "Adobe Journey Optimizer Campaigns",
    description:
      "Designed and executed customer journeys, audience segmentation, and real-time triggers for targeted marketing campaigns — optimizing engagement and conversion workflows.",
    tech: ["Adobe Journey Optimizer", "Segmentation", "Real-time Triggers"],
    category: "Web",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — a fully responsive, animated developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demo: "/",
    category: "Web",
    accent: "from-indigo-400 to-cyan-400",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "AI-Powered Enterprise App",
    description:
      "Led frontend delivery of an AI agent application across Web and Microsoft Teams with secure OAuth-based SSO — adopted across enterprise users.",
    icon: "trophy",
  },
  {
    title: "Innovation Award",
    description:
      "Recognized for designing a useful product crafted from waste materials — celebrating sustainability and creative problem-solving.",
    icon: "award",
  },
  {
    title: "Professional Certifications",
    description:
      "Completed full-stack training at Navgurukul and multiple professional learning certifications across modern frontend tooling.",
    icon: "graduation",
  },
];

export const STATS = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Skills in Stack", value: 18, suffix: "+" },
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Enterprise Apps", value: 2, suffix: "+" },
];
