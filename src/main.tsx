import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@/components/ThemeProvider'
import './index.css'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="architecture-theme">
            <App />
            <Footer />
        </ThemeProvider>
    </StrictMode>
)
