// import { Link, useSearchParams } from "react-router-dom"
// import Search from "../../../component/search/Search"
// import { useGetAllProductsPublicQuery} from "../ProductsApiSlice"
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
//         //                 <td>תמונה</td>
//         //                 <td>שם מוצר</td>
//         //                 <td>חברה</td>
//         //                 <td>category</td>
//         //                 <td>מחיר</td>
//         //             </tr> */}
//         //         </thead>
//         //         <tbody className="products">
//         //             {filteredData.map(product => (
//         //                 <tr className="single" key={product._id}>
//         //                     <td>
//         //                         <div className="products-list-product">
//         //                             <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" />
//         //                         </div>
//         //                     </td>
//         //                     <div className="details">
//         //                     <td>
//         //                         {product.name}
//         //                     </td>
//         //                     <td>
//         //                         {product.company}
//         //                     </td>
//         //                     <td>
//         //                         {product.category}
//         //                     </td>
//         //                     <td>
//         //                         {product.sellingPrice}
//         //                     </td>
//         //                     <td>
//         //                         <div className="products-list-btns">
//         //                         <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
//         //                         </div>
//         //                     </td>
//         //                     </div>
//         //                 </tr>
//         //             ))}
//         //         </tbody>
//         //     </table>
//         // </div>
//     )
// }


// export default Accessories
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Search from "../../../component/search/Search";
import useGetFilePath from "../../../hooks/useGetFilePath";
import "../List/productsList.css";

const Accessories = () => {
    const { products, filteredData, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const { getFilePath } = useGetFilePath();

    if (loading) return <h1>loading...</h1>;
    if (error) return <h1>{JSON.stringify(error)}</h1>;

    // הצגת נתונים מסוננים לפי קטגוריה (אופציונלי)
    const filteredAccessories = products.filter((p) => p.category === "accessories");
    console.log("products:",products);
    console.log("filteredAccessories:",filteredAccessories);

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
            <table className="products-list-table">
                <thead>
                    {/* <tr>
            <td>תמונה</td>
            <td>שם מוצר</td>
            <td>חברה</td>
            <td>category</td>
            <td>מחיר</td>
          </tr> */}
                </thead>
                <tbody>
                    {/* הצג את הנתונים המסוננים או את כל המוצרים */}
                    {filteredAccessories.length > 0 ? (
                        filteredAccessories.map((product) => (
                            <tr className="single" key={product._id}>
                                <td>
                                    <div className="products-list-product">
                                        <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" />
                                    </div>
                                </td>
                                <div className="details">
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.company}
                                    </td>
                                    <td>
                                        {product.category}
                                    </td>
                                    <td>
                                        {product.sellingPrice}
                                    </td>
                                    <td>
                                        <div className="products-list-btns">
                                            <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        ))
                    ) : (
                        products.map((product) => (
                            <tr className="single" key={product._id}>
                            <td>
                                <div className="products-list-product">
                                    <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" />
                                </div>
                            </td>
                            <div className="details">
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.company}
                                </td>
                                <td>
                                    {product.category}
                                </td>
                                <td>
                                    {product.sellingPrice}
                                </td>
                                <td>
                                    <div className="products-list-btns">
                                        <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">view</Link>
                                    </div>
                                </td>
                            </div>
                        </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Accessories;
