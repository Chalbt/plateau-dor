import "../styles/Contacts.css"
import Map from "../assets/map.png"

function Contacts() {

    return (
        <div className="contacts">
            <div className="description-contacts">
                <div className="intro-contact">
                    <p>Nous sommes ravis de vous aider à organiser votre événement culinaire. Pour toute question, demande de réservation ou renseignement complémentaire, n'hésitez pas à nous contacter. Voici les informations importantes pour vous guider :</p>
                    <h4>Contact :</h4>
                    <ul>
                        <li>Téléphone : Numéro de téléphone</li>
                        <li>E-mail : contact@plateau-dor.com</li>
                    </ul>
                    <p>Nous sommes impatients de discuter avec vous et de faire de votre événement une réussite culinaire. Contactez-nous dès maintenant pour commencer à planifier et à créer des moments savoureux et mémorables ensemble.</p>
                </div>
            </div>
            <div className="informations">
                <div className="each-informations">
                    <h4>Horaires</h4>
                    <p>Nous sommes disponibles du lundi au vendredi, de Heure d'ouverture à Heure de fermeture. Pour les demandes urgentes ou en dehors de ces horaires, veuillez nous contacter et nous ferons de notre mieux pour vous répondre dans les plus brefs délais.</p>
                </div>
                <div className="each-informations">
                    <h4>Tarifs</h4>
                    <p>Chaque événement étant unique, nos tarifs sont adaptés en fonction de vos besoins spécifiques. Nous proposons des options flexibles pour répondre à différents budgets et types d'événements. Contactez-nous pour discuter de vos attentes et recevoir un devis personnalisé.</p>
                </div>
                <div className="each-informations">
                    <h4>Règlements</h4>
                    <p>Nous acceptons les modes de paiement suivants :
                    <ul>
                        <li>Espèces</li>
                        <li>Chèque</li>
                        <li>Carte bancaire (Visa, Mastercard)</li>
                        <li>Virement bancaire</li>
                    </ul></p>
                </div>
                <div className="each-informations">
                    <h4>Déplacement</h4>
                    <p>Nous couvrons une large zone géographique pour répondre à vos besoins. Notre équipe est prête à se déplacer dans les environs de Ville, région. Si votre événement se situe en dehors de cette zone, veuillez nous contacter pour discuter des possibilités.</p>
                </div>
            </div>
        </div>
    );

}

export default Contacts