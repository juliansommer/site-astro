import { HoverEffect } from "@/components/ui/CardHoverEffect.tsx"
import { skills } from "@/lib/data.ts"
import Title from "./Title.tsx"

export default function Skills() {
  return (
    <div className="mx-auto max-w-3xl pt-20">
      <Title
        text={"Skills 🛠️"}
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  )
}
