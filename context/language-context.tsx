"use client"

import { createContext, useContext, useState } from "react"

const LanguageContext = createContext({
  language: "uk",
  t: (key) => key,
  setLanguage: () => {},
})

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("uk")

  const translations = {
    uk: {
      title: "Заголовок",
      description: "Опис",
    },
    en: {
      title: "Title",
      description: "Description",
    },
    pl: {
      title: "Tytuł",
      description: "Opis",
    },
    de: {
      title: "Titel",
      description: "Beschreibung",
    },
  }

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  const value = { language, t, setLanguage }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  return useContext(LanguageContext)
}
