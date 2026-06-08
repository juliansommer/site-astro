import { FaBrandsJava } from "solid-icons/fa"
import {
  SiDocker,
  SiFlask,
  SiGithub,
  SiGo,
  SiHtml5,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTypescript,
  SiAmazonaws,
} from "solid-icons/si"

import type {
  Email,
  Experience,
  Project,
  Skill,
  Social,
} from "@/types/index.ts"

export const experience: Experience[] = [
  {
    year: "Nov 2025 - Present",
    role: "Junior Systems Engineer",
    company: "Mulga Defense Corporation",
    description: [
      "●	Built 50+ AWS compatible API actions from scratch",
      "●	Built a feature compliant AWS service management dashboard",
      "●	Implemented comprehensive E2E test suite covering all AWS commands",
      "●	Created CI pipelines for testing, linting and security",
      "●	Improved code coverage by 100%",
    ],
    tech: [
      SiGo,
      SiTypescript,
      SiReact,
      SiPython,
      SiAmazonaws,
      SiDocker,
    ],
  },
  {
    year: "Sep 2023 - Dec 2024",
    role: "Junior Full Stack Developer",
    company: "Metatrail",
    description: [
      "●	Optimized SEO, performance (50 increase on Lighthouse), JavaScript bundle size (500kb to 300kb) on the frontend",
      "●	Created a Go program to parse the DOM of websites against technologies matches using JavaScript",
      "●	Created Python script to scrape and store website metadata and icons from a million domains",
      "●	Used Next.js with TypeScript to dynamically create web pages for the most popular categories and vendors",
      "●	Used GitHub Actions with Docker to containerize the website and upload the image to GitHub Packages for CI/CD",
    ],
    tech: [
      SiGo,
      SiTypescript,
      SiReact,
      SiNextdotjs,
      SiPython,
      SiDocker,
    ],
  },
]

export const education: Experience[] = [
  {
    year: "Expected Graduation Nov 2027",
    role: "Bachelor of Computing Science",
    company: "University of Technology Sydney",
    description: [
      "●	Major: Enterprise Software Development",
      "●	GPA: 6.50/7.00",
    ],
    tech: [SiPython, FaBrandsJava],
  },
  {
    year: "Jan 2020 - Nov 2024",
    role: "High School Diploma",
    company: "Good Shepherd Lutheran College",
    description: [
      "●	Grade: 92.10 ATAR",
      "●	Top of Grade: Digital Solutions, General Mathematics",
    ],
    tech: [SiPython, SiSqlite, SiFlask, SiHtml5],
  },
  {
    year: "Jan 2022 - Sep 2023",
    role: "Certificate 3 of Information Technology ICT30120",
    company: "TAFE Queensland",
    description: [
      "●	Major: Cybersecurity",
    ],
    tech: [SiPython],
  },
]

export const projects: Project[] = [
  {
    title: "Workout Track",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiPython, SiSupabase],
    link: "https://github.com/juliansommer/workout-track",
    cover: "images/workout-track.webp",
    background: "bg-sky-500",
  },
  {
    title: "Prompts",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiMongodb],
    link: "https://github.com/juliansommer/prompts",
    cover: "images/prompts.webp",
    background: "bg-sky-500",
  },
  {
    title: "GitHub Activity",
    tech: [SiGo],
    link: "https://github.com/juliansommer/github-activity",
    cover: "images/github-activity.webp",
    background: "bg-purple-500",
  },
  {
    title: "Imgur Scan",
    tech: [SiPython],
    link: "https://github.com/juliansommer/obsidian-imgur-scan",
    cover: "images/imgur-scan.webp",
    background: "bg-purple-500",
  },
]

export const skills: Skill[] = [
  {
    text: "Go",
    Icon: SiGo,
  },
  {
    text: "TypeScript",
    Icon: SiTypescript,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Python",
    Icon: SiPython,
  },
  {
    text: "AWS",
    Icon: SiAmazonaws,
  },
  {
    text: "Docker",
    Icon: SiDocker,
  },
]

export const socials: Social[] = [
  {
    link: "https://github.com/juliansommer",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://www.linkedin.com/in/juliansommer",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
]

export const email: Email = "hi@julians.au"
