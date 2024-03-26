import apiSlice from "../../app/apiSlice"

const productsApiSlice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllProducts:build.query({
            query:()=>({
                url:"/api/products/admin/get"
            }),
            providesTags:["Products"]
        }),
        getAllProductsPublic:build.query({
            query:()=>({
                url:"/api/products"
            }),
            providesTags:["Products"]
        }),
        getProductById:build.query({
            query:(barcod)=>({
                url:`/api/products/${barcod}`
            }),
            providesTags:["Products"]
        }),
   
        addProduct:build.mutation({
            query:(product)=>({
                url:"/api/products",
                method:"post",
                body:product
            }),
            invalidatesTags:["Products"]
        }),
        updateProduct:build.mutation({
            query:(product)=>({
                url:"/api/products",
                method:"PUT",
                body:product
            }),
            invalidatesTags:["Products"]
        }),
        deleteProduct:build.mutation({
            query:({barcod})=>({
                url:"/api/products",
                method:"Delete",
                body:{barcod}
            }),
            invalidatesTags:["Products"]
        })

    })
})

export const{useGetAllProductsQuery,useGetAllProductsPublicQuery,useGetProductByIdQuery,useAddProductMutation,useUpdateProductMutation,useDeleteProductMutation}=productsApiSlice