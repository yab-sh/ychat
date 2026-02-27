import { type FC, type ReactNode, useState } from "react"
import { classNames } from "@/classNames"
import "./Tooltip.css"

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  className,
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className={classNames("tooltip-wrapper", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={classNames("tooltip-content", `tooltip-${position}`)}>
          {content}
        </div>
      )}
    </div>
  )
}