import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
