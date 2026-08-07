import type { Locale } from "./types"

export interface NavItem {
  name: string
  path: string
}

export interface SiteCopy {
  nav: NavItem[]
  tagline: string
  servicesLabel: string
  companyLabel: string
  contactLabel: string
  rights: string
  /** Short labels for the six practice areas, reused in the footer. */
  practices: { label: string; href: string }[]
}

const practicePaths = "/services"

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    nav: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    tagline: "Corporate and cyber security consulting for companies that cannot afford to guess.",
    servicesLabel: "Practice areas",
    companyLabel: "Company",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    practices: [
      { label: "Cyber security", href: practicePaths },
      { label: "Corporate security", href: practicePaths },
      { label: "Security audits", href: practicePaths },
      { label: "Staff training", href: practicePaths },
      { label: "Loss prevention", href: practicePaths },
      { label: "Anti-fraud systems", href: practicePaths },
    ],
  },
  uk: {
    nav: [
      { name: "Головна", path: "/" },
      { name: "Послуги", path: "/services" },
      { name: "Проекти", path: "/projects" },
      { name: "Блог", path: "/blog" },
      { name: "Про нас", path: "/about" },
      { name: "Контакти", path: "/contact" },
    ],
    tagline: "Консалтинг з корпоративної та кібербезпеки для компаній, які не можуть діяти навмання.",
    servicesLabel: "Напрями практики",
    companyLabel: "Компанія",
    contactLabel: "Контакти",
    rights: "Усі права захищено.",
    practices: [
      { label: "Кібербезпека", href: practicePaths },
      { label: "Корпоративна безпека", href: practicePaths },
      { label: "Аудити безпеки", href: practicePaths },
      { label: "Навчання персоналу", href: practicePaths },
      { label: "Запобігання втратам", href: practicePaths },
      { label: "Антифрод-системи", href: practicePaths },
    ],
  },
  pl: {
    nav: [
      { name: "Strona główna", path: "/" },
      { name: "Usługi", path: "/services" },
      { name: "Projekty", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "O nas", path: "/about" },
      { name: "Kontakt", path: "/contact" },
    ],
    tagline: "Doradztwo w zakresie bezpieczeństwa korporacyjnego i cyberbezpieczeństwa dla firm, które nie mogą zgadywać.",
    servicesLabel: "Obszary praktyki",
    companyLabel: "Firma",
    contactLabel: "Kontakt",
    rights: "Wszelkie prawa zastrzeżone.",
    practices: [
      { label: "Cyberbezpieczeństwo", href: practicePaths },
      { label: "Bezpieczeństwo korporacyjne", href: practicePaths },
      { label: "Audyty bezpieczeństwa", href: practicePaths },
      { label: "Szkolenia pracowników", href: practicePaths },
      { label: "Zapobieganie stratom", href: practicePaths },
      { label: "Systemy antyfraudowe", href: practicePaths },
    ],
  },
  de: {
    nav: [
      { name: "Startseite", path: "/" },
      { name: "Leistungen", path: "/services" },
      { name: "Projekte", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "Über uns", path: "/about" },
      { name: "Kontakt", path: "/contact" },
    ],
    tagline: "Beratung für Unternehmens- und Cybersicherheit für Firmen, die nicht raten können.",
    servicesLabel: "Praxisfelder",
    companyLabel: "Unternehmen",
    contactLabel: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    practices: [
      { label: "Cybersicherheit", href: practicePaths },
      { label: "Unternehmenssicherheit", href: practicePaths },
      { label: "Sicherheitsaudits", href: practicePaths },
      { label: "Mitarbeiterschulung", href: practicePaths },
      { label: "Verlustprävention", href: practicePaths },
      { label: "Anti-Fraud-Systeme", href: practicePaths },
    ],
  },
}
