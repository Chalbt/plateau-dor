import React, { useState } from 'react';
import "../styles/Carroussel.css"
import Carroussel1 from '../assets/aperitif/aperitif-1.jpeg';
import Carroussel2 from '../assets/aperitif/aperitif-2.jpeg';
import Carroussel3 from '../assets/aperitif/aperitif-3.jpeg';
import PreviousArrow from '../assets/prev-arrow.png';
import NextArrow from '../assets/next-arrow.png';

const Caroussel = () => {
  const images = [Carroussel1, Carroussel2, Carroussel3];
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