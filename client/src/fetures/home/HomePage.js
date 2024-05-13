// import "./homePage.css"
// import Search from "../../component/search/Search"
// import { useGetAllProductsPublicQuery } from "../products/ProductsApiSlice"
// import { Link, useSearchParams } from "react-router-dom"
// import useGetFilePath from "../../hooks/useGetFilePath"
// import "../products/List/productsList.css"
// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"
// //import { useNavigate } from "react-router-dom"
// import { resetProducts } from "../products/productsSlice"
// //import {useSendLogoutMutation} from "../auth/authApiSlice"


// const HomePage = () => {
//     const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
//     // const [logout,{isSuccess}]=useSendLogoutMutation()
//     //const {data:product,isError:isErrorGet1,error:errorProduct,isLoading:isProductLoading}=useGetProductByIdQuery()
//     //const navigate=useNavigate()
//     const [searchParams] = useSearchParams()
//     const q = searchParams.get("q")
//     const { getFilePath } = useGetFilePath()
//     const [arrWordsSearch, setArrWordsSearch] = useState([])

//     const dispatch = useDispatch()
//     let filteredData=products

//     useEffect(() => {
//         if (isSuccess) {
//             dispatch(resetProducts(products))
//         }

//     }, [isSuccess])


//     // useEffect(() => {
//     //     //array of words from the search box:
//     //     const arrWords = q.split(" ")
//     //     console.log(arrWords);
//     //     console.log("count of words in search:",arrWords.length);
//     //     //array in the siza of the amount of words in the search box
//     //     let newArr = Array.from({ length: arrWords.length }, (_, index) => ({
//     //         id: index,
//     //         value: []
//     //     }));
//     //     console.log("arr of words"+newArr);
//     //     //order the products ein order to the search:
//     //     products.forEach((prod) => {
//     //         //count of words that suit to the search:
//     //         let countSuit = 0;
//     //         for (let index = 0; index < arrWords.length; index++) {
//     //             if (prod.searchDetails.indexOf(arrWords[index]) > -1)
//     //                 countSuit += 1
//     //         }
//     //         if(countSuit>0)
//     //             newArr[countSuit-1].value.push(prod);
//     //     })
//     //     console.log("new arr after put the correct:",newArr);
//     //     newArr = newArr.reverse()
//     //     setArrWordsSearch(newArr)
//     // }, [q])
//     useEffect(() => {
//         if(isSuccess)
//         filteredData = !q ? [...products] : arrWordsSearch;
//     }, [arrWordsSearch, q,isSuccess]);

//     useEffect(() => {
//         if(q){
//         // array of words from the search box:
//         const arrWords = q.split(" ");
//         console.log(arrWords);
//         console.log("count of words in search:", arrWords.length);
//         // create an object to store the products
//         const wordsMap = {};
//         arrWords.forEach((word) => {
//             wordsMap[word] = [];
//         });
//         console.log("map of words:",wordsMap);
//         if(isSuccess){
//         // iterate over the products and add them to the object
//         products.forEach((prod) => {
//             // count of words that suit to the search:
//             let countSuit = 0;
//             for (let index = 0; index < arrWords.length; index++) {
//                 if (prod.searchDetails.indexOf(arrWords[index]) > -1) {
//                     countSuit += 1;
//                 }
//             }
//             if (countSuit > 0) {
//                 wordsMap[arrWords[countSuit - 1]].push(prod);
//             }
//             console.log("words that suit:",wordsMap);
//         });
//         // convert the object to an array
//         let newArr = Object.values(wordsMap);
//         newArr=newArr.reverse()
//         console.log("agreagate the words from all the...",newArr);
//         // update the state
//         setArrWordsSearch(newArr);
//         filteredData = !q ? [...products] : arrWordsSearch

//     }}
//     }, [q,isSuccess]);

//     console.log("error: ", error);

//     if (isLoading) return <div className="errorPage">loading...</div>
//     if (isError) return <div className="errorPage">מצטערים, שגיאה זמנית.</div>


    
//     //let filteredData = !q ? [...products] : products.filter(p => p.searchDetails.indexOf(q) > -1)


