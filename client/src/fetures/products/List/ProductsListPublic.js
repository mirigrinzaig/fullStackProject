import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"

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
                <h3>{category}</h3>
            )}
            {company && (
                <h3>מוצרים של חברת: {company}</h3>
            )}
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
                            {(product.amount === 0) && (
                                <div className="azal">
                                    אזל במלאי
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsListPublic;
