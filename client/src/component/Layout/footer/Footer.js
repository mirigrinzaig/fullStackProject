import { Link } from "react-router-dom"
// import nodemailer from 'nodemailer'
import "./footer.css"
const Footer = () => {

    // const sendEmail = (emailAddress) => {
    //     console.log("send the mail");
    //     window.location.href = 'mailto:' + emailAddress;
    // }
    const sendEmail = (event, emailAddress) => {
        event.preventDefault();
        window.open('mailto:' + emailAddress);
      };
      
    const openMailToLink = (emailAddress) => {
        console.log("Opening mail client...");
        window.open(`mailto:${emailAddress}`);
    };


    return (
        <div className="footer">
            המותגים שלנו:
            <div className="footer-logo"></div>
            <div className="brandsImgs">
                <Link to={"https://www.philips.co.il/c-m-mo/baby-bottles-nipples"} className="linkCompany"><img src="/companiesLogo/avent.png" /></Link>   
                <Link to={"https://www.mambaby.com/"} className="linkCompany"><img src="/companiesLogo/B.png" /></Link>   
                <Link to={"https://cybexonline.co.il/"} className="linkCompany"><img src="/companiesLogo/cybex.png" /></Link>   
                <Link to={"https://babyzen-israel.com/"} className="linkCompany"><img src="/companiesLogo/yoyo.png" /></Link>   
                <Link to={"http://localhost:3000/"} className="linkCompany"><img src="/companiesLogo/logo.png" /></Link>   
                <Link to={"https://www.mambaby.com/"} className="linkCompany"><img src="/companiesLogo/mam.png" /></Link>   
                <Link to={"https://www.shilav.co.il/"} className="linkCompany"><img src="/companiesLogo/shilav.png" /></Link>   
                <Link to={"https://www.kids2.com/pages/baby-einstein"} className="linkCompany"><img src="/companiesLogo/baby_einstein.png" /></Link>   
                <Link to={"https://www.babybjorn.com/"} className="linkCompany"><img src="/companiesLogo/babybjorn.png" /></Link>   
                <Link to={"https://www.doona.com/"} className="linkCompany"><img src="/companiesLogo/doona.png" /></Link>   
                <Link to={"https://easywalker.com/"} className="linkCompany"><img src="/companiesLogo/easy_walker.png" /></Link>   
                <Link to={"https://inglesina.us/"} className="linkCompany"><img src="/companiesLogo/inglesina.png" /></Link>   
                <Link to={"https://www.maxi-cosi.com/c/international"} className="linkCompany"><img src="/companiesLogo/maxi_cosi.png" /></Link>   
                <Link to={"https://www.melissaanddoug.com/"} className="linkCompany"><img src="/companiesLogo/melissa_doug.png" /></Link> 
                <Link to={"https://simplygood.biz/"} className="linkCompany"><img src="/companiesLogo/simply_good.png" /></Link> 
                <Link to={"https://www.suavinex.com/en"} className="linkCompany"><img src="/companiesLogo/suavinex.png" /></Link> 
                <Link to={"https://www.tinylove.com/en/"} className="linkCompany"><img src="/companiesLogo/tiny_love.png" /></Link> 
                <Link to={"https://uppababy.com/il/"} className="linkCompany"> <img src="/companiesLogo/uppa_baby.png" /></Link>   
            </div>
            <img src="/logo.png" className="logoP" />
            <div><img src="/categories/brands.png" /> </div>
            {/* <a href="mailto:mirigrinzaig111@gmail.com">צור קשר</a> */}
            {/* <a href="#" onClick={sendEmail("mirigrinzaig111@gmail.com")}>צור קשר</a> */}
            {/* <a href="#" onClick={() => sendEmail("mirigrinzaig111@gmail.com")}>צור קשר</a> */}
            <a href="#" onClick={() => openMailToLink("mirigrinzaig111@gmail.com")}>צור קשר</a>
            <a href="mailto:mirigrinzaig111@gmail.com">צ2ור קשר</a>
            <a href="#" onClick={(event) => sendEmail(event, 'mirigrinzaig111@gmail.com')}>צור קש3ר</a>
            <div className="footer-text"> building:Miri Grintzaig 0556737092 mirigrinzaig111@gmail.com<br />.All rights reserved @</div>
        </div>
    )
}
export default Footer