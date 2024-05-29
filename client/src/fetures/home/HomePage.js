
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
import useAuth from "../../hooks/useAuth"

const images = ["./baby.jpg", "./promotions-img.png", "./imgs/nice.jpg", "./imgs/nice1.jpg", "./imgs/pluma1.jpg", "./imgs/pluma2.jpg", "./imgs/pluma3.jpg", "./imgs/pluma4.jpg", "./imgs/pluma5.jpg", "./imgs/pluma6.jpg", "./imgs/pluma7.jpg"];


const HomePage = () => {
    const { _id, userName, name, email, roles } = useAuth()
    const isLoginOrRegister = roles === 'admin' || roles === 'user'
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    const [searchParams] = useSearchParams()
    const company = searchParams.get("company");
    const q = searchParams.get("q") || company
    const { getFilePath } = useGetFilePath()
    const [arrWordsSearch, setArrWordsSearch] = useState([])
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let filteredData = products
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetProducts(products))
        }
        console.log("is login", isLoginOrRegister);

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

    useEffect(() => {
        setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2010); // 10000 מילישניות = 10 שניות
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((currentImageIndex + 1) % images.length);
    //     }, 8000); // Change image every 2 seconds

    //     return () => clearInterval(interval);
    // }, [currentImageIndex]);
    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentImageIndex + 1) % images.length;
            const imageElement = document.querySelector('.image-carousel img.bigImage');
            imageElement.classList.remove('bigImage');
            imageElement.classList.add('bigImageNone');
            setTimeout(() => {
                imageElement.classList.remove('bigImageNone');
                imageElement.classList.add('bigImage');
                setCurrentImageIndex(newIndex);
            }, 100);
        }, 8000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);



    

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
    if (isLoginOrRegister && showWelcomeMessage) return <div className="welcome-message">{name}<br />
        ברוכה הבאה לפלומה!
    </div>
    // {isLoginOrRegister && showWelcomeMessage && <div className="welcome-message">ברוכים הבאים</div>}

    return (
        <div className="products-list">
            {company && (
                <h3>
                    מוצרים של המותג :{company}

                </h3>
            )}
            <div className="image-carousel">
                <img src={images[currentImageIndex]} alt="Carousel Image" className="bigImage" />
            </div>
            {/* <img className="bigImage" src="./baby.jpg" alt="Image 1" /> */}
            <h3 className="productsTitle">מה עוד אפשר להציע לכם ? </h3>
            <CategoriesCarousel />
            <h3 className="productsTitle">מוצרים במבצע :</h3>

            {arrWordsSearch?.length < 1 && <div className="errorPage">נראה שאין מוצרים העונים על התנאי שלך, נסה לחפש חיפוש מורחב יותר.</div>}
            <div className="products">
                {arrWordsSearch.map(product => (
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
                                            אזל מהמלאי
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
                <Link to={"http://localhost:3000/categories/promotions"}>לכל המבצעים</Link>
            </div>

            <h3 className="productsTitle">המותגים שלנו... </h3>
            <CompaniesCarousel />

        </div>
    )
}

export default HomePage
