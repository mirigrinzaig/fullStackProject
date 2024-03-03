import "./homePage.css"
import Search from "../../component/search/Search"
import { useDeleteProductMutation,useGetAllProductsPublicQuery,useGetProductByIdQuery} from "../products/ProductsApiSlice"
import { Link,useSearchParams} from "react-router-dom"
import useGetFilePath from "../../hooks/useGetFilePath"


const HomePage = () => {
    const {data:products,isError,error,isLoading}=useGetAllProductsPublicQuery()
    const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
    const [deleteProduct,{isSuccess:isDeleteSuccess}]=useDeleteProductMutation()

    const deleteClick=(product)=>{
        console.log("product barcod:",product.barcod);
        if(window.confirm("בטוח שברצונך למחוק את המוצר?")){
            deleteProduct({barcod:product.barcod})
        }
    }
    const [searchParams]=useSearchParams()
    const q=searchParams.get("q")
    const {getFilePath}=useGetFilePath()

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
            </div>
            <table className="products-list-table">
                <thead>
                    <tr>
                        <td>תמונה</td>
                        <td>שם מוצר</td>
                        <td>חברה</td>
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
                                {product.sellingPrice}
                            </td>
                            <td>
                                <div className="products-list-btns">
                                <Link to={`/dash/products/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default HomePage