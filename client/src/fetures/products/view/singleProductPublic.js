import { useNavigate, useParams } from "react-router-dom"
import "./singleProduct.css"
import { useGetProductByIdQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import "./singleProductPublic.css"
//שאלה ענקית על כל הדף הזה!
//?האם זה דף למנהל כדי שיוכל לשנות את פרטי המוצר או שזה דף למשתמש כדי שיראה אותו בנפרד
const SingleProductPublic = () => {
    const { productBarcod } = useParams()
    console.log(productBarcod);
    const { data: product, isLoading: isLoading, isError: isError, error: error } = useGetProductByIdQuery(productBarcod)
    console.log("data", product);
    console.log("isError", isError);
 
    // const product=getProduct(productBarcod)
    // //const navigate = useNavigate()

    const { getFilePath } = useGetFilePath()
    //console.log("image=",getFilePath(product.image));

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    if (!product)
        return <h1>not found!!!</h1>
    return (
        <div className="single-product-container">
            {/* <div className="single-product-img-container">
                <img src={getFilePath(product.image)} alt="" />
            </div> */}
            <div className="single-product-info" style={{ backgroundImage: `url(${getFilePath(product.image)})` }}>
                <div className="productName">{product.name}</div>
                <div>
                    company: {product.company}
                </div>
                <div>
                    price: {product.sellingPrice}
                </div>
            </div>

        </div>
    )
}

export default SingleProductPublic