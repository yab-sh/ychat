import { type ReactNode } from "react"
import { ChatProvider } from "@/context/ChatContext"
import { Sidebar } from "@/components/chat/sidebar/Sidebar"

interface ChatLayoutProps {
  children: ReactNode
}

export function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <ChatProvider>
      <div style={{
         display: "flex",
         flex: 1,
         width: "100%",
         overflow: "hidden",
         backgroundColor: "var(--bg-light)" }}>
        
        <Sidebar />

        <div style={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden" }}>
            {children}
        </div>
      </div>
    </ChatProvider>
  )
}