import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover.tsx"
import { projects } from "@/lib/data.ts"
import { cn } from "@/lib/utils.ts"
import { For } from "solid-js"

export default function ProjectsWrapper() {
  return (
    <div class="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2">
      <For each={projects}>
        {(project) => (
          <a href={project.link}>
            <div class={cn("rounded-md p-2", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                imageAlt={project.title + " Project Preview"}
                className="w-full cursor-pointer space-y-5"
              >
                <div class="space-y-2">
                  <h1 class="text-2xl font-bold">{project.title}</h1>
                  <div class="flex items-center gap-5">
                    <For each={project.tech}>
                      {(Icon) => <Icon class="h-8 w-5" />}
                    </For>
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </a>
        )}
      </For>
    </div>
  )
}
