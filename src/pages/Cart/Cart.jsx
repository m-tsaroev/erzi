import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Cart = () => {
  const isAuth = useSelector((state) => !!state.auth.accessToken)
  const location = useLocation()
  const navigation = useNavigate()

  useEffect(() => {
    if (location.pathname === '/cart' && !isAuth) {
      navigation('/')
    }
  }, [isAuth, navigation, location.pathname])

  return <h1>Cart</h1>
}

export { Cart }
