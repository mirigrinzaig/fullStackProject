import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsQuery } from "../ProductsApiSlice"
import { useState } from "react"
const Accessories = () => {
    const { data: products, isError, error, isLoading } = useGetAllProductsQuery()
    const [searchParams] = useSearchParams()
    const [displayData,setDisplayData] = useState([])

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    const data = products.filter(p => p.category === "Ac")

    console.log(products);
    console.log(data);
    const q = searchParams.get("q")
    

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    const filteredData = !q ? [...data] : data.filter(p => p.name.indexOf(q) > -1)
    //setDisplayData(filteredData)
    const priceFilter = (event) => {
        let tempArr=[]
        if (event.target.value === "desc")
        {
             tempArr = filteredData.sort((a, b) => a.sellingPrice - b.sellingPrice)
                    setDisplayData(tempArr)
        }
        else
            tempArr = filteredData.sort((a, b) => b.sellingPrice - a.sellingPrice);
        setDisplayData(tempArr)
    }

    return <>
        <Search placeholder="חיפוש לפי שם מוצר"/>
        <div className="filterBox">
            <select  onChange={priceFilter}>
            <option value="desc">מיין לפי מחיר</option>
            <option value="desc">מהנמוך לגבוה</option>
            <option value="asc">מהגבוה לנמוך</option>

            </select>
        </div>
        {
            displayData.map((product) => (<div>
                {product.name}
            </div>))
        }
    </>
}
export default Accessories

