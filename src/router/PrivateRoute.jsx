import { PATHS } from "@/config/paths" 
import { useSelector } from "react-redux" 
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
  const { redirectTo = PATHS.HOME} = props

  const isAuth = useSelector((state) => !!state.auth.accessToken)

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} replace />
}

export { PrivateRoute }