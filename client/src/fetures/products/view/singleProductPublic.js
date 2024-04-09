import { useNavigate, useParams } from "react-router-dom"
import "./singleProduct.css"
import { useGetProductByIdQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import "./singleProductPublic.css"
import { useState } from "react"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";


//שאלה ענקית על כל הדף הזה!
//?האם זה דף למנהל כדי שיוכל לשנות את פרטי המוצר או שזה דף למשתמש כדי שיראה אותו בנפרד
const SingleProductPublic = () => {
    const { productBarcod } = useParams()
    console.log(productBarcod);
    const { data: product, isLoading: isLoading, isError: isError, error: error } = useGetProductByIdQuery(productBarcod)
    console.log("data", product);
    console.log("isError", isError);
    const [amount, setAmount] = useState(1)
    const [moreInfo, setMoreInfo] = useState(false)


    // const product=getProduct(productBarcod)
    // //const navigate = useNavigate()

    const { getFilePath } = useGetFilePath()
    //console.log("image=",getFilePath(product.image));

    //function to display more info
    const displayMoreInfo = () => {
        setMoreInfo(!moreInfo)
    }
    //functions to add or reduce amount
    const plusOne = () => {
        const newAmount = amount + 1
        setAmount(newAmount)
    }
    const minusOne = () => {
        const newAmount = amount - 1
        setAmount(newAmount)
    }

    const addToCart = () => {

    }
    const addToFavourites = () => {

    }
    //למחוק אחר כך, לנסיון תצוגה בלבד!
    const colors = ['rgb(0, 159, 173)', '#f8f0f3', '#c76681d6']

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    if (!product)
        return <h1>not found!!!</h1>
    return (
        <div className="single-product-container">
            {/* <div className="single-product-img-container">
                <img src={getFilePath(product.image)} alt="" />
            </div> */}
            <div className="single-product-img" style={{ backgroundImage: `url(${getFilePath(product.image)})` }}>
            </div>
            {/* `url(${getFilePath(product.image)})` */}
            <div className="single-product-left-side">
                <div className="productDetails">
                    <div className="productName">
                        <div id="productName">{product.name}</div>
                        {product.company}<br /><br />
                        {product.sellingPrice}<TbCurrencyShekel style={{ fontSize: 17 }} />
                    </div>
                    <button id="moreInfo" onClick={displayMoreInfo}>למידע נוסף > </button>
                    {moreInfo &&
                        <div className="moreInfo">
                            moreInfo
                            {product.itemDescription}
                        </div>}
                    <div className="colorsBox">
                        {
                            //קודם להביא את מערך הצבעים
                            // product.colors.map(color=><button style={{backgroundColor:color}}/>)
                            colors.map(color => <button style={{ backgroundColor: color }} />)

                        }
                    </div>

                </div>
                <div className="amountToBuy">
                    <button className="addButton" onClick={plusOne}>+</button>
                    <h2>{amount}</h2>
                    <button className="addButton" onClick={minusOne}>-</button>
                </div>
                <div className="productAdd">
                    <button className="addToCart" onClick={addToCart}>הוספה לסל</button>
                    <button className="addToFavourites" onClick={addToFavourites}><BsBagHeartFill /></button>
                </div>

            </div>


        </div>
    )
}

export default SingleProductPublic