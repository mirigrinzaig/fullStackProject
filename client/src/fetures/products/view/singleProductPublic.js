import { useNavigate,useParams } from "react-router-dom"
import "./singleProduct.css"
import {useGetProductByIdMutation} from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
//שאלה ענקית על כל הדף הזה!
//?האם זה דף למנהל כדי שיוכל לשנות את פרטי המוצר או שזה דף למשתמש כדי שיראה אותו בנפרד
const SingleProductPublic = () => {
    const {productBarcod}=useParams()
    console.log(productBarcod);
    const{getProduct,isLoading:isLoading,isError:isError,error:error}=useGetProductByIdMutation()
    const product=getProduct(productBarcod)
    //const navigate = useNavigate()

    const {getFilePath}=useGetFilePath()

    if(isLoading)return<h1>loading...</h1>
    if(isError)return<h1>{JSON.stringify(error)}</h1>
    if(!product)
        return<h1>not found!!!</h1>
    return (
        <div className="single-product-container">
            <div className="single-product-info">
                <div className="single-product-img-container">
                <img src={getFilePath(product.image)} alt=""  />
                </div>
                {product.name}
            </div>
            <div className="single-product-form-container">
                <form className="single-product-form">
                    <label>שם מוצר</label>
                    <input defaultValue={product.name} type="text" name="name" placeholder="שם המוצר" />
                    <input defaultValue={product.barcod} type="text" name="barcod" placeholder="ברקוד" required />
                    {/* //do select for company name? */}
                    <input defaultValue={product.company} type="text" name="company" placeholder="חברה" required />
                    <input defaultValue={product.category} type="text" name="category" placeholder="קטגוריה" />
                    <input defaultValue={product.size} type="number" name="size" placeholder="גודל" />
                    <input defaultValue={product.amount} type="text" name="amount" placeholder="כמות יחידות" required />
                    {/* //do select for colors? we need many and not only one! */}
                    {/* <input list="browsers" name="browser"/> */}
                    {/* defaultValue={product.image}  for image */}
                    <label>תמונת מוצר</label>
                    <input  type="file" name="image" />
                    <input defaultValue={product.agent} type="text" name="agent" placeholder="שם סוכן" />
                    <input defaultValue={product.agentPrice} type="number" name="agentPrice" placeholder="מחיר מהסוכן" />
                    <input defaultValue={product.sellingPrice} type="number" name="sellingPrice" placeholder="מחיר למכירה" />
                    {/* <input  type="radio" name="inSale" placeholder="האם המוצר במבצע?" defaultValue="במבצע" checked>
                        <input name="inSale" defaultValue="לא במבצע" />
                        <input name="inSale" defaultValue="במבצע" />
                    </input> */}
                </form>

            </div>
        </div>
    )
}

export default SingleProductPublic