import "./usersList.css"
import Search from "../../../component/search/Search"
import {useGetAllUsersQuery,useDeleteUserMutation} from "../UsersApiSlice"
import { Link, useSearchParams } from "react-router-dom"

const UsersList = () => {
    // const users = [{ _id: 1, name: "name", userName: "userName", email: "email", phone: "phone", roles: "roles" }
    // ]
    const {data:users,isError, error,isLoading}=useGetAllUsersQuery()
    const [deleteUser,{isSuccess:isDeleteSuccess}]=useDeleteUserMutation()
   
    const deleteClick=(user)=>{
        if(window.confirm("?בטוח שברצונך למחוק את המשתמש")){
            deleteUser({_id:user._id})
        }
    }

    const [searchParams]=useSearchParams()
    const q=searchParams.get("q")

    if(isLoading)return<h1>loading...</h1>
    if(isError)return<h1>{JSON.stringify(error)}</h1>

    const filteredData=!q?[...users]:users.filter(u=>u.name.indexOf(q)>-1)

    return (
        <div className="users-list">
            <div className="users-list-top">
                <Search placeholder={"חיפוש לפי שם משתמש"} />
                <Link to="/dash/users/add" className="users-list-add-btn">
                    הוספת משתמש
                </Link>
            </div>
            <table className="users-list-table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>שם משתמש</td>
                        <td>אימייל</td>
                        <td>טלפון</td>
                        <td>הרשאה</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(user => (
                        <tr key={user._id}>
                            <td>
                                <div className="users-list-user">
                                    <img src={"/logo512.png"} alt="" width={40} height={40} className="users-list-user-image" />
                                    {user.name}
                                </div>
                            </td>
                            <td>
                                {user.userName}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.phone}
                            </td>
                            <td>
                                {user.roles}
                            </td>
                            <td>
                                <div className="users-list-btns">
                                <Link to={`/dash/users/${user._id}`} className="users-list-btn users-list-view">view</Link>
                                <button onClick={()=>{deleteClick(user)}} className="users-list-btn users-list-delete">delete</button></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UsersList