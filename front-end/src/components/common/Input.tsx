import { type FC, type InputHTMLAttributes, type ReactNode } from "react"
import { classNames } from "@/classNames"
import "./Input.css"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  inputSize?: "sm" | "md" | "lg"
}

export const Input: FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  inputSize = "md",
  className,
  ...props
}) => {
  const containerClass = classNames("input-container", inputSize)
  const inputClass = classNames("input-field", icon ? "has-icon" : undefined)

  return (
    <div className={classNames("input-wrapper", className)}>
      {label && <label className="input-label">{label}</label>}

      <div className={containerClass}>
        {icon && <span className="input-icon">{icon}</span>}
        <input className={inputClass} {...props} />
      </div>

      {(error && <p className="input-error">{error}</p>) ||
        (helperText && <p className="input-helper">{helperText}</p>)}
    </div>
  )
}