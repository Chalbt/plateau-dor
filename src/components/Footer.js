import "../styles/Footer.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (
        <div className="footer">
            <h2>Nous suivre</h2>
            <div className="footer-icon">
                <div className="each-footer">
                    <a href="https://www.instagram.com/_plateaudor/" className="footer-a" target="_blank" aria-label="Suivez-nous sur Instagram"><FontAwesomeIcon icon={faHashtag} /></a>
                    <p>Suivez-nous sur Instagram</p>
                </div>
                <div className="each-footer">
                    <Link to="/contacts" className="footer-a" target="_blank" aria-label="Envoyez-nous un email pour toute demande d'informations"><FontAwesomeIcon icon={faEnvelope} /></Link>
                    <p>Écrivez-nous</p>
                </div>
            </div>
            <Link to="/mentions-légales" className="mentions-legales-button" target="_blank">Mentions légales</Link>
            
        </div>
    );

}

export default Footer