import type { Experience } from "@/types"

import Title from "./Title"

interface ExperienceProps {
  title: string
  data: Experience[]
}

export default function Experience({ title, data }: ExperienceProps) {
  return (
    <div>
      <Title
        text={title}
        className="flex flex-col items-center justify-center"
      />
      <div className="pt-10">
        {data.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-white">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-2 font-semibold text-white">
                {experience.role} |{" "}
                <span className="text-sm">{experience.company}</span>
              </p>

              {experience.description.map((description, index) => {
                return (
                  <p key={index} className="mb-2 text-white">
                    {description}
                  </p>
                )
              })}

              {experience.tech.length > 0 ? (
                <div className="flex items-center gap-5">
                  {experience.tech.map((Icon, index) => {
                    return <Icon key={index} className="h-8 w-5 text-white" />
                  })}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
