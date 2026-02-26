import { type ReactNode } from "react"
import { ChatProvider } from "@/context/ChatContext"
import { Sidebar } from "@/components/chat/sidebar/Sidebar"

interface ChatLayoutProps {
  children: ReactNode
}

export function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <ChatProvider>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, position: "relative" }}>
            {children}
          </div>
        </div>
      </div>
    </ChatProvider>
  )
}