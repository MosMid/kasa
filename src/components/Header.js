import { NavLink } from "react-router-dom";
import logo from "./header-logo.png";
import "./Header.css";

function Header(){
    return <header>
        <NavLink to="/"><img src={logo} alt="logo" id="headerLogo"/></NavLink>
        <div className="nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </div>
    </header>
}
export default Header