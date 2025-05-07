"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const { t, language } = useLanguage()

  const getHomeContent = () => {
    switch (language) {
      case "uk":
        return {
          subtitle: "Це основа нашої корпоративної культури та підходу до цифрової безпеки",
          description:
            "Ми допомагаємо компаніям оптимізувати процеси, підвищити безпеку та досягти стратегічних цілей за допомогою інтелектуальних рішень.",
          cta: "Дізнатися більше",
          services: {
            title: "Наші послуги",
            items: [
              {
                title: "Loss Prevention",
                description: "Запобігання втратам через комплексний аналіз та впровадження превентивних заходів",
              },
              {
                title: "Data Security",
                description: "Захист конфіденційних даних та інформаційних активів від несанкціонованого доступу",
              },
              {
                title: "Compliance",
                description: "Забезпечення відповідності бізнес-процесів та систем нормативним вимогам",
              },
              {
                title: "Risc Menagment",
                description: "Ідентифікація, оцінка та управління ризиками для мінімізації їх впливу на бізнес",
              },
              {
                title: "Lean Menagment",
                description: "Оптимізація бізнес-процесів для підвищення ефективності та зниження витрат",
              },
            ],
          },
          contact: {
            title: "Готові захистити свій бізнес?",
            description: "Зв'яжіться з нами сьогодні, щоб дізнатися, як ми можемо допомогти вам захистити ваш бізнес.",
            button: "Зв'язатися з нами",
          },
        }
      case "en":
        return {
          subtitle: "This is the foundation of our corporate culture and approach to digital security",
          description:
            "We help companies optimize processes, enhance security, and achieve strategic goals through intelligent solutions.",
          cta: "Learn more",
          services: {
            title: "Our Services",
            items: [
              {
                title: "Loss Prevention",
                description: "Prevent losses through comprehensive analysis and implementation of preventive measures",
              },
              {
                title: "Data Security",
                description: "Protect confidential data and information assets from unauthorized access",
              },
              {
                title: "Compliance",
                description: "Ensure business processes and systems comply with regulatory requirements",
              },
              {
                title: "Risc Menagment",
                description: "Identify, assess, and manage risks to minimize their impact on business",
              },
              {
                title: "Lean Menagment",
                description: "Optimize business processes to increase efficiency and reduce costs",
              },
            ],
          },
          contact: {
            title: "Ready to secure your business?",
            description: "Contact us today to learn how we can help you protect your business.",
            button: "Contact Us",
          },
        }
      case "pl":
        return {
          subtitle: "To jest podstawa naszej kultury korporacyjnej i podejścia do bezpieczeństwa cyfrowego",
          description:
            "Pomagamy firmom optymalizować procesy, zwiększać bezpieczeństwo i osiągać cele strategiczne dzięki inteligentnym rozwiązaniom.",
          cta: "Dowiedz się więcej",
          services: {
            title: "Nasze usługi",
            items: [
              {
                title: "Loss Prevention",
                description: "Zapobieganie stratom poprzez kompleksową analizę i wdrażanie środków zapobiegawczych",
              },
              {
                title: "Data Security",
                description: "Ochrona poufnych danych i zasobów informacyjnych przed nieautoryzowanym dostępem",
              },
              {
                title: "Compliance",
                description: "Zapewnienie zgodności procesów biznesowych i systemów z wymogami regulacyjnymi",
              },
              {
                title: "Risc Menagment",
                description:
                  "Identyfikacja, ocena i zarządzanie ryzykiem w celu zminimalizowania jego wpływu na biznes",
              },
              {
                title: "Lean Menagment",
                description: "Optymalizacja procesów biznesowych w celu zwiększenia wydajności i redukcji kosztów",
              },
            ],
          },
          contact: {
            title: "Gotowy zabezpieczyć swój biznes?",
            description: "Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy pomóc Ci chronić Twój biznes.",
            button: "Skontaktuj się z nami",
          },
        }
      case "de":
        return {
          subtitle: "Dies ist die Grundlage unserer Unternehmenskultur und unseres Ansatzes für digitale Sicherheit",
          description:
            "Wir helfen Unternehmen, Prozesse zu optimieren, die Sicherheit zu erhöhen und strategische Ziele durch intelligente Lösungen zu erreichen.",
          cta: "Mehr erfahren",
          services: {
            title: "Unsere Dienstleistungen",
            items: [
              {
                title: "Loss Prevention",
                description:
                  "Verhinderung von Verlusten durch umfassende Analyse und Implementierung präventiver Maßnahmen",
              },
              {
                title: "Data Security",
                description: "Schutz vertraulicher Daten und Informationsbestände vor unbefugtem Zugriff",
              },
              {
                title: "Compliance",
                description:
                  "Sicherstellung der Einhaltung von Geschäftsprozessen und Systemen mit regulatorischen Anforderungen",
              },
              {
                title: "Risc Menagment",
                description:
                  "Identifizierung, Bewertung und Management von Risiken zur Minimierung ihrer Auswirkungen auf das Geschäft",
              },
              {
                title: "Lean Menagment",
                description: "Optimierung von Geschäftsprozessen zur Steigerung der Effizienz und Senkung der Kosten",
              },
            ],
          },
          contact: {
            title: "Bereit, Ihr Unternehmen zu sichern?",
            description:
              "Kontaktieren Sie uns noch heute, um zu erfahren, wie wir Ihnen helfen können, Ihr Unternehmen zu schützen.",
            button: "Kontaktiere uns",
          },
        }
      default:
        return {
          subtitle: "Это основа нашей корпоративной культуры и подхода к цифровой безопасности",
          description:
            "Мы помогаем компаниям оптимизировать процессы, повысить безопасность и достичь стратегических целей с помощью интеллектуальных решений.",
          cta: "Узнать больше",
          services: {
            title: "Наши услуги",
            items: [
              {
                title: "Loss Prevention",
                description: "Предотвращение потерь через комплексный анализ и внедрение превентивных мер",
              },
              {
                title: "Data Security",
                description: "Защита конфиденциальных данных и информационных активов от несанкционированного доступа",
              },
              {
                title: "Compliance",
                description: "Обеспечение соответствия бизнес-процессов и систем нормативным требованиям",
              },
              {
                title: "Risc Menagment",
                description: "Идентификация, оценка и управление рисками для минимизации их влияния на бизнес",
              },
              {
                title: "Lean Menagment",
                description: "Оптимизация бизнес-процессов для повышения эффективности и снижения затрат",
              },
            ],
          },
          contact: {
            title: "Готовы защитить свой бизнес?",
            description: "Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вам защитить ваш бизнес.",
            button: "Связаться с нами",
          },
        }
    }
  }

  const content = getHomeContent()

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Logo above the heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-16"
            >
              <Image src="/logo.png" alt="Alaudae Secure Consulting" width={120} height={120} className="h-auto" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
              Investing in security today is preventing losses tomorrow
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-light">{content.subtitle}</p>
            <p className="text-base text-gray-500 mb-12 mx-auto max-w-2xl font-light">{content.description}</p>
            <Link href="/services">
              <button className="group bg-white hover:bg-gray-50 text-black border border-gray-200 font-light py-3 px-8 transition duration-300 flex items-center mx-auto">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4">{content.services.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {content.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-6">{content.contact.title}</h2>
            <p className="text-base text-gray-600 mb-10 font-light">{content.contact.description}</p>
            <Link href="/contact">
              <button className="group bg-black hover:bg-gray-900 text-white font-light py-3 px-8 transition duration-300 flex items-center mx-auto">
                {content.contact.button}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
