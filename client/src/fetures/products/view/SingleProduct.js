import { useNavigate, useParams } from "react-router-dom"
import "./singleProduct.css"
import { useEffect } from "react"
import { useGetAllProductsQuery, useUpdateProductMutation } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"

const SingleProduct = () => {
    const { productBarcod } = useParams()
    const { data: products, isLoading, isError, error, isSuccess } = useGetAllProductsQuery()
    const [updateProduct, { isSuccess: isUpdateSuccess }] = useUpdateProductMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isUpdateSuccess) {
            navigate("/dash/products")
        }

    }, [isUpdateSuccess])

    //function for submit the data:
    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        //const productObj = Object.fromEntries(data.entries())
        //console.log(`productObj: ${productObj}`)
        updateProduct(data)
    }

    const { getFilePath } = useGetFilePath()

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>

    const product = products.find(pr => pr.barcod === productBarcod)
    console.log(`product: ${product.name},agent:${product.agent}`);
    if (!product)
        return <h1>not found!!!</h1>
    return (
        <div className="single-product-container" style={{ flexDirection: 'column' }}>
            <div className="single-product-info">
            <h2>{product.name}</h2>
                <div className="single-product-img-container">
                    <img src={getFilePath(product.image)} alt="" />
                </div>
            </div>
            <div className="single-product-form-container">
                <form className="single-product-form" onSubmit={formSubmit}>
                    <label>שם מוצר</label>
                    <input defaultValue={product.name} type="text" name="name" placeholder="שם המוצר" />
                    <label>ברקוד</label>
                    <input defaultValue={product.barcod} type="text" name="barcod" placeholder="ברקוד" required />
                    {/* //do select for company name? */}
                    <label>חברה</label>
                    <input defaultValue={product.company} type="text" name="company" placeholder="חברה" required />
                    <label>קטגוריה</label>
                    <input defaultValue={product.category} type="text" name="category" placeholder="קטגוריה" />
                    {(product.category.toLowerCase() === "clothing" || product.category === "ביגוד") && <label>מידה</label>}
                    {(product.category.toLowerCase() === "clothing" || product.category === "ביגוד") && <input type="text" name="size" placeholder="מידה" />}
                    <label>כמות</label>
                    <input defaultValue={product.amount} type="text" name="amount" placeholder="כמות יחידות" required />
                    {/* //do select for colors? we need many and not only one! */}
                    {/* <input list="browsers" name="browser"/> */}
                    {/* defaultValue={product.image}  for image */}
                    <label>שינוי תמונת מוצר</label>
                    <input type="file" name="image" />
                    <label>שם הסוכן</label>
                    <input defaultValue={product.agent} type="text" name="agent" placeholder="שם סוכן" />
                    <label>מחיר מהסוכן</label>
                    <input defaultValue={product.agentPrice} type="number" name="agentPrice" placeholder="מחיר מהסוכן" />
                    <label>מחיר למכירה</label>
                    <input defaultValue={product.sellingPrice} type="number" name="sellingPrice" placeholder="מחיר למכירה" />
                    <label>
                        <input type="radio" name="inSale" value="true" checked /> במבצע
                    </label>
                    <label>
                        <input type="radio" name="inSale" value="false" /> לא במבצע
                    </label>
                    <button type="submit">עדכן</button>
                </form>

            </div>
        </div>
    )
}

export default SingleProduct