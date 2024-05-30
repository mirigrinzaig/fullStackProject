import "./navBar.css"
import {
    MdPerson,
    MdSupervisedUserCircle,
    MdLogout,
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
    const { _id, userName, name, email,roles } = useAuth()
    const [logout, { isSuccess }] = useSendLogoutMutation()
    const [userMenu, setUserMenu] = useState(false)
    const logOutClick = () => {
        setUserMenu(!userMenu)
        logout()
        navigate("/")
    }
    const [showFixedMenu, setShowFixedMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 100; // הגדרת סף הגלילה שבו ישתנה התפריט ל־position: fixed
            const isScrolled = window.scrollY > threshold;

            setShowFixedMenu(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-title">
                <div className="navbar-logo-box">
                    <div className="logoNavBar"></div>
                    <h2 className="title">חנות בוטיק קסומה לתינוקות</h2></div>

                {roles!=='admin'&&!userName && <div className="navbar-a-box">
                    <Link to="/login" className="products-list-add-btn">
                        התחברות
                    </Link>
                    <Link to="/regist" className="products-list-add-btn">
                        הרשמה
                    </Link></div>}
                {roles==='admin' && <div className="admin-user">
                <div className="sidebar-user-datails">
                    <span className="sidebar-user-username">מנהל: {name}</span>
                    {/* <span className="sidebar-user-username">{userName}</span> */}
                    {/* <span className="sidebar-user-username">{email}</span> */}
                    <span className="sidebar-user-username">roles: {roles}</span>
                </div>
                <img src={ "/blackLogo.png"} alt="" width="50" height="50" className="sidebar-user-image"/>
            </div>}
            {roles!=='admin' &&userName && <div className="navbar-menu-box">
                    {
                        userName && <div className="navbar-menu-div">
                            <MdPerson size={40} className="userMenu" onClick={() => setUserMenu(!userMenu)}></MdPerson>
                            <p>{name}</p>
                        </div>
                    }
                    {
                        userMenu && <div className="navbar-menu-box">
                            <div className="navbar-icons">
                                <FaCartPlus className="btn" size={20} />
                                <NavLink className="btn" to='/favouriets'><BsBagHeartFill size={20} /></NavLink>
                                <MdLogout className="btn" size={20} onClick={logOutClick}>התנתקות</MdLogout>
                            </div></div>
                    }
                </div>}

            </div >

            {/* </div >} */}
            <div className={`navbar-menu ${showFixedMenu ? "fixed-menu" : ""}`}>
                <Search className="navBarSearch" placeholder={"חיפוש כללי"} />
                <NavLink className="homeLink" to='/'><MdHome size={20} className="home" />בית</NavLink>
                {/* <MenuLink item={item}></MenuLink> */}
                <NavLink to='/categories/clothing'><img src="./categories/clothing.png" alt="" /></NavLink>
                <NavLink to='/categories/accessories'><img src="./categories/accessories.png" /></NavLink>
                <NavLink to='/categories/feed'> <img src="./categories/feed.png" /></NavLink>
                <NavLink to='/categories/bath'><img src="./categories/bath.png" /></NavLink>
                <NavLink to='/categories/sleep'><img src="./categories/sleep.png" /></NavLink>
                <NavLink to='/categories/walk'><img src="./categories/walk.png" /></NavLink>
                <NavLink to='/categories/play'><img src="./categories/play.png" /></NavLink>
                <NavLink to='/categories/safe'><img src="./categories/safe.png" /></NavLink>
                <NavLink to='/categories/hygine'><img src="./categories/hygine.png" /></NavLink>
                <NavLink to='/categories/presents'><img src="./categories/presents.png" /></NavLink>
                <NavLink className="aMotag" to='/categories/plumabrand'><img className="IMotag" src="/blackLogo.png"/>המותג</NavLink>
                <NavLink className="aMotag"  to='/categories/promotions'><img className="IMotag" src="./categories/promotions.png"/>מבצעים</NavLink>
            </div>
        </div >
    )
}
export default NavBar