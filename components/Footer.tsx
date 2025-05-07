"use client"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const { language } = useLanguage()

  const getFooterContent = () => {
    switch (language) {
      case "uk":
        return {
          companyInfo: "Alaudae — інтелектуальні рішення для бізнесу",
          rights: "© 2023 Alaudae. Всі права захищені.",
          navigation: "Навігація",
          services: "Послуги",
          contact: "Контакти",
          address: "Адреса",
          addressLine: "вул. Бізнес-центр, 123, Київ, Україна",
          phone: "Телефон",
          email: "Електронна пошта",
        }
      case "en":
        return {
          companyInfo: "Alaudae — intelligent business solutions",
          rights: "© 2023 Alaudae. All rights reserved.",
          navigation: "Navigation",
          services: "Services",
          contact: "Contact",
          address: "Address",
          addressLine: "Business Center St., 123, Kyiv, Ukraine",
          phone: "Phone",
          email: "Email",
        }
      case "pl":
        return {
          companyInfo: "Alaudae — inteligentne rozwiązania biznesowe",
          rights: "© 2023 Alaudae. Wszelkie prawa zastrzeżone.",
          navigation: "Nawigacja",
          services: "Usługi",
          contact: "Kontakt",
          address: "Adres",
          addressLine: "ul. Centrum Biznesowe, 123, Kijów, Ukraina",
          phone: "Telefon",
          email: "E-mail",
        }
      case "de":
        return {
          companyInfo: "Alaudae — intelligente Geschäftslösungen",
          rights: "© 2023 Alaudae. Alle Rechte vorbehalten.",
          navigation: "Navigation",
          services: "Dienstleistungen",
          contact: "Kontakt",
          address: "Adresse",
          addressLine: "Geschäftszentrum Str., 123, Kiew, Ukraine",
          phone: "Telefon",
          email: "E-Mail",
        }
      default:
        return {
          companyInfo: "Alaudae — интеллектуальные решения для бизнеса",
          rights: "© 2023 Alaudae. Все права защищены.",
          navigation: "Навигация",
          services: "Услуги",
          contact: "Контакты",
          address: "Адрес",
          addressLine: "ул. Бизнес-центр, 123, Киев, Украина",
          phone: "Телефон",
          email: "Электронная почта",
        }
    }
  }

  const content = getFooterContent()

  return (
    <footer className="bg-white text-black py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 relative">
                <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" priority />
              </div>
              <span className="text-sm font-light tracking-wide">ALAUDAE</span>
            </div>
            <p className="text-sm text-gray-500 font-light mb-4">{content.companyInfo}</p>
            <p className="text-xs text-gray-400 font-light">{content.rights}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium mb-4">{content.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 font-light hover:text-black transition duration-300">
                  {language === "uk"
                    ? "Головна"
                    : language === "en"
                      ? "Home"
                      : language === "pl"
                        ? "Strona główna"
                        : language === "de"
                          ? "Startseite"
                          : "Главная"}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 font-light hover:text-black transition duration-300"
                >
                  {language === "uk"
                    ? "Про нас"
                    : language === "en"
                      ? "About"
                      : language === "pl"
                        ? "O nas"
                        : language === "de"
                          ? "Über uns"
                          : "О нас"}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-500 font-light hover:text-black transition duration-300"
                >
                  {language === "uk"
                    ? "Проекти"
                    : language === "en"
                      ? "Projects"
                      : language === "pl"
                        ? "Projekty"
                        : language === "de"
                          ? "Projekte"
                          : "Проекты"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4">{content.contact}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500 font-light">{content.addressLine}</li>
              <li className="text-sm text-gray-500 font-light">+380 44 123 4567</li>
              <li className="text-sm text-gray-500 font-light">info@alaudae.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
