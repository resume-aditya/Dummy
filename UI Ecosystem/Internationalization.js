// Internationalization is the process of making your website available in different locales.

// react-i18next
// npm install react-i18next i18next --save

        // <div>Just simple content</div>

        // <div>{t('simpleContent')}</div>

// You will get the t function by using the useTranslation hook 


// Example : 

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });
  export default i18n;

//   Usee

  import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome to React')}</h1>
}