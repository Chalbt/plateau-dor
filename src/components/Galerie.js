import React, { useState } from "react";
import { useEffect } from "react";
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
import AmuseBouche from "../assets/aperitif/aperitif-20.jpeg";

import Cocktail1 from "../assets/cocktails/cocktail-1.jpeg";
import Cocktail3 from "../assets/cocktails/cocktail-3.jpeg";
import Cocktail4 from "../assets/cocktails/cocktail-4.jpeg";
import Cocktail5 from "../assets/cocktails/cocktail-5.jpeg";
import Cocktail6 from "../assets/cocktails/cocktail-6.jpeg";

import Avocat from "../assets/entrees/entree-2.jpeg";
import Campagne from "../assets/entrees/entree-3.jpeg";
import Mozzarella from "../assets/entrees/entree-4.jpeg";
import Crevettes from "../assets/entrees/entree-5.jpeg";
import BilleMozza from "../assets/entrees/entree-6.jpeg";
import Soupe from "../assets/entrees/entree-7.jpeg";
import Burrata from "../assets/entrees/entree-8.jpeg";
import Crevettes2 from "../assets/entrees/entree-11.jpeg";
import Champignons from "../assets/entrees/entree-13.jpeg";
import Macedoine from "../assets/entrees/entree-18.jpeg";
import Tartare from "../assets/entrees/entree-19.jpeg";

import Panini from "../assets/snack/snack-1.jpeg";
import Suédois from "../assets/snack/snack-2.jpeg";
import Burgers from "../assets/snack/snack-3.jpeg";
import Planche from "../assets/snack/snack-4.jpeg";
import Frites from "../assets/snack/snack-5.jpeg";

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
import Crabe from "../assets/plats/plat-13.jpeg";
import Ravitoto from "../assets/plats/plat-15.jpeg";
import Pasta from "../assets/plats/plat-17.jpeg";
import NouillesSautees from "../assets/plats/plat-18.jpeg";
import Sakay from "../assets/plats/plat-21.jpeg";
import Pintade from "../assets/plats/plat-22.jpeg";
import PouletCoco from "../assets/plats/plat-23.jpeg";
import Cabillaud from "../assets/plats/plat-24.jpeg";
import Risotto from "../assets/plats/plat-25.jpeg";
import PoissonBlanc from "../assets/plats/plat-26.jpeg";
import PotAuFeu from "../assets/plats/plat-27.jpeg";
import FiletBoeuf from "../assets/plats/plat-28.jpeg";
import Cabillaud2 from "../assets/plats/plat-29.jpeg";

import Mokary from "../assets/desserts/dessert-1.jpeg"
import Mofogasy from "../assets/desserts/dessert-2.jpeg"
import Mofobola from "../assets/desserts/dessert-3.jpeg"
import Cassava from "../assets/desserts/dessert-4.jpeg"
import Tarte from "../assets/desserts/dessert-7.jpeg"
import Creme from "../assets/desserts/dessert-13.jpeg"
import Creme2 from "../assets/desserts/dessert-11.jpeg"
import Chou from "../assets/desserts/dessert-15.jpeg"
import Creme3 from "../assets/desserts/dessert-17.jpeg"
import SaladeFruits from "../assets/desserts/dessert-22.jpeg"
import Macaron1 from "../assets/desserts/dessert-23.jpeg"
import Macaron2 from "../assets/desserts/dessert-24.jpeg"
import Beignets from "../assets/desserts/dessert-25.jpeg"

