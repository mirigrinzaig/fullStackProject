import { Outlet } from "react-router-dom"
import NavBar from "../navBar/NavBar"
import Footer from "../footer/Footer"
import "./dashLayout.css"
import SideBar from "../sidebar/SideBar"

const DashLayout=()=>{
    return(
        <div className="container">
            <div className="menu">
                <SideBar/>
            </div>
            <div className="content">
                <NavBar/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    )
}
export default DashLayout