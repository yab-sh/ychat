import { useState, useEffect, useCallback } from "react"
import { useWS } from "@/context/WebSocketContext"
import { type Conversation } from "@/types/conversation"
import { type Message } from "@/types/message"
import { type User } from "@/types/user"

interface UseChatReturn {
  conversations: Conversation[]
  sendMessage: (conversationId: string, content: string) => void
  addConversation: (participants: User[]) => void
  markAsRead: (conversationId: string) => void
}

export function useChat(): UseChatReturn {
  const { subscribe, sendEvent, unsubscribe } = useWS()
  const [conversations, setConversations] = useState<Conversation[]>([])

  // Listen for incoming messages
  useEffect(() => {
    const handleMessage = (msg: Message) => {
      setConversations(prev => {
        const convIndex = prev.findIndex(c => c.id === msg.conversationId)
        if (convIndex === -1) return prev

        const conv = prev[convIndex]
        const updatedConv: Conversation = {
          ...conv,
          messages: [...(conv.messages || []), msg],
          lastMessage: msg,
          unreadCount: (conv.unreadCount || 0) + 1
        }
        const updated = [...prev]
        updated[convIndex] = updatedConv
        return updated
      })
    }

    subscribe("newMessage", handleMessage)
    return () => unsubscribe("newMessage", handleMessage)
  }, [subscribe, unsubscribe])

  const sendMessage = useCallback((conversationId: string, content: string) => {
    const message: Partial<Message> = { conversationId, content, type: "text" }
    sendEvent("sendMessage", message)
  }, [sendEvent])

  const addConversation = useCallback((participants: User[]) => {
    const newConv: Conversation = {
      id: Date.now().toString(),
      participants,
      messages: [],
      unreadCount: 0
    }
    setConversations(prev => [...prev, newConv])
  }, [])

  const markAsRead = useCallback((conversationId: string) => {
    setConversations(prev =>
      prev.map(c =>
        c.id === conversationId
          ? { ...c, unreadCount: 0 }
          : c
      )
    )
  }, [])

  return { conversations, sendMessage, addConversation, markAsRead }
}