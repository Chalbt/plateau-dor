import "../styles/Contacts.css"
import Map from "../assets/map.png"

function Contacts() {

    return (
        <div className="contacts">
            <div className="description-contacts">
                <div className="intro-contact">
                    <p>Nous sommes ravis de vous aider à organiser votre événement culinaire. Pour toute question, demande de réservation ou renseignement complémentaire, n'hésitez pas à nous contacter. Voici les informations importantes pour vous guider :</p>
                    <form className="form" action="https://formsubmit.co/07d3f608ea6826f45dc6acec1b46be62" method="POST">
                        <div class="form-group">
                            <label for="nom">Nom:</label>
                            <input type="text" id="last-name" name="last-name" required/>
                            <label for="prénom">Prénom:</label>
                            <input type="text" id="first-name" name="first-name" required/>    
                        </div>

                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>

                        <div class="form-group">
                            <label for="sujet">Sujet:</label>
                            <input type="text" id="subject" name="subject" required/>
                        </div>

                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>

                        <button type="submit" class="submit-button">Envoyer</button>
                    </form>
                </div>
            </div>
            <div className="informations">
                <div className="each-informations">
                    <h4>Horaires</h4>
                    <p>Nous sommes disponibles par email et téléphone du lundi au vendredi, de 9h00 à 19h00 et le samedi de 9h00 à 13h. Pour les demandes urgentes ou en dehors de ces horaires, veuillez nous contacter et nous ferons de notre mieux pour vous répondre dans les plus brefs délais.</p>
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