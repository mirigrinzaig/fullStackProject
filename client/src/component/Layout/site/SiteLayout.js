import {Outlet} from "react-router-dom"
import NavBar from "../navBar/NavBar"
const SiteLayout=()=>{
    return(
        <div className="page">
    <header><NavBar /></header>
    <main>
        <Outlet />
    </main>
</div>
    )
}
export default SiteLayout