import { createContext, useState, type ReactNode, useEffect } from "react"
import { type User } from "@/types/user"

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("chat_user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("chat_user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("chat_user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}