import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';
import boss from './images/boss.png';
import boss1 from './images/boss1.png';
import boss2 from './images/boss2.png';
import arr_r from './images/arr_r.png';
import arr_l from './images/arr_l.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // Состояние для управления видимостью текста и кнопки

  const slides = [
    { image: boss2, title: "Brzuch, ramiona, uda czy pośladki?", text: "NIE WYBIERAJ!", buttonText: "Sprawdź promocje" },
    { image: boss1, title: "Discover our special offers", text: "Enhance your beauty", buttonText: "Check promotions" },
    { image: boss2, title: "Your journey to beauty starts here", text: "Explore our services", buttonText: "Learn more" },
  ];

  const nextSlide = useCallback(() => {
    setIsTextVisible(false); // Скрыть текст перед сменой слайда
    setIsAnimating(true); // Начать анимацию смены слайда
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 500); // Задержка, чтобы соответствовать продолжительности анимации скрытия текста
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIsTextVisible(false); // Скрыть текст перед сменой слайда
    setIsAnimating(true); // Начать анимацию смены слайда
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }, 500); // Задержка, чтобы соответствовать продолжительности анимации скрытия текста
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [nextSlide]);

  useEffect(() => {
    if (isAnimating) {
      // Когда анимация смены слайда началась
      const animationDuration = 1000; // Продолжительность анимации смены слайда
      const timer = setTimeout(() => {
        setIsAnimating(false); // Завершение анимации смены слайда
        setIsTextVisible(true); // Показать текст после смены слайда
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="slider">
      <button 
        className="slider-arrow left-arrow"
        onClick={prevSlide}
      >
        <img className="arrow_l" src={arr_l} alt="Previous slide" />
      </button>
      <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-image-container">
            <img 
              src={slide.image} 
              alt={`Slide ${index + 1}`} 
              className="slider-image" 
            />
            <div className={`slider-text-center ${isTextVisible ? 'visible' : 'hideText'}`}>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button className="slider-button-center">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="slider-arrow right-arrow"
        onClick={nextSlide} 
      >
        <img className="arrow_r" src={arr_r} alt="Next slide" />
      </button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsTextVisible(false); // Скрыть текст перед сменой слайда
              setIsAnimating(true); // Начать анимацию смены слайда
              setTimeout(() => { 
                setCurrentIndex(index);
                setIsTextVisible(true); // Показать текст после смены слайда
              }, 500); // Задержка, чтобы соответствовать продолжительности анимации скрытия текста
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
