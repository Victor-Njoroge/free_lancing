import React, { useEffect, useState } from 'react';
import './Flyer.css';

function Flyer() {
  const images = [
    'https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/19/48/people-2567566_1280.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextImageIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

      setCurrentImageIndex(nextImageIndex);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentImageIndex, images]);

  return (
    <div className="container">
      <div className="image-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flyer;
