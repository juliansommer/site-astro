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
  SiPostgresql,
  SiPython,
  SiReact,
  SiSolid,
  SiSqlite,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiAmazonaws,
} from "solid-icons/si"

import imgurScanCover from "@/assets/imgur-scan.webp"
import promptsCover from "@/assets/prompts.webp"
import sydneySuburbsCover from "@/assets/sydney-suburbs.webp"
import workoutTrackCover from "@/assets/workout-track.webp"
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
    company: "Mulga",
    description: [
      "●	Core contributor to Spinifex, an open-source cloud platform that recreates AWS on bare metal",
      "●	Built 100+ AWS-compatible API actions from scratch across EC2, IAM, RDS, IMDS, STS",
      "●	Developed a React and TypeScript AWS management console with login using STS temporary credentials",
      "●	Wrote single-node and multi-node E2E test suites covering every implemented command",
      "●	Set up GitHub Actions pipelines for testing, linting and security scanning",
    ],
    tech: [SiGo, SiTypescript, SiReact, SiPython, SiAmazonaws, SiDocker],
  },
  {
    year: "Sep 2023 - Dec 2024",
    role: "Junior Full Stack Developer",
    company: "Metatrail",
    description: [
      "●	Cut JavaScript bundle size by 40% (500 KB to 300 KB) and raised the Lighthouse performance score by 50",
      "●	Built a Go tool that detects a website's tech stack from its DOM and JavaScript signatures",
      "●	Wrote a Python scraper that collected metadata and icons from one million domains",
      "●	Generated SEO pages for the most popular categories and vendors with Next.js and TypeScript",
      "●	Automated Docker image builds and publishing to GitHub Packages with GitHub Actions",
    ],
    tech: [SiGo, SiTypescript, SiReact, SiNextdotjs, SiPython, SiDocker],
  },
]

export const education: Experience[] = [
  {
    year: "Expected Graduation Nov 2027",
    role: "Bachelor of Computing Science",
    company: "University of Technology Sydney",
    description: [
      "●	Major: Enterprise Software Development",
      "●	GPA: 6.42/7.00",
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
    role: "Certificate 3 in Information Technology (ICT30120)",
    company: "TAFE Queensland",
    description: ["●	Major: Cybersecurity"],
    tech: [SiPython],
  },
]

export const projects: Project[] = [
  {
    title: "Sydney Suburbs",
    tech: [SiSolid, SiTypescript, SiPostgresql, SiVercel],
    link: "https://github.com/juliansommer/sydney-suburbs",
    cover: sydneySuburbsCover.src,
    background: "bg-sky-500",
  },
  {
    title: "Workout Track",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiPython, SiSupabase],
    link: "https://github.com/juliansommer/workout-track",
    cover: workoutTrackCover.src,
    background: "bg-sky-500",
  },
  {
    title: "Prompts",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiMongodb],
    link: "https://github.com/juliansommer/prompts",
    cover: promptsCover.src,
    background: "bg-purple-500",
  },
  {
    title: "Imgur Scan",
    tech: [SiPython],
    link: "https://github.com/juliansommer/obsidian-imgur-scan",
    cover: imgurScanCover.src,
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
