import { skills as items } from "@/lib/data.ts"

import { createSignal, For, onCleanup, onMount } from "solid-js"

export function CardHoverEffect() {
  const [hoveredIndex, setHoveredIndex] = createSignal<number | null>(null)
  const [backgroundStyles, setBackgroundStyles] = createSignal({
    left: "0px",
    top: "0px",
    width: "0px",
    height: "0px",
    opacity: 0,
  })

  const itemRefs: HTMLDivElement[] = []

  function getItemRect(idx: number | null) {
    if (idx === null || !itemRefs[idx]) return null

    const rect = itemRefs[idx].getBoundingClientRect()
    const containerRect = itemRefs[
      idx
    ].parentElement?.getBoundingClientRect() || { left: 0, top: 0 }

    return {
      left: `${rect.left - containerRect.left}px`,
      top: `${rect.top - containerRect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    }
  }

  function updateBackgroundPosition(idx: number | null) {
    if (idx === null) {
      // Fade out when no item is hovered
      setBackgroundStyles((prev) => ({
        ...prev,
        opacity: 0,
      }))
      return
    }

    const rect = getItemRect(idx)
    if (rect) {
      setBackgroundStyles({
        ...rect,
        opacity: 1,
      })
    }
  }

  function handleMouseEnter(idx: number) {
    if (hoveredIndex() !== idx) {
      setHoveredIndex(idx)
      updateBackgroundPosition(idx)
    }
  }

  function handleMouseLeave() {
    setHoveredIndex(null)
    updateBackgroundPosition(null)
  }

  // Update positions on resize
  onMount(() => {
    const handleResize = () => {
      const current = hoveredIndex()
      if (current !== null) {
        updateBackgroundPosition(current)
      }
    }

    window.addEventListener("resize", handleResize)
    onCleanup(() => {
      window.removeEventListener("resize", handleResize)
    })
  })

  return (
    <div class="relative grid grid-cols-2 py-10">
      {/* Always present background element with CSS transitions */}
      <span
        class="absolute z-10 block rounded-lg bg-slate-800/[0.8]"
        style={{
          left: backgroundStyles().left,
          top: backgroundStyles().top,
          width: backgroundStyles().width,
          height: backgroundStyles().height,
          opacity: backgroundStyles().opacity,
          transition:
            "left 0.3s ease-out, top 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />

      <For each={items}>
        {(item, idx) => {
          const Icon = item.Icon
          return (
            <div
              class="group relative block h-full w-full p-2"
              ref={(el) => (itemRefs[idx()] = el)}
              onMouseEnter={() => handleMouseEnter(idx())}
              onMouseLeave={handleMouseLeave}
            >
              <div class="relative z-20 w-full cursor-pointer overflow-hidden rounded-md bg-black p-4 ring-sky-500 transition-all duration-500 group-hover:ring-2">
                <div class="relative z-50 space-y-5 py-10">
                  <Icon class="mx-auto h-8 w-8 text-white" />
                  <p class="text-center text-2xl font-bold text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </For>
    </div>
  )
}
