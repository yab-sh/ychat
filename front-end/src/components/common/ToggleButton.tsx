import { type FC, type ReactNode } from "react"
import "./ToggleButton.css"

interface ToggleButtonProps {
  enabled: boolean
  onToggle: () => void
  size?: number
  activeColor?: string
  inactiveColor?: string
  children?: ReactNode
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  enabled,
  onToggle,
  size = 24,
  activeColor = "var(--accent)",
  inactiveColor = "var(--bg-dark)",
  children
}) => {
  const width = size * 2
  const height = size
  const sliderSize = size - 4

  return (
    <button
      className="toggle-button"
      onClick={onToggle}
      style={{
        width,
        height,
        backgroundColor: enabled ? activeColor : inactiveColor,
        borderRadius: height / 2,
        padding: 2,
        position: "relative",
      }}
      aria-pressed={enabled}
    >
      <div
        className="toggle-slider"
        style={{
          width: sliderSize,
          height: sliderSize,
          transform: enabled ? `translateX(${width - sliderSize - 4}px)` : "translateX(0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </button>
  )
}