import React, { useState } from 'react';
import "../styles/Carroussel.css"
import Carroussel1 from '../assets/aperitif/aperitif-5.jpeg';
import Carroussel2 from '../assets/entrees/entree-15.jpeg';
import Carroussel3 from '../assets/entrees/entree-16.jpeg';
import Carroussel4 from '../assets/entrees/entree-10.jpeg';
import Carroussel5 from '../assets/plats/plat-10.jpeg';
import Carroussel6 from '../assets/plats/plat-14.jpeg';
import Carroussel7 from '../assets/desserts/dessert-8.jpeg';
import Carroussel8 from '../assets/desserts/dessert-13.jpeg';
import PreviousArrow from '../assets/prev-arrow.png';
import NextArrow from '../assets/next-arrow.png';

const Caroussel = () => {
  const images = [Carroussel1, Carroussel2, Carroussel3, Carroussel4, Carroussel5, Carroussel6, Carroussel7, Carroussel8];
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