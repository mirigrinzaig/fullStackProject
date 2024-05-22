import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsFillHeartFill } from "react-icons/bs";

import "./productsList.css"

const toLowerCase = (str) => str.toLowerCase();
const ProductsListPublic = ({ category }) => {
    const { data: products, isError, isLoading } = useGetAllProductsPublicQuery();
    const [searchParams] = useSearchParams();
    const company = searchParams.get("company");
    const q = searchParams.get("q");
    const { getFilePath } = useGetFilePath()

    if (isLoading) return <div className="errorPage">אנא המתינו, הדף נטען</div>;
    if (isError) return <div className="errorPage">מטערים, קיימת תקלה תכנית</div>;

    // בדיקה של קיום הנתונים והשמת ערכים בהתאם
    let filteredData = [...products];

    if (category && category !== "company") {
        filteredData = filteredData.filter((product) => toLowerCase(product.category) === toLowerCase(category));
    }

    if (q) {
        filteredData = filteredData.filter((product) => toLowerCase(product.name).includes(toLowerCase(q)));
    }

    if (company) {
        filteredData = filteredData.filter((product) => toLowerCase(product.company) === toLowerCase(company));
    }

    return (
        <div className="products-list">
            {category && category !== "company" && (
                <h3 className="productsTitle">{category}</h3>
            )}
            {company && (
                <h3 className="productsTitle">מוצרים של חברת: {company}</h3>
            )}
            <div className="products">
                {filteredData.map(product => (
                    <div className="single" key={product._id}>
                        <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
                            <div className="details">
                                <div>{product.company}</div>
                                <div>{product.name}</div>
                                <div>{product.itemDescription}</div>
                                <div className="price">{product.sellingPrice}<TbCurrencyShekel style={{ fontSize: 17 }} /></div>
                                {(product.amount === 0) && (
                                    <div className="azal">
                                        אזל במלאי
                                    </div>
                                )}                      
                            </div>
                        </Link>     
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsListPublic;
