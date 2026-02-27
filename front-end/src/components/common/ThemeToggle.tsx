import { FaSun, FaMoon } from "react-icons/fa"
import { useSettings } from "@/context/SettingsContext"
import { ToggleButton } from "./ToggleButton"
import "./ThemeToggle.css"

export function ThemeToggle() {
  const { settings, updateSettings } = useSettings()
  const isDark = settings.mode === "dark"

  return (
    <ToggleButton
      enabled={isDark}
      onToggle={() =>
        updateSettings({ mode: isDark ? "light" : "dark" })
      }
      size={28}
      activeColor="var(--accent)"
      inactiveColor="var(--bg-dark)"
    >
      {!isDark ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
    </ToggleButton>
  )
}