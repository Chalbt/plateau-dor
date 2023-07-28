import React, { useState } from 'react';
import "../styles/Carroussel.css"
import Samoussa from '../assets/aperitif/aperitif-5.jpeg';
import Mofosakay from '../assets/entrees/entree-15.jpeg';
import Museau from '../assets/entrees/entree-16.jpeg';
import SaladeFraiche from '../assets/entrees/entree-10.jpeg';
import Bourguignon from '../assets/plats/plat-10.jpeg';
import Ravitoto from '../assets/plats/plat-14.jpeg';
import Mokary from '../assets/desserts/dessert-8.jpeg';
import CremeCoco from '../assets/desserts/dessert-13.jpeg';
import PreviousArrow from '../assets/prev-arrow.png';
import NextArrow from '../assets/next-arrow.png';

const Caroussel = () => {
  const images = [Samoussa, Mofosakay, Museau, SaladeFraiche, Bourguignon, Ravitoto, Mokary, CremeCoco];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carroussel-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />

      <div className="carroussel-buttons">
        <img src={PreviousArrow} alt="Previous" onClick={goToPreviousSlide} />
        <img src={NextArrow} alt="Next" onClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default Caroussel;