"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { LOCALES, type Locale } from "@/lib/content/types"

const STORAGE_KEY = "alaudae.language"

const translations: Record<Locale, Record<string, string>> = {
  en: { title: "Title", description: "Description" },
  uk: { title: "Заголовок", description: "Опис" },
  pl: { title: "Tytuł", description: "Opis" },
  de: { title: "Titel", description: "Beschreibung" },
}

interface LanguageContextValue {
  language: Locale
  setLanguage: (language: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>("en")

  // Restore the previous choice, then fall back to the browser language.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) {
      setLanguageState(stored)
      return
    }
    const browser = navigator.language.slice(0, 2)
    if (isLocale(browser)) setLanguageState(browser)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Locale) => {
    setLanguageState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useCallback((key: string) => translations[language][key] ?? key, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
