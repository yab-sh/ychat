import { type FC, type ReactNode } from "react"
import { classNames } from "@/classNames"
import "./EmptyState.css"

interface EmptyStateProps {
  icon?: ReactNode
  title?: string
  description?: string
  action?: ReactNode
  className?: string
}

export const EmptyState: FC<EmptyStateProps> = ({
  icon,
  title = "Nothing here",
  description,
  action,
  className,
}) => {
  return (
    <div className={classNames("empty-state", className)}>
      {icon && <div className="empty-icon">{icon}</div>}
      {title && <h3 className="empty-title">{title}</h3>}
      {description && <p className="empty-description">{description}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  )
}