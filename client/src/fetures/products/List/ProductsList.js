import "./productsList.css"
import Search from "../../../component/search/Search"
import { useGetAllProductsQuery, useDeleteProductMutation } from "../ProductsApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import useGetFilePath from "../../../hooks/useGetFilePath"
import { BsFillHeartFill } from "react-icons/bs";
import { TbCurrencyShekel } from "react-icons/tb";

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
    if (isError) return <h1>{JSON.sdivingify(error)}</h1>

    const filteredData = !q ? [...products] : products.filter(p => p.name.indexOf(q) > -1)

    return (
        <div className="products-list">
            <div className="products-list-top">
                <Search placeholder={"חיפוש לפי שם מוצר"} />
                <Link to="/dash/products/add" className="products-list-add-btn">
                    הוספת מוצר
                </Link>
            </div>
            <div className="products">
                {filteredData.map(product => (
                    <div className="single" key={product._id}>
                        <Link to={`/dash/products/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
                            <div className="details">
                                <div className="details-wr">
                                    {product.barcod}<br />
                                    {product.name}<br />
                                    {product.company}<br />
                                    {product.sellingPrice}<TbCurrencyShekel style={{ fontSize: 17 }} /></div>
                                כמות במלאי: {product.amount}<br /><br />
                                {(product.amount === 0) && (
                                    <div>
                                        אזל מהמלאי
                                    </div>
                                )}
                                <div className="products-list-btns">
                                    <button onClick={() => { deleteClick(product) }} className="products-list-btn products-list-delete">delete</button></div>
                            </div>
                        </Link>
                        {/* <button className="products-list-btn-love" onClick={() => { }}>
                            <BsFillHeartFill size={20} />
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductsList