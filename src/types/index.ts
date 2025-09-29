import type { IconType } from "react-icons"

export interface Experience {
  year: string
  role: string
  company: string
  description: string[]
  tech: IconType[]
}

export interface Project {
  title: string
  tech: IconType[]
  link: string
  cover: string
  background: string
}

export interface Skill {
  text: string
  Icon: IconType
}

export interface Social {
  link: string
  label: string
  Icon: IconType
}

export type Email = `${string}@${string}.${string}`
