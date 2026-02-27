import { type FC } from "react"
import "./Spinner.css"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export const Spinner: FC<SpinnerProps> = ({
  size = "md",
  color,
  className,
}) => {
  const spinnerStyle: React.CSSProperties = color ? { borderTopColor: color } : {}

  return (
    <div className={`spinner spinner-${size} ${className || ""}`} style={spinnerStyle}></div>
  )
}