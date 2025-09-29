import { HoverEffect } from "@/components/ui/CardHoverEffect.tsx"
import { skills } from "@/lib/data.ts"

export function SkillsWrapper() {
  return <HoverEffect items={skills} />
}
