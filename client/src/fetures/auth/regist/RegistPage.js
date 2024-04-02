// import "./registPage.css"
// import {useRegistMutation} from "../authApiSlice"
// import { useEffect } from "react"
// import {useNavigate} from "react-router-dom"

// export const RegistPage = () => {

//   const [regist,{isError,error,isLoading,isSuccess,data}]=useRegistMutation()
//   const navigate=useNavigate()

//   useEffect(()=>{
//     if(isSuccess){
//       //this is the token!!
//       console.log(data);
//       navigate("/")
//     }

//   },[isSuccess])

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     const data=new FormData(e.target)
//     const userObj = Object.fromEntries(data.entries())
//     console.log(userObj)
//     userObj.email=userObj.userName
//     regist(userObj)
//   }

//   return (
//     <div className='regist-page'>
//         <form onSubmit={handleSubmit} className='regist-page-form'>
//             <h1>קצת פרטים ואתם בפנים...</h1>
//             <input type='text' required name='name' id='name' placeholder="שם מלא"/>
//             <input type='email' required name='userName' id='userName' placeholder="אימייל"/>
//             <input type='password' required name='password' id='password' placeholder='ססמא'/>
//             <input type='text' required name='phone' id='phone' placeholder="טלפון"/>
//             <button type='submit'>כניסה</button>
//             {error&& error.data?.message}

//         </form>
//     </div>
//   )
// }

// export default RegistPage
import "./registPage.css"
import { useRegistMutation } from "../authApiSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RegistPage = () => {

  const [regist, { isError, error, isLoading, isSuccess, data }] = useRegistMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      //this is the token!!
      console.log(data);
      navigate("/")
    }

  }, [isSuccess])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userObj = Object.fromEntries(data.entries())
    console.log(userObj)
    userObj.email = userObj.userName
    regist(userObj)
  }

  return (
    <div className='regist-page'>
      <form onSubmit={handleSubmit} className='regist-page-form'>
        <h1>כמה פרטים ואת בפנים...</h1>
        <input type='text' required name='name' id='name' placeholder="שם מלא" />
        <input type='email' required name='userName' id='userName' placeholder="אימייל" />
        <input type='password' required name='password' id='password' placeholder='ססמא' />
        <input type='text' required name='phone' id='phone' placeholder="טלפון" />
        <div className="logoPS">
        <img src="/logo.png"/>
        </div>
        <button type='submit'>כניסה</button>
        {error && error.data?.message}

      </form>
    </div>
  )
}

export default RegistPage