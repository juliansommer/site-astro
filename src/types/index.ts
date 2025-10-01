import type { IconTypes } from "solid-icons"

export interface Experience {
  year: string
  role: string
  company: string
  description: string[]
  tech: IconTypes[]
}

export interface Project {
  title: string
  tech: IconTypes[]
  link: string
  cover: string
  background: string
}

export interface Skill {
  text: string
  Icon: IconTypes
}

export interface Social {
  link: string
  label: string
  Icon: IconTypes
}

export type Email = `${string}@${string}.${string}`
