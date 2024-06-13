import { useParams } from "react-router-dom"
import "./singleProduct.css"
import { useGetProductByIdQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import "./singleProductPublic.css"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";
import { useEffect, useState } from "react"

const SingleProductPublic = () => {
    const { productBarcod } = useParams()
    console.log(productBarcod);
    const { data: product, isLoading: isLoading, isError: isError, error: error, isSuccess: isSuccess } = useGetProductByIdQuery(productBarcod)
    console.log("isError", isError);
    console.log("isSuccess", isSuccess);
    const [amount, setAmount] = useState(1)
    const [size, setSize] = useState(0)
    const [moreInfo, setMoreInfo] = useState(false)
    const [info, setInfo] = useState("אין מידע נוסף.")
    const [colors, setColors] = useState(['rgb(0, 159, 173)', '#f8f0f3', '#c76681d6'])
    const [category, setCategory] = useState("")

    // the favourites list
    const favouritesList = JSON.parse(localStorage.getItem("favouritesList")) || [];
    console.log("favorites:", favouritesList);

    //colors:
    useEffect(() => {
        if (isSuccess) {
            console.log("colors: arr: ", product.colors);
            // console.log(`product=${product}`);
            // console.log("amount=",product.amount);
            product.colors?.length > 0 ? setColors(product.colors) : setColors(['rgb(0, 159, 173)', '#f8f0f3', '#c76681d6'])
            product.itemDescription?.length > 0 ? setInfo(product.itemDescription) : setInfo("אין מידע נוסף")
            setCategory(product.category)
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
        if (newAmount < 1)
            newAmount = 1
        setAmount(newAmount)
    }

    const addToCart = () => {
        // if (category.toLowerCase() === "clothing" || category === "ביגוד")
        //     alert(`the size is: ${size}`)
        if (product.amount === 0)
            alert("המוצר אזל מהמלאי, לא ניתן לרכוש אותו כרגע")
        else
            alert(`המוצר ${product.name} הוסף לסל שלך!`)

    }
    const addToFavourites = (barcod) => {
        // // if (category.toLowerCase() === "clothing" || category === "ביגוד")
        // //     alert(`the size is: ${size}`)
        // //   const findName =  favouritesList.find(p=>{p.name===name})
        // //   if(findName)
        // {
        //     favouritesList.push(JSON.stringify(product))
        //     localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
        //     // favouritesList.push(JSON.stringify(product))
        //     console.log(`favouritesList:${favouritesList}`);
        //     alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`)
        //     // saveList()
        // }

        // add the product to favouritesList as a string
        favouritesList.push((product));
        localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
        console.log(`favouritesList:${favouritesList}`);
        alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`);
    }



    console.log(colors)

    const saveList = () => {
        localStorage.setItem("favouritesList", JSON.stringify(favouritesList))
    }

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    if (!product)
        return <h1>not found!!!</h1>
    return (
        <div className="single-product-container-public">
            {/* <div className="single-product-img-container">
                <img src={getFilePath(product.image)} alt="" />
            </div> */}
            <div className="single-product-img-public" style={{ backgroundImage: `url(${getFilePath(product.image)})` }}>
            </div>
            {/* `url(${getFilePath(product.image)})` */}
            <div className="single-product-left-side">
                <div className="productDetails">
                    <div className="productName">
                        <div id="productName">{product.name}</div>
                        {product.company}<br /><br />
                        {product.sellingPrice}<TbCurrencyShekel style={{ fontSize: 17 }} />

                        {(product.amount === 0) && (
                            <div className="azal">
                                אזל מהמלאי
                            </div>
                        )}
                    </div>
                    <button id="moreInfo" onClick={displayMoreInfo}>למידע נוסף &#62;&gt;</button>
                    {moreInfo &&
                        <div className="moreInfo">
                            {info}
                        </div>
                    }
                    {colors && <div className="colorsBox">
                        {
                            //קודם להביא את מערך הצבעים                       
                            colors.map(color => <button style={{ backgroundColor: color }} />)
                        }
                    </div>}

                    {(category === "clothing" || category === "ביגוד" || category === "Clothing") &&
                        (
                            <div>
                                מידה:
                                <select value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value="0-3">0-3</option>
                                    <option value="3-6">3-6</option>
                                    <option value="6-9">6-9</option>
                                    <option value="9-12">9-12</option>
                                    <option value="12-18">12-18</option>
                                    <option value="18-24">18-24</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    {/* נוסיף עוד אפשרויות כאן כמו S, M, L וכו' */}
                                </select></div>
                        )}

                </div>
                <div className="amountToBuy">
                    <button className="addButton" onClick={plusOne}>+</button>
                    <h2>{amount}</h2>
                    <button className="addButton" onClick={minusOne}>-</button>
                </div>
                <div className="productAdd">
                    <button className="addToCart" onClick={addToCart}><FaCartPlus /></button>
                    <button className="addToFavourites" onClick={() => { addToFavourites(product.barcod) }}><BsBagHeartFill /></button>
                </div>

            </div>


        </div>
    )
}

export default SingleProductPublic
