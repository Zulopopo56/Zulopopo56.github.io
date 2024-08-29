import React, { useEffect, useRef } from 'react';
import './Why.css';

const Why_us = () => {
  const blocks = [
    { number: '20', text: 'лет опыта' },
    { number: '50K', text: 'проведенных процедур' },
    { number: '3K', text: 'постоянных клиентов' },
    { number: '15', text: 'услуг' },
  ];

  const blockRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const numberWithK = target.getAttribute('data-number');
          const isKPresent = numberWithK.includes('K');
          const targetNumber = parseInt(numberWithK.replace(/[^0-9]/g, ''), 10);
          let start = 0;

          const animate = () => {
            start += targetNumber / 100;
            if (start < targetNumber) {
              target.innerText = Math.ceil(start).toString() + (isKPresent ? 'K' : '');
              requestAnimationFrame(animate);
            } else {
              target.innerText = targetNumber.toString() + (isKPresent ? 'K' : '');
            }
          };
          animate();
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    blockRefs.current.forEach((block) => {
      if (block) observer.observe(block);
    });
  }, []);

  return (
    <div className="why-us-wrapper">
      <h2>Почему мы?</h2>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <div key={index} className="block">
            <div 
              ref={el => blockRefs.current[index] = el}
              className="block-number"
              data-number={block.number}
            >
              0{block.number.includes('K') ? 'K' : ''}
            </div>
            <div className="block-text">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_us;
