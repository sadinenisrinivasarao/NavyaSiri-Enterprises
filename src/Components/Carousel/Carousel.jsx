import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

 

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNextClick();
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [isPaused]); 
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }
  return (
    <div
      className='carousel'
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)} 
    >
      <div className='carousel-inner'>
        <div className='carousel-item'>
          <img
            src={images[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className='carousel-img'
          />
          <div className='product_content'>
            <h3 className='product_title'>{images[currentIndex].heading}</h3>
            <p className='product_disc'>{images[currentIndex].subheading}</p>
          </div>
        </div>
      </div>
      <button className='carousel-button prev' onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className='carousel-button next' onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
