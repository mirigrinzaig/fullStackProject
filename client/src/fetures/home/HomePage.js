import "./homePage.css"
import Search from "../../component/search/Search"
import { useGetAllProductsPublicQuery} from "../products/ProductsApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import useGetFilePath from "../../hooks/useGetFilePath"
import "../products/List/productsList.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
//import { useNavigate } from "react-router-dom"
import { resetProducts } from "../products/productsSlice"
//import {useSendLogoutMutation} from "../auth/authApiSlice"


const HomePage = () => {
    const { data: products, isError, error, isLoading,isSuccess} = useGetAllProductsPublicQuery()
    // const [logout,{isSuccess}]=useSendLogoutMutation()
    //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
    //const navigate=useNavigate()
    const [searchParams] = useSearchParams()
    const q = searchParams.get("q")
    const { getFilePath } = useGetFilePath()

    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetProducts(products))
        }

    }, [isSuccess])

    // const logOutClick=()=>{
    //     logout()
    //     navigate("/")
    // }

    console.log("error: ",error);

    if (isLoading) return <div className="errorPage">loading...</div>
    if (isError) return <div className="errorPage">מצטערים, שגיאה זמנית.</div>


    const filteredData = !q ? [...products] : products.filter(p => p.searchDetails.indexOf(q) > -1)


    return (
        <div className="products-list">
            <div className="products-list-top">
                <Search placeholder={"חיפוש כללי"} />
                <Link to="/login" className="products-list-add-btn">
                    כניסת משתמשים
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link>
            </div>
            {/* there are no products in the search */}
            {filteredData.length<1&&<div className="errorPage">נראה שאין מוצרים העונים על התנאי שלך, נסה לחפש חיפוש מורחב יותר.</div>}
            <div className="products">
                {filteredData.map(product => (
                    <div className="single" key={product._id}>
                        <div className="products-list-product">
                            {/* <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" /> */}
                        </div>
                        <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" /></Link>
                        <div className="details">
                            {product.name}
                            {product.company}
                            {product.sellingPrice}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default HomePage