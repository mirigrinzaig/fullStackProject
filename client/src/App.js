import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import SiteLayout from "./component/Layout/site/SiteLayout"
import DashLayout from "./component/Layout/dash/DashLayout"
import UsersList from "./fetures/users/List/UsersList"
import AddUser from "./fetures/users/add/AddUser"
import SingleUser from "./fetures/users/view/SingleUser"
import ProductsList from "./fetures/products/List/ProductsList"
import AddProduct from "./fetures/products/add/AddProduct"
import SingleProduct from "./fetures/products/view/SingleProduct"
import LoginPage from "./fetures/auth/login/LoginPage"
import RequireAuth from "./fetures/auth/RequireAuth"
import PersistsLogin from "./fetures/auth/PersistLogin"
import HomePage from "./fetures/home/HomePage"
import SingleProductPublic from "./fetures/products/view/singleProductPublic"
import RegistPage from "./fetures/auth/regist/RegistPage"
import HomeMain from "./fetures/home/HomeMain"
import FavouritesList from "./fetures/products/List/FavouritesList"
import ProductListPublic from "./fetures/products/List/ProductsListPublic"
import ScrollToTop from './ScrollToTop';
import PlumaAbout from "./fetures/about/PlumaAbout"
import Regulation from "./fetures/regulation/Regulations"
import Posts from "./fetures/posts/Posts"
import SportLinePost from "./fetures/posts/SportLinePost"
import WinterPost from "./fetures/posts/WinterPost"
import SafePost from "./fetures/posts/SafePost"
import CarriagePost from "./fetures/posts/CarriagePost"
import BadPost from "./fetures/posts/BadPost"
import UsersListDemo from "./fetures/users/List/UsersListDemo"

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import FeedbackForm from "./fetures/pages/FeedbackForm"
// import ContactForm from "./fetures/pages/ContactForm"


const App = () => {
    return <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<SiteLayout />} >
                <Route index element={<HomePage />} />
                <Route path="/favouriets" element={<FavouritesList />} />
                <Route path="/about" element={<PlumaAbout />} />
                <Route path="/regulation" element={<Regulation />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/sportLinePost" element={<SportLinePost />} />
                <Route path="/posts/winterPost" element={<WinterPost />} />
                <Route path="/posts/safePost" element={<SafePost />} />
                <Route path="/posts/carriagePost" element={<CarriagePost />} />
                <Route path="/posts/badPost" element={<BadPost />} />
                {/* <Route path="/feedback" element={<ContactForm/>}/> */}
                {/* <Route index element={<HomeMain/>} /> */}
                <Route path="/categories/companies" element={<ProductListPublic category="company" />} />
                <Route path="/categories/accessories" element={<ProductListPublic category="accessories" />} />
                <Route path="/categories/bath" element={<ProductListPublic category="bath" />} />
                <Route path="/categories/clothing" element={<ProductListPublic category="clothing" />} />
                <Route path="/categories/feed" element={<ProductListPublic category="feed" />} />
                <Route path="/categories/hygine" element={<ProductListPublic category="hygine" />} />
                <Route path="/categories/play" element={<ProductListPublic category="play" />} />
                <Route path="/categories/presents" element={<ProductListPublic category="presents" />} />
                <Route path="/categories/safe" element={<ProductListPublic category="safe" />} />
                <Route path="/categories/sleep" element={<ProductListPublic category="sleep" />} />
                <Route path="/categories/walk" element={<ProductListPublic category="walk" />} />
                <Route path="/categories/plumabrand" element={<ProductListPublic category="pluma" />} />
                <Route path="/categories/promotions" element={<ProductListPublic category="promotions" />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="regist" element={<RegistPage />} />
                <Route path="/public/:productBarcod" element={<SingleProductPublic />} />
                <Route element={<PersistsLogin />}>
                    <Route element={<RequireAuth allowRoles={['admin', 'user']} />}>
                        <Route path="/dash" element={<DashLayout />}>
                            <Route index element={<HomePage />} />
                            <Route element={<RequireAuth allowRoles={['admin']} />}>
                                <Route path="users" element={<Outlet />}>
                                    <Route index element={<UsersList />} />
                                    <Route path="add" element={<AddUser />} />
                                    <Route path=":userId" element={<SingleUser />} />
                                </Route>
                            </Route>
                            <Route element={<RequireAuth allowRoles={['admin']} />}>
                                <Route path="products" element={<Outlet />}>
                                    <Route index element={<ProductsList />} />
                                    <Route path="add" element={<AddProduct />} />
                                    <Route path=":productBarcod" element={<SingleProduct />} />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
        <ToastContainer/>
    </Router>
}
export default App