import { CHAT_THEME } from "./constants"

type Theme = typeof CHAT_THEME

/** Apply a theme object to CSS variables */
export function applyTheme(theme: Theme) {
  const root = document.documentElement
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key.replace(/_/g, "-").toLowerCase()}`, value)
  })
}

/** Load theme from localStorage or fallback to default */
export function loadTheme(): Theme {
  try {
    const stored = localStorage.getItem("chat_settings")
    if (!stored) return CHAT_THEME

    const parsed = JSON.parse(stored)
    return { ...CHAT_THEME, ...parsed }
  } catch (err) {
    console.warn("Failed to load theme from localStorage, using default", err)
    return CHAT_THEME
  }
}

/** Initialize theme on app start */
export function initTheme() {
  const theme = loadTheme()
  applyTheme(theme)
}