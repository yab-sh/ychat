import { type ReactNode, useState, useRef, useEffect } from "react"
import "./DropDownMenu.css"

interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  danger?: boolean
}

export function DropdownItem({ children, onClick, danger }: DropdownItemProps) {
  return (
    <div
      className={`dropdown-item ${danger ? "danger" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  align?: "left" | "right"
}

export function Dropdown({ trigger, children, align = "left" }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <div className="dropdown" ref={ref}>
      <div onClick={() => setOpen(!open)} className="dropdown-trigger">
        {trigger}
      </div>

      {open && (
        <div className={`dropdown-menu ${align === "right" ? "right" : "left"}`}>
          {children}
        </div>
      )}
    </div>
  )
}