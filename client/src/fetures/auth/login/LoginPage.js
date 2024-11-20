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
import useAuth from "../../../hooks/useAuth"
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const LoginPage = () => {
  const { _id, userName, name, email, roles } = useAuth()
  const [login, { isError, error, isLoading, isSuccess, data }] = useLoginMutation()
  const navigate = useNavigate()
  let userObj = {}

  useEffect(() => {
    if (isSuccess) {
      console.log(userObj);
      if (roles === "admin")
        navigate("/dash")
      //this is the token!!
      console.log(data);
      console.log(name);
      if (roles === "user")
        navigate("/")
      // navigate("/dash")
    }

  }, [isSuccess])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    userObj = Object.fromEntries(data.entries())
    console.log(userObj.userName)
    login(userObj)
  }

  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className='login-page-form'>
        <button onClick={handleGoHome} className="exit"><Link to='/' />x</button>
        <div className="logoP-login"><img src="/logoWithOutWords.png" className="logoP" style={{ maxHeight: "30vh" }} /></div>
        <h1>כניסת משתמשים</h1>
        <input type='text' required name='userName' id='userName' placeholder="כתובת אימייל" />
        <input type='password' required name='password' id='password' placeholder='ססמא' />
        {error &&
          <Alert className="error" variant="outlined" severity="error" style={{ color: 'red', minWidth: '350px'}}>
            {error && error.data?.message}
          </Alert>}
        <button type='submit'>כניסה</button>
      </form>
      <div className="toRegist">
        <h1 className="h1ToRegist">חדשה באתר?</h1>
        <button><NavLink to='/regist'>הרשמי עכשיו</NavLink></button>
      </div>

      <div>

      </div>
    </div>
  )
}

export default LoginPage