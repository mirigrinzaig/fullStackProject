import React, { useEffect, useState } from "react";
import "./productsList.css";
import { Link } from "react-router-dom";
import useGetFilePath from "../../../hooks/useGetFilePath";

const FavouritesList = () => {
  const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem("favouritesList"))||[]);

  useEffect(() => {
    // המרה של רשימת המוצרים למחרוזת לפני שמירה ב-localStorage
    localStorage.setItem("favouritesList", JSON.stringify(favouritesList));

    console.log("favorites=",favouritesList);
  }, [favouritesList]);

  const { getFilePath } = useGetFilePath();

  const removeItem = (barcode) => {
    console.log("barcode=",barcode);
    const newList = favouritesList.filter(product => product.barcod !== barcode);
    setFavouritesList(newList);
    alert("The product has been removed successfully");
  };

  const removeAll = () => {
    setFavouritesList([]);
    alert("All products have been removed successfully");
  };

  return (
    <>
      <h1>Favorite products</h1>
      <div className="products-list">
        <div className="products">
          <button onClick={removeAll}>Delete all favorite products</button>

          {favouritesList.map(product => (
            <div className="single" key={product._id}>
              <Link
                to={`/dash/products/${product.barcod}`}
                className="products-list-btn products-list-view"
              >
                <img
                  src={getFilePath(product.image)}
                  alt=""
                  className="products-list-product-image"
                />
              </Link>
              <div className="details">
                <div className="details-wr">
                  ברקוד:{product.barcod}<br />
                  {product.name}<br />
                  {product.company}<br />
                  {product.sellingPrice}
                </div>
                <button onClick={() => removeItem(product.barcod)}>
                  Remove from list
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavouritesList;
