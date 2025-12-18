import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './routes.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
