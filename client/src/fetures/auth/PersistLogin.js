import { Outlet,Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "./authApiSlice";
import { UseSelector, useSelector } from "react-redux";
import { selectToken } from "./authSlice";

const PersistsLogin=()=>{
    const token=useSelector(selectToken)
    const effectRan=useRef(false)

    const [trueSuccess,setTrueSuccess]=useState(false)

    const [refresh,{
        isUninitialized,isLoading,isSuccess,isError,error
    }]=useRefreshMutation()

    useEffect(()=>{
        if(effectRan.current===true||process.env.NODE_ENV!=='development'){
            const verifyRefreshToken=async()=>{
                console.log("verify refresh token");
                try{
                    //const response=
                    await refresh()
                    //const {accessToken}=
                    setTrueSuccess(true)
                }
                catch(err){
                    console.error(err)
                }
            }
            if(!token) verifyRefreshToken()
        }
    return ()=>effectRan.current=true
    },[])
    let content 
    if(isLoading){
        console.log("loading");
        content=<h1>Loading</h1>
    }else if(isError){
        console.log("error");
        content=<p className="errorMsg">
            {`${error?.data?.message}-`}
            <Link to="/login">please login again</Link>
        </p>
    }else if(isSuccess&&trueSuccess){
        console.log("success");
        content=<Outlet/>
    }else if(token&& isUninitialized){
        console.log("token and Uninitialized");
        console.log(isUninitialized);
        content=<Outlet/>
    }
    return content
}

export default PersistsLogin