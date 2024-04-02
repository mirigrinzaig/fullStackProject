import { NavLink } from "react-router-dom"

const MenuLink=({item})=>{
    return(
       <NavLink to={item.path} className="sidebar-menu-link">
        {item.icon}
        {item.title}
        {/* image:
        {item.img} */}
        {
           <img className="logo" src={item.img} />
        }
       
       </NavLink>
    )
}
export default MenuLink