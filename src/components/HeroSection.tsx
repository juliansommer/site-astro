import { email } from "@/lib/data"

import Title from "./Title"

export default function HeroSection() {
  return (
    <div className="animate-move-up flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14">
      <div className="flex flex-col items-center space-y-10 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Nice to meet you! 👋
          <br />
          <span className="underline decoration-sky-500 underline-offset-8">
            Hi, I&apos;m Julian.
          </span>
        </h1>
        <p className="w-96 text-lg text-white md:text-xl">
          I&apos;m a fullstack developer from Australia with a passion for
          building modern web applications.
        </p>
        <a href={`mailto:${email}`} className="group inline-block">
          <Title text={"Contact 📧"} />
        </a>
      </div>
    </div>
  )
}
