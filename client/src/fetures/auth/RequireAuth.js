import { Navigate,Outlet} from "react-router-dom"
import useAuth from "../../hooks/useAuth"
export const RequireAuth = ({allowRoles}) => {
    console.log("allowRoles", allowRoles);
    const {roles}=useAuth()
    console.log("roles",roles);
    const userAllowed=allowRoles.includes(roles)
  if(userAllowed) return <Outlet/>
    return (
        <Navigate to="/login" replace/>
  )
}
export default RequireAuth
