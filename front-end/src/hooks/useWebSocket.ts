import { useEffect, useRef, useState, useCallback } from "react"
import { useAuth } from "@/hooks/useAuth"

type EventHandler = (data: any) => void

interface UseWebSocketReturn {
  sendEvent: (event: string, payload: any) => void
  subscribe: (event: string, handler: EventHandler) => void
  unsubscribe: (event: string, handler: EventHandler) => void
  connected: boolean
}

export function useWebSocket(url: string): UseWebSocketReturn {
  const { user } = useAuth()
  const socketRef = useRef<WebSocket | null>(null)
  const [connected, setConnected] = useState(false)
  const handlersRef = useRef<Record<string, EventHandler[]>>({})

  // Connect socket
  useEffect(() => {
    if (!user) return

    const ws = new WebSocket(`${url}?userId=${user.id}`)
    socketRef.current = ws

    ws.onopen = () => setConnected(true)
    ws.onclose = () => setConnected(false)
    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data)
        const { event, payload } = data
        handlersRef.current[event]?.forEach((h) => h(payload))
      } catch (err) {
        console.warn("Invalid WS message", err)
      }
    }

    return () => ws.close()
  }, [user, url])

  // Send event
  const sendEvent = useCallback((event: string, payload: any) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ event, payload }))
    }
  }, [])

  // Subscribe to event
  const subscribe = useCallback((event: string, handler: EventHandler) => {
    if (!handlersRef.current[event]) handlersRef.current[event] = []
    handlersRef.current[event].push(handler)
  }, [])

  // Unsubscribe from event
  const unsubscribe = useCallback((event: string, handler: EventHandler) => {
    if (!handlersRef.current[event]) return
    handlersRef.current[event] = handlersRef.current[event].filter((h) => h !== handler)
  }, [])

  return { sendEvent, subscribe, unsubscribe, connected }
}