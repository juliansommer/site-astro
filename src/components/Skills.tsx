"use client"

import { HoverEffect } from "@/components/ui/CardHoverEffect"
import { skills } from "@/lib/data"

import Title from "./Title"

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