const imagesData = [
  { src: Verrines, description: "Verrines sucrées", category: "apéritif" },
  { src: Nems, description: "Nems au boeuf", category: "apéritif" },
  { src: PatateDouce, description: "Patates douces et pesto", category: "apéritif" },
  { src: Miniatures, description: "Miniatures", category: "apéritif" },
  { src: Triangles, description: "Triangles apéritifs", category: "apéritif" },
  { src: Bruschetta, description: "Bruschettas mixtes", category: "apéritif" },
  { src: Guacamole, description: "Guacamole maison", category: "apéritif" },
  { src: Brochettes, description: "Brochettes de saumon et chorizo", category: "apéritif" },
  { src: Verrines2, description: "Verrines salées", category: "apéritif" },
  { src: Plateau, description: "Plateau de charcuterie", category: "apéritif" },
  { src: AmuseBouche, description: "Amuse bouche", category: "apéritif" },

  { src: Cocktail1, description: "Cocktail maison", category: "cocktails" },
  { src: Cocktail3, description: "Cocktail maison", category: "cocktails" },
  { src: Cocktail4, description: "Cocktail maison", category: "cocktails" },
  { src: Cocktail5, description: "Cocktail maison", category: "cocktails" },
  { src: Cocktail6, description: "Cocktail maison", category: "cocktails" },

  { src: Avocat, description: "Salade fraiche, avocat, saumon", category: "entrées" },
  { src: Campagne, description: "Salade fraiche campagnarde", category: "entrées" },
  { src: Mozzarella, description: "Salade mozzarella", category: "entrées" },
  { src: Crevettes, description: "Salade fraiche, avocat, crevettes", category: "entrées" },
  { src: BilleMozza, description: "Salade fraiche, tomates, mozzarella", category: "entrées" },
  { src: Soupe, description: "Soupe courgette", category: "entrées" },
  { src: Burrata, description: "Salade fraiche, burrata et fraises", category: "entrées" },
  { src: Crevettes2, description: "Toast avocat et crevettes", category: "entrées" },
  { src: Champignons, description: "Salade fraiche, champignons, saumon", category: "entrées" },
  { src: Macedoine, description: "Macédoine de légumes", category: "entrées" },
  { src: Tartare, description: "Tartare de saumon étagé fraises et avocat", category: "entrées" },

  { src: Panini, description: "Sandwichs carotte, oeuf", category: "snacks" },
  { src: Suédois, description: "Sandwichs pain suédois, viande", category: "snacks" },
  { src: Burgers, description: "Burgers", category: "snacks" },
  { src: Planche, description: "Planche mixte", category: "snacks" },
  { src: Frites, description: "Frites de patates douces", category: "snacks" },

  { src: Carottes, description: "Saumon accompagné de riz et carottes", category: "plats" },
  { src: Crevettes3, description: "Crevettes sautées", category: "plats" },
  { src: Gambas, description: "Gambas dorées", category: "plats" },
  { src: SaucisseRougail, description: "Saucisse et sa sauce façon Malgache", category: "plats" },
  { src: SaucisseRougail2, description: "Saucisses rougail", category: "plats" },
  { src: Boeuf, description: "Viande braisée Malgache (Hena ritra)", category: "plats" },
  { src: Saumon, description: "Pavé de saumon et poelée de légumes, riz", category: "plats" },
  { src: Poisson, description: "Poisson frit et ses légumes", category: "plats" },
  { src: Courgette, description: "Courgette farcie", category: "plats" },
  { src: Bourguignon, description: "Boeuf bourguignon", category: "plats" },
  { src: Crabe, description: "Crabes à la façon Malgache", category: "plats" },
  { src: Ravitoto, description: "Ravitoto, feuilles de manioc pilées", category: "plats" },
  { src: Pasta, description: "Pâtes au saumon fumé", category: "plats" },
  { src: NouillesSautees, description: "Minsao, nouilles sautées aux légumes et crevettes", category: "plats" },
  { src: Sakay, description: "Sakay, piment malgache", category: "plats" },
  { src: Pintade, description: "Cuisse de pintade et ses légumes", category: "plats" },
  { src: PouletCoco, description: "Poulet au coco", category: "plats" },
  { src: Cabillaud, description: "Filet de cabillaud, riz & fondue de poireaux", category: "plats" },
  { src: Risotto, description: "Risotto aux crevettes", category: "plats" },
  { src: PoissonBlanc, description: "Poisson blanc aux champignons", category: "plats" },
  { src: PotAuFeu, description: "Pot-au-feu", category: "plats" },
  { src: FiletBoeuf, description: "Filet de bœuf", category: "plats" },
  { src: Cabillaud2, description: "Cabillaud à la sauce", category: "plats" },

  { src: Mokary, description: "Mokary au coco (Beignets de riz)", category: "desserts" },
  { src: Mofogasy, description: "Mofogasy (Pain Malgache)", category: "desserts" },
  { src: Mofobola, description: "Mofobola (Beignets soufflés)", category: "desserts" },
  { src: Cassava, description: "Cassava cake", category: "desserts" },
  { src: Tarte, description: "Tarte aux pommes", category: "desserts" },
  { src: Creme2, description: "Crémeux fruits exotiques", category: "desserts" },
  { src: Creme, description: "Crèmes aux fruits, coco", category: "desserts" },
  { src: Chou, description: "Pâte à choux à la crème", category: "desserts" },
  { src: Creme3, description: "Crème de tapioca aux fruits", category: "desserts" },
  { src: SaladeFruits, description: "Salade de fruits, ananas", category: "desserts" },
  { src: Macaron1, description: "Macarons, gourmandise sucrée", category: "desserts" },
  { src: Macaron2, description: "Macarons, gourmandise sucrée", category: "desserts" },
  { src: Beignets, description: "Beignets de banane", category: "desserts" },

];

function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("apéritif");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setSelectedCategory("apéritif");
  }, []);

  return (
    <div className="galerie">
      <div className="filter-buttons">
        <button onClick={() => handleFilterClick("apéritif")}>Apéritif</button>
        <button onClick={() => handleFilterClick("cocktails")}>Cocktails</button>
        <button onClick={() => handleFilterClick("entrées")}>Entrées</button>
        <button onClick={() => handleFilterClick("snacks")}>Snacks</button>
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





