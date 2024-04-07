import "./navBar.css"
import {
    MdOutlineChat,
    MdPublic,
    MdNotifications,
    MdSearch,
    MdHome,
    MdHomeFilled
} from "react-icons/md"
import { NavLink } from "react-router-dom"
import MenuLink from "../sidebar/MenuLink"
import useAuth from "../../../hooks/useAuth"

const NavBar = () => {
    const {_id,userName,name,email,roles}=useAuth()
    // const links=[
    //     {

    //     }
    // ]
    // const item={
    //     path:"/",
    //     title:"home page",
    //     img:"/logo.png"
    // }
    return (
        <div className="navbar">
             <img src="/logo.png" className="logoP"/>
            <div className="navbar-title">
                {/* <h2 className="title">חנות בוטיק קסומה לתינוקות</h2> */}
                {/* <div className="navbar-icons">
                    <MdOutlineChat size={20}></MdOutlineChat>
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div> */}
            </div>
            <div className="navbar-menu">
                {userName&&<p>שלום ל:{name}</p>}
                <NavLink to='/'><MdHome size={20} />home</NavLink>
                {/* <MenuLink item={item}></MenuLink> */}
                <NavLink to='/categories/clothing'><img src="/categories/clothing.png"/></NavLink>
                <NavLink to='/categories/accessories'><img src="/categories/accessories.png"/></NavLink>
                <NavLink to='/categories/feed'> <img src="/categories/feed.png"/></NavLink>
                <NavLink to='/categories/bath'><img src="/categories/bath.png"/></NavLink>
                <NavLink to='/categories/sleep'><img src="/categories/sleep.png"/></NavLink>
                <NavLink to='/categories/walk'><img src="/categories/walk.png"/></NavLink>
                <NavLink to='/categories/play'><img src="/categories/play.png"/></NavLink>
                <NavLink to='/categories/safe'><img src="/categories/safe.png"/></NavLink>
                <NavLink to='/categories/hygine'><img src="/categories/hygine.png"/></NavLink>
                <NavLink to='/categories/presents'><img src="/categories/presents.png"/></NavLink>
                <NavLink to='/categories/plumabrand'><img src="/logo.png"/></NavLink>
                <NavLink to='/categories/promotions'><img src="/categories/brands.png"/></NavLink>




            </div>
            {/* <div className="navbar-search">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="navbar-input"/>
                </div> */}
        </div>
    )
}
export default NavBar