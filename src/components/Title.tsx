interface TitleProps {
  text: string
  className?: string
}

export default function Title({ text, className }: TitleProps) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-white transition-all group-hover:text-sky-400">
        {text}
      </h1>
      <div className="h-2 w-40 rounded-full bg-sky-500"></div>
      <div className="h-2 w-40 translate-x-2 rounded-full bg-purple-500"></div>
    </div>
  )
}
