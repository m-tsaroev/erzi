import { PATHS } from '@/config/paths'
import './Profile.scss'
import { logout } from "@/store/slices/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getCartItems } from '@/store/slices/cartSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="profile">
      <button onClick={() => {
        dispatch(logout())
        navigate(PATHS.HOME)
        dispatch(getCartItems())
      }}>LOGOUT</button>
    </div>
  )
}

export { Profile }