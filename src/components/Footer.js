import logo from "./footer-logo.png";
import "./Footer.css";

function Footer(){
    return <footer>
        <img src={logo} alt="logo" id="footerLogo"/>
        <p>&copy;2020 Kasa, All rights reserved</p>
    </footer>
}
export default Footer