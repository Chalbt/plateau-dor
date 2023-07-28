import React, { useState } from "react";
import "../styles/Galerie.css";
import Verrines from "../assets/aperitif/aperitif-1.jpeg";
import Nems from "../assets/aperitif/aperitif-7.jpeg";
import PatateDouce from "../assets/aperitif/aperitif-8.jpeg";
import Miniatures from "../assets/aperitif/aperitif-9.jpeg";
import Triangles from "../assets/aperitif/aperitif-12.jpeg";
import Bruschetta from "../assets/aperitif/aperitif-14.jpeg";
import Guacamole from "../assets/aperitif/aperitif-16.jpeg";
import Brochettes from "../assets/aperitif/aperitif-17.jpeg";
import Verrines2 from "../assets/aperitif/aperitif-18.jpeg";
import Plateau from "../assets/aperitif/aperitif-19.jpeg";

import Avocat from "../assets/entrees/entree-2.jpeg";
import Campagne from "../assets/entrees/entree-3.jpeg";
import Mozzarella from "../assets/entrees/entree-4.jpeg";
import Crevettes from "../assets/entrees/entree-5.jpeg";
import BilleMozza from "../assets/entrees/entree-6.jpeg";
import Soupe from "../assets/entrees/entree-7.jpeg";
import Burrata from "../assets/entrees/entree-8.jpeg";
import Crevettes2 from "../assets/entrees/entree-11.jpeg";
import Champignons from "../assets/entrees/entree-13.jpeg";

import Carottes from "../assets/plats/plat-1.jpeg";
import Crevettes3 from "../assets/plats/plat-2.jpeg";
import Gambas from "../assets/plats/plat-3.jpeg";
import SaucisseRougail from "../assets/plats/plat-4.jpeg";
import SaucisseRougail2 from "../assets/plats/plat-5.jpeg";
import Boeuf from "../assets/plats/plat-6.jpeg";
import Saumon from "../assets/plats/plat-7.jpeg";
import Poisson from "../assets/plats/plat-8.jpeg";
import Courgette from "../assets/plats/plat-9.jpeg";
import Bourguignon from "../assets/plats/plat-11.jpeg";
import Panini from "../assets/plats/plat-12.jpeg";
import Crabe from "../assets/plats/plat-13.jpeg";
import Ravitoto from "../assets/plats/plat-15.jpeg";
import Pasta from "../assets/plats/plat-17.jpeg";
import NouillesSautees from "../assets/plats/plat-18.jpeg";

import Mokary from "../assets/desserts/dessert-1.jpeg"
import Dessert1 from "../assets/desserts/dessert-2.jpeg"
import Mokary2 from "../assets/desserts/dessert-3.jpeg"
import Flan from "../assets/desserts/dessert-4.jpeg"
import Tarte from "../assets/desserts/dessert-7.jpeg"
import Dessert2 from "../assets/desserts/dessert-9.jpeg"
import Dessert3 from "../assets/desserts/dessert-10.jpeg"
import Dessert4 from "../assets/desserts/dessert-11.jpeg"
import Dessert5 from "../assets/desserts/dessert-12.jpeg"
import Dessert6 from "../assets/desserts/dessert-13.jpeg"
import Dessert7 from "../assets/desserts/dessert-14.jpeg"
import Dessert8 from "../assets/desserts/dessert-15.jpeg"
import Dessert9 from "../assets/desserts/dessert-16.jpeg"
import Dessert10 from "../assets/desserts/dessert-17.jpeg"
import SaladeFruits from "../assets/desserts/dessert-22.jpeg"

const imagesData = [
  { src: Verrines, description: "Verrines", category: "apéritif" },
  { src: Nems, description: "Nems", category: "apéritif" },
  { src: PatateDouce, description: "Patates douces et pesto", category: "apéritif" },
  { src: Miniatures, description: "Miniatures", category: "apéritif" },
  { src: Triangles, description: "Triangles apéritifs", category: "apéritif" },
  { src: Bruschetta, description: "Bruschettas mixtes", category: "apéritif" },
  { src: Guacamole, description: "Guacamole maison", category: "apéritif" },
  { src: Brochettes, description: "Brochettes", category: "apéritif" },
  { src: Verrines2, description: "Verrines", category: "apéritif" },
  { src: Plateau, description: "Plateau de charcuterie", category: "apéritif" },

  { src: Avocat, description: "Salade fraiche, avocat, saumon", category: "entrées" },
  { src: Campagne, description: "Salade fraiche campagnarde", category: "entrées" },
  { src: Mozzarella, description: "Salade mozzarella", category: "entrées" },
  { src: Crevettes, description: "Salade fraiche, avocat, crevettes", category: "entrées" },
  { src: BilleMozza, description: "Salade fraiche, tomates, mozzarella", category: "entrées" },
  { src: Soupe, description: "Soupe courgette", category: "entrées" },
  { src: Burrata, description: "Salade fraiche, burrata et fraises", category: "entrées" },
  { src: Crevettes2, description: "Toast avocat et crevettes", category: "entrées" },
  { src: Champignons, description: "Salade fraicheeeee, champignons, saumon", category: "entrées" },

  { src: Carottes, description: "Saumon accompagné de riz et carottes", category: "plats" },
  { src: Crevettes3, description: "Crevettes sautées", category: "plats" },
  { src: Gambas, description: "Gambas dorées", category: "plats" },
  { src: SaucisseRougail, description: "Saucisses rougail", category: "plats" },
  { src: SaucisseRougail2, description: "Saucisses rougail", category: "plats" },
  { src: Boeuf, description: "Boeuf sauté aux oignons", category: "plats" },
  { src: Saumon, description: "Pavé de saumon et poelée de légumes, riz", category: "plats" },
  { src: Poisson, description: "Poisson frit et ses légumes", category: "plats" },
  { src: Courgette, description: "Courgette farcie", category: "plats" },
  { src: Bourguignon, description: "Boeuf bourguignon", category: "plats" },
  { src: Panini, description: "Panini", category: "plats" },
  { src: Crabe, description: "Fricassé de crabe", category: "plats" },
  { src: Ravitoto, description: "Ravitoto", category: "plats" },
  { src: Pasta, description: "Pâtes au saumon", category: "plats" },
  { src: NouillesSautees, description: "Nouilles sautées aux légumes et crevettes", category: "plats" },

  { src: Mokary, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert1, description: "Pâtes au saumon", category: "desserts" },
  { src: Mokary2, description: "Pâtes au saumon", category: "desserts" },
  { src: Flan, description: "Pâtes au saumon", category: "desserts" },
  { src: Tarte, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert2, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert3, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert4, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert5, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert6, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert7, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert8, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert9, description: "Pâtes au saumon", category: "desserts" },
  { src: Dessert10, description: "Pâtes au saumon", category: "desserts" },
  { src: SaladeFruits, description: "Pâtes au saumon", category: "desserts" },

];

function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="galerie">
      <div className="filter-buttons">
        <button onClick={() => handleFilterClick("apéritif")}>Apéritif</button>
        <button onClick={() => handleFilterClick("entrées")}>Entrées</button>
        <button onClick={() => handleFilterClick("plats")}>Plats</button>
        <button onClick={() => handleFilterClick("desserts")}>Desserts</button>
      </div>
      <div className="galerie-images">
        {imagesData
          .filter((imageData) => selectedCategory === "all" || imageData.category === selectedCategory)
          .map((imageData, index) => (
            <div key={index} className="image-container">
              <img className="plat-galerie" src={imageData.src} alt={imageData.description} />
              <p className="image-description">{imageData.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Galerie;





