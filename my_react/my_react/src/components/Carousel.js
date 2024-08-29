import React, { useState, useEffect } from 'react';
import arr_r from './images/arr_r.png';
import arr_l from './images/arr_l.png';
import img1 from './images/headliners1.png';
import img2 from './images/headliners2.png';
import img3 from './images/boss2.png';
import './Carousel.css'

const Carousel = () => {
    const items = [
      { img: img1, text: 'SMAS lifting', description: 'Технология глубокой подтяжки лица.', link: '/smas-lifting' },
      { img: img2, text: 'RF lifting', description: 'Радиочастотный лифтинг для омоложения кожи.', link: '/rf-lifting' },
      { img: img3, text: 'PLLA', description: 'Коррекция морщин и складок.', link: '/plla' },
      { img: img1, text: 'Radiesse', description: 'Укрепление контуров лица и улучшение качества кожи.', link: '/radiesse' },
      { img: img2, text: 'Botox full face', description: 'Ботокс для коррекции мимических морщин.', link: '/botox-full-face' },
    ];

    const totalItems = items.length;
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrevClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);

                if (currentIndex === 0) {
                    setCurrentIndex(totalItems);
                } else if (currentIndex === totalItems + 1) {
                    setCurrentIndex(1);
                }
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isTransitioning, totalItems]);

    return (
        <div className="content-wrapper">
            <div className="content">
                <h1>Headliner Procedures</h1>
                <div className="carousel">
                    <div
                        className="carousel-items"
                        style={{
                            transform: `translateX(-${(currentIndex - 1) * (100 / 3)}%)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                        }}
                    >
                        <div className="carousel-item">
                            <img className="slide_image" src={items[totalItems - 2].img} alt={items[totalItems - 2].text} />
                            <div className="item-text">{items[totalItems - 2].text}</div>
                            <div className="item-description">{items[totalItems - 2].description}</div>
                            <a href={items[totalItems - 2].link} className="item-link">Подробнее</a>
                        </div>
                        <div className="carousel-item">
                            <img className="slide_image" src={items[totalItems - 1].img} alt={items[totalItems - 1].text} />
                            <div className="item-text">{items[totalItems - 1].text}</div>
                            <div className="item-description">{items[totalItems - 1].description}</div>
                            <a href={items[totalItems - 1].link} className="item-link">Подробнее</a>
                        </div>

                        {items.map((item, index) => (
                            <div key={index} className="carousel-item">
                                <img className="slide_image" src={item.img} alt={item.text} />
                                <div className="item-text">{item.text}</div>
                                <div className="item-description">{item.description}</div>
                                <a href={item.link} className="item-link">Подробнее</a>
                            </div>
                        ))}

                        <div className="carousel-item">
                            <img className="slide_image" src={items[0].img} alt={items[0].text} />
                            <div className="item-text">{items[0].text}</div>
                            <div className="item-description">{items[0].description}</div>
                            <a href={items[0].link} className="item-link">Подробнее</a>
                        </div>
                        <div className="carousel-item">
                            <img className="slide_image" src={items[1].img} alt={items[1].text} />
                            <div className="item-text">{items[1].text}</div>
                            <div className="item-description">{items[1].description}</div>
                            <a href={items[1].link} className="item-link">Подробнее</a>
                        </div>
                    </div>
                </div>

                <div className="arrows-section">
                    <button className="arrow-button left-arrow" onClick={handlePrevClick}>
                        <img src={arr_l} alt="Left Arrow" />
                    </button>
                    <button className="arrow-button right-arrow" onClick={handleNextClick}>
                        <img src={arr_r} alt="Right Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
