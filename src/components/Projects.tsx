import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"

import Title from "./Title"

export default function Projects() {
  return (
    <div>
      <Title
        text={"Projects 🎨"}
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <a href={project.link} key={index}>
              <div className={cn("rounded-md p-2", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  imageAlt={project.title}
                  className="w-full cursor-pointer space-y-5"
                >
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="h-8 w-5" />
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
