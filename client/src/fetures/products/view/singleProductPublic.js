import { useNavigate, useParams } from "react-router-dom"
import "./singleProduct.css"
import { useGetProductByIdQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import "./singleProductPublic.css"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

import { useEffect,useState } from "react"

//שאלה ענקית על כל הדף הזה!
//?האם זה דף למנהל כדי שיוכל לשנות את פרטי המוצר או שזה דף למשתמש כדי שיראה אותו בנפרד
const SingleProductPublic = () => {
    const { productBarcod } = useParams()
    console.log(productBarcod);
    const { data: product, isLoading: isLoading, isError: isError, error: error,isSuccess:isSuccess} = useGetProductByIdQuery(productBarcod)
    console.log("data", product);
    //console.log("colors",product.colors);
    console.log("isError", isError);
    console.log("isSuccess",isSuccess);
    const [amount, setAmount] = useState(1)
    const [moreInfo, setMoreInfo] = useState(false)
    const [info, setInfo] = useState("אין מידע נוסף.")
    const [colors,setColors]=useState(['rgb(0, 159, 173)', '#f8f0f3', '#c76681d6'])


    //colors:
    useEffect(() => {
        if (isSuccess) {
            console.log("colors: arr: ",product.colors);
            product.colors?.length>0?setColors(product.colors):setColors(['rgb(0, 159, 173)', '#f8f0f3', '#c76681d6'])
            product.itemDescription?.length>0?setInfo(product.itemDescription):setInfo("אין מידע נוסף")
        }
    }, [isSuccess])



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
        let newAmount = amount - 1
        if(newAmount<1)
        newAmount=1
        setAmount(newAmount)
    }

    const addToCart = () => {
        alert(`המוצר ${product.name} הוסף לסל שלך!`)

    }
    const addToFavourites = () => {
        alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`)
    }
    console.log(colors)

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
                    <button id="moreInfo" onClick={displayMoreInfo}>למידע נוסף</button>
                    {moreInfo&&
                        <div className="moreInfo">
                            {info}
                        </div>
                    }
                    <div className="colorsBox">
                        {
                            //קודם להביא את מערך הצבעים                       
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
                    <button className="addToCart" onClick={addToCart}><FaCartPlus/></button>
                    <button className="addToFavourites" onClick={addToFavourites}><BsBagHeartFill /></button>
                    {/* <button onClick={addToCart}>🛒</button>
                    <button onClick={addToFavourites}>❤</button> */}
                </div>

            </div>


        </div>
    )
}

export default SingleProductPublic
