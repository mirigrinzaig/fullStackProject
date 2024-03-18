import "./productsList.css"
import Search from "../../../component/search/Search"
import { useGetAllProductsQuery, useDeleteProductMutation } from "../ProductsApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import useGetFilePath from "../../../hooks/useGetFilePath"

const ProductsList = () => {
    // const products = [{ _id: 1, name: "name",imageUrl:"url", company:"company", "price":"---שח"}
    // ]
    const { data: products, isError, error, isLoading } = useGetAllProductsQuery()
    const [deleteProduct, { isSuccess: isDeleteSuccess }] = useDeleteProductMutation()

    const deleteClick = (product) => {
        console.log("product barcod:", product.barcod);
        if (window.confirm("?בטוח שברצונך למחוק את המוצר")) {
            deleteProduct({ barcod: product.barcod })
        }
    }

    const [searchParams] = useSearchParams()
    const q = searchParams.get("q")
    const { getFilePath } = useGetFilePath()


    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>

    const filteredData = !q ? [...products] : products.filter(p => p.name.indexOf(q) > -1)

    return (
        <div className="products-list">
            <div className="products-list-top">
                <Search placeholder={"חיפוש לפי שם מוצר"} />
                <Link to="/dash/products/add" className="products-list-add-btn">
                    הוספת מוצר
                </Link>
            </div>
            <table className="products-list-table">
                <thead>
                    {/* <tr>
                        <td>תמונה</td>
                        <td>barcod</td>
                        <td>שם מוצר</td>
                        <td>חברה</td>
                        <td>מחיר</td>
                    </tr> */}
                </thead>
                <tbody className="products">
                    {filteredData.map(product => (
                        <tr className="single" key={product._id}>
                            <td>
                                <div className="products-list-product">
                                    <img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
                                </div>
                            </td>
                            <div className="details">
                                <td>
                                    {product.barcod}
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
                                        <Link to={`/dash/products/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
                                        <button onClick={() => { deleteClick(product) }} className="products-list-btn products-list-delete">delete</button></div>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductsList