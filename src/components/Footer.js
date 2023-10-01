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
                    <Link to="https://wa.me/33652066125" target="_blank" aria-label="Contactez-nous sur Whatsapp ou +33 6 52 06 61 25"><FontAwesomeIcon icon={faPhone} /></Link>
                    <p>Contactez-nous sur Whatsapp<br/> ou +33 6 52 06 61 25</p>
                </div>
                <div className="each-footer">
                    <a href="https://www.instagram.com/_plateaudor/" aria-label="Suivez-nous sur Instagram"><FontAwesomeIcon icon={faHashtag} /></a>
                    <p>Suivez-nous sur Instagram</p>
                </div>
                <div className="each-footer">
                    <a href="mailto:contact@plateau-dor.com" aria-label="Envoyez-nous un email pour toute demande d'informations"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <p>Envoyez-nous un email pour toute demande d'informations</p>
                </div>
            </div>
            <div className="mentions-légales">
            Toutes les photos de plats présentées sur ce site sont protégées par le droit d'auteur et sont la propriété exclusive de Plateau d'or. Toute reproduction, distribution, utilisation ou modification de ces photos sans autorisation préalable est strictement interdite. Pour toute demande d'utilisation ou de partage de nos photos, veuillez nous contacter à contact@plateau-dor.com.<br/>
            Mentions Légales<br/>

            1. Informations générales

            Ce site Web est la propriété de Plateau d'or, située à 22 rue Pierre Mendes France, 77000 Torcy, enregistrée sous le numéro SIRET 79287280600031. Vous pouvez nous contacter à l'adresse e-mail suivante : contact@plateau-dor.com.<br/>

            2. Collecte de données

            Nous collectons uniquement les données personnelles nécessaires à la gestion de votre demande via notre formulaire de contact. Les données collectées peuvent inclure votre nom, votre adresse e-mail et toute autre information que vous choisissez de nous fournir.<br/>

            3. Base juridique

            La collecte de vos données personnelles est basée sur votre consentement explicite que vous donnez en soumettant le formulaire de contact. Vous avez le droit de retirer ce consentement à tout moment.<br/>

            4. Utilisation des données

            Les données que vous nous fournissez via le formulaire de contact sont utilisées uniquement pour répondre à votre demande ou à votre question. Nous ne partageons pas vos données avec des tiers sans votre consentement préalable.<br/>

            5. Durée de conservation

            Nous conservons vos données personnelles aussi longtemps que nécessaire pour répondre à votre demande ou pour respecter nos obligations légales. Une fois que vos données ne sont plus nécessaires, elles sont supprimées de nos systèmes.<br/>

            6. Sécurité des données

            Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, leur divulgation, leur altération ou leur destruction.<br/>

            7. Droits des utilisateurs

            Conformément au RGPD, vous avez le droit d'accéder à vos données personnelles, de les corriger, de les effacer, de vous opposer à leur traitement ou de demander leur portabilité. Pour exercer ces droits ou poser des questions sur la protection de vos données, veuillez nous contacter à l'adresse e-mail contact@plateau-dor.com.<br/>

            8. Modification de la politique de confidentialité

            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.
            </div>
        </div>
    );

}

export default Footer