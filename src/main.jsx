import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EventsApp } from './EventsApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EventsApp />
    </BrowserRouter>
  </StrictMode>
)
