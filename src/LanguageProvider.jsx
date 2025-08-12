import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ translations, defaultLang, children }) => {
  const [lang, setLang] = useState(defaultLang || "en");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-language");
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("app-language", newLang);
  };

  const t = (key) => translations[lang]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
