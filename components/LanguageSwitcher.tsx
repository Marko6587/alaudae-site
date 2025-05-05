"use client"

import { useLanguage } from "@/context/language-context"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "uk", name: "Українська" },
    { code: "en", name: "English" },
    { code: "pl", name: "Polski" },
    { code: "de", name: "Deutsch" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-50"
          >
            <ul className="py-1" role="listbox" aria-labelledby="language-selector" aria-activedescendant={language}>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  id={lang.code}
                  role="option"
                  aria-selected={language === lang.code}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    language === lang.code ? "font-medium bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    setLanguage(lang.code as "uk" | "en" | "pl" | "de")
                    setIsOpen(false)
                  }}
                >
                  {lang.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
