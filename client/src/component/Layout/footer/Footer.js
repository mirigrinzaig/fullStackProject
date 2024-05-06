import { Link } from "react-router-dom"
// import nodemailer from 'nodemailer'
import "./footer.css"
import { useSearchParams } from "react-router-dom"

const Footer = () => {
    const [searchParams, setSearchParamd] = useSearchParams()

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
                <Link to="/?company=avent" className="linkCompany">
                    <img src="/companiesLogo/avent.png" /></Link>
                <Link to="/?company=B" className="linkCompany">
                    <img src="/companiesLogo/B.png" /></Link>
                <Link to="/?company=cybex" className="linkCompany">
                    <img src="/companiesLogo/cybex.png" /></Link>
                <Link to="/?company=yoyo" className="linkCompany">
                    <img src="/companiesLogo/yoyo.png" /></Link>
                <Link to="/?company=pluma" className="linkCompany">
                    <img src="/companiesLogo/logo.png" /></Link>
                <Link to="/?company=mam" className="linkCompany">
                    <img src="/companiesLogo/mam.png" /></Link>
                <Link to="/?company=shilav" className="linkCompany">
                    <img src="/companiesLogo/shilav.png" /></Link>
                <Link to="/?company=baby_einstein" className="linkCompany">
                    <img src="/companiesLogo/baby_einstein.png" /></Link>
                <Link to="/?company=babybjorn" className="linkCompany">
                    <img src="/companiesLogo/babybjorn.png" /></Link>
                <Link to="/?company=doona" className="linkCompany">
                    <img src="/companiesLogo/doona.png" /></Link>
                <Link to="/?company=easy_walker" className="linkCompany">
                    <img src="/companiesLogo/easy_walker.png" /></Link>
                <Link to="/?company=inglesina" className="linkCompany">
                    <img src="/companiesLogo/inglesina.png" /></Link>
                <Link to="/?company=maxi_cosi" className="linkCompany">
                    <img src="/companiesLogo/maxi_cosi.png" /></Link>
                <Link to="/?company=melissa_doug" className="linkCompany">
                    <img src="/companiesLogo/melissa_doug.png" /></Link>
                <Link to="/?company=simply_good" className="linkCompany">
                    <img src="/companiesLogo/simply_good.png" /></Link>
                <Link to="/?company=suavinex" className="linkCompany">
                    <img src="/companiesLogo/suavinex.png" /></Link>
                <Link to="/?company=tiny_love" className="linkCompany">
                    <img src="/companiesLogo/tiny_love.png" /></Link>
                <Link to="/?company=uppa_baby" className="linkCompany">
                    <img src="/companiesLogo/uppa_baby.png" /></Link>

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