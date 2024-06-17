import { useParams, useNavigate } from "react-router-dom"
import "./singleUser.css"
import { useEffect } from "react"
import { useGetAllUsersQuery, useUpdateUserMutation } from "../UsersApiSlice"


const SingleUser = () => {
    const { userId } = useParams()
    const { data: users, isLoading, isError, error, isSuccess } = useGetAllUsersQuery()
    const [updateUser, { isSuccess: isUpdateSuccess }] = useUpdateUserMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isUpdateSuccess) {
            navigate("/dash/users")
        }

    }, [isUpdateSuccess])
    //function for submit the data:
    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const userObj = Object.fromEntries(data.entries())
        console.log(`userObj: ${userObj._id},${userObj.name}`)
        updateUser(userObj)
    }


    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    const user = users.find(us => us._id === userId)
    if (!user)
        return <h1>not found</h1>
    return (
        <div className="single-user-container">
            <div className="single-user-form-container">
                <h2 className="single-user-title">פרטי משתמש</h2>
                <form onSubmit={formSubmit} className="single-user-form">
                    <div className="single-user-input-wrapper">
                        <label>שם </label>
                        <input defaultValue={user.name} type="text" name="name" placeholder="הכנס שם מלא" /></div>
                    <div className="single-user-input-wrapper">
                        <label>מספר מזהה</label>
                        <input defaultValue={user._id} /></div>
                    <div className="single-user-input-wrapper">
                        <label>שם משתמש</label>
                        <input defaultValue={user.userName} type="text" name="userName" placeholder="שם משתמש" required /></div>
                    <div className="single-user-input-wrapper">
                        <label>אימייל</label>
                        <input defaultValue={user.email} type="email" name="email" placeholder="כתובת מייל" required /></div>
                    <div className="single-user-input-wrapper">
                        <label>פלאפון</label>
                        <input defaultValue={user.phone} type="tel" name="phone" placeholder="מספר פלאפון" /></div>
                    <div className="single-user-input-wrapper">
                        <label>סיסמא</label>
                        <input defaultValue={user.password} type="password" name="password" placeholder="סיסמא" required /></div>
                    <button type="submit">עדכן</button>
                </form>

            </div>
        </div>
    )
}

export default SingleUser