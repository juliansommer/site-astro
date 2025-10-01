import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover.tsx"
import { projects } from "@/lib/data.ts"
import { cn } from "@/lib/utils.ts"

export default function ProjectsWrapper() {
  return (
    <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2">
      {projects.map((project, index) => (
        <a href={project.link} key={index}>
          <div className={cn("rounded-md p-2", project.background)}>
            <DirectionAwareHover
              imageUrl={project.cover}
              imageAlt={project.title + " Project Preview"}
              className="w-full cursor-pointer space-y-5"
            >
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex items-center gap-5">
                  {project.tech.map((Icon, index) => (
                    <Icon key={index} className="h-8 w-5" />
                  ))}
                </div>
              </div>
            </DirectionAwareHover>
          </div>
        </a>
      ))}
    </div>
  )
}
