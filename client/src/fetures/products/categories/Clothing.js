import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsPublicQuery} from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"

const Clothing = () => {
    const {data:products,isError,error,isLoading,isSuccess}=useGetAllProductsPublicQuery()
    //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
    let data
    const [searchParams]=useSearchParams()
    const q=searchParams.get("q")
    const {getFilePath}=useGetFilePath()

    if(isLoading)return<h1>loading...</h1>
    if(isError)return<h1>{JSON.stringify(error)}</h1>
    let filteredData=products.filter(p=>p.category==="clothing")
    console.log(filteredData);
    filteredData=!q?[...filteredData]:filteredData.filter(p=>p.name.indexOf(q)>-1&&p.category==="clothing")

    // useEffect(()=>{
    //     if(isSuccess){
    //       data=products.filter((p)=>p.category.indexOf("accessories")>=0)
    //      filteredData=!q?[...data]:data.filter(p=>p.name.indexOf(q)>-1)
    //     }
    //   },[isSuccess])

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
                    <tr>
                        <td>תמונה</td>
                        <td>שם מוצר</td>
                        <td>חברה</td>
                        <td>category</td>
                        <td>מחיר</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(product => (
                        <tr key={product._id}>
                            <td>
                                <div className="products-list-product">
                                    <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" />
                                </div>
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.company}
                            </td>
                            <td>
                                {product.category}
                            </td>
                            <td>
                                {product.sellingPrice}
                            </td>
                            <td>
                                <div className="products-list-btns">
                                <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Clothing