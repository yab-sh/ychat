import { type FC, type ReactNode } from "react"
import { classNames } from "@/classNames"
import "./ErrorMessage.css"

interface ErrorMessageProps {
  message: ReactNode
  icon?: ReactNode
  className?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, icon, className }) => {
  return (
    <div className={classNames("error-message", className)}>
      {icon && <span className="error-icon">{icon}</span>}
      <span className="error-text">{message}</span>
    </div>
  )
}