import MenuLink from "./MenuLink"
import "./sidebar.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdPendingActions,
    MdOutlineSettings,
    MdHelpCenter,
    MdOutlineBusinessCenter,
    MdLogout

} from "react-icons/md"
import { useSendLogoutMutation } from "../../../fetures/auth/authApiSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

const SideBar = () => {
    const { _id, userName, name, email, roles } = useAuth()
    const navigate = useNavigate()
    const [logout, { isSuccess }] = useSendLogoutMutation()
    const adminMenuItem = [
        {
            // title: "דפים",
            list: [
                {
                    title: "ראשי",
                    path: "/dash",
                    icon: <MdDashboard />
                },
                {
                    title: "משתמשים",
                    path: "/dash/users",
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: "מוצרים",
                    path: "/dash/products",
                    icon: <MdOutlineBusinessCenter />
                },
                {
                    title: "פעולות",
                    path: "/dash/actions",
                    icon: <MdPendingActions />
                }
                // {
                //     title: "הגדרות",
                //     path: "/dash/settings",
                //     icon: <MdOutlineSettings />
                // },
                // {
                //     title: "עזרה",
                //     path: "/dash/help",
                //     icon: <MdHelpCenter />
                // }
            ],
        }]
    const userMenuItem = [{
        title: "משתמש",
        list: [
            {
                title: "הגדרות",
                path: "/dash/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "עזרה",
                path: "/dash/help",
                icon: <MdHelpCenter />
            }
        ],
    }]

    const user = {
        username: "username",
        name: "פלומה-מוצרי תינוקות",
        //we dond need picture, but i want to see how can i put it
        image: ""
    }
    const menuItem = roles === 'admin' ? adminMenuItem : userMenuItem
    //when success logout:
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])

    const logOutClick = () => {
        logout()
        navigate("/")
    }


    const [showFixedMenu, setShowFixedMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 120; // הגדרת סף הגלילה שבו ישתנה התפריט ל־position: fixed
            const isScrolled = window.scrollY > threshold;

            setShowFixedMenu(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`"sidebar" ${showFixedMenu ? "fixed-admin" : ""}`}>
            {/* <div className="sidebar-user">
                <img src={user.image || "/logo512.png"} alt="" width="50" height="50" className="sidebar-user-image"/>
                <div className="sidebar-user-datails">
                    <span className="sidebar-user-username">{name}</span>
                    <span className="sidebar-user-username">{userName}</span>
                    <span className="sidebar-user-username">{email}</span>
                    <span className="sidebar-user-username">roles:{roles}</span>
                </div>
            </div> */}
            <ul className="sidebar-menu-list">
                {menuItem.map(cat => (
                    <li className="sidebar-menu-li" key={cat.title}>
                        <span className="sidebar-menu-cat">{cat.title}</span>
                        {cat.list.map(item => (
                            <MenuLink item={item}>{item.title}</MenuLink>
                        ))}
                    </li>
                ))}
                <li className="sidebar-menu-li" key="exit"><button onClick={logOutClick} className="sidebar-logout"><MdLogout />יציאה</button></li>
            </ul>

        </div>
    )
}
export default SideBar