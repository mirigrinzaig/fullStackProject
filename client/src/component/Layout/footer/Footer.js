
// import nodemailer from 'nodemailer'
import "./footer.css"
import { MdAlternateEmail, MdLocationPin, MdPhone } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {

    // const sendEmail = (emailAddress) => {
    //     console.log("send the mail");
    //     window.location.href = 'mailto:' + emailAddress;
    // }
    // const sendEmail = (event, emailAddress) => {
    //     event.preventDefault();
    //     window.open('mailto:' + emailAddress);
    // };

    // const openMailToLink = (emailAddress) => {
    //     console.log("Opening mail client...");
    //     window.open(`mailto:${emailAddress}`);
    // };


    return (
        <div className="footer">
            <div className="footer-logo"><img src="/logo.png" className="logoP" /></div>
            <div className="footerInfo">
                <div className="footerCategories">
                    <h3>קטגוריות:</h3>
                    <Link to="/categories/clothing" className="linkCompany">ביגוד לתינוקות</Link>
                    <Link to="/categories/accessories" className="linkCompany">אקססוריז</Link>
                    <Link to="/categories/bath" className="linkCompany">רחצה</Link>
                    <Link to="/categories/feed" className="linkCompany">האכלה</Link>
                    <Link to="/categories/hygine" className="linkCompany">היגיינה</Link>
                    <Link to="/categories/play" className="linkCompany">משחק</Link>
                    <Link to="/categories/presents" className="linkCompany">מתנות</Link>
                    <Link to="/categories/safe" className="linkCompany">בטיחות</Link>
                    <Link to="/categories/sleep" className="linkCompany">שינה</Link>
                    <Link to="/categories/walk" className="linkCompany">טיול ועגלות</Link>
                </div>
                <div className="footerAbout">
                    <h3>כללי:</h3>
                    <Link to="/" className="linkCompany">תקנון החנות</Link>
                    <Link to="/" className="linkCompany">אודות</Link>
                    <Link to="/" className="linkCompany">המותג שלנו</Link>
                    <Link to="/" className="linkCompany">פוסטים</Link>
                </div>
                <div className="footerCantact">
                    <h3>צרו קשר:</h3>
                    <div className="adress" style={{display:"flex",flexDirection:"row"}}>
                        <Link to={"https://www.google.com/maps/place/%D7%A9%D7%A4%D7%A8%D7%99%D7%A0%D7%A6%D7%A7,+%D7%A6%D7%A4%D7%AA%E2%80%AD/@32.9582335,35.4970839,17z/data=!3m1!4b1!4m6!3m5!1s0x151c239bff83a463:0xc83d34d1118abae2!8m2!3d32.958229!4d35.494509!16s%2Fg%2F1ymw996nr?entry=ttu"}><MdLocationPin className="icon" /></Link>
                        <div>
                            <p>כתובת החנות:</p>
                            <p>רחוב שפרינצק צפת</p></div>
                    </div>
                    <div className="phone" style={{display:"flex",flexDirection:"row"}}>
                        <MdPhone className="icon" />
                        <div>
                            <p>פלאפון חנות:</p>
                            <p>055-6737092</p></div>
                    </div>
                    <div className="email" style={{display:"flex",flexDirection:"row"}}>
                    <a href="mailto:mirigrinzaig111@gmail.com"><MdAlternateEmail className="icon"  /></a>
                    <div className="mailLink">
                        <p>ליצירת קשר:</p> 
                        <p>mirigrinzaig111@gmail.com</p></div>
                    </div>
                </div>
                <div className="footerStoreDetails">
                    <h3>אפשרויות שירות</h3>
                    <div className="timeActive">
                        <p>שעות פעילות החנות:
                        </p>
                        <p>
                            א-ה 10:00-19:00
                        </p>
                        <p>
                            יום ו 10:00-13:00
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-text"> building:Miri Grintzaig 0556737092 mirigrinzaig111@gmail.com<br />.All rights reserved @</div>
        </div>
    )
}
export default Footer