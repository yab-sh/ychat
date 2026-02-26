import { createContext, useContext, type ReactNode } from "react"
import { useChat } from "@/hooks/useChat"
import { type User } from "@/types/user"
import { type Conversation } from "@/types/conversation"

interface ChatContextType {
  conversations: Conversation[]
  sendMessage: (conversationId: string, content: string) => void
  addConversation: (participants: User[]) => void
  markAsRead: (conversationId: string) => void
}
const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const chat = useChat()

  return (
    <ChatContext.Provider value={chat}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider")
  }
  return context
}