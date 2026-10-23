import type { IconName } from "@/lib/icons.ts"

export interface Entry {
  organisation: string
  role: string
  date: string
  location: string
  bullets: string[]
  tech?: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  bullets?: string[]
}

export interface Skill {
  name: string
  icon: IconName
}

export interface Social {
  link: string
  label: string
  icon: IconName
}

export type Email = `${string}@${string}.${string}`
