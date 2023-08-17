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
                    <Link to="https://wa.me/33652066125" target="_blank"><FontAwesomeIcon icon={faPhone} /></Link>
                    <p>Contactez-nous sur Whatsapp<br/> ou +33 6 52 06 61 25</p>
                </div>
                <div className="each-footer">
                    <a href="https://www.instagram.com/_plateaudor/"><FontAwesomeIcon icon={faHashtag} /></a>
                    <p>Suivez-nous sur nos réseaux sociaux</p>
                </div>
                <div className="each-footer">
                    <a href="mailto:contact@plateau-dor.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <p>Envoyez-nous un email pour toute demande d'informations</p>
                </div>
            </div>
            <div className="mentions-légales">
            Toutes les photos de plats présentées sur ce site sont protégées par le droit d'auteur et sont la propriété exclusive de Plateau d'or. Toute reproduction, distribution, utilisation ou modification de ces photos sans autorisation préalable est strictement interdite. Pour toute demande d'utilisation ou de partage de nos photos, veuillez nous contacter à contact@plateau-dor.com.
            </div>
        </div>
    );

}

export default Footer