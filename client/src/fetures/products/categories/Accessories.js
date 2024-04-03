// import { Link, useSearchParams } from "react-router-dom"
// import Search from "../../../component/search/Search"
// import useGetFilePath from "../../../hooks/useGetFilePath"
// import "../List/productsList.css"
// import { useSelector, useDispatch } from "react-redux";


// const Accessories = () => {
//     //const {data:products,isError,error,isLoading,isSuccess}=useGetAllProductsPublicQuery()
//     //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
//     let data
//     const { products, filteredData } = useSelector((state) =>state.products);
//     const dispatch = useDispatch();
//     const [searchParams]=useSearchParams()
//     const q=searchParams.get("q")
//     const {getFilePath}=useGetFilePath()

//     //if(isLoading)return<h1>loading...</h1>
//     //if(isError)return<h1>{JSON.stringify(error)}</h1>
//     //let filteredData=products.filter(p=>p.category==="accessories")
//     console.log(filteredData);
//     console.log("products",products);
//     //filteredData=!q?[...filteredData]:filteredData.filter(p=>p.name.indexOf(q)>-1&&p.category==="accessories")

//     // useEffect(()=>{
//     //     if(isSuccess){
//     //       data=products.filter((p)=>p.category.indexOf("accessories")>=0)
//     //      filteredData=!q?[...data]:data.filter(p=>p.name.indexOf(q)>-1)
//     //     }
//     //   },[isSuccess])

//  return (
//     <div>ffff</div>
//         // <div className="products-list">
//         //     <div className="products-list-top">
//         //         <Search placeholder={"חיפוש לפי שם מוצר"} />
//         //         <Link to="/login" className="products-list-add-btn">
//         //             כניסת משתמשים
//         //         </Link>
//         //         <Link to="/regist" className="products-list-add-btn">
//         //             הרשמה
//         //         </Link>
//         //     </div>
//         //     <table className="products-list-table">
//         //         <thead>
//         //             {/* <tr>
//         //                 תמונה
//         //                 שם מוצר
//         //                 חברה
//         //                 category
//         //                 מחיר
//         //             </tr> */}
//         //         </thead>
//         //         <tbody className="products">
//         //             {filteredData.map(product => (
//         //                 <tr className="single" key={product._id}>
//         //                     
//         //                         <div className="products-list-product">
//         //                             <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" />
//         //                         </div>
//         //                     
//         //                     <div className="details">
//         //                     
//         //                         {product.name}
//         //                     
//         //                     
//         //                         {product.company}
//         //                     
//         //                     
//         //                         {product.category}
//         //                     
//         //                     
//         //                         {product.sellingPrice}
//         //                     
//         //                     
//         //                         <div className="products-list-btns">
//         //                         <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
//         //                         </div>
//         //                     
//         //                     </div>
//         //                 </tr>
//         //             ))}
//         //         </tbody>
//         //     </table>
//         // </div>
//     )
// }


// export default Accessories
//import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Search from "../../../component/search/Search";
import useGetFilePath from "../../../hooks/useGetFilePath";
import { useGetAllProductsPublicQuery } from "../ProductsApiSlice"
//import { useEffect} from "react"
import { useNavigate} from "react-router-dom"
import "../List/productsList.css";

const Accessories = () => {
    //products from the locsal store
    //let { products, filteredData, loading, error } = useSelector((state) => state.products);
    //products from the api store:
    // useEffect(() => {
    //         const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery();
    //         // Do something with newProducts
    // }, [products]);
    // if(!products){
    //     const { data: newProducts, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery();
    // }
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
    const [searchParams] = useSearchParams()
    const q = searchParams.get("q")
    const { getFilePath } = useGetFilePath()
    const navigate = useNavigate()

    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    let filteredData = products.filter(p => p.category === "accessories")
    console.log(filteredData);
    filteredData = !q ? [...filteredData] : filteredData.filter(p => p.name.indexOf(q) > -1 && p.category === "accessories")

    // useEffect(()=>{
    //     if(isSuccess){
    //       data=products.filter((p)=>p.category.indexOf("accessories")>=0)
    //      filteredData=!q?[...data]:data.filter(p=>p.name.indexOf(q)>-1)
    //     }
    //   },[isSuccess])

    return (
        <div className="products-list">
            <div className="products-list-top">
                <Search placeholder={"חיפוש לפי שם מוצר"} />
                <Link to="/login" className="products-list-add-btn">
                    כניסת משתמשים
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link>
            </div>
            <div className="products-list-table">
                <div className="products">
                    {filteredData.map(product => (
                        <div className="single" key={product._id}>
                            <div className="products-list-product">
                                {/* <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" /> */}
                            </div>
                            <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" /></Link>
                            <div className="details">
                                {product.name}
                                {product.company}
                                {product.sellingPrice}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Accessories