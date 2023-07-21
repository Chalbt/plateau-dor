import {Link} from "react-router-dom"
import Logo from '../assets/logo-fond-blanc.png'
import "../styles/Header.css"

function Header() {

    return (
        <div className="header">
            <div className="menu-header">
                <ul>
                    <li><Link to="/">ACCUEIL</Link></li>
                    <li><Link to="/nos-services">NOS SERVICES</Link></li>
                    <li><Link to="/galerie">GALERIE</Link></li>
                    <li><Link to="/contacts">CONTACTS</Link></li>
                </ul>
            </div>
            <div>
                <img className="logo-header" src={Logo} alt="logo-plateau-dor"/>
            </div>
        </div>
    );

}

export default Header