import React from "react";
import  { useLanguage } from "./useLanguage";

export const LanguageToggle = ({ languages }) => {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          style={{
            padding: "5px 10px",
            background: lang === lng ? "#333" : "#ccc",
            color: lang === lng ? "#fff" : "#000",
            border: "none",
            cursor: "pointer"
          }}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
