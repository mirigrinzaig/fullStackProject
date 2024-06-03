
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
                    <h3 className="categoriesTitle">קטגוריות:</h3>
                    <Link to="/categories/clothing" className="linkCompany categoryLinkFooter">ביגוד לתינוקות</Link>
                    <Link to="/categories/accessories" className="linkCompany categoryLinkFooter">אקססוריז</Link>
                    <Link to="/categories/bath" className="linkCompany categoryLinkFooter">רחצה</Link>
                    <Link to="/categories/feed" className="linkCompany categoryLinkFooter">האכלה</Link>
                    <Link to="/categories/hygine" className="linkCompany categoryLinkFooter">היגיינה</Link>
                    <Link to="/categories/play" className="linkCompany categoryLinkFooter">משחק</Link>
                    <Link to="/categories/presents" className="linkCompany categoryLinkFooter">מתנות</Link>
                    <Link to="/categories/safe" className="linkCompany categoryLinkFooter">בטיחות</Link>
                    <Link to="/categories/sleep" className="linkCompany categoryLinkFooter">שינה</Link>
                    <Link to="/categories/walk" className="linkCompany categoryLinkFooter">טיול ועגלות</Link>
                </div>
                <div className="footerAbout">
                    <h3>כללי:</h3>
                    <Link to="/regulation" className="linkCompany linkAbout">תקנון החנות</Link>
                    <Link to="/about" className="linkCompany linkAbout">אודות</Link>
                    <Link to="/categories/plumabrand" className="linkCompany linkAbout">המותג שלנו</Link>
                    <Link to="/posts" className="linkCompany linkAbout">פוסטים</Link>
                    <Link to="/feedback" className="linkCompany linkAbout">שליחת משוב</Link>
                </div>
                <div className="footerCantact">
                    <h3>צרו קשר:</h3>
                    <div className="adress" style={{ display: "flex", flexDirection: "row" }}>
                        <Link to={"https://www.google.com/maps/place/%D7%A9%D7%A4%D7%A8%D7%99%D7%A0%D7%A6%D7%A7+140,+%D7%A6%D7%A4%D7%AA%E2%80%AD/@32.9591562,35.4941859,19.68z/data=!4m6!3m5!1s0x151c239be5be36e9:0xa7db45a787aa7253!8m2!3d32.959169!4d35.494029!16s%2Fg%2F11c21bz02n?entry=ttu"} target="_blank"><MdLocationPin className="icon" /></Link>
                        <div>
                            <p>כתובת החנות:</p>
                            <p>רחוב שפרינצק צפת</p></div>
                    </div>
                    <div className="phone" style={{ display: "flex", flexDirection: "row" }}>
                        <a href="tel+:0527698642"><MdPhone className="icon" /></a>
                        <div>
                            <p>טלפון : </p>
                            <p>052-769-8642</p></div>
                    </div>
                    <div className="email" style={{ display: "flex", flexDirection: "row" }}>
                        <a href="mailto:mirigrinzaig111@gmail.com"><MdAlternateEmail className="icon" /></a>
                        <div className="mailLink">
                            <p>ליצירת קשר:</p>
                            <p>pluma.babyloves@gmail.com</p></div>
                    </div>
                </div>
                <div className="footerStoreDetails">
                    <h3>אפשרויות שירות</h3>
                    <div className="timeActive">
                        <p>שעות פעילות החנות:
                        </p>
                        <p>
                            בוקר : 11:00-13:00
                        </p>
                        <p>
                            ערב :  18:00-21:00
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-text"> building:Miri Grintzaig 0556737092 mirigrinzaig111@gmail.com<br />.All rights reserved @</div>
        </div>
    )
}
export default Footer