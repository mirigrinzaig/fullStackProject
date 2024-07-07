import { Link, useSearchParams } from "react-router-dom"
import Search from "../../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../ProductsApiSlice"
import useGetFilePath from "../../../hooks/useGetFilePath"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsFillHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useState } from "react"
import "./productsList.css"

const toLowerCase = (str) => str.toLowerCase();
const ProductsListPublic = ({ category }) => {
    const { data: products, isError, isLoading } = useGetAllProductsPublicQuery();
    const [searchParams] = useSearchParams();
    const company = searchParams.get("company");
    const q = searchParams.get("q");
    const { getFilePath } = useGetFilePath()

    // const favouritesList = JSON.parse(localStorage.getItem("favouritesList")) || [];
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favouritesList")) || []);

    const addToFavourites = (product) => {
        const updatedFavorites = [...favorites, product];
        setFavorites(updatedFavorites);
        localStorage.setItem("favouritesList", JSON.stringify(updatedFavorites));
        //  alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`);
    }

    const removeFromFavorites = (product) => {
        const updatedFavorites = favorites.filter((item) => item._id !== product._id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favouritesList", JSON.stringify(updatedFavorites));
        //  alert(`המוצר ${product.name} הוסר מרשימת האהובים שלך!`);
    }
    const isFavorite = (product) => {
        return favorites.some((item) => item._id === product._id);
    }

    if (isLoading) return <div className="errorPage">אנא המתינו, הדף נטען</div>;
    if (isError) return <div className="errorPage">מטערים, קיימת תקלה תכנית</div>;

    // בדיקה של קיום הנתונים והשמת ערכים בהתאם
    let filteredData = [...products];

    if (category && category !== "company" &&category!=='promotions'&&category!=="pluma") {
        filteredData = filteredData.filter((product) => toLowerCase(product.category) === toLowerCase(category));
    }
    if (category && category === "pluma" ) {
        filteredData = filteredData.filter((product) => toLowerCase(product.company) === toLowerCase("pluma"));
    }

    if (q) {
        filteredData = filteredData.filter((product) => toLowerCase(product.searchDetails).includes(toLowerCase(q)));
    }

    if (company) {
        filteredData = filteredData.filter((product) => toLowerCase(product.company) === toLowerCase(company));
    }
    if (category&&category==='promotions') {
        filteredData = filteredData.filter((product) =>product.inSale);
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
                            <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">
                                <img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
                                <div className="details">
                                    <div>{product.company}</div>
                                    <div>{product.name}</div>
                                    <div>{product.itemDescription}</div>
                                    {/* {product.inSale} */}
                                    <div className="price">
                                        {category&&category==='promotions'?product.salePrice:product.sellingPrice}<TbCurrencyShekel style={{ fontSize: 17 }} /></div>
                                    {(product.amount === 0) && (
                                        <div className="azal">
                                            אזל מהמלאי
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <button className="products-list-btn-love" onClick={() => { isFavorite(product) ? removeFromFavorites(product) : addToFavourites(product) }}>
                                {isFavorite(product) ? <BsFillHeartFill size={190} /> : <BsHeart size={100} />}
                            </button>
                        </div>
                ))}
            </div>

        </div>
    );
};

export default ProductsListPublic;
