import { type FC, type ReactNode } from "react"
import { classNames } from "@/classNames"
import "./Modal.css"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  width?: string
  height?: string
  showCloseButton?: boolean
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  width = "400px",
  height = "auto",
  showCloseButton = true,
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={classNames("modal", className)}
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  )
}