import React, { useEffect, useState } from "react";
import "./favoritesList.css";
import { Link, Navigate } from "react-router-dom";
import useGetFilePath from "../../../hooks/useGetFilePath";
import { TbTrashXFilled } from "react-icons/tb";
import { TbCurrencyShekel } from "react-icons/tb";

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
    // alert("The product has been removed successfully");
  };

  const removeAll = () => {
    // if (confirm("האם אתה בטוח שברצונך למחוק את כל המוצרים האהובים מהרשימה?")) {
    //   setFavouritesList([]);
    //   alert("All products have been removed successfully");
    // }
    alert("האם אתה בטוח שברצונך למחוק את כל המוצרים האהובים מהרשימה?")
    setFavouritesList([]);
    // alert("All products have been removed successfully");
  };

  return (
    <>
      <div className="productsF">
        <h1>המוצרים האהובים שלי</h1>
        <button className="removAllBtn" onClick={removeAll}>מחיקת כל רשימת האהובים שלי</button>
        {/* favoritesProductsהורדתי שם של  */}
        <div className="products ">
          {favouritesList.map(product => (
            <div className="singleF" key={product._id}>
              <Link to={`/public/${product.barcod}`} className="products-list-btn products-list-view">
                <img src={getFilePath(product.image)} alt="" className="products-list-product-image" />
                <div className="detailsF">
                  <div className="details-wr">
                    {product.name}<br />
                    {product.company}<br />
                    {product.sellingPrice}
                    <TbCurrencyShekel style={{ fontSize: 17 }} />
                  </div>
                </div>
              </Link>
              <button className="trash products-list-btn products-list-delete" onClick={() => removeItem(product.barcod)}>
                <TbTrashXFilled size={20} />
              </button>
            </div>
          ))}</div>
      </div>
    </>
  );
};

export default FavouritesList;
