import type { JSX, SVGAttributes } from "preact"

export interface PreactIconProps extends SVGAttributes<SVGElement> {
  className?: string
  size?: string | number
  color?: string
  title?: string
}

export type PreactIcon = (props: PreactIconProps) => JSX.Element

export interface Experience {
  year: string
  role: string
  company: string
  description: string[]
  tech: PreactIcon[]
}

export interface Project {
  title: string
  tech: PreactIcon[]
  link: string
  cover: string
  background: string
}

export interface Skill {
  text: string
  Icon: PreactIcon
}

export interface Social {
  link: string
  label: string
  Icon: PreactIcon
}

export type Email = `${string}@${string}.${string}`
