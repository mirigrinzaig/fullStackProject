
import "./registPage.css"
import { useRegistMutation } from "../authApiSlice"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const RegistPage = () => {

  const [regist, { isError, error, isLoading, isSuccess, data }] = useRegistMutation()
  const navigate = useNavigate()
  const [fullData,setFullData]=useState(false)
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (isSuccess) {
      //this is the token!!
      console.log(data);
      navigate("/")
    }

  }, [isSuccess])

  useEffect(() => {
    checkFull()
  }, [name, userName, password, phone])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userObj = Object.fromEntries(data.entries())
    console.log(userObj)
    userObj.email = userObj.userName
    regist(userObj)
  }

  const checkFull = () => {
    if (name && userName && password && phone) {
      setFullData(true)
    } else {
      setFullData(false)
    }
  }

  return (
    <div className='regist-page'>
      <form onChange={checkFull} onSubmit={handleSubmit} className='regist-page-form'>
      <div className="logoP"><img src="/logo.png" className="logoP" style={{minHeight:"30vh"}}/></div>
        <h1>כמה פרטים ואת בפנים...</h1>
        <input type='text' required name='name' id='name' onChange={(e) => setName(e.target.value)} placeholder="שם מלא" />
        <input type='email' required name='userName' onChange={(e) => setUserName(e.target.value)} id='userName' placeholder="אימייל" />
        <input type='password' required name='password' onChange={(e) => setPassword(e.target.value)} id='password' placeholder='ססמא' />
        <input type='text' required name='phone' onChange={(e) => setPhone(e.target.value)} id='phone' placeholder="טלפון" />
        <div className="logoPS">
          <Link className="linkToLogin" to={"/login"}>רשומה? הכנסי</Link>
        </div>
        <button type='submit' style={{ backgroundColor: fullData ? 'var(--bgPink)' : "rgb(142, 172, 170)" ,color:!fullData&&"white"}}>כניסה</button>
        {error && error.data?.message}

      </form>
    </div>
  )
}

export default RegistPage