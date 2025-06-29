import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext/AuthContext'
import { IsAdminProvider } from './contexts/IsAdminContext/IsAdminContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <IsAdminProvider>
        <App />
      </IsAdminProvider>
    </AuthProvider>
  </StrictMode>
)
