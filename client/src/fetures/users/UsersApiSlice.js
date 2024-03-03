import apiSlice from "../../app/apiSlice"

const usersApiSlice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllUsers:build.query({
            query:()=>({
                url:"/api/users"
            }),
            providesTags:["Users"]
        }),
        addUser:build.mutation({
            query:(user)=>({
                url:"/api/users",
                method:"POST",
                body:user
            }),
            invalidatesTags:["Users"]
        }),
        updateUser:build.mutation({
            query:(user)=>({
                url:"/api/users",
                method:"PUT",
                body:user
            }),
            invalidatesTags:["Users"]
        }),
        deleteUser:build.mutation({
            query:({_id})=>({
                url:"/api/users",
                method:"Delete",
                body:{_id}
            }),
            invalidatesTags:["Users"]
        })
    })
})

export const{useGetAllUsersQuery,useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation}=usersApiSlice