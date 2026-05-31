import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
