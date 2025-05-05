"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "uk" | "en" | "pl" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["uk", "en", "pl", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    // Специальная обработка для фразы "hero.title"
    if (key === "hero.title") {
      return "Investing in security today is preventing losses tomorrow."
    }
    return translations[language][key] || translations["en"][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  uk: {
    // Navigation
    "nav.home": "Головна",
    "nav.about": "Про нас",
    "nav.services": "Послуги",
    "nav.contact": "Контакти",
    "nav.projects": "Проекти",

    // Hero
    "hero.subtitle": "Це основа нашої корпоративної культури та підходу до цифрової безпеки.",
    "hero.button.learnMore": "Дізнатися більше",
    "hero.button.contactUs": "Зв'язатися з нами",

    // Services
    "services.title": "Послуги",
    "services.subtitle":
      "Ми пропонуємо комплексні рішення у сфері безпеки та управління ризиками, адаптовані під потреби вашого бізнесу.",
    "services.details": "Подробиці та опис кожної підпослуги будуть відображені тут.",
    "services.button.more": "Детальніше",
    "services.button.all": "Всі послуги",
    "services.our": "Наші послуги",

    // Service Names
    "service.infosec": "Інформаційна безпека",
    "service.lossPrevention": "Loss Prevention",
    "service.compliance": "Compliance",
    "service.audit": "Audyt",
    "service.leanManagement": "Lean Management",
    "service.riskManagement": "Risc Management",
    "service.other": "Інше",

    // Service Short Descriptions
    "service.infosec.short":
      "Комплексні рішення для захисту інформаційних активів вашої організації від внутрішніх і зовнішніх загроз з використанням передових технологій.",
    "service.lossPrevention.short":
      "Ефективні стратегії та методи запобігання втратам, спрямовані на захист активів компанії та мінімізацію операційних і фінансових збитків.",
    "service.compliance.short":
      "Забезпечення відповідності діяльності організації вимогам законодавства, міжнародним стандартам і внутрішнім політикам.",
    "service.audit.short":
      "Комплексна оцінка ефективності систем управління, контролю та бізнес-процесів в організації з використанням міжнародних стандартів.",
    "service.leanManagement.short":
      "Методологія управління, спрямована на оптимізацію процесів, усунення втрат і підвищення ефективності бізнесу на всіх рівнях.",
    "service.riskManagement.short":
      "Систематичний підхід до виявлення, оцінки та управління ризиками, які можуть вплинути на досягнення стратегічних і операційних цілей організації.",

    // Projects
    "projects.title": "Проекти",
    "projects.subtitle": "Наші інноваційні рішення для вашого бізнесу",
    "projects.button.more": "Детальніше",

    // Footer
    "footer.company": "Компанія",
    "footer.services": "Послуги",
    "footer.contacts": "Контакти",
    "footer.rights": "© 2025 Alaudae. Всі права захищені.",
    "footer.address": "Gdansk, Kolorowa 25, 80-180",
    "footer.phone": "+ 48 500 540 421",

    // About
    "about.title": "Про компанію Alaudae",
    "about.mission.title": "Наша місія",
    "about.mission.text1":
      "Ми прагнемо забезпечити найвищий рівень безпеки для наших клієнтів, надаючи інноваційні рішення та експертні консультації у сфері інформаційної безпеки та управління ризиками.",
    "about.mission.text2":
      "Наш підхід базується на глибокому розумінні потреб клієнтів і використанні передових технологій для захисту їхніх активів і даних.",
    "about.history.title": "Наша історія",
    "about.history.text1":
      "Компанія Alaudae була заснована групою експертів у сфері безпеки, які побачили зростаючу потребу в комплексних рішеннях із захисту інформації та управління ризиками.",
    "about.history.text2":
      "З моменту заснування ми успішно реалізували безліч проектів для клієнтів із різних галузей, допомагаючи їм захистити свої активи та оптимізувати процеси управління безпекою.",
    "about.values.title": "Наші цінності",
    "about.values.item1": "Професіоналізм та експертиза у сфері безпеки",
    "about.values.item2": "Інноваційний підхід до вирішення проблем",
    "about.values.item3": "Орієнтація на потреби клієнта",
    "about.values.item4": "Конфіденційність і надійність",
    "about.values.item5": "Постійне вдосконалення та розвиток",

    // Contact
    "contact.title": "Зв'язатися з нами",
    "contact.info.title": "Контактна інформація",
    "contact.address.title": "Адреса",
    "contact.address.text": "Gdansk, Kolorowa 25, 80-180",
    "contact.phone.title": "Телефон",
    "contact.email.title": "Email",
    "contact.hours.title": "Години роботи",
    "contact.hours.text": "Понеділок - П'ятниця: 9:00 - 18:00\nСубота - Неділя: Закрито",
    "contact.form.title": "Надіслати повідомлення",
    "contact.form.name": "Ім'я",
    "contact.form.email": "Email",
    "contact.form.subject": "Тема",
    "contact.form.subject.select": "Виберіть тему",
    "contact.form.subject.other": "Інше",
    "contact.form.message": "Повідомлення",
    "contact.form.button.sending": "Надсилання...",
    "contact.form.button.send": "Надіслати повідомлення",
    "contact.form.success": "Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.",
    "contact.form.error": "Сталася помилка під час надсилання повідомлення. Будь ласка, спробуйте ще раз.",

    // 404
    "notFound.title": "Сторінку не знайдено",
    "notFound.text": "Вибачте, запитувана сторінка не існує.",
    "notFound.button": "Повернутися на головну",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.projects": "Projects",

    // Hero
    "hero.subtitle": "This is the foundation of our corporate culture and approach to digital security.",
    "hero.button.learnMore": "Learn More",
    "hero.button.contactUs": "Contact Us",

    // Services
    "services.title": "Services",
    "services.subtitle":
      "We offer comprehensive security and risk management solutions tailored to your business needs.",
    "services.details": "Details and description of each sub-service will be displayed here.",
    "services.button.more": "Learn More",
    "services.button.all": "All Services",
    "services.our": "Our Services",

    // Service Names
    "service.infosec": "Information Security",
    "service.lossPrevention": "Loss Prevention",
    "service.compliance": "Compliance",
    "service.audit": "Audit",
    "service.leanManagement": "Lean Management",
    "service.riskManagement": "Risk Management",
    "service.other": "Other",

    // Service Short Descriptions
    "service.infosec.short":
      "Comprehensive solutions to protect your organization's information assets from internal and external threats using advanced technologies and methodologies.",
    "service.lossPrevention.short":
      "Effective strategies and methods for preventing losses, aimed at protecting company assets and minimizing operational and financial losses.",
    "service.compliance.short":
      "Ensuring that the organization's activities comply with legal requirements, international standards, and internal policies.",
    "service.audit.short":
      "Comprehensive assessment of the effectiveness of management systems, controls, and business processes in the organization using international standards.",
    "service.leanManagement.short":
      "Management methodology aimed at optimizing processes, eliminating waste, and improving business efficiency at all levels.",
    "service.riskManagement.short":
      "A systematic approach to identifying, assessing, and managing risks that may affect the achievement of the organization's strategic and operational objectives.",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Our innovative solutions for your business",
    "projects.button.more": "Learn More",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contacts": "Contacts",
    "footer.rights": "© 2025 Alaudae. All rights reserved.",
    "footer.address": "Gdansk, Kolorowa 25, 80-180",
    "footer.phone": "+ 48 500 540 421",

    // About
    "about.title": "About Alaudae",
    "about.mission.title": "Our Mission",
    "about.mission.text1":
      "We strive to provide the highest level of security for our clients by delivering innovative solutions and expert consulting in information security and risk management.",
    "about.mission.text2":
      "Our approach is based on a deep understanding of client needs and the use of advanced technologies to protect their assets and data.",
    "about.history.title": "Our History",
    "about.history.text1":
      "Alaudae was founded by a group of security experts who saw a growing need for comprehensive information protection and risk management solutions.",
    "about.history.text2":
      "Since our founding, we have successfully implemented numerous projects for clients across various industries, helping them protect their assets and optimize security management processes.",
    "about.values.title": "Our Values",
    "about.values.item1": "Professionalism and expertise in security",
    "about.values.item2": "Innovative approach to problem-solving",
    "about.values.item3": "Client-oriented focus",
    "about.values.item4": "Confidentiality and reliability",
    "about.values.item5": "Continuous improvement and development",

    // Contact
    "contact.title": "Contact Us",
    "contact.info.title": "Contact Information",
    "contact.address.title": "Address",
    "contact.address.text": "Gdansk, Kolorowa 25, 80-180",
    "contact.phone.title": "Phone",
    "contact.email.title": "Email",
    "contact.hours.title": "Working Hours",
    "contact.hours.text": "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.subject.select": "Select a subject",
    "contact.form.subject.other": "Other",
    "contact.form.message": "Message",
    "contact.form.button.sending": "Sending...",
    "contact.form.button.send": "Send Message",
    "contact.form.success": "Your message has been sent successfully. We will contact you soon.",
    "contact.form.error": "An error occurred while sending your message. Please try again.",

    // 404
    "notFound.title": "Page Not Found",
    "notFound.text": "Sorry, the requested page does not exist.",
    "notFound.button": "Return to Home",
  },
  pl: {
    // Navigation
    "nav.home": "Strona główna",
    "nav.about": "O nas",
    "nav.services": "Usługi",
    "nav.contact": "Kontakt",
    "nav.projects": "Projekty",

    // Hero
    "hero.subtitle": "To podstawa naszej kultury korporacyjnej i podejścia do bezpieczeństwa cyfrowego.",
    "hero.button.learnMore": "Dowiedz się więcej",
    "hero.button.contactUs": "Skontaktuj się z nami",

    // Services
    "services.title": "Usługi",
    "services.subtitle":
      "Oferujemy kompleksowe rozwiązania w zakresie bezpieczeństwa i zarządzania ryzykiem, dostosowane do potrzeb Twojego biznesu.",
    "services.details": "Szczegóły i opis każdej podusługi będą wyświetlane tutaj.",
    "services.button.more": "Więcej informacji",
    "services.button.all": "Wszystkie usługi",
    "services.our": "Nasze usługi",

    // Service Names
    "service.infosec": "Bezpieczeństwo informacji",
    "service.lossPrevention": "Zapobieganie stratom",
    "service.compliance": "Zgodność",
    "service.audit": "Audyt",
    "service.leanManagement": "Lean Management",
    "service.riskManagement": "Zarządzanie ryzykiem",
    "service.other": "Inne",

    // Service Short Descriptions
    "service.infosec.short":
      "Kompleksowe rozwiązania chroniące zasoby informacyjne Twojej organizacji przed zagrożeniami wewnętrznymi i zewnętrznymi z wykorzystaniem zaawansowanych technologii.",
    "service.lossPrevention.short":
      "Skuteczne strategie i metody zapobiegania stratom, mające na celu ochronę aktywów firmy i minimalizację strat operacyjnych i finansowych.",
    "service.compliance.short":
      "Zapewnienie zgodności działalności organizacji z wymogami prawnymi, międzynarodowymi standardami i wewnętrznymi politykami.",
    "service.audit.short":
      "Kompleksowa ocena skuteczności systemów zarządzania, kontroli i procesów biznesowych w organizacji z wykorzystaniem międzynarodowych standardów.",
    "service.leanManagement.short":
      "Metodologia zarządzania mająca na celu optymalizację procesów, eliminację marnotrawstwa i poprawę efektywności biznesowej na wszystkich poziomach.",
    "service.riskManagement.short":
      "Systematyczne podejście do identyfikacji, oceny i zarządzania ryzykami, które mogą wpłynąć na osiągnięcie strategicznych i operacyjnych celów organizacji.",

    // Projects
    "projects.title": "Projekty",
    "projects.subtitle": "Nasze innowacyjne rozwiązania dla Twojego biznesu",
    "projects.button.more": "Więcej informacji",

    // Footer
    "footer.company": "Firma",
    "footer.services": "Usługi",
    "footer.contacts": "Kontakty",
    "footer.rights": "© 2025 Alaudae. Wszelkie prawa zastrzeżone.",
    "footer.address": "Gdansk, Kolorowa 25, 80-180",
    "footer.phone": "+ 48 500 540 421",

    // About
    "about.title": "O firmie Alaudae",
    "about.mission.title": "Nasza misja",
    "about.mission.text1":
      "Dążymy do zapewnienia najwyższego poziomu bezpieczeństwa naszym klientom, dostarczając innowacyjne rozwiązania i eksperckie doradztwo w zakresie bezpieczeństwa informacji i zarządzania ryzykiem.",
    "about.mission.text2":
      "Nasze podejście opiera się na głębokim zrozumieniu potrzeb klientów i wykorzystaniu zaawansowanych technologii do ochrony ich aktywów i danych.",
    "about.history.title": "Nasza historia",
    "about.history.text1":
      "Firma Alaudae została założona przez grupę ekspertów ds. bezpieczeństwa, którzy dostrzegli rosnącą potrzebę kompleksowych rozwiązań w zakresie ochrony informacji i zarządzania ryzykiem.",
    "about.history.text2":
      "Od momentu założenia z powodzeniem zrealizowaliśmy wiele projektów dla klientów z różnych branż, pomagając im chronić ich aktywa i optymalizować procesy zarządzania bezpieczeństwem.",
    "about.values.title": "Nasze wartości",
    "about.values.item1": "Profesjonalizm i wiedza w dziedzinie bezpieczeństwa",
    "about.values.item2": "Innowacyjne podejście do rozwiązywania problemów",
    "about.values.item3": "Orientacja na potrzeby klienta",
    "about.values.item4": "Poufność i niezawodność",
    "about.values.item5": "Ciągłe doskonalenie i rozwój",

    // Contact
    "contact.title": "Skontaktuj się z nami",
    "contact.info.title": "Informacje kontaktowe",
    "contact.address.title": "Adres",
    "contact.address.text": "Gdansk, Kolorowa 25, 80-180",
    "contact.phone.title": "Telefon",
    "contact.email.title": "Email",
    "contact.hours.title": "Godziny pracy",
    "contact.hours.text": "Poniedziałek - Piątek: 9:00 - 18:00\nSobota - Niedziela: Zamknięte",
    "contact.form.title": "Wyślij wiadomość",
    "contact.form.name": "Imię",
    "contact.form.email": "Email",
    "contact.form.subject": "Temat",
    "contact.form.subject.select": "Wybierz temat",
    "contact.form.subject.other": "Inny",
    "contact.form.message": "Wiadomość",
    "contact.form.button.sending": "Wysyłanie...",
    "contact.form.button.send": "Wyślij wiadomość",
    "contact.form.success": "Twoja wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce.",
    "contact.form.error": "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",

    // 404
    "notFound.title": "Strona nie znaleziona",
    "notFound.text": "Przepraszamy, żądana strona nie istnieje.",
    "notFound.button": "Powrót do strony głównej",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.services": "Dienstleistungen",
    "nav.contact": "Kontakt",
    "nav.projects": "Projekte",

    // Hero
    "hero.subtitle": "Dies ist die Grundlage unserer Unternehmenskultur und unseres Ansatzes für digitale Sicherheit.",
    "hero.button.learnMore": "Mehr erfahren",
    "hero.button.contactUs": "Kontaktieren Sie uns",

    // Services
    "services.title": "Dienstleistungen",
    "services.subtitle":
      "Wir bieten umfassende Sicherheits- und Risikomanagementlösungen, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.",
    "services.details": "Details und Beschreibung jeder Unterdienstleistung werden hier angezeigt.",
    "services.button.more": "Mehr erfahren",
    "services.button.all": "Alle Dienstleistungen",
    "services.our": "Unsere Dienstleistungen",

    // Service Names
    "service.infosec": "Informationssicherheit",
    "service.lossPrevention": "Verlustprävention",
    "service.compliance": "Compliance",
    "service.audit": "Audit",
    "service.leanManagement": "Lean Management",
    "service.riskManagement": "Risikomanagement",
    "service.other": "Andere",

    // Service Short Descriptions
    "service.infosec.short":
      "Umfassende Lösungen zum Schutz der Informationsbestände Ihrer Organisation vor internen und externen Bedrohungen unter Verwendung fortschrittlicher Technologien und Methoden.",
    "service.lossPrevention.short":
      "Effektive Strategien und Methoden zur Verlustvermeidung, die darauf abzielen, Unternehmenswerte zu schützen und betriebliche und finanzielle Verluste zu minimieren.",
    "service.compliance.short":
      "Sicherstellung, dass die Aktivitäten der Organisation den gesetzlichen Anforderungen, internationalen Standards und internen Richtlinien entsprechen.",
    "service.audit.short":
      "Umfassende Bewertung der Wirksamkeit von Managementsystemen, Kontrollen und Geschäftsprozessen in der Organisation unter Verwendung internationaler Standards.",
    "service.leanManagement.short":
      "Managementmethodik zur Optimierung von Prozessen, Beseitigung von Verschwendung und Verbesserung der Geschäftseffizienz auf allen Ebenen.",
    "service.riskManagement.short":
      "Ein systematischer Ansatz zur Identifizierung, Bewertung und Steuerung von Risiken, die die Erreichung der strategischen und operativen Ziele der Organisation beeinträchtigen können.",

    // Projects
    "projects.title": "Projekte",
    "projects.subtitle": "Unsere innovativen Lösungen für Ihr Unternehmen",
    "projects.button.more": "Mehr erfahren",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.contacts": "Kontakte",
    "footer.rights": "© 2025 Alaudae. Alle Rechte vorbehalten.",
    "footer.address": "Gdansk, Kolorowa 25, 80-180",
    "footer.phone": "+ 48 500 540 421",

    // About
    "about.title": "Über Alaudae",
    "about.mission.title": "Unsere Mission",
    "about.mission.text1":
      "Wir streben danach, unseren Kunden das höchste Maß an Sicherheit zu bieten, indem wir innovative Lösungen und Expertenberatung im Bereich Informationssicherheit und Risikomanagement liefern.",
    "about.mission.text2":
      "Unser Ansatz basiert auf einem tiefen Verständnis der Kundenbedürfnisse und dem Einsatz fortschrittlicher Technologien zum Schutz ihrer Vermögenswerte und Daten.",
    "about.history.title": "Unsere Geschichte",
    "about.history.text1":
      "Alaudae wurde von einer Gruppe von Sicherheitsexperten gegründet, die einen wachsenden Bedarf an umfassenden Lösungen für Informationsschutz und Risikomanagement erkannten.",
    "about.history.text2":
      "Seit unserer Gründung haben wir erfolgreich zahlreiche Projekte für Kunden aus verschiedenen Branchen umgesetzt und ihnen geholfen, ihre Vermögenswerte zu schützen und Sicherheitsmanagementprozesse zu optimieren.",
    "about.values.title": "Unsere Werte",
    "about.values.item1": "Professionalität und Expertise im Bereich Sicherheit",
    "about.values.item2": "Innovativer Ansatz zur Problemlösung",
    "about.values.item3": "Kundenorientierter Fokus",
    "about.values.item4": "Vertraulichkeit und Zuverlässigkeit",
    "about.values.item5": "Kontinuierliche Verbesserung und Entwicklung",

    // Contact
    "contact.title": "Kontaktieren Sie uns",
    "contact.info.title": "Kontaktinformationen",
    "contact.address.title": "Adresse",
    "contact.address.text": "Gdansk, Kolorowa 25, 80-180",
    "contact.phone.title": "Telefon",
    "contact.email.title": "E-Mail",
    "contact.hours.title": "Arbeitszeiten",
    "contact.hours.text": "Montag - Freitag: 9:00 - 18:00 Uhr\nSamstag - Sonntag: Geschlossen",
    "contact.form.title": "Nachricht senden",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Betreff",
    "contact.form.subject.select": "Betreff auswählen",
    "contact.form.subject.other": "Andere",
    "contact.form.message": "Nachricht",
    "contact.form.button.sending": "Wird gesendet...",
    "contact.form.button.send": "Nachricht senden",
    "contact.form.success":
      "Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    "contact.form.error": "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",

    // 404
    "notFound.title": "Seite nicht gefunden",
    "notFound.text": "Entschuldigung, die angeforderte Seite existiert nicht.",
    "notFound.button": "Zurück zur Startseite",
  },
}
