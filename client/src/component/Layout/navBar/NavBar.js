import "./navBar.css"
import {
    MdOutlineChat,
    MdPublic,
    MdNotifications,
    MdSearch
} from "react-icons/md"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h2 className="title">חנות בוטיק קסומה לתינוקות</h2>
                <div className="navbar-icons">
                    <MdOutlineChat size={20}></MdOutlineChat>
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
            <div className="navbar-menu">
                <img className="logo" src="/logo.png" />
                <NavLink to='/'>עמוד הבית</NavLink>
                <NavLink to='/categories/clothing'>הלבשה</NavLink>
                <NavLink to='/categories/accessories'>אקססוריז</NavLink>
                <NavLink to='/categories/feed'>האכלה</NavLink>
                <NavLink to='/categories/bath'>רחצה</NavLink>
                <NavLink to='/categories/sleep'>שינה</NavLink>
                <NavLink to='/categories/walk'>טיול</NavLink>
                <NavLink to='/categories/play'>משחק</NavLink>
                <NavLink to='/categories/safe'>בטיחות</NavLink>
                <NavLink to='/categories/hygine'>הגיינה וטיפוח</NavLink>
                <NavLink to='/categories/presents'>פינוק ומתנות</NavLink>
                <NavLink to='/categories/plumabrand'>Pluma</NavLink>
                <NavLink to='/categories/promotions'>מבצעים</NavLink>




            </div>
            {/* <div className="navbar-search">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="navbar-input"/>
                </div> */}
        </div>
    )
}
export default NavBar