import { useEffect, useState } from 'react'
import { IsAdminContext } from './IsAdmin.context'
import { useAuth } from '@/hooks/useAuth'

const IsAdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user && user.role === 'admin') {
      setIsAdmin(true)
    }
  }, [user])

  return (
    <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </IsAdminContext.Provider>
  )
}

export { IsAdminProvider }
