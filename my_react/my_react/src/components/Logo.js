import React, { useState, useEffect } from 'react';
import './Logo.css';

const RotatingImage = ({ src, alt, className }) => {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Toggling rotation'); // Debugging line
      setIsRotated(prevState => !prevState);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    console.log('Rotation state:', isRotated); // Debugging line
  }, [isRotated]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isRotated ? '.rotate' : ''}`}
    />
  );
};

export default RotatingImage;
