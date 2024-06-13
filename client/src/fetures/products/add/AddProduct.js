import "./addProduct.css"
import { useAddProductMutation } from "../ProductsApiSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const AddProduct = () => {
    const [addProduct, { error, isError, isLoading, isSuccess }] = useAddProductMutation()
    const navigate = useNavigate()

    const [amColors, setAmColors] = useState(0)
    const [colors, setColors] = useState([]);
    const [category, setCategory] = useState("")


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

        // Add colors array to form data
        const dataColors = colors.map(c => {
            return c.value;
        })
        data.append('colors', dataColors);
        addProduct(data)
    }

    const handleAmountChange = (e) => {
        const amount = parseInt(e.target.value);
        setAmColors(amount);
        // Create an array of length 'amount' to hold color inputs
        const newColors = Array.from({ length: amount }, (_, index) => ({
            id: index,
            value: 'black'
        }));
        setColors(newColors);
    };

    const handleColorChange = (color, id) => {
        const updatedColors = colors.map(item =>
            item.id === id ? { ...item, value: color } : item
        );
        setColors(updatedColors);
    };

    return (
        <div className="add-product-container">
            <form onSubmit={formSubmit} className="add-product-form">
                <h2 className="addTitle">הוספת מוצר לחנות</h2>
                <input type="text" name="name" placeholder="שם המוצר" required />
                <input type="text" name="barcod" placeholder="ברקוד" required />
                <input type="text" name="company" placeholder="חברה" required />
                <input type="text" name="category" placeholder="קטגוריה" onChange={(e) => { setCategory(e.target.value) }} />
                <input type="text" name="itemDescription" placeholder="תיאור המוצר" />
                {/* only if is a cloth there is a size! */}
                {(category.toLowerCase() === "clothing" || category === "ביגוד") && <input type="text" name="size" placeholder="מידה" />}
                <input type="text" name="amount" placeholder="כמות יחידות" required />
                <input type="number" name="amountColors" placeholder="כמות צבעים במלאי" onChange={handleAmountChange} />
                <div className="colors">
                    {
                        colors.map(color => (
                            <div className="colorSelect">
                                <input className="colorInput" style={{ backgroundColor: color.value }}
                                    key={color.id}
                                    type="color"
                                    value={color.value}
                                    placeholder="בחירת צבע"
                                    onChange={(e) => handleColorChange(e.target.value, color.id)}
                                />
                                {/* <input type="file" name="image" onChange={(e) => handleColorChange(e.target.value, color.id)} /> */}
                            </div>
                        ))

                    }
                </div>

                {/* <input list="browsers" name="browser"/> */}
                <input type="file" name="image" placeholder="תמונת  המוצר"/>
                <input type="text" name="agent" placeholder="שם סוכן" />
                <input type="text" name="agentPrice" placeholder="מחיר מהסוכן" />
                <input type="text" name="sellingPrice" placeholder="מחיר למכירה" />
                <label>
                    <input type="radio" name="inSale" value="true" checked /> במבצע
                </label>
                <label>
                    <input type="radio" name="inSale" value="false" /> לא במבצע
                </label>
                {/* <input type="boolean" name="marked" placeholder="marked" /> */}
                <button type="submit">אישור</button>
            </form>
        </div>
    )
}
export default AddProduct