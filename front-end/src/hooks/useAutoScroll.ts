import { useEffect, useRef } from "react"

/**
 * Hook to auto-scroll a container to the bottom when content changes.
 * @param deps - Dependencies that trigger the scroll (usually messages array)
 */
export function useAutoScroll(deps: any[] = []) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Scroll smoothly to the bottom
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    })
  }, deps)

  return containerRef
}