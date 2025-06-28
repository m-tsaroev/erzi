import { AuthContext } from "@/contexts/AuthContext/auth.context"
import { useContext } from "react"

const useAuth = () => {
  return useContext(AuthContext)
}

export { useAuth }