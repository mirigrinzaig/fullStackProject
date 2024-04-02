import "./homePage.css"
import Search from "../../component/search/Search"
import { useGetAllProductsPublicQuery,useGetProductByIdQuery} from "../products/ProductsApiSlice"
import { Link,useSearchParams} from "react-router-dom"
import useGetFilePath from "../../hooks/useGetFilePath"
import "../products/List/productsList.css"
import { useEffect } from "react"
import { UseSelector,useDispatch} from "react-redux"
import { resetProducts } from "../products/productsSlice"


const HomePage = () => {
    const {data:products,isError,error,isLoading,isSuccess}=useGetAllProductsPublicQuery()
    //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()

    const [searchParams]=useSearchParams()
    const q=searchParams.get("q")
    const {getFilePath}=useGetFilePath()

    const dispatch=useDispatch()

    useEffect(()=>{
        if(isSuccess){
            dispatch(resetProducts(products))
        }

    },[isSuccess])


    if(isLoading)return<h1>loading...</h1>
    if(isError)return<h1>{JSON.stringify(error)}</h1>

    
    const filteredData=!q?[...products]:products.filter(p=>p.name.indexOf(q)>-1)

 return (
        <div className="products-list">
            <div className="products-list-top">
                <Search placeholder={"חיפוש לפי שם מוצר"} />
                <Link to="/login" className="products-list-add-btn">
                    כניסת משתמשים
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link>
            </div>
            <table className="products-list-table">
                <thead>
                </thead>
                <tbody className="products">
                    {filteredData.map(product => (
                        <tr className="single" key={product._id}>
                            <td>
                                <div className="products-list-product">
                                    {/* <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" /> */}
                                </div>
                            </td>
                            <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" /></Link>
                            <div className="details">
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.company}
                            </td>
                            <td>
                                {product.sellingPrice}
                            </td>
                            <td>
                                <div className="products-list-btns">
                              
                                </div>
                            </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default HomePage