import PlatAccueil from '../assets/plat-accueil2.jpeg'
import PlatPresentation from "../assets/desserts/dessert-13.jpeg"
import '../styles/Accueil.css'
import { Link } from 'react-router-dom';

function Accueil() {

    return (
        <div className='accueil'>
            <div className='accroche'>
                <img className="plat-accueil" src={PlatAccueil} alt="photo d'un plat malgache"/>
                <p>Explorez le mariage savoureux de la cuisine exotique et française, où les saveurs s'entremêlent avec créativité et passion, au service de vos événements et de vos papilles.</p>
             </div>
            <div className='presentation'>
                <div className='presentation-text'>
                    <p>Je suis Johana Aurélie, passionnée de cuisine et fervente adepte de la fusion culinaire. En tant que traiteur expérimentée, je mets ma créativité et mon savoir-faire au service de vos événements les plus mémorables. Des mariages romantiques aux séminaires d'entreprise en passant par les expositions captivantes, je suis là pour apporter une touche de saveurs uniques à chaque occasion.</p>
                    <p>Inspirée par les délices de la cuisine malgache, ainsi que par l'élégance et la finesse de la cuisine française, je fusionne ces deux univers afin de créer des expériences culinaires extraordinaires et inoubliables.</p>
                    <p>En choisissant mes services de traiteur, vous pouvez vous attendre à bien plus qu'un simple repas. Chaque plat est préparé avec soin, en sélectionnant des ingrédients frais et de qualité, tout en accordant une attention particulière aux détails et à la présentation. Mon objectif est de ravir vos papilles et de créer des moments de partage et de convivialité autour de la table.</p>
                    <p>Que vous organisiez une cérémonie intime ou un événement d'envergure, je m'adapte à vos besoins et préférences. Mon équipe et moi-même sommes là pour prendre en charge tous les aspects de la partie traiteur, vous permettant ainsi de vous concentrer pleinement sur la réussite de votre événement.</p>
                    <Link to="/nos-services"><button>En savoir plus</button></Link>
                </div>
                <img className="plat-presentation" src={PlatPresentation} alt="photo d'un plat malgache"/>
            </div>
        </div>
    );

}

export default Accueil