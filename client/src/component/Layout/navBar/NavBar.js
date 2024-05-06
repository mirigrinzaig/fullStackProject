import "./navBar.css"
import {
    MdPerson,
    MdSupervisedUserCircle,
    MdLogout,
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
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSendLogoutMutation } from "../../../fetures/auth/authApiSlice"
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

const NavBar = () => {
    const navigate = useNavigate()
    const { _id, userName, name, email, roles } = useAuth()
    const [logout, { isSuccess }] = useSendLogoutMutation()
    const [userMenu, setUserMenu] = useState(false)
    const logOutClick = () => {
        logout()
        navigate("/")
    }
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
            <div className="navbar-title">
                <img src="/logo.png" />
                <h2 className="title">חנות בוטיק קסומה לתינוקות</h2>
            </div>
            <div className="navbar-menu">
                {userName && <div className="navbar-menu-div">
                    <MdSupervisedUserCircle className="userMenu" onClick={() => setUserMenu(!userMenu)}></MdSupervisedUserCircle>
                    {userMenu && <div>
                        <p>{name}</p>
                        <div className="navbar-icons">
                            <MdLogout className="btn" onClick={logOutClick}>התנתקות</MdLogout>
                            <FaCartPlus className="btn" size={20} />
                            <NavLink className="btn" to='/favouriets'><BsBagHeartFill size={20} /></NavLink>
                        </div></div>}
                </div>}
                <NavLink className="homeLink" to='/'><MdHome size={20} className="home"/>home</NavLink>
                {/* <MenuLink item={item}></MenuLink> */}
                <NavLink to='/categories/clothing'><img src="/categories/clothing.png" /></NavLink>
                <NavLink to='/categories/accessories'><img src="/categories/accessories.png" /></NavLink>
                <NavLink to='/categories/feed'> <img src="/categories/feed.png" /></NavLink>
                <NavLink to='/categories/bath'><img src="/categories/bath.png" /></NavLink>
                <NavLink to='/categories/sleep'><img src="/categories/sleep.png" /></NavLink>
                <NavLink to='/categories/walk'><img src="/categories/walk.png" /></NavLink>
                <NavLink to='/categories/play'><img src="/categories/play.png" /></NavLink>
                <NavLink to='/categories/safe'><img src="/categories/safe.png" /></NavLink>
                <NavLink to='/categories/hygine'><img src="/categories/hygine.png" /></NavLink>
                <NavLink to='/categories/presents'><img src="/categories/presents.png" /></NavLink>
                <NavLink to='/categories/plumabrand'><img src="/logo.png" /></NavLink>
                <NavLink to='/categories/promotions'><img src="/categories/brands.png" /></NavLink>




            </div>
            {/* <div className="navbar-search">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="navbar-input"/>
                </div> */}
        </div>
    )
}
export default NavBar