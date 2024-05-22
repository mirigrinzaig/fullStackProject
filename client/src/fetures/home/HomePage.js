
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

// import ScrollCarousel from 'scroll-carousel-react';
// import Carousel from 'react-bootstrap/Carousel';


const HomePage = () => {
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    const [searchParams] = useSearchParams()
    const company = searchParams.get("company");
    console.log("company=", company);
    const q = searchParams.get("q") || company
    console.log("q=", q);
    const { getFilePath } = useGetFilePath()
    const [arrWordsSearch, setArrWordsSearch] = useState([])

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

    const favouritesList = JSON.parse(localStorage.getItem("favouritesList")) || [];
    console.log("favorites:", favouritesList);
    const addToFavourites = (product) => {
        // // if (category.toLowerCase() === "clothing" || category === "ביגוד")
        // //     alert(`the size is: ${size}`)
        // //   const findName =  favouritesList.find(p=>{p.name===name})
        // //   if(findName)
        // {
        //     favouritesList.push(JSON.stringify(product))
        //     localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
        //     // favouritesList.push(JSON.stringify(product))
        //     console.log(`favouritesList:${favouritesList}`);
        //     alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`)
        //     // saveList()
        // }

        // add the product to favouritesList as a string
        favouritesList.push((product));
        localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
        console.log(`favouritesList:${favouritesList}`);
        alert(`המוצר ${product.name} הוסף לרשימת האהובים שלך!`);
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
                {arrWordsSearch.map(product => (
                    <div className="single" key={product._id}>
                        <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
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
                        <button className="products-list-btn-love" onClick={() => {addToFavourites(product)  }}>
                            <BsFillHeartFill size={20} />
                        </button>
                    </div>
                ))}
            </div>
             <h3 className="productsTitle">המותגים שלנו... </h3>
            <CompaniesCarousel />
        </div>
    )
}

export default HomePage
