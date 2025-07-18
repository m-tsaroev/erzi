import { PATHS } from '@/config/paths'
import { CartSection } from '@/sections/CartSection'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Cart = () => {
  const isAuth = useSelector((state) => !!state.auth.accessToken)
  const location = useLocation()
  const navigation = useNavigate()

  useEffect(() => {
    if (location.pathname === PATHS.CART && !isAuth) {
      navigation(PATHS.HOME)
    }
  }, [isAuth, navigation, location.pathname])

  return (
    <CartSection />
  )
}

export { Cart }
