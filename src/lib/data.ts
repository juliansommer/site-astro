import type { Email, Entry, Project, Skill, Social } from "@/types/index.ts"

export const experience: Entry[] = [
  {
    organisation: "Mulga",
    role: "Junior Systems Engineer",
    date: "Nov 2025 – Present",
    bullets: [
      "Core contributor to Spinifex, an open-source cloud platform that recreates AWS on bare metal",
      "Built 100+ AWS-compatible API actions from scratch across EC2, IAM, RDS, IMDS, STS",
      "Developed a React and TypeScript AWS management console with login using STS temporary credentials",
      "Wrote single-node and multi-node E2E test suites covering every implemented command",
      "Set up GitHub Actions pipelines for testing, linting and security scanning",
    ],
    tech: ["Go", "TypeScript", "React", "Python", "AWS", "Docker"],
  },
  {
    organisation: "Metatrail",
    role: "Junior Full Stack Developer",
    date: "Sep 2023 – Dec 2024",
    bullets: [
      "Cut JavaScript bundle size by 40% (500 KB to 300 KB) and raised the Lighthouse performance score by 50",
      "Built a Go tool that detects a website's tech stack from its DOM and JavaScript signatures",
      "Wrote a Python scraper that collected metadata and icons from one million domains",
      "Generated SEO pages for the most popular categories and vendors with Next.js and TypeScript",
      "Automated Docker image builds and publishing to GitHub Packages with GitHub Actions",
    ],
    tech: ["Go", "TypeScript", "React", "Next.js", "Python", "Docker"],
  },
]

export const education: Entry[] = [
  {
    organisation: "University of Technology Sydney",
    role: "Bachelor of Computing Science",
    date: "Expected Nov 2027",
    bullets: ["Major: Enterprise Software Development", "GPA: 6.42/7.00"],
  },
  {
    organisation: "Good Shepherd Lutheran College",
    role: "High School Diploma",
    date: "Jan 2020 – Nov 2024",
    bullets: [
      "Grade: 92.10 ATAR",
      "Top of Grade: Digital Solutions, General Mathematics",
    ],
  },
  {
    organisation: "TAFE Queensland",
    role: "Certificate 3 in Information Technology (ICT30120)",
    date: "Jan 2022 – Sep 2023",
    bullets: ["Major: Cybersecurity"],
  },
]

export const projects: Project[] = [
  {
    title: "ACOA AI Sales Agent (Freelance)",
    description:
      "AI SMS agent that texts every new CRM lead within 3 minutes, qualifies them and hands hot leads to staff.",
    tech: ["Go", "React", "TypeScript", "PostgreSQL", "AWS", "Python"],
    bullets: [
      "Integrated Zoho CRM webhooks and Twilio SMS, writing lead data from the conversation back to the CRM",
      "Grounded the AI in a curated knowledge base with Bedrock Guardrails so it can't invent prices or course facts",
      "Deployed on AWS (ECS Fargate, RDS, Bedrock) with CloudWatch alarms, budgets and data kept in Australia",
      "Created a React web console where staff can read conversations, take over from the AI and view metrics",
    ],
  },
  {
    title: "Sydney Suburbs",
    description:
      "Web app for tracking visits to all 650 Sydney suburbs, with notes, visit dates and progress by council.",
    tech: ["Solid", "TypeScript", "PostgreSQL", "Vercel"],
    link: "https://github.com/juliansommer/sydney-suburbs",
    bullets: [
      "Added suburb search and Google/GitHub sign-in to sync visits across devices",
      "Wrote a data pipeline merging ABS Census, crime, tree canopy and Wikidata into suburb profiles",
      "Drew a zoomable d3 map with heatmaps for income, rent and crime, and NRL club territories",
    ],
  },
]

export const skills: Skill[] = [
  { name: "Go", icon: "go" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Python", icon: "python" },
  { name: "Solid", icon: "solid" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Terraform", icon: "terraform" },
]

export const socials: Social[] = [
  {
    link: "https://github.com/juliansommer",
    label: "GitHub",
    icon: "github",
  },
  {
    link: "https://www.linkedin.com/in/juliansommer",
    label: "LinkedIn",
    icon: "linkedin",
  },
]

export const email: Email = "hi@julians.au"
