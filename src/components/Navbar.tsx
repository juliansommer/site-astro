import { socials } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center justify-between py-10", className)}>
      <h1 className="-rotate-2 text-2xl font-bold text-white underline decoration-purple-500 underline-offset-8">
        Julian Sommer 👨🏻‍💻
      </h1>
      <div className="item-center flex gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon
          return (
            <a href={social.link} key={index} aria-label={social.label}>
              <Icon className="h-5 w-5 text-white transition-all hover:scale-125" />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
