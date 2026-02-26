import { type User } from "./user"
import { type Message } from "./message"

export interface Conversation {
  id: string
  participants: User[]
  messages?: Message[]
  lastMessage?: Message
  unreadCount?: number
}