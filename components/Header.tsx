"use client"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getNavItems = () => {
    switch (language) {
      case "uk":
        return [
          { name: "Головна", path: "/" },
          { name: "Послуги", path: "/services" },
          { name: "Проекти", path: "/projects" },
          { name: "Про нас", path: "/about" },
          { name: "Контакти", path: "/contact" },
        ]
      case "en":
        return [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ]
      case "pl":
        return [
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/services" },
          { name: "Projekty", path: "/projects" },
          { name: "O nas", path: "/about" },
          { name: "Kontakt", path: "/contact" },
        ]
      case "de":
        return [
          { name: "Startseite", path: "/" },
          { name: "Dienstleistungen", path: "/services" },
          { name: "Projekte", path: "/projects" },
          { name: "Über uns", path: "/about" },
          { name: "Kontakt", path: "/contact" },
        ]
      default:
        return [
          { name: "Главная", path: "/" },
          { name: "Услуги", path: "/services" },
          { name: "Проекты", path: "/projects" },
          { name: "О нас", path: "/about" },
          { name: "Контакты", path: "/contact" },
        ]
    }
  }

  const navItems = getNavItems()

  return (
    <header className="bg-white text-black py-6 sticky top-0 z-50 border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" priority />
            </div>
            <span className="text-lg font-light tracking-wide">ALAUDAE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-light hover:text-black transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs ${language === "en" ? "font-medium" : "font-light text-gray-500"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("uk")}
              className={`text-xs ${language === "uk" ? "font-medium" : "font-light text-gray-500"}`}
            >
              UK
            </button>
            <button
              onClick={() => setLanguage("pl")}
              className={`text-xs ${language === "pl" ? "font-medium" : "font-light text-gray-500"}`}
            >
              PL
            </button>
            <button
              onClick={() => setLanguage("de")}
              className={`text-xs ${language === "de" ? "font-medium" : "font-light text-gray-500"}`}
            >
              DE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} />
            <X className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6"
            >
              <nav className="flex flex-col space-y-4 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-sm font-light hover:text-black transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex space-x-4 border-t border-gray-100 pt-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-xs ${language === "en" ? "font-medium" : "font-light text-gray-500"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("uk")}
                  className={`text-xs ${language === "uk" ? "font-medium" : "font-light text-gray-500"}`}
                >
                  UK
                </button>
                <button
                  onClick={() => setLanguage("pl")}
                  className={`text-xs ${language === "pl" ? "font-medium" : "font-light text-gray-500"}`}
                >
                  PL
                </button>
                <button
                  onClick={() => setLanguage("de")}
                  className={`text-xs ${language === "de" ? "font-medium" : "font-light text-gray-500"}`}
                >
                  DE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