//     return (
//         <div className="products-list">
//             <div className="products-list-top">
//                 <Search placeholder={"חיפוש כללי"} />
//                 <Link to="/login" className="products-list-add-btn">
//                     כניסת משתמשים
//                 </Link>
//                 <Link to="/regist" className="products-list-add-btn">
//                     הרשמה
//                 </Link>
//             </div>
//             {/* there are no products in the search */}
//             {filteredData.length < 1 && <div className="errorPage">נראה שאין מוצרים העונים על התנאי שלך, נסה לחפש חיפוש מורחב יותר.</div>}
//             <div className="products">
//                 {filteredData.map(product => (
//                     <div className="single" key={product._id}>
//                         <div className="products-list-product">
//                             {/* <img src={getFilePath(product.image)} alt="" width={40} height={40} className="products-list-product-image" /> */}
//                         </div>
//                         <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" /></Link>
//                         <div className="details">
//                             {product.name}
//                             {product.company}
//                             {product.sellingPrice}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }


// export default HomePage

import "./homePage.css"
import Search from "../../component/search/Search"
import { useGetAllProductsPublicQuery } from "../products/ProductsApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import useGetFilePath from "../../hooks/useGetFilePath"
import "../products/List/productsList.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { resetProducts } from "../products/productsSlice"
import ScrollCarousel from 'scroll-carousel-react';

const images = [
    {
       url: "http://localhost:1234/uploads/baby.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       url: "http://localhost:1234/uploads/sea.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       url: "http://localhost:1234/uploads/baby.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       url: "http://localhost:1234/uploads/sea.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       url: "http://localhost:1234/uploads/baby.jpg",
       width: 320,
       height: 212,
    },
 ];

const HomePage = () => {
    const { data: products, isError, error, isLoading, isSuccess } = useGetAllProductsPublicQuery()
    const [searchParams] = useSearchParams()
    const company = searchParams.get("company");
    console.log("company=",company);
    const q = searchParams.get("q")||company
    console.log("q=",q);
    const { getFilePath } = useGetFilePath()
    const [arrWordsSearch, setArrWordsSearch] = useState([])

    // const dispatch = useDispatch()
     let filteredData=products
     const dispatch=useDispatch()

         useEffect(() => {
        if (isSuccess) {
            dispatch(resetProducts(products))
        }

    }, [isSuccess])

    useEffect(() => {
        if(isSuccess) {
            let filtered = !q ? [...products] : arrWordsSearch;
            setArrWordsSearch(filtered);
        }
    }, [q, isSuccess]);
    
    useEffect(() => {
        if(q){
            const arrWords = q.split(" ");
            const wordsMap = {};
            arrWords.forEach((word) => {
                if(word!=" ")
                wordsMap[word] = [];
            });
            
            if(isSuccess){
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

    if (isLoading) return <div className="errorPage">loading...</div>
    if (isError) return <div className="errorPage">מצטערים, שגיאה זמנית.</div>

    return (
        <div className="products-list">
            {/* <div className="products-list-top">
                <Search placeholder={"חיפוש כללי"} />
                <Link to="/login" className="products-list-add-btn">
                    כניסת משתמשים
                </Link>
                <Link to="/regist" className="products-list-add-btn">
                    הרשמה
                </Link>
            </div> */}
            {/* <ScrollCarousel
            autoplay={true}
            autoplaySpeed={0}
            speed={0}
            margin={20}
            onReady={() => console.log('I am ready')}
         >
            {images.map((item) => (
               <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
                  <img className="carouselImg" src={item.url} alt={item.alt}/>
               </div>
            ))}
         </ScrollCarousel> */}
            {arrWordsSearch?.length < 1 && <div className="errorPage">נראה שאין מוצרים העונים על התנאי שלך, נסה לחפש חיפוש מורחב יותר.</div>}
            <div className="products">
                {arrWordsSearch.map(product => (
                    <div className="single" key={product._id}>
                        <div className="products-list-product"></div>
                        <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view"><img src={getFilePath(product.image)} alt="" className="products-list-product-image" /></Link>
                        <div className="details">
                            {product.name}
                            {product.company}
                            {product.sellingPrice}
                            {/* כמות:{product.amount} */}
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
    )
}

export default HomePage
