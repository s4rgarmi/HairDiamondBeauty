import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import PrivacyPage from './PrivacyPage.jsx'

const container = document.getElementById('privacy-root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <PrivacyPage />
    </StrictMode>,
  )
}
