import "./navBar.css"
import{
    MdOutlineChat,
    MdPublic,
    MdNotifications,
    MdSearch
}from "react-icons/md"
const NavBar=()=>{
    return(
        <div className="navbar">
            <div className="navbar-title">
                ראשי
            </div>
            <div className="navbar-menu">
                <div className="navbar-search">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="navbar-input"/>
                </div>
                <div className="navbar-icons">
                    <MdOutlineChat size={20}></MdOutlineChat>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
    )
}
export default NavBar