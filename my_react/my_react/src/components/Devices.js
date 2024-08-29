import React, { useState, useEffect } from 'react';
import Doublo_Gold from './images/Doublo.png';
import Endymed from './images/Endymed.png';
import Venus_Viva_MD from './images/Venus.png';
import Hettich_Zentifugen from './images/Hettich.png';
import Lumecca from './images/Lumecca.png';
import './Devices.css';

const Devices = () => {
    const items = [
        { img: Doublo_Gold, alt: 'Doublo Gold' },
        { img: Endymed, alt: 'Endymed' },
        { img: Venus_Viva_MD, alt: 'Venus Viva MD' },
        { img: Hettich_Zentifugen, alt: 'Hettich Zentrifugen' },
        { img: Lumecca, alt: 'Lumecca' },
    ];

    const totalItems = items.length;
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

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

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div className="devices-container">
            <h2>Мы работаем на сертифицированном оборудовании</h2>
            <div className="devices-carousel">
                <div
                    className="devices-carousel-items"
                    style={{
                        transform: `translateX(-${(currentIndex - 1) * (100 / 3)}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                >
                    <div className="devices-carousel-item">
                        <img src={items[totalItems - 2].img} alt={items[totalItems - 2].alt} />
                    </div>
                    <div className="devices-carousel-item">
                        <img src={items[totalItems - 1].img} alt={items[totalItems - 1].alt} />
                    </div>

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="devices-carousel-item"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={item.img} alt={item.alt} />
                        </div>
                    ))}

                    <div className="devices-carousel-item">
                        <img src={items[0].img} alt={items[0].alt} />
                    </div>
                    <div className="devices-carousel-item">
                        <img src={items[1].img} alt={items[1].alt} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Devices;
