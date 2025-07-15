import './Profile.scss'
import { logout } from "@/store/slices/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="profile">
      <button onClick={() => {
        dispatch(logout())
        navigate('/')
      }}>LOGOUT</button>
    </div>
  )
}

export { Profile }