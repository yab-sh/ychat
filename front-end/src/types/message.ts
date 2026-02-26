import { type User } from "./user"

export type MessageType = "text" | "image" | "file" | "system"

export interface Message {
  id: string
  conversationId: string
  sender: User
  type: MessageType
  content: string
  timestamp: number
  reactions?: Record<string, string[]>
  edited?: boolean
}