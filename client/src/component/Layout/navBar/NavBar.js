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
import { Link, NavLink } from "react-router-dom"
import MenuLink from "../sidebar/MenuLink"
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSendLogoutMutation } from "../../../fetures/auth/authApiSlice"
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";
import Search from "../../search/Search"

const NavBar = () => {

    // useEffect=(()=>{

    // },[])
    const navigate = useNavigate()
    const { _id, userName, name, email, roles } = useAuth()
    const [logout, { isSuccess }] = useSendLogoutMutation()
    const [userMenu, setUserMenu] = useState(false)
    const logOutClick = () => {
        setUserMenu(!userMenu)
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
                <div className="logoNavBar"></div>
                <h2 className="title">חנות בוטיק קסומה לתינוקות</h2>
                <div className="navbar-a-box">
                <Link to="/login" className="products-list-add-btn">
                    התחברות
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link></div>
                {userName &&<div className="navbar-menu-box">
                    {userName && <div className="navbar-menu-div">
                        <MdPerson size={40} className="userMenu" onClick={() => setUserMenu(!userMenu)}></MdPerson>
                        <p>{name}</p>
                    </div>}
                    {userMenu && <div>
                        <div className="navbar-icons">
                            <FaCartPlus className="btn" size={20} />
                            <NavLink className="btn" to='/favouriets'><BsBagHeartFill size={20} /></NavLink>
                            <MdLogout className="btn" size={20} onClick={logOutClick}>התנתקות</MdLogout>
                        </div></div>}
                </div>}

            </div>
            <div className="navbar-menu">
                <Search className="navBarSearch" placeholder={"חיפוש כללי"} />
                <NavLink className="homeLink" to='/'><MdHome size={20} className="home" />home</NavLink>
                {/* <MenuLink item={item}></MenuLink> */}
                <NavLink to='/categories/clothing'><img src="http://localhost:1234/uploads/categories/clothing.png" /></NavLink>
                <NavLink to='/categories/accessories'><img src="http://localhost:1234/uploads/categories/accessories.png" /></NavLink>
                <NavLink to='/categories/feed'> <img src="http://localhost:1234/uploads/categories/feed.png" /></NavLink>
                <NavLink to='/categories/bath'><img src="http://localhost:1234/uploads/categories/bath.png" /></NavLink>
                <NavLink to='/categories/sleep'><img src="http://localhost:1234/uploads//categories/sleep.png" /></NavLink>
                <NavLink to='/categories/walk'><img src="http://localhost:1234/uploads//categories/walk.png" /></NavLink>
                <NavLink to='/categories/play'><img src="http://localhost:1234/uploads//categories/play.png" /></NavLink>
                <NavLink to='/categories/safe'><img src="http://localhost:1234/uploads//categories/safe.png" /></NavLink>
                <NavLink to='/categories/hygine'><img src="http://localhost:1234/uploads//categories/hygine.png" /></NavLink>
                <NavLink to='/categories/presents'><img src="http://localhost:1234/uploads//categories/presents.png" /></NavLink>
                <NavLink to='/categories/plumabrand'><img src="/logo.png" /></NavLink>
                <NavLink to='/categories/promotions'><img src="http://localhost:1234/uploads/categories/brands.png" /></NavLink>




            </div>
            {/* <div className="navbar-search">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="navbar-input"/>
                </div> */}
        </div>
    )
}
export default NavBar