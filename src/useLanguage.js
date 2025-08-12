import React, { useLanguageContext } from "./LanguageProvider";

export const useLanguage = () => {
  const { lang, changeLanguage, t } = useLanguageContext();
  return { lang, changeLanguage, t };
};
