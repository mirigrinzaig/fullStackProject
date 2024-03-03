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

const App = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<SiteLayout />} >
                <Route index element={<HomePage/>} />
                <Route path="login" element={<LoginPage />} />
                <Route element={<PersistsLogin />}>
                    <Route element={<RequireAuth allowRoles={['admin', 'user']} />}>
                        <Route path="/dash" element={<DashLayout />}>
                            <Route index element={<h1>DashBoard</h1>} />
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
                                    <Route path="public/:productBarcod" element={<SingleProductPublic/>} />
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