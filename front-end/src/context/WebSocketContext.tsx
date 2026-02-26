import { createContext, useContext, type ReactNode } from "react"
import { useWebSocket } from "@/hooks/useWebSocket"

interface WebSocketContextType {
  sendEvent: (event: string, payload: any) => void
  subscribe: (event: string, handler: (data: any) => void) => void
  unsubscribe: (event: string, handler: (data: any) => void) => void
  connected: boolean
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined)

export function WebSocketProvider({ children }: { children: ReactNode }) {
  const ws = useWebSocket("ws://localhost:4000") // replace with your server URL

  return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
}

export function useWS() {
  const context = useContext(WebSocketContext)
  if (!context) throw new Error("useWS must be used within WebSocketProvider")
  return context
}