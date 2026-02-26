export function formatTime(dateInput: Date | string | number): string {
  const date = new Date(dateInput)

  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  })
}