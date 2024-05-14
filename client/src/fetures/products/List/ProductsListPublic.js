import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"

const ProductsListPublic = (category) => {
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
    const [searchParams] = useSearchParams()
    const q = searchParams.get("q")
    const { getFilePath } = useGetFilePath()

    if (isLoading) return <div className="errorPage">אנא המתינו, הדף נטען</div>
    if (isError) return <div className="errorPage">מטערים, קיימת תקלה תכנית</div>
    //if not category.
    let filteredData = products
    if (category) {
        console.log("category", category);
        console.log("category", category.category);
        filteredData = products.filter(p => p.category.toLowerCase() === category.category.toLowerCase())
    }

    if (category)
        filteredData = !q ? [...filteredData] : filteredData.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) > -1 && p.category.toLowerCase() === category.category.toLowerCase())
    else
        filteredData = !q ? [...filteredData] : filteredData.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) > -1)

    return (
        <div className="products-list">
            {category && (
                <h3>
                    {category.category}
            
                </h3>
            )}
            <div className="products-list-top">
                {/* <Search placeholder={"חיפוש לפי שם מוצר"} /> */}
                {/* <Link to="/login" className="products-list-add-btn">
                    כניסת משתמשים
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link> */}
            </div>
            <div className="products-list-table">
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
                                {(product.amount === 0) && (
                                    <div className="azal">
                                        אזל במלאי
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProductsListPublic