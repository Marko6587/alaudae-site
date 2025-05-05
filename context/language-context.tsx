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
    // Special handling for the phrase "hero.title" to keep it in English
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
    "services.features": "Функції",
    "services.benefits": "Переваги",

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

    // POAS Project Translations
    "project.poas.title": "СИСТЕМА ОПТИМІЗАЦІЇ ТА АВТОМАТИЗАЦІЇ ПРОЦЕСІВ",
    "project.poas.subtitle": "Інтелектуальна система оптимізації, цифровізації та автоматизації бізнес-процесів",
    "project.poas.description": "Автоматизувати — не означає прискорити хаос. Спочатку оптимізація, потім цифра.",
    "project.poas.for.title": "💼 Для кого?",
    "project.poas.for.1": "Середній та великий бізнес із застарілими або дублюючими процесами",
    "project.poas.for.2": "Компанії на етапі цифрової трансформації",
    "project.poas.for.3": "Організації з високою часткою ручної праці, Excel-звітності, неінтегрованих систем",
    "project.poas.for.4": "Керівники, які втомилися від «милиць» в управлінні",
    "project.poas.solution.title": "🎯 Що вирішує система?",
    "project.poas.solution.1": "Process Optimization & Automation System (POAS) — це цифрова екосистема, що дозволяє:",
    "project.poas.solution.2": "Виявити та усунути неефективності в процесах",
    "project.poas.solution.3": "Стандартизувати та регламентувати ключові операції",
    "project.poas.solution.4": "Автоматизувати рутину та підвищити прозорість управління",
    "project.poas.solution.5": "Створити вимірювану модель процесів на основі KPI та даних",
    "project.poas.solution.6": "Наша мета — не просто автоматизація, а зниження витрат і зростання якості управління.",
    "project.poas.results.title": "📈 Результати",
    "project.poas.results.1": "Скорочення витрат часу на 20–60%",
    "project.poas.results.2": "Усунення рутинних операцій без втрати контролю",
    "project.poas.results.3": "Зростання якості та швидкості внутрішніх сервісів",
    "project.poas.results.4": "Підвищення задоволеності клієнтів і співробітників",
    "project.poas.results.5": "Готовність до масштабування та цифрової зрілості",
    "project.poas.kpi.title": "📊 KPI та метрики",
    "project.poas.kpi.1": "Напрямок\tМетрика",
    "project.poas.kpi.2": "Час виконання завдань\t-30–60% за ключовими процесами",
    "project.poas.kpi.3": "Рівень автоматизації\tЗростання до 70–85% за рутинними операціями",
    "project.poas.kpi.4": "Помилки та дублі\tЗниження ручних помилок до <5%",
    "project.poas.kpi.5": "Задоволеність\tЗростання CSI/ESAT на 15–30%",
    "project.poas.kpi.6": "Фінансовий ефект\tЕкономія праці та витрат у перерахунку на ₽",
    "project.poas.principles.title": "🛠 Принципи підходу",
    "project.poas.principles.1": "Оптимізація → потім автоматизація (а не навпаки)",
    "project.poas.principles.2": "Прозорість процесів на всіх рівнях",
    "project.poas.principles.3": "Мінімум коду — максимум ефекту (Low-code / No-code рішення)",
    "project.poas.principles.4": "Участь команди замовника на кожному етапі",
    "project.poas.start.title": "🚀 Як запускається проект?",
    "project.poas.start.1": "Діагностика поточної архітектури процесів",
    "project.poas.start.2": "Виділення критичних зон і розрахунок ефекту",
    "project.poas.start.3": "Швидке цифрове налаштування (3–6 тижнів)",
    "project.poas.start.4": "Підключення RPA, інтеграцій, AI",
    "project.poas.start.5": "Навчання, супровід і масштабування",
    "project.poas.start.6": "Цифрова трансформація починається з процесу, а не з софту.",

    // LIS Project Translations
    "project.lis.title": "СИСТЕМА ІНТЕЛЕКТУАЛЬНОГО LEAN-УПРАВЛІННЯ",
    "project.lis.subtitle": "Інтелектуальна система оптимізації процесів та усунення втрат за методологією Lean",
    "project.lis.description": "Lean — це не про скорочення. Це про створення цінності без втрат.",
    "project.lis.for.title": "💼 Для кого?",
    "project.lis.for.1": "Виробничі підприємства, що прагнуть підвищити ефективність",
    "project.lis.for.2": "Холдинги з децентралізованими бізнес-одиницями",
    "project.lis.for.3": "Компанії з застарілими бізнес-процесами та ручним управлінням",
    "project.lis.for.4": "Структури, що впроваджують Kaizen, TPM, TQM, Agile та ESG-підходи",
    "project.lis.goal.title": "🎯 Мета системи",
    "project.lis.goal.1": "Lean Intelligence System (LIS) — це не просто ощадливе виробництво.",
    "project.lis.goal.2":
      "Це цифровий інструмент для впровадження культури постійних покращень та тотальної прозорості процесів.",
    "project.lis.goal.3": "Система:",
    "project.lis.goal.4": "Виявляє та усуває операційні втрати (Muda, Mura, Muri)",
    "project.lis.goal.5": "Формує потік цінності (Value Stream) в режимі реального часу",
    "project.lis.goal.6": "Посилює залученість персоналу в процеси покращень",
    "project.lis.goal.7": "Забезпечує керовану трансформацію компанії",
    "project.lis.results.title": "📈 Результати",
    "project.lis.results.1": "Скорочення витрат на 10–30%",
    "project.lis.results.2": "Збільшення продуктивності праці",
    "project.lis.results.3": "Підвищення якості продукції та дотримання термінів",
    "project.lis.results.4": "Зростання залученості та відповідальності співробітників",
    "project.lis.results.5": "Прискорення цифрової трансформації та Lean-культури",
    "project.lis.kpi.title": "📊 KPI та ефективність",
    "project.lis.kpi.1": "Показник\tДо впровадження\tПісля впровадження",
    "project.lis.kpi.2": "Lead Time\t> 20 днів\t< 12 днів",
    "project.lis.kpi.3": "Частка MUDA в процесах\t35–45%\t< 15%",
    "project.lis.kpi.4": "Залученість персоналу\t20%\t> 60%",
    "project.lis.kpi.5": "Кількість покращень на місяць\t2–5 ідей\t20–50 ідей",
    "project.lis.kpi.6": "OEE (ефективність)\t< 60%\t> 80%",
    "project.lis.principles.title": "🛠 Принципи впровадження",
    "project.lis.principles.1": "Знизу вгору — ініціатива від співробітників, підтримка зверху",
    "project.lis.principles.2": "Малі кроки з великим ефектом — Kaizen-стратегія",
    "project.lis.principles.3": "Технології як підтримка, а не заміна мислення",
    "project.lis.principles.4": "Цінність для клієнта — головний критерій змін",
    "project.lis.start.title": "🚀 Як реалізуємо проект?",
    "project.lis.start.1": "Lean-аудит: аналіз ланцюжків цінності та втрат",
    "project.lis.start.2": "Налаштування LIS під бізнес-модель та галузеві особливості",
    "project.lis.start.3": "Навчання персоналу Lean-принципам та цифровим інструментам",
    "project.lis.start.4": "Постійний супровід та розвиток покращень",
    "project.lis.start.5": "Lean — це не проект. Це нова ДНК вашої компанії.",
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
    "services.features": "Features",
    "services.benefits": "Benefits",

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

    // POAS Project Translations
    "project.poas.title": "PROCESS OPTIMIZATION & AUTOMATION SYSTEM",
    "project.poas.subtitle":
      "Intelligent system for optimization, digitalization, and automation of business processes",
    "project.poas.description": "Automating doesn't mean accelerating chaos. First optimization, then digitalization.",
    "project.poas.for.title": "💼 Who is it for?",
    "project.poas.for.1": "Medium and large businesses with outdated or duplicated processes",
    "project.poas.for.2": "Companies undergoing digital transformation",
    "project.poas.for.3":
      "Organizations with a high proportion of manual labor, Excel reporting, and non-integrated systems",
    "project.poas.for.4": "Managers tired of workarounds in management",
    "project.poas.solution.title": "🎯 What does the system solve?",
    "project.poas.solution.1":
      "Process Optimization & Automation System (POAS) is a digital ecosystem that allows you to:",
    "project.poas.solution.2": "Identify and eliminate inefficiencies in processes",
    "project.poas.solution.3": "Standardize and regulate key operations",
    "project.poas.solution.4": "Automate routine tasks and increase management transparency",
    "project.poas.solution.5": "Create a measurable process model based on KPIs and data",
    "project.poas.solution.6": "Our goal is not just automation, but cost reduction and improved management quality.",
    "project.poas.results.title": "📈 Results",
    "project.poas.results.1": "Reduction of time costs by 20-60%",
    "project.poas.results.2": "Elimination of routine operations without loss of control",
    "project.poas.results.3": "Growth in quality and speed of internal services",
    "project.poas.results.4": "Increased customer and employee satisfaction",
    "project.poas.results.5": "Readiness for scaling and digital maturity",
    "project.poas.kpi.title": "📊 KPIs and metrics",
    "project.poas.kpi.1": "Direction\tMetric",
    "project.poas.kpi.2": "Task execution time\t-30-60% for key processes",
    "project.poas.kpi.3": "Automation level\tGrowth to 70-85% for routine operations",
    "project.poas.kpi.4": "Errors and duplicates\tReduction of manual errors to <5%",
    "project.poas.kpi.5": "Satisfaction\tCSI/ESAT growth by 15-30%",
    "project.poas.kpi.6": "Financial effect\tSavings in labor and costs in terms of ₽",
    "project.poas.principles.title": "🛠 Approach principles",
    "project.poas.principles.1": "Optimization → then automation (not vice versa)",
    "project.poas.principles.2": "Process transparency at all levels",
    "project.poas.principles.3": "Minimum code — maximum effect (Low-code / No-code solutions)",
    "project.poas.principles.4": "Client team participation at every stage",
    "project.poas.start.title": "🚀 How is the project launched?",
    "project.poas.start.1": "Diagnostics of the current process architecture",
    "project.poas.start.2": "Identification of critical zones and calculation of effects",
    "project.poas.start.3": "Quick digital setup (3-6 weeks)",
    "project.poas.start.4": "Connection of RPA, integrations, AI",
    "project.poas.start.5": "Training, support, and scaling",
    "project.poas.start.6": "Digital transformation begins with the process, not with software.",

    // LIS Project Translations
    "project.lis.title": "LEAN INTELLIGENCE SYSTEM",
    "project.lis.subtitle": "Intelligent system for process optimization and waste elimination using Lean methodology",
    "project.lis.description": "Lean is not about cutting. It's about creating value without waste.",
    "project.lis.for.title": "💼 Who is it for?",
    "project.lis.for.1": "Manufacturing enterprises seeking to increase efficiency",
    "project.lis.for.2": "Holdings with decentralized business units",
    "project.lis.for.3": "Companies with outdated business processes and manual management",
    "project.lis.for.4": "Organizations implementing Kaizen, TPM, TQM, Agile, and ESG approaches",
    "project.lis.goal.title": "🎯 System Goal",
    "project.lis.goal.1": "Lean Intelligence System (LIS) is not just lean manufacturing.",
    "project.lis.goal.2":
      "It's a digital tool for implementing a culture of continuous improvement and total process transparency.",
    "project.lis.goal.3": "The system:",
    "project.lis.goal.4": "Identifies and eliminates operational losses (Muda, Mura, Muri)",
    "project.lis.goal.5": "Forms a value stream in real-time",
    "project.lis.goal.6": "Strengthens staff involvement in improvement processes",
    "project.lis.goal.7": "Ensures managed company transformation",
    "project.lis.results.title": "📈 Results",
    "project.lis.results.1": "Cost reduction by 10-30%",
    "project.lis.results.2": "Increased labor productivity",
    "project.lis.results.3": "Improved product quality and adherence to deadlines",
    "project.lis.results.4": "Growth in employee engagement and responsibility",
    "project.lis.results.5": "Acceleration of digital transformation and Lean culture",
    "project.lis.kpi.title": "📊 KPIs and effectiveness",
    "project.lis.kpi.1": "Indicator\tBefore implementation\tAfter implementation",
    "project.lis.kpi.2": "Lead Time\t> 20 days\t< 12 days",
    "project.lis.kpi.3": "MUDA share in processes\t35-45%\t< 15%",
    "project.lis.kpi.4": "Staff involvement\t20%\t> 60%",
    "project.lis.kpi.5": "Number of improvements per month\t2-5 ideas\t20-50 ideas",
    "project.lis.kpi.6": "OEE (efficiency)\t< 60%\t> 80%",
    "project.lis.principles.title": "🛠 Implementation principles",
    "project.lis.principles.1": "Bottom-up — initiative from employees, support from above",
    "project.lis.principles.2": "Small steps with big effect — Kaizen strategy",
    "project.lis.principles.3": "Technology as support, not a replacement for thinking",
    "project.lis.principles.4": "Value for the customer — the main criterion for changes",
    "project.lis.start.title": "🚀 How do we implement the project?",
    "project.lis.start.1": "Lean audit: analysis of value chains and losses",
    "project.lis.start.2": "Customization of LIS to business model and industry specifics",
    "project.lis.start.3": "Training staff in Lean principles and digital tools",
    "project.lis.start.4": "Continuous support and development of improvements",
    "project.lis.start.5": "Lean is not a project. It's the new DNA of your company.",
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
    "services.features": "Funkcje",
    "services.benefits": "Korzyści",

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

    // POAS Project Translations
    "project.poas.title": "SYSTEM OPTYMALIZACJI I AUTOMATYZACJI PROCESÓW",
    "project.poas.subtitle": "Inteligentny system optymalizacji, cyfryzacji i automatyzacji procesów biznesowych",
    "project.poas.description":
      "Automatyzacja nie oznacza przyspieszenia chaosu. Najpierw optymalizacja, potem cyfryzacja.",
    "project.poas.for.title": "💼 Dla kogo?",
    "project.poas.for.1": "Średni i duży biznes z przestarzałymi lub zduplikowanymi procesami",
    "project.poas.for.2": "Firmy w fazie transformacji cyfrowej",
    "project.poas.for.3":
      "Organizacje z dużym udziałem pracy ręcznej, raportowania w Excelu, niezintegrowanych systemów",
    "project.poas.for.4": "Menedżerowie zmęczeni obejściami w zarządzaniu",
    "project.poas.solution.title": "🎯 Co rozwiązuje system?",
    "project.poas.solution.1": "Process Optimization & Automation System (POAS) to cyfrowy ekosystem, który pozwala:",
    "project.poas.solution.2": "Zidentyfikować i wyeliminować nieefektywność w procesach",
    "project.poas.solution.3": "Standaryzować i regulować kluczowe operacje",
    "project.poas.solution.4": "Automatyzować rutynowe zadania i zwiększać przejrzystość zarządzania",
    "project.poas.solution.5": "Stworzyć mierzalny model procesu oparty na KPI i danych",
    "project.poas.solution.6":
      "Naszym celem nie jest tylko automatyzacja, ale redukcja kosztów i poprawa jakości zarządzania.",
    "project.poas.results.title": "📈 Wyniki",
    "project.poas.results.1": "Redukcja kosztów czasowych o 20-60%",
    "project.poas.results.2": "Eliminacja rutynowych operacji bez utraty kontroli",
    "project.poas.results.3": "Wzrost jakości i szybkości usług wewnętrznych",
    "project.poas.results.4": "Zwiększone zadowolenie klientów i pracowników",
    "project.poas.results.5": "Gotowość do skalowania i dojrzałości cyfrowej",
    "project.poas.kpi.title": "📊 KPI i metryki",
    "project.poas.kpi.1": "Kierunek\tMetryka",
    "project.poas.kpi.2": "Czas wykonania zadań\t-30-60% dla kluczowych procesów",
    "project.poas.kpi.3": "Poziom automatyzacji\tWzrost do 70-85% dla rutynowych operacji",
    "project.poas.kpi.4": "Błędy i duplikaty\tRedukcja błędów ręcznych do <5%",
    "project.poas.kpi.5": "Zadowolenie\tWzrost CSI/ESAT o 15-30%",
    "project.poas.kpi.6": "Efekt finansowy\tOszczędności w pracy i kosztach w przeliczeniu na ₽",
    "project.poas.principles.title": "🛠 Zasady podejścia",
    "project.poas.principles.1": "Optymalizacja → następnie automatyzacja (nie odwrotnie)",
    "project.poas.principles.2": "Przejrzystość procesów na wszystkich poziomach",
    "project.poas.principles.3": "Minimum kodu — maksymalny efekt (rozwiązania Low-code / No-code)",
    "project.poas.principles.4": "Udział zespołu klienta na każdym etapie",
    "project.poas.start.title": "🚀 Jak uruchamiany jest projekt?",
    "project.poas.start.1": "Diagnostyka obecnej architektury procesów",
    "project.poas.start.2": "Identyfikacja krytycznych stref i obliczenie efektów",
    "project.poas.start.3": "Szybka konfiguracja cyfrowa (3-6 tygodni)",
    "project.poas.start.4": "Podłączenie RPA, integracji, AI",
    "project.poas.start.5": "Szkolenie, wsparcie i skalowanie",
    "project.poas.start.6": "Transformacja cyfrowa zaczyna się od procesu, nie od oprogramowania.",

    // LIS Project Translations
    "project.lis.title": "SYSTEM INTELIGENCJI LEAN",
    "project.lis.subtitle": "Inteligentny system optymalizacji procesów i eliminacji strat według metodologii Lean",
    "project.lis.description": "Lean nie dotyczy cięć. Chodzi o tworzenie wartości bez strat.",
    "project.lis.for.title": "💼 Dla kogo?",
    "project.lis.for.1": "Przedsiębiorstwa produkcyjne dążące do zwiększenia efektywności",
    "project.lis.for.2": "Holdingi z zdecentralizowanymi jednostkami biznesowymi",
    "project.lis.for.3": "Firmy z przestarzałymi procesami biznesowymi i ręcznym zarządzaniem",
    "project.lis.for.4": "Struktury wdrażające podejścia Kaizen, TPM, TQM, Agile i ESG",
    "project.lis.goal.title": "🎯 Cel systemu",
    "project.lis.goal.1": "Lean Intelligence System (LIS) to nie tylko szczupła produkcja.",
    "project.lis.goal.2":
      "To cyfrowe narzędzie do wdrażania kultury ciągłego doskonalenia i całkowitej przejrzystości procesów.",
    "project.lis.goal.3": "System:",
    "project.lis.goal.4": "Identyfikuje i eliminuje straty operacyjne (Muda, Mura, Muri)",
    "project.lis.goal.5": "Tworzy strumień wartości (Value Stream) w czasie rzeczywistym",
    "project.lis.goal.6": "Wzmacnia zaangażowanie personelu w procesy doskonalenia",
    "project.lis.goal.7": "Zapewnia kontrolowaną transformację firmy",
    "project.lis.results.title": "📈 Wyniki",
    "project.lis.results.1": "Redukcja kosztów o 10-30%",
    "project.lis.results.2": "Zwiększenie wydajności pracy",
    "project.lis.results.3": "Poprawa jakości produktów i dotrzymywania terminów",
    "project.lis.results.4": "Wzrost zaangażowania i odpowiedzialności pracowników",
    "project.lis.results.5": "Przyspieszenie transformacji cyfrowej i kultury Lean",
    "project.lis.kpi.title": "📊 KPI i efektywność",
    "project.lis.kpi.1": "Wskaźnik\tPrzed wdrożeniem\tPo wdrożeniu",
    "project.lis.kpi.2": "Lead Time\t> 20 dni\t< 12 dni",
    "project.lis.kpi.3": "Udział MUDA w procesach\t35-45%\t< 15%",
    "project.lis.kpi.4": "Zaangażowanie personelu\t20%\t> 60%",
    "project.lis.kpi.5": "Liczba ulepszeń miesięcznie\t2-5 pomysłów\t20-50 pomysłów",
    "project.lis.kpi.6": "OEE (efektywność)\t< 60%\t> 80%",
    "project.lis.principles.title": "🛠 Zasady wdrażania",
    "project.lis.principles.1": "Od dołu do góry — inicjatywa od pracowników, wsparcie z góry",
    "project.lis.principles.2": "Małe kroki z dużym efektem — strategia Kaizen",
    "project.lis.principles.3": "Technologia jako wsparcie, a nie zastępstwo myślenia",
    "project.lis.principles.4": "Wartość dla klienta — główne kryterium zmian",
    "project.lis.start.title": "🚀 Jak realizujemy projekt?",
    "project.lis.start.1": "Audyt Lean: analiza łańcuchów wartości i strat",
    "project.lis.start.2": "Dostosowanie LIS do modelu biznesowego i specyfiki branży",
    "project.lis.start.3": "Szkolenie personelu z zasad Lean i narzędzi cyfrowych",
    "project.lis.start.4": "Ciągłe wsparcie i rozwój ulepszeń",
    "project.lis.start.5": "Lean to nie projekt. To nowe DNA Twojej firmy.",
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
    "services.features": "Funktionen",
    "services.benefits": "Vorteile",

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

    // POAS Project Translations
    "project.poas.title": "PROZESSOPTIMIERUNGS- UND AUTOMATISIERUNGSSYSTEM",
    "project.poas.subtitle":
      "Intelligentes System zur Optimierung, Digitalisierung und Automatisierung von Geschäftsprozessen",
    "project.poas.description":
      "Automatisieren bedeutet nicht, Chaos zu beschleunigen. Erst Optimierung, dann Digitalisierung.",
    "project.poas.for.title": "💼 Für wen?",
    "project.poas.for.1": "Mittlere und große Unternehmen mit veralteten oder duplizierten Prozessen",
    "project.poas.for.2": "Unternehmen in der digitalen Transformation",
    "project.poas.for.3":
      "Organisationen mit hohem Anteil an manueller Arbeit, Excel-Reporting und nicht integrierten Systemen",
    "project.poas.for.4": "Manager, die von Workarounds im Management müde sind",
    "project.poas.solution.title": "🎯 Was löst das System?",
    "project.poas.solution.1":
      "Process Optimization & Automation System (POAS) ist ein digitales Ökosystem, das Ihnen ermöglicht:",
    "project.poas.solution.2": "Ineffizienzen in Prozessen zu identifizieren und zu beseitigen",
    "project.poas.solution.3": "Standardisierung und Regulierung von Schlüsseloperationen",
    "project.poas.solution.4": "Automatisierung von Routineaufgaben und Erhöhung der Management-Transparenz",
    "project.poas.solution.5": "Erstellung eines messbaren Prozessmodells basierend auf KPIs und Daten",
    "project.poas.solution.6":
      "Unser Ziel ist nicht nur die Automatisierung, sondern Kostenreduzierung und verbesserte Managementqualität.",
    "project.poas.results.title": "📈 Ergebnisse",
    "project.poas.results.1": "Reduzierung der Zeitkosten um 20-60%",
    "project.poas.results.2": "Beseitigung von Routineoperationen ohne Kontrollverlust",
    "project.poas.results.3": "Steigerung der Qualität und Geschwindigkeit interner Dienste",
    "project.poas.results.4": "Erhöhte Kunden- und Mitarbeiterzufriedenheit",
    "project.poas.results.5": "Bereitschaft für Skalierung und digitale Reife",
    "project.poas.kpi.title": "📊 KPIs und Metriken",
    "project.poas.kpi.1": "Richtung\tMetrik",
    "project.poas.kpi.2": "Aufgabenausführungszeit\t-30-60% für Schlüsselprozesse",
    "project.poas.kpi.3": "Automatisierungsgrad\tWachstum auf 70-85% für Routineoperationen",
    "project.poas.kpi.4": "Fehler und Duplikate\tReduzierung manueller Fehler auf <5%",
    "project.poas.kpi.5": "Zufriedenheit\tCSI/ESAT-Wachstum um 15-30%",
    "project.poas.kpi.6": "Finanzieller Effekt\tEinsparungen bei Arbeit und Kosten in Bezug auf ₽",
    "project.poas.principles.title": "🛠 Ansatzprinzipien",
    "project.poas.principles.1": "Optimierung → dann Automatisierung (nicht umgekehrt)",
    "project.poas.principles.2": "Prozesstransparenz auf allen Ebenen",
    "project.poas.principles.3": "Minimaler Code — maximaler Effekt (Low-Code / No-Code Lösungen)",
    "project.poas.principles.4": "Beteiligung des Kundenteams in jeder Phase",
    "project.poas.start.title": "🚀 Wie wird das Projekt gestartet?",
    "project.poas.start.1": "Diagnostik der aktuellen Prozessarchitektur",
    "project.poas.start.2": "Identifizierung kritischer Zonen und Berechnung der Effekte",
    "project.poas.start.3": "Schnelles digitales Setup (3-6 Wochen)",
    "project.poas.start.4": "Anbindung von RPA, Integrationen, KI",
    "project.poas.start.5": "Schulung, Support und Skalierung",
    "project.poas.start.6": "Digitale Transformation beginnt mit dem Prozess, nicht mit der Software.",

    // LIS Project Translations
    "project.lis.title": "LEAN INTELLIGENCE SYSTEM",
    "project.lis.subtitle": "Intelligentes System zur Prozessoptimierung und Abfallbeseitigung nach Lean-Methodik",
    "project.lis.description": "Lean geht nicht ums Kürzen. Es geht darum, Wert ohne Verschwendung zu schaffen.",
    "project.lis.for.title": "💼 Für wen?",
    "project.lis.for.1": "Produktionsunternehmen, die ihre Effizienz steigern wollen",
    "project.lis.for.2": "Holdings mit dezentralisierten Geschäftseinheiten",
    "project.lis.for.3": "Unternehmen mit veralteten Geschäftsprozessen und manueller Verwaltung",
    "project.lis.for.4": "Strukturen, die Kaizen, TPM, TQM, Agile und ESG-Ansätze implementieren",
    "project.lis.goal.title": "🎯 Systemziel",
    "project.lis.goal.1": "Lean Intelligence System (LIS) ist nicht nur schlanke Produktion.",
    "project.lis.goal.2":
      "Es ist ein digitales Werkzeug zur Implementierung einer Kultur der kontinuierlichen Verbesserung und totalen Prozesstransparenz.",
    "project.lis.goal.3": "Das System:",
    "project.lis.goal.4": "Identifiziert und beseitigt betriebliche Verluste (Muda, Mura, Muri)",
    "project.lis.goal.5": "Bildet einen Wertstrom (Value Stream) in Echtzeit",
    "project.lis.goal.6": "Stärkt die Mitarbeiterbeteiligung an Verbesserungsprozessen",
    "project.lis.goal.7": "Gewährleistet eine gesteuerte Unternehmenstransformation",
    "project.lis.results.title": "📈 Ergebnisse",
    "project.lis.results.1": "Kostenreduzierung um 10-30%",
    "project.lis.results.2": "Erhöhte Arbeitsproduktivität",
    "project.lis.results.3": "Verbesserte Produktqualität und Termintreue",
    "project.lis.results.4": "Wachstum bei Mitarbeiterengagement und Verantwortung",
    "project.lis.results.5": "Beschleunigung der digitalen Transformation und Lean-Kultur",
    "project.lis.kpi.title": "📊 KPIs und Wirksamkeit",
    "project.lis.kpi.1": "Indikator\tVor der Implementierung\tNach der Implementierung",
    "project.lis.kpi.2": "Lead Time\t> 20 Tage\t< 12 Tage",
    "project.lis.kpi.3": "MUDA-Anteil in Prozessen\t35-45%\t< 15%",
    "project.lis.kpi.4": "Mitarbeiterbeteiligung\t20%\t> 60%",
    "project.lis.kpi.5": "Anzahl der Verbesserungen pro Monat\t2-5 Ideen\t20-50 Ideen",
    "project.lis.kpi.6": "OEE (Effizienz)\t< 60%\t> 80%",
    "project.lis.principles.title": "🛠 Implementierungsprinzipien",
    "project.lis.principles.1": "Bottom-up — Initiative von Mitarbeitern, Unterstützung von oben",
    "project.lis.principles.2": "Kleine Schritte mit großer Wirkung — Kaizen-Strategie",
    "project.lis.principles.3": "Technologie als Unterstützung, nicht als Ersatz für Denken",
    "project.lis.principles.4": "Wert für den Kunden — das Hauptkriterium für Änderungen",
    "project.lis.start.title": "🚀 Wie setzen wir das Projekt um?",
    "project.lis.start.1": "Lean-Audit: Analyse von Wertschöpfungsketten und Verlusten",
    "project.lis.start.2": "Anpassung von LIS an Geschäftsmodell und Branchenspezifika",
    "project.lis.start.3": "Schulung der Mitarbeiter in Lean-Prinzipien und digitalen Werkzeugen",
    "project.lis.start.4": "Kontinuierliche Unterstützung und Entwicklung von Verbesserungen",
    "project.lis.start.5": "Lean ist kein Projekt. Es ist die neue DNA Ihres Unternehmens.",
  },
}
