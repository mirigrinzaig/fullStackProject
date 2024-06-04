import { useState } from 'react';
import "./feedbackForm.css"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import emailjs from 'emailjs-com'
// const nodemailer = require('nodemailer');


// import 'dotenv/config'

const FeedbackForm = () => {

  const navigate = useNavigate()

 

  const { _id, name: n, email: e} = useAuth()
  const [name, setName] = useState(n);
  const [email, setEmail] = useState(e);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      setErrorMessage('אנא מלא את כל השדות החובה.');
      return;
    }

    const emailBody = `
    שם: ${name}
    דוא"ל: ${email}
    נושא: ${subject}
    הודעה: ${message}
  `;

  const emailData = {
    from_name: name, // Optional
    to: 'mirigrinzaig111l@gmail.com',
    subject: 'משוב חדש',
    body: emailBody,
    user_id: 'jSVrSu_Ty8Oeq64Yc', // Replace with your actual ID
  };

     // Send feedback using EmailJS
     emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailData, process.env.REACT_APP_EMAILJS_USER_ID)
     .then(() => {
       setName('');
       setEmail('');
       setSubject('');
       setMessage('');
       setErrorMessage('');
       alert('תודה על המשוב שלך!');
       navigate("/")
     })
     .catch((error) => {
       setErrorMessage(`שגיאה בשליחת הדוא"ל: ${error.message}`);
     });

  };

  return (
    <div className='feedback-form'>
      <h1>משוב</h1>

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">שם:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email">דוא"ל:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="subject">נושא:</label>
        <input type="text" id="subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />

        <label htmlFor="message">הודעה:</label>
        <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} rows="5" required />

        <button type="submit">שליחה</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
