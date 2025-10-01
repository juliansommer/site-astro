import { CardHoverEffect } from "@/components/ui/CardHoverEffect.tsx"
import { skills } from "@/lib/data.ts"

export function SkillsWrapper() {
  return <CardHoverEffect items={skills} />
}
