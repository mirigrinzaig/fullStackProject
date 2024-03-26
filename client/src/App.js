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
import Accessories from "./fetures/products/categories/Accessories"
import Bath from "./fetures/products/categories/Bath"
import Clothing from "./fetures/products/categories/Clothing"
import Feed from "./fetures/products/categories/Feed"
import Hygine from "./fetures/products/categories/Hygine"
import Play from "./fetures/products/categories/Play"
import Presents from "./fetures/products/categories/Presents"
import Safe from "./fetures/products/categories/Safe"
import Sleep from "./fetures/products/categories/Sleep"
import PlumaBrand from "./fetures/products/categories/PlumaBrand"
import Walk from "./fetures/products/categories/Walk"
import Promoties from "./fetures/products/categories/Promotions"
import HomeMain from "./fetures/home/HomeMain"
const App = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<SiteLayout />} >
                <Route index element={<HomePage/>} />
                {/* <Route index element={<HomeMain/>} /> */}
                <Route path="/categories/accessories" element={<Accessories />} />
                <Route path="/categories/bath" element={<Bath />} />
                <Route path="/categories/clothing" element={<Clothing />} />
                <Route path="/categories/feed" element={<Feed />} />
                <Route path="/categories/hygine" element={<Clothing />} />
                <Route path="/categories/play" element={<Clothing />} />
                <Route path="/categories/presents" element={<Clothing />} />
                <Route path="/categories/safe" element={<Clothing />} />
                <Route path="/categories/sleep"element={<Clothing />} />
                <Route path="/categories/walk" element={<Clothing />} />
                <Route path="/categories/plumabrand" element={<Clothing />} />
                <Route path="/categories/promotions"element={<Clothing />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="regist" element={<RegistPage />} />
                <Route path="/public/:productBarcod" element={<SingleProductPublic />} />
                <Route element={<PersistsLogin />}>
                    <Route element={<RequireAuth allowRoles={['admin', 'user']} />}>
                        <Route path="/dash" element={<DashLayout />}>
                            <Route index element={<HomeMain/>} />
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
    </Router>
}
export default App