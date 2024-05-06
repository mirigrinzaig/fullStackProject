import React, { useEffect, useState } from "react";
import "./favoritesList.css";
import { Link } from "react-router-dom";
import useGetFilePath from "../../../hooks/useGetFilePath";

const FavouritesList = () => {
  const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem("favouritesList")) || []);

  useEffect(() => {
    // המרה של רשימת המוצרים למחרוזת לפני שמירה ב-localStorage
    localStorage.setItem("favouritesList", JSON.stringify(favouritesList));

    console.log("favorites=", favouritesList);
  }, [favouritesList]);

  const { getFilePath } = useGetFilePath();

  const removeItem = (barcode) => {
    console.log("barcode=", barcode);
    const newList = favouritesList.filter(product => product.barcod !== barcode);
    setFavouritesList(newList);
    alert("The product has been removed successfully");
  };

  const removeAll = () => {
    // if (confirm("האם אתה בטוח שברצונך למחוק את כל המוצרים האהובים מהרשימה?")) {
    //   setFavouritesList([]);
    //   alert("All products have been removed successfully");
    // }
    alert("האם אתה בטוח שברצונך למחוק את כל המוצרים האהובים מהרשימה?")
    setFavouritesList([]);
    alert("All products have been removed successfully");
  };

  return (
    <>
      <h1>המוצרים האהובים שלי</h1>
      <div className="productsF">
        <button className="removAllBtn" onClick={removeAll}>מחיקת כל רשימת האהובים שלי</button>
        <div className="favoritesProducts">
          {favouritesList.map(product => (
            <div className="singleF" key={product._id}>
              <Link
                to={`/public/${product.barcod}`}
                className="products-list-btn products-list-view"
              >
                <img
                  src={getFilePath(product.image)}
                  alt=""
                  className="products-list-product-image"
                />
              </Link>
              <div className="detailsF">
                <div className="details-wr">
                  {product.name}<br />
                  {product.company}<br />
                  {product.sellingPrice}
                </div>
                <button className="products-list-btn products-list-delete" onClick={() => removeItem(product.barcod)}>
                  הסרה מהאהובים שלי
                </button>
              </div>
            </div>
          ))}</div>
      </div>
    </>
  );
};

export default FavouritesList;
