import React from 'react';
import './Footer.css';
import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import telegram from './images/telegram.png';
import whatsapp from './images/whatsapp.png';
import logo from './images/logo_w.png';  // Логотип
import consultation from './images/doc_w.png';  // Иконка для консультации
import pattern from './images/pattern_1.png';
import { useTranslation } from 'react-i18next';
function Footer() {
  const { i18n } = useTranslation();
  return (
    <div className="footer">
      <img src={pattern} className="background-pattern" alt="Background Pattern" />
      
      <div className="footer-logo">
        <img src={logo} alt="ABC Cosmetology Logo" />
        <span>The art of youth <span className="renewal">renewal</span></span>
      </div>

      <div className="footer-middle">
        <span>Contact us</span>
        <div className="social-networks">
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://t.me/+380971279244"  target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
          <a href="https://wa.me/38097127944" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <a 
        className="footer-right"  
        href={
          i18n.language === 'ua' ? "https://forms.gle/BFbifXksdg9Ds3ce9" :
          i18n.language === 'pl' ? "https://forms.gle/y1xgkdb1zUspF3BB6" :
          i18n.language === 'en' ? "https://forms.gle/y31t7o1YRGQfsNTV7" :
          "https://forms.gle/y1xgkdb1zUspF3BB6" // Ссылка по умолчанию на случай, если язык не распознан
        }
        target="_blank"
        rel="noopener noreferrer"
      > <span>Book a consultation</span>
        <img src={consultation} alt="Consultation Icon"/> 
       
      </a>
    </div>
  );
}

export default Footer;
