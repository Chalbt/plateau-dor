import "../styles/Footer.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (
        <div className="footer">
            <h2>Nous contacter</h2>
            <div className="footer-icon">
                <div className="each-footer">
                    <Link to="https://wa.me/33688255149" target="_blank"><FontAwesomeIcon icon={faPhone} /></Link>
                    <p>Contactez-nous directement sur Whatsapp en cliquant sur ce bouton ou au +33 6 XX XX XX</p>
                </div>
                <div className="each-footer">
                    <a href="#"><FontAwesomeIcon icon={faHashtag} /></a>
                    <p>Suivez-nous sur nos réseaux sociaux</p>
                </div>
                <div className="each-footer">
                    <a href="mailto:contact@plateau-dor.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <p>Envoyez-nous un email pour toute demande d'informations</p>
                </div>
            </div>
        </div>
    );

}

export default Footer