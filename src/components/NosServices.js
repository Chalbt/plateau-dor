import "../styles/NosServices.css"
import Prestation from "./Prestation";
import Assiette from "../assets/plats/plat-3.jpeg"
import Caroussel from "./Carroussel";
import React, { useEffect } from 'react';

function NosServices() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="nos-services">
           <div className="nos-prestations">
                <h4>Nos prestations</h4>
                <p>Nous sommes fiers de proposer une gamme complète de services de traiteur pour répondre à tous vos besoins événementiels. Quelque soit l'évènemnt que vous planifiez, nous sommes là pour vous offrir une expérience culinaire exceptionnelle. Notre équipe expérimentée et passionnée met en avant des saveurs uniques et créatives, des ingrédients de qualité et des présentations soignées. Avec notre savoir-faire et notre attention aux détails, nous sommes déterminés à faire de chaque événement un succès mémorable.</p>
           </div>
           <div className="section-prestation">
                <div className="each-prestation">
                        <Prestation
                            image={Assiette}
                            title="Repas, buffet & cocktail"
                            description="Séminaire et conférence, dîner de gala, fêtes d'entreprise, réunions d'affaire."
                        />
                        <Prestation
                            image={Assiette}
                            title="Prestation sur salon"
                            description="Salon professionnel, cocktail et réception, journée presse."
                        />
                        <Prestation
                            image={Assiette}
                            title="Évènement sur mesure"
                            description="Mariage, anniversaire, évènements culturels ou sportifs, fête privée."
                        />
                </div>
                <div>
                        <a href="#suggestions"><button>Découvrez les suggestions du chef</button></a>
                </div>
           </div>
           <div className="menus">
                <div className="each-menu">
                    <div className="menu-description">
                        <h4>Forfait Assiette "Assiette Gourmande"</h4>
                        <p>Découvrez notre forfait d'exception "Assiette Gourmande", une expérience culinaire complète qui ravira vos papilles. Commencez par savourer un apéritif raffiné, où les amuse-bouches délicats éveilleront vos sens. Poursuivez votre voyage gastronomique avec une entrée subtilement élaborée, mettant en valeur des ingrédients frais et des associations de saveurs audacieuses. Ensuite, laissez-vous tenter par notre plat principal, une fusion culinaire alliant la cuisine malgache à l'élégance de la cuisine française, pour une expérience gustative inoubliable. Enfin, terminez votre repas en beauté avec notre sélection de desserts exquis, où créativité et gourmandise se rencontrent pour clôturer ce festin en douceur.</p>
                        <p>Le forfait "Assiette Gourmande" est disponible à partir de ?€, offrant une expérience culinaire haut de gamme adaptée à vos événements les plus spéciaux. Notre équipe dévouée veille à chaque détail, de la préparation des plats à leur présentation, pour faire de votre événement un moment inoubliable empreint de saveurs délicates et d'harmonie culinaire</p>
                        <p>Comprend : Deux apéritifs, une entrée, un plat et un dessert. Service à table et boissons compris.</p>
                    </div>
                    <img src={Assiette} alt="photo d'un plat"/>
                </div>
                <div className="each-menu">
                    <img src={Assiette} alt="photo d'un plat"/>
                    <div className="menu-description">
                        <h4>Forfait Buffet "Fusion Gourmande"</h4>
                        <p>Découvrez notre forfait buffet "Fusion Gourmande", une expérience culinaire variée et conviviale pour tous vos événements. Proposant un large choix d'amuse-bouches, d'entrées, de plats principaux et de desserts, notre buffet met en valeur la fusion audacieuse de la cuisine malgache et française. À partir de ?€, notre forfait buffet vous offre une délicieuse expérience gastronomique pour ravir vos convives et créer des souvenirs inoubliables.</p>
                        <p>Ce forfait buffet peut être adapté en fonction des préférences culinaires de vos clients et des spécificités de l'événement.</p>
                        <p>Comprend : Deux cocktails, trois amuses-bouche, trois entrées, trois plats et leurs accompagnement et trois desserts.</p>
                    </div>
                </div>
                <div className="each-menu">
                    <div className="menu-description">
                        <h4>Forfait Buffet "Fusion Gourmande"</h4>
                        <p>Découvrez notre forfait buffet "Fusion Gourmande", une expérience culinaire variée et conviviale pour tous vos événements. Proposant un large choix d'amuse-bouches, d'entrées, de plats principaux et de desserts, notre buffet met en valeur la fusion audacieuse de la cuisine malgache et française. À partir de ?€, notre forfait buffet vous offre une délicieuse expérience gastronomique pour ravir vos convives et créer des souvenirs inoubliables.</p>
                        <p>Ce forfait buffet peut être adapté en fonction des préférences culinaires de vos clients et des spécificités de l'événement.</p>
                        <p>Comprend : Trois amuses-bouche, trois entrées, trois plats et leurs accompagnement et trois desserts.</p>
                    </div>
                    <img src={Assiette} alt="photo d'un plat"/>
                </div>
           </div>
           <div id="suggestions" className="carroussel">
                <h4>Suggestions du chef</h4>
                <div className="suggestions">
                    <Caroussel />
                    <div className="presentation-suggestions">
                        <p>Laissez-vous tenter par les délicieuses créations de notre Chef, spécialement conçues pour ravir vos papilles. Voici nos suggestions du moment :</p>
                        <h5>Apéritifs</h5>
                        <ul>
                            <li>Samoussa</li>
                            <li>Nems</li>
                        </ul>
                        <h5>Entrées</h5>
                        <ul>
                            <li>Samoussa</li>
                            <li>Nems</li>
                        </ul>
                        <h5>Plats</h5>
                        <ul>
                            <li>Samoussa</li>
                            <li>Nems</li>
                        </ul>
                        <h5>Desserts</h5>
                        <ul>
                            <li>Samoussa</li>
                            <li>Nems</li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    );

}

export default NosServices