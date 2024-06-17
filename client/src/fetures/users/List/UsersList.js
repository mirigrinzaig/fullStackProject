import "./usersList.css"
import Search from "../../../component/search/Search"
import {useGetAllUsersQuery,useDeleteUserMutation} from "../UsersApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import { MdDelete,MdDeleteOutline,MdViewList,MdViewColumn} from "react-icons/md"
import { GrView } from "react-icons/gr";

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
             <h2 className="users-title">משתמשים במערכת</h2>
            <div className="users-list-top">
                <Search placeholder={"חיפוש לפי שם משתמש"} />
                <Link to="/dash/users/add" className="users-list-add-btn">
                    הוספת משתמש
                </Link>
            </div>
            <table className="users-list-table">
                <thead className="tHeads">
                    <tr>
                        <td className="td-no-border">שם</td>
                        <td className="td-no-border">שם משתמש</td>
                        <td className="td-no-border">אימייל</td>
                        <td className="td-no-border">טלפון</td>
                        <td className="td-no-border">הרשאה</td>
                        <td className="td-no-border">צפייה</td>
                        <td className="td-no-border">מחיקה</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(user => (
                        <tr key={user._id}>
                            <td>
                                <div className="users-list-user">
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
                            <td className="btn-user-list">
                            <Link to={`/dash/users/${user._id}`} className="users-list-btn users-list-view"><GrView  size={20} color="black"/></Link>
                            </td>
                            <td className="btn-user-list delete-byn-list" onClick={()=>{deleteClick(user)}}>
                            <MdDelete size={20} color="black"/>
                            </td>

                            {/* <td className="td-no-border">
                                <div className="users-list-btns">
                                <Link to={`/dash/users/${user._id}`} className="users-list-btn users-list-view">תצוגה</Link>
                                <button onClick={()=>{deleteClick(user)}} className="users-list-btn users-list-delete">מחיקה</button></div>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UsersList