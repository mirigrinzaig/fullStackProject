import { useParams,useNavigate } from "react-router-dom"
import "./singleUser.css"
import { useEffect } from "react"
import {useGetAllUsersQuery,useUpdateUserMutation} from "../UsersApiSlice"


const SingleUser = () => {
    const {userId}=useParams()
    const {data:users, isLoading,isError,error,isSuccess}=useGetAllUsersQuery()
    const[updateUser,{isSuccess:isUpdateSuccess}]=useUpdateUserMutation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isUpdateSuccess){
            navigate("/dash/users")
        }

    },[isUpdateSuccess])
//function for submit the data:
    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const userObj = Object.fromEntries(data.entries())
        console.log(`userObj: ${userObj._id},${userObj.name}`)
        updateUser(userObj)
    }


    if(isLoading)return<h1>loading...</h1>
    if(isError)return<h1>{JSON.stringify(error)}</h1>
    const user = users.find(us=>us._id===userId)
    if(!user)
        return<h1>not found</h1>
    return (
        <div className="single-user-container">
            <div className="single-user-info">
                <div className="single-user-img-container">
                    <img src="/logo512.png" alt="" />
                </div>
                {user.name}
            </div>
            <div className="single-user-form-container">
                <form onSubmit={formSubmit} className="single-user-form">
                    <input name="_id" defaultValue={user._id} type="hidden"/>
                    <label>שם משתמש</label>
                    <input defaultValue={user.name} type="text" name="name" placeholder="הכנס שם מלא" />
                    <input defaultValue={user._id}/>
                    <input defaultValue={user.userName} type="text" name="userName" placeholder="שם משתמש" required />
                    <input defaultValue={user.email} type="email" name="email" placeholder="כתובת מייל" required />
                    <input defaultValue={user.phone} type="tel" name="phone" placeholder="מספר פלאפון" />
                    <input defaultValue={user.password} type="password" name="password" placeholder="סיסמא" required />
                    {/* <input type="file" name="image"/> */}
                    <button type="submit">עדכן</button>
                </form>

            </div>
        </div>
    )
}

export default SingleUser