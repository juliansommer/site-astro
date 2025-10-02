import { createSignal, Show, type JSX } from "solid-js"

interface DirectionAwareHoverProps {
  imageUrl: string
  imageAlt: string
  children: JSX.Element
}

type Direction = "top" | "bottom" | "left" | "right" | "initial"

export function DirectionAwareHover(props: DirectionAwareHoverProps) {
  let ref: HTMLDivElement | undefined

  const [direction, setDirection] = createSignal<Direction>("initial")
  const [isHovered, setIsHovered] = createSignal(false)

  function handleMouseEnter(event: MouseEvent) {
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

  function handleMouseLeave() {
    setIsHovered(false)
    setDirection("initial")
  }

  function getDirection(ev: MouseEvent, obj: HTMLElement) {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  function getImageTransform() {
    const dir = direction()
    if (dir === "initial") return "translate(0, 0)"
    if (dir === "top") return "translateY(20px)"
    if (dir === "bottom") return "translateY(-20px)"
    if (dir === "left") return "translateX(20px)"
    if (dir === "right") return "translateX(-20px)"
    return "translate(0, 0)"
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      class="group/card relative w-full cursor-pointer space-y-5 overflow-hidden rounded-lg bg-transparent"
    >
      <div class="relative h-full w-full">
        {/* Overlay */}
        <div
          class="absolute inset-0 z-10 h-full w-full bg-black/40 transition-opacity duration-300"
          style={{
            opacity: isHovered() ? "1" : "0",
          }}
        />

        {/* Image */}
        <div
          class="relative h-full w-full transition-transform duration-200"
          style={{
            transform: getImageTransform(),
          }}
        >
          <img
            alt={props.imageAlt}
            class="scale-[1.15] object-cover"
            width="1000"
            height="1000"
            src={props.imageUrl}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <Show when={isHovered()}>
          <div
            class="absolute bottom-4 left-4 z-40 transition-opacity duration-500"
            style={{
              opacity: isHovered() ? "1" : "0",
            }}
          >
            {props.children}
          </div>
        </Show>
      </div>
    </div>
  )
}
