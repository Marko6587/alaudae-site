"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { getSite } from "@/lib/content"
import { LOCALES, type Locale } from "@/lib/content/types"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { nav } = getSite(language)

  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path))

  const languageButtons = (
    <>
      {LOCALES.map((locale: Locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLanguage(locale)}
          aria-pressed={language === locale}
          className={`text-xs uppercase transition-colors duration-200 ${
            language === locale ? "font-medium text-black" : "font-light text-gray-400 hover:text-black"
          }`}
        >
          {locale}
        </button>
      ))}
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 py-5 text-black backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" priority />
            </div>
            <span className="text-lg font-light tracking-wide">ALAUDAE</span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? "font-medium text-black underline decoration-1 underline-offset-8"
                    : "font-light text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden gap-4 md:flex">{languageButtons}</div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-4">
                {nav.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.path) ? "page" : undefined}
                    className={`text-sm transition-colors duration-200 ${
                      isActive(item.path) ? "font-medium text-black" : "font-light text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex gap-5 border-t border-gray-100 pt-4">{languageButtons}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
