import { useContext } from "react"
import { IsAdminContext } from "@/contexts/IsAdminContext/IsAdmin.context"

const useIsAdmin = () => {
  return useContext(IsAdminContext)
}

export { useIsAdmin }