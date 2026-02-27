import { type FC, type ReactNode } from "react"
import { Spinner } from "./Spinner"
import "./ConfirmDialog.css"

interface ConfirmDialogProps {
  isOpen: boolean
  title?: string
  message: ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  loading?: boolean
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  loading = false,
}) => {
  if (!isOpen) return null

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        {title && <h3 className="dialog-title">{title}</h3>}
        <div className="dialog-message">{message}</div>

        <div className="dialog-actions">
          <button className="dialog-cancel" onClick={onCancel} disabled={loading}>
            {cancelText}
          </button>
          <button
            className="dialog-confirm"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}