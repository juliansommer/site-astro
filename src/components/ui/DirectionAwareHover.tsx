import { createSignal, Show, type JSX } from "solid-js"
import { Motion, Presence } from "solid-motionone"

import { cn } from "@/lib/utils.ts"

interface DirectionAwareHoverProps {
  imageUrl: string
  imageAlt: string
  children: JSX.Element
  childrenClassName?: string
  imageClassName?: string
  className?: string
}

type Direction = "top" | "bottom" | "left" | "right" | "initial"

export function DirectionAwareHover(props: DirectionAwareHoverProps) {
  let ref: HTMLDivElement | undefined

  const [direction, setDirection] = createSignal<Direction>("initial")
  const [isHovered, setIsHovered] = createSignal(false)

  const handleMouseEnter = (event: MouseEvent) => {
    if (!ref) return

    setIsHovered(true)
    const directionValue = getDirection(event, ref)
    switch (directionValue) {
      case 0:
        setDirection("top")
        break
      case 1:
        setDirection("right")
        break
      case 2:
        setDirection("bottom")
        break
      case 3:
        setDirection("left")
        break
      default:
        setDirection("left")
        break
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setDirection("initial" as Direction)
  }

  const getDirection = (ev: MouseEvent, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <Motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      class={cn(
        "group/card relative overflow-hidden rounded-lg bg-transparent",
        props.className,
      )}
    >
      <Motion.div class="relative h-full w-full">
        <Show when={isHovered()}>
          <Motion.div
            class="absolute inset-0 z-10 h-full w-full bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Show>

        <Motion.div
          animate={variants[direction()] || variants.initial}
          class="relative h-full w-full"
          transition={{
            duration: 0.2,
          }}
        >
          <img
            alt={props.imageAlt}
            class={cn("scale-[1.15] object-cover", props.imageClassName)}
            width="1000"
            height="1000"
            src={props.imageUrl}
            loading="lazy"
          />
        </Motion.div>

        <Presence>
          <Show when={isHovered()}>
            <Motion.div
              initial={textVariants.initial}
              animate={textVariants[direction()] || textVariants.initial}
              exit={textVariants.exit}
              transition={{
                duration: 0.5,
              }}
              class={cn(
                "absolute bottom-4 left-4 z-40 text-white",
                props.childrenClassName,
              )}
            >
              {props.children}
            </Motion.div>
          </Show>
        </Presence>
      </Motion.div>
    </Motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
    y: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    x: 0,
    y: 0,
    opacity: 0,
  },
  exit: {
    x: 0,
    y: 0,
    opacity: 0,
  },
  top: {
    opacity: 1,
  },
  bottom: {
    opacity: 1,
  },
  left: {
    opacity: 1,
  },
  right: {
    opacity: 1,
  },
}
