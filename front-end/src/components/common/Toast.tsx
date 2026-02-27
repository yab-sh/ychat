import { type FC, type ReactNode, useEffect, useState } from "react"
import { Spinner } from "./Spinner"
import { classNames } from "@/classNames"
import "./Toast.css"

export type ToastType = "success" | "error" | "info" | "loading"

interface ToastProps {
  message: ReactNode
  type?: ToastType
  duration?: number // ms
  onClose?: () => void
}

export const Toast: FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false)
        onClose?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className={classNames("toast", `toast-${type}`)}>
      {type === "loading" && <Spinner size="sm" />}
      <span className="toast-message">{message}</span>
      {type !== "loading" && (
        <button className="toast-close" onClick={() => { setVisible(false); onClose?.() }}>
          &times;
        </button>
      )}
    </div>
  )
}