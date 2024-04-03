// import "./loginPage.css"
// import {useLoginMutation} from "../authApiSlice"
// import { useEffect } from "react"
// import {useNavigate} from "react-router-dom"

// export const LoginPage = () => {

//   const [login,{isError,error,isLoading,isSuccess,data}]=useLoginMutation()
//   const navigate=useNavigate()

//   useEffect(()=>{
//     if(isSuccess){
//       //this is the token!!
//       console.log(data);
//       navigate("/dash")
//     }

//   },[isSuccess])

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     const data=new FormData(e.target)
//     const userObj = Object.fromEntries(data.entries())
//     console.log(userObj)
//     login(userObj)
//   }

//   return (
//     <div className='login-page'>
//         <form onSubmit={handleSubmit} className='login-page-form'>
//             <h1>כניסת משתמשים</h1>
//             <input type='text' required name='userName' id='userName' placeholder='שם משתמש'/>
//             <input type='password' required name='password' id='password' placeholder='ססמא'/>
//             <button type='submit'>כניסה</button>
//             {error&& error.data?.message}

//         </form>
//     </div>
//   )
// }

// export default LoginPage
import "./loginPage.css"
import { useLoginMutation } from "../authApiSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom/dist/umd/react-router-dom.development"

export const LoginPage = () => {

  const [login, { isError, error, isLoading, isSuccess, data }] = useLoginMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      //this is the token!!
      console.log(data);
      navigate("/dash")
    }

  }, [isSuccess])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userObj = Object.fromEntries(data.entries())
    console.log(userObj)
    login(userObj)
  }

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className='login-page-form'>
        <button className="exit"><NavLink to='/'>exit</NavLink></button>
        {/* <div className="logoP">
        </div> */}
        <h1>כניסת משתמשים</h1>
        <input type='text' required name='userName' id='userName' placeholder="כתובת אימייל" />
        <input type='password' required name='password' id='password' placeholder='ססמא' />
        <button type='submit'>כניסה</button>
        {error && error.data?.message}
      </form>
      <div className="toRegist">
        <h1>חדשה באתר?</h1>
        <button><NavLink to='/regist'>הרשמי עכשיו</NavLink></button>
      </div>

      <div>

      </div>
    </div>
  )
}

export default LoginPage