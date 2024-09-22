import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css'; // Import your styles

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language); // Keep track of the current language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng); // Update the state to trigger a re-render
  };

  return (
    <div className={styles.languageSwitcher}>
      <select onChange={(e) => changeLanguage(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="he">Hebrew</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
