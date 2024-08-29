import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { Link } from 'react-router-dom';
import uaFlag from './images/ukraine.png';
import plFlag from './images/poland.png';
import enFlag from './images/english.png';
import logo from './images/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case 'ua':
        return uaFlag;
      case 'pl':
        return plFlag;
      case 'en':
        return enFlag;
      default:
        return plFlag;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div>
        <Link to="/"> {/* Используем Link для логотипа */}
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <Link to="/Procedures">{t('procedures')}</Link>
        <Link to="/About">{t('about_us')}</Link>
        <a 
          href={
            i18n.language === 'ua' ? "https://forms.gle/BFbifXksdg9Ds3ce9" :
            i18n.language === 'pl' ? "https://forms.gle/y1xgkdb1zUspF3BB6" :
            i18n.language === 'en' ? "https://forms.gle/y31t7o1YRGQfsNTV7" :
            "https://forms.gle/y1xgkdb1zUspF3BB6" // Ссылка по умолчанию на случай, если язык не распознан
          }
          target="_blank"  // Открыть ссылку в новой вкладке
          rel="noopener noreferrer"
        >
          {t('contact_us')}
        </a>
      </nav>
      <div className="language-selector" onClick={toggleDropdown}>
        <img src={getCurrentFlag()} alt="Current Language" className="language-icon" />
        <span className="arrow">&#9662;</span>
        {isDropdownOpen && (
          <ul className="language-dropdown">
            <li onClick={() => changeLanguage('ua')}>
              <img src={uaFlag} alt="Українська" />
              Українська
            </li>
            <li onClick={() => changeLanguage('pl')}>
              <img src={plFlag} alt="Polski" />
              Polski
            </li>
            <li onClick={() => changeLanguage('en')}>
              <img src={enFlag} alt="English" />
              English
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
