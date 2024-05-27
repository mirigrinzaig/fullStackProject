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
                <div className="single-product-img-container">
                    <img src={getFilePath(product.image)} alt="" />
                </div>
                {product.name}
            </div>
            <div className="single-product-form-container">
                <form className="single-product-form" onSubmit={formSubmit}>
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
                    <input type="file" name="image" />
                    <input defaultValue={product.agent} type="text" name="agent" placeholder="שם סוכן" />
                    <input defaultValue={product.agentPrice} type="number" name="agentPrice" placeholder="מחיר מהסוכן" />
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