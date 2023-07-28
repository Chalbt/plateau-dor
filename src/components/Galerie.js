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

const imagesData = [
  { src: Verrines, description: "Verrines", category: "apéritif" },
  { src: Nems, description: "Nems", category: "apéritif" },
  { src: PatateDouce, description: "Patates douces et pesto", category: "apéritif" },
  { src: Miniatures, description: "Miniatures", category: "apéritif" },
  { src: Triangles, description: "Triangles apéritifs", category: "apéritif" },
  { src: Bruschetta, description: "Bruschettas mixtes", category: "apéritifs" },
  { src: Guacamole, description: "Guacamole maison", category: "apéritifs" },
  { src: Brochettes, description: "Brochettes", category: "apéritifs" },
  { src: Verrines2, description: "Verrines", category: "apéritifs" },
  { src: Plateau, description: "Plateau de charcuterie", category: "apéritifs" },

  { src: Avocat, description: "Salade fraiche, avocat, saumon", category: "entrées" },
  { src: Campagne, description: "Salade fraiche campagnarde", category: "entrées" },
  { src: Mozzarella, description: "Salade mozzarella", category: "entrées" },
  { src: Crevettes, description: "Salade fraiche, avocat, crevettes", category: "entrées" },
  { src: BilleMozza, description: "Salade fraiche, tomates, mozzarella", category: "entrées" },
  { src: Soupe, description: "Soupe courgette", category: "entrées" },
  { src: Burrata, description: "Salade fraiche, burrata et fraises", category: "entrées" },
  { src: Crevettes2, description: "Toast avocat et crevettes", category: "entrées" },
  { src: Champignons, description: "Salade fraicheeeee, champignons, saumon", category: "entrées" },


];

function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="galerie">
      <div className="filter-buttons">
        <button onClick={() => handleFilterClick("all")}>Tous</button>
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





