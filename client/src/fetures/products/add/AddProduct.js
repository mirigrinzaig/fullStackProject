import "./addProduct.css"
import { useAddProductMutation } from "../ProductsApiSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const AddProduct = () => {
    const [addProduct, { error, isError, isLoading, isSuccess }] = useAddProductMutation()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/dash/products")
        }
    }, [isSuccess])
    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        //const productObj = Object.fromEntries(data.entries())
        //console.log(productObj)
        addProduct(data)
    }
    return (
        <div className="add-product-container">
            <form onSubmit={formSubmit} className="add-product-form">
                <input type="text" name="name" placeholder="שם המוצר" required />
                <input type="text" name="barcod" placeholder="ברקוד" required />
                {/* //do select for company name? */}
                <input type="text" name="company" placeholder="חברה" required />
                <input type="text" name="category" placeholder="קטגוריה" />
                <input type="number" name="size" placeholder="גודל" />
                <input type="text" name="amount" placeholder="כמות יחידות" required />
                {/* //do select for colors? we need many and not only one! */}
                {/* <input list="browsers" name="browser"/> */}
                <input type="file" name="image" />
                <input type="text" name="agentName" placeholder="שם סוכן" />
                <input type="number" name="agentPrice" placeholder="מחיר מהסוכן" />
                <input type="number" name="sellingPrice" placeholder="מחיר למכירה" />
                {/* <input type="radio" name="inSale" placeholder="האם המוצר במבצע?" value="במבצע" checked>
                <input name="inSale" value="לא במבצע"/>
                <input name="inSale" value="במבצע"/>
                </input> */}
                {/* <input type="boolean" name="marked" placeholder="marked" /> */}
                <button type="submit">אישור</button>
            </form>
        </div>
    )
}
export default AddProduct