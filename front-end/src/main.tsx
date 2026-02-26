import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initTheme } from "@/utils/theme.ts";
import './index.css'

import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext.tsx'
import { WebSocketProvider } from "@/context/WebSocketContext.tsx";
import { SettingsProvider } from './context/SettingsContext.tsx';

initTheme()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <WebSocketProvider>
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      </WebSocketProvider>
    </AuthProvider>
  </StrictMode>,
)
