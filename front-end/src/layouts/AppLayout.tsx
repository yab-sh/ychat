import { type ReactNode } from "react"
import { TopNav } from "@/components/layout/TopNav"
import { Footer } from "@/components/layout/Footer"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div 
    className="app-layout flex items-center"
    style={{ 
        flexDirection: "column",
        height: "100vh",
        padding:"var(--spacing-l)"}}>
      <TopNav />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  )
}