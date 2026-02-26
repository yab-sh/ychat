import { useState, useEffect } from "react"

/**
 * Debounces a value over a specified delay.
 * Useful for search inputs, typing indicators, etc.
 *
 * @param value - The value to debounce
 * @param delay - Delay in ms
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    // Cleanup if value changes before delay
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}