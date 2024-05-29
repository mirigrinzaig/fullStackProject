
import "./registPage.css"
import { useRegistMutation } from "../authApiSlice"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';

export const RegistPage = () => {

  const [regist, { isError, error, isLoading, isSuccess, data }] = useRegistMutation()
  const navigate = useNavigate()
  const [fullData, setFullData] = useState(false)
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowWelcomeMessage(true);
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 2010);
      setTimeout(() => {
        navigate("/login");
      }, 1500); 
    }
  }, [isSuccess]);



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

  if (showWelcomeMessage) return (
    <div className="welcome-message">
      {name}<br />
      נרשמת בהצלחה למערכת, הינך מועברת לדף הרישום.
    </div>
  );

  return (
    <div className='regist-page'>
      <form onChange={checkFull} onSubmit={handleSubmit} className='regist-page-form'>
        <button className="exit"><Link to='/' />x</button>
        <div className="logoP-regist"><img src="/logo.png" className="logoP" style={{ minHeight: "30vh" }} /></div>
        <h1>כמה פרטים ואת בפנים...</h1>
        <input type='text' required name='name' id='name' onChange={(e) => setName(e.target.value)} placeholder="שם מלא" />
        <input type='email' required name='userName' onChange={(e) => setUserName(e.target.value)} id='userName' placeholder="אימייל" />
        <input type='password' required name='password' onChange={(e) => setPassword(e.target.value)} id='password' placeholder='ססמא' />
        <input type='text' required name='phone' onChange={(e) => setPhone(e.target.value)} id='phone' placeholder="טלפון" />
        <div className="logoPS">
          <Link className="linkToLogin" to={"/login"}>רשומה? הכנסי</Link>
        </div>
        {error &&
          <Alert className="error" variant="outlined" severity="error" style={{ color: 'red', minWidth: '350px' }}>
            {error && error.data?.message}
          </Alert>}
        <button type='submit' style={{ backgroundColor: fullData ? 'var(--bgPink)' : "rgb(142, 172, 170)", color: !fullData && "white" }}>כניסה</button>
      </form>
    </div>
  )
}

export default RegistPage