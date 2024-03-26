import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import authReducer from "../fetures/auth/authSlice"
import productsSlice from "../fetures/products/productsSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authReducer,
    products:productsSlice
  },
  middleware:(defaultMiddleware)=>defaultMiddleware().concat(apiSlice.middleware),
  devTools:false
});

export default store;