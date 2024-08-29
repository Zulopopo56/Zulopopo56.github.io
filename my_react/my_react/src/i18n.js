import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import plTranslation from './translations/pl.json';
import uaTranslation from './translations/ua.json';
import enTranslation from './translations/en.json'

const resources = {
  pl: {
    translation: plTranslation
  },
  ua: {
    translation: uaTranslation
  },
  en:{
    translation: enTranslation
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl', // default language
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;