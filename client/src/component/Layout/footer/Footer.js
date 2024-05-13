
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
                    <h3>צרו קשר</h3>
                    <div className="adress" style={{display:"flex",flexDirection:"row"}}>
                        <MdLocationPin />
                        <div>
                            <p>כתובת החנות:</p>
                            <p>רחוב שפרינצק צפת</p></div>
                    </div>
                    <div className="phone" style={{display:"flex",flexDirection:"row"}}>
                        <MdPhone />
                        <div>
                            <p>פלאפון חנות:</p>
                            <p>055-6737092</p></div>
                    </div>
                    <div className="email" style={{display:"flex",flexDirection:"row"}}>
                    <a href="mailto:mirigrinzaig111@gmail.com"><MdAlternateEmail /></a>
                        <p>ליצירת קשר:</p> 
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