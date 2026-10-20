import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Faq from './Faq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Faq />
  </StrictMode>,
)
