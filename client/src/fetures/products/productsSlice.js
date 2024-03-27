// import {createSlice} from "@reduxjs/toolkit"

// const productsSlice=createSlice({
//     name:"auth",
//     initialState:{products: {}},
//     reducers:{
//         getProducts:(state,action)=>{
//             const {accessToken}=action.payload
//             state.token=accessToken
//         }
//     }
// })
// export default productsSlice.reducer
// export const {setToken,logout}=productsSlice.actions

import { useEffect } from "react";
import { UseDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredData: [],
    loading: false,
    error: null,
  },
  reducers: {
    //reset in all the products
    resetProducts:(state,action)=>{
      state.products=action.payload
    },
    getProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.filteredData = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    filterProducts: (state, action) => {
      const category = action.payload;
      state.filteredData = state.products.filter((product) => product.category === category);
    },
  },
});


// export default productsSlice.reducer;
 export const {resetProducts, getProducts, getProductsSuccess, getProductsFailure, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;