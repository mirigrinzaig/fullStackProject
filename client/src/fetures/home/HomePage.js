
import "./homePage.css"
import Search from "../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../products/ProductsApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import useGetFilePath from "../../hooks/useGetFilePath"
import "../products/List/productsList.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { resetProducts } from "../products/productsSlice"
import CategoriesCarousel from "./CategoriesCarousel"
import CompaniesCarousel from "./CompaniesCarousel"
import { TbCurrencyShekel } from "react-icons/tb";
import { BsFillHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const HomePage = () => {
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    const [searchParams] = useSearchParams()
    const company = searchParams.get("company");
    console.log("company=", company);
    const q = searchParams.get("q") || company
    console.log("q=", q);
    const { getFilePath } = useGetFilePath()
    const [arrWordsSearch, setArrWordsSearch] = useState([])
    const [heartHover, setHeartHover] = useState(false)

    // const dispatch = useDispatch()
    let filteredData = products
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetProducts(products))
        }

    }, [isSuccess])

    useEffect(() => {
        if (isSuccess) {
            let filtered = !q ? [...products] : arrWordsSearch;
            setArrWordsSearch(filtered);
        }
    }, [q, isSuccess]);

    useEffect(() => {
        if (q) {
            const arrWords = q.split(" ");
            const wordsMap = {};
            arrWords.forEach((word) => {
                if (word !== " ")
                    wordsMap[word] = [];
            });

            if (isSuccess) {
                products.forEach((prod) => {
                    arrWords.forEach((word) => {
                        if (prod.searchDetails.indexOf(word) > -1) {
                            wordsMap[word].push(prod);
                        }
                    });
                });
                let newArr = Object.values(wordsMap).flat();
                setArrWordsSearch(newArr);
            }
        }
    }, [q, isSuccess]);

    // const favouritesList = JSON.parse(localStorage.getItem("favouritesList")) || [];
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favouritesList")) || []);
    // console.log("favorites:", favouritesList);
    const addToFavourites = (product) => {
        const updatedFavorites = [...favorites, product];
        setFavorites(updatedFavorites);
        localStorage.setItem("favouritesList", JSON.stringify(updatedFavorites));
        // alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`);
    }

    const removeFromFavorites = (product) => {
        const updatedFavorites = favorites.filter((item) => item._id !== product._id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favouritesList", JSON.stringify(updatedFavorites));
        // alert(`המוצר ${product.name} הוסר מרשימת האהובים שלך!`);
    }
    const isFavorite = (product) => {
        return favorites.some((item) => item._id === product._id);
    }

    if (isLoading) return <div className="errorPage">loading...</div>
    if (isError) return <div className="errorPage">מצטערים, שגיאה זמנית.</div>

    return (
        <div className="products-list">
            {company && (
                <h3>
                    מוצרים של המותג :{company}

                </h3>
            )}
            <img className="bigImage" src="./baby.jpg" alt="Image 1" />
            <h3 className="productsTitle">מה עוד אפשר להציע לכם ? </h3>
            <CategoriesCarousel />
            <h3 className="productsTitle">מוצרים במבצע :</h3>

            {arrWordsSearch?.length < 1 && <div className="errorPage">נראה שאין מוצרים העונים על התנאי שלך, נסה לחפש חיפוש מורחב יותר.</div>}
            <div className="products">
    {filteredData.map(product => (
        product.inSale ? (
            <div className="single" key={product._id}>
                <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">
                    <img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
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
                <button className="products-list-btn-love" onClick={() => { isFavorite(product) ? removeFromFavorites(product) : addToFavourites(product) }}>
                    {isFavorite(product) ? <BsFillHeartFill size={190} /> : <BsHeart size={100} />}
                </button>
            </div>
        ) : null
    ))}
</div>

            <h3 className="productsTitle">המותגים שלנו... </h3>
            <CompaniesCarousel />
        </div>
    )
}

export default HomePage
