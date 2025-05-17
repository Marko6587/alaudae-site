"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const { t, language } = useLanguage()

  const getServiceData = () => {
    switch (language) {
      case "uk":
        return {
          title: "Наші послуги",
          description: "Ми пропонуємо широкий спектр послуг для оптимізації вашого бізнесу та забезпечення безпеки.",
          services: [
            {
              id: "loss-prevention",
              title: "Loss Prevention",
              description: "Запобігання втратам через комплексний аналіз та впровадження превентивних заходів.",
              features: [
                "Аналіз вразливостей та загроз",
                "Розробка стратегій запобігання втратам",
                "Навчання персоналу",
                "Моніторинг та аудит",
              ],
              benefits: [
                "Зниження фінансових втрат",
                "Підвищення безпеки активів",
                "Оптимізація бізнес-процесів",
                "Покращення репутації компанії",
              ],
            },
            {
              id: "data-security",
              title: "Data Security",
              description:
                "Захист конфіденційних даних та інформаційних активів від несанкціонованого доступу та витоків.",
              features: [
                "Оцінка безпеки даних",
                "Впровадження систем захисту",
                "Шифрування даних",
                "Управління доступом",
              ],
              benefits: [
                "Захист конфіденційної інформації",
                "Відповідність нормативним вимогам",
                "Запобігання витокам даних",
                "Підвищення довіри клієнтів",
              ],
            },
            {
              id: "compliance",
              title: "Compliance",
              description: "Забезпечення відповідності бізнес-процесів та систем нормативним вимогам та стандартам.",
              features: [
                "Аудит відповідності",
                "Розробка політик та процедур",
                "Впровадження систем контролю",
                "Регулярний моніторинг",
              ],
              benefits: [
                "Уникнення штрафів та санкцій",
                "Підвищення довіри інвесторів",
                "Оптимізація бізнес-процесів",
                "Зниження юридичних ризиків",
              ],
            },
            {
              id: "risc-management",
              title: "Risc Management",
              description: "Ідентифікація, оцінка та управління ризиками для мінімізації їх впливу на бізнес.",
              features: [
                "Ідентифікація ризиків",
                "Оцінка ймовірності та впливу",
                "Розробка стратегій управління ризиками",
                "Моніторинг та звітність",
              ],
              benefits: [
                "Зниження невизначеності",
                "Покращення прийняття рішень",
                "Оптимізація ресурсів",
                "Підвищення стійкості бізнесу",
              ],
            },
            {
              id: "lean-management",
              title: "Lean Management",
              description: "Оптимізація бізнес-процесів для підвищення ефективності та зниження витрат.",
              features: [
                "Аналіз поточних процесів",
                "Виявлення та усунення втрат",
                "Стандартизація процесів",
                "Постійне вдосконалення",
              ],
              benefits: [
                "Підвищення продуктивності",
                "Зниження операційних витрат",
                "Покращення якості продуктів та послуг",
                "Підвищення задоволеності клієнтів",
              ],
            },
          ],
        }
      case "en":
        return {
          title: "Our Services",
          description: "We offer a wide range of services to optimize your business and ensure security.",
          services: [
            {
              id: "loss-prevention",
              title: "Loss Prevention",
              description: "Prevent losses through comprehensive analysis and implementation of preventive measures.",
              features: [
                "Vulnerability and threat analysis",
                "Loss prevention strategy development",
                "Personnel training",
                "Monitoring and auditing",
              ],
              benefits: [
                "Reduced financial losses",
                "Enhanced asset security",
                "Optimized business processes",
                "Improved company reputation",
              ],
            },
            {
              id: "data-security",
              title: "Data Security",
              description: "Protect confidential data and information assets from unauthorized access and leaks.",
              features: [
                "Data security assessment",
                "Protection systems implementation",
                "Data encryption",
                "Access management",
              ],
              benefits: [
                "Protection of confidential information",
                "Regulatory compliance",
                "Prevention of data leaks",
                "Increased customer trust",
              ],
            },
            {
              id: "compliance",
              title: "Compliance",
              description: "Ensure business processes and systems comply with regulatory requirements and standards.",
              features: [
                "Compliance auditing",
                "Policy and procedure development",
                "Control systems implementation",
                "Regular monitoring",
              ],
              benefits: [
                "Avoidance of fines and sanctions",
                "Increased investor confidence",
                "Optimized business processes",
                "Reduced legal risks",
              ],
            },
            {
              id: "risc-management",
              title: "Risc Management",
              description: "Identify, assess, and manage risks to minimize their impact on business.",
              features: [
                "Risk identification",
                "Probability and impact assessment",
                "Risk management strategy development",
                "Monitoring and reporting",
              ],
              benefits: [
                "Reduced uncertainty",
                "Improved decision making",
                "Resource optimization",
                "Enhanced business resilience",
              ],
            },
            {
              id: "lean-management",
              title: "Lean Management",
              description: "Optimize business processes to increase efficiency and reduce costs.",
              features: [
                "Current process analysis",
                "Waste identification and elimination",
                "Process standardization",
                "Continuous improvement",
              ],
              benefits: [
                "Increased productivity",
                "Reduced operational costs",
                "Improved product and service quality",
                "Enhanced customer satisfaction",
              ],
            },
          ],
        }
      case "pl":
        return {
          title: "Nasze Usługi",
          description:
            "Oferujemy szeroki zakres usług w celu optymalizacji Twojego biznesu i zapewnienia bezpieczeństwa.",
          services: [
            {
              id: "loss-prevention",
              title: "Loss Prevention",
              description: "Zapobieganie stratom poprzez kompleksową analizę i wdrażanie środków zapobiegawczych.",
              features: [
                "Analiza podatności i zagrożeń",
                "Opracowanie strategii zapobiegania stratom",
                "Szkolenie personelu",
                "Monitorowanie i audyt",
              ],
              benefits: [
                "Zmniejszone straty finansowe",
                "Zwiększone bezpieczeństwo aktywów",
                "Zoptymalizowane procesy biznesowe",
                "Lepsza reputacja firmy",
              ],
            },
            {
              id: "data-security",
              title: "Data Security",
              description:
                "Ochrona poufnych danych i zasobów informacyjnych przed nieautoryzowanym dostępem i wyciekami.",
              features: [
                "Ocena bezpieczeństwa danych",
                "Wdrażanie systemów ochrony",
                "Szyfrowanie danych",
                "Zarządzanie dostępem",
              ],
              benefits: [
                "Ochrona informacji poufnych",
                "Zgodność z przepisami",
                "Zapobieganie wyciekom danych",
                "Zwiększone zaufanie klientów",
              ],
            },
            {
              id: "compliance",
              title: "Compliance",
              description:
                "Zapewnienie zgodności procesów biznesowych i systemów z wymogami regulacyjnymi i standardami.",
              features: [
                "Audyt zgodności",
                "Opracowanie polityk i procedur",
                "Wdrażanie systemów kontroli",
                "Regularne monitorowanie",
              ],
              benefits: [
                "Unikanie kar i sankcji",
                "Zwiększone zaufanie inwestorów",
                "Zoptymalizowane procesy biznesowe",
                "Zmniejszone ryzyko prawne",
              ],
            },
            {
              id: "risc-management",
              title: "Risc Management",
              description: "Identyfikacja, ocena i zarządzanie ryzykiem w celu zminimalizowania jego wpływu na biznes.",
              features: [
                "Identyfikacja ryzyka",
                "Ocena prawdopodobieństwa i wpływu",
                "Opracowanie strategii zarządzania ryzykiem",
                "Monitorowanie i raportowanie",
              ],
              benefits: [
                "Zmniejszona niepewność",
                "Ulepszone podejmowanie decyzji",
                "Optymalizacja zasobów",
                "Zwiększona odporność biznesu",
              ],
            },
            {
              id: "lean-management",
              title: "Lean Management",
              description: "Optymalizacja procesów biznesowych w celu zwiększenia wydajności i redukcji kosztów.",
              features: [
                "Analiza bieżących procesów",
                "Identyfikacja i eliminacja marnotrawstwa",
                "Standaryzacja procesów",
                "Ciągłe doskonalenie",
              ],
              benefits: [
                "Zwiększona produktywność",
                "Zmniejszone koszty operacyjne",
                "Ulepszona jakość produktów i usług",
                "Zwiększona satysfakcja klientów",
              ],
            },
          ],
        }
      case "de":
        return {
          title: "Unsere Dienstleistungen",
          description:
            "Wir bieten eine breite Palette von Dienstleistungen zur Optimierung Ihres Unternehmens und zur Gewährleistung der Sicherheit.",
          services: [
            {
              id: "loss-prevention",
              title: "Loss Prevention",
              description:
                "Verhinderung von Verlusten durch umfassende Analyse und Implementierung präventiver Maßnahmen.",
              features: [
                "Analyse von Schwachstellen und Bedrohungen",
                "Entwicklung von Strategien zur Verlustvermeidung",
                "Personalschulung",
                "Überwachung und Prüfung",
              ],
              benefits: [
                "Reduzierte finanzielle Verluste",
                "Verbesserte Sicherheit von Vermögenswerten",
                "Optimierte Geschäftsprozesse",
                "Verbesserter Unternehmensruf",
              ],
            },
            {
              id: "data-security",
              title: "Data Security",
              description: "Schutz vertraulicher Daten und Informationsbestände vor unbefugtem Zugriff und Lecks.",
              features: [
                "Bewertung der Datensicherheit",
                "Implementierung von Schutzsystemen",
                "Datenverschlüsselung",
                "Zugriffsverwaltung",
              ],
              benefits: [
                "Schutz vertraulicher Informationen",
                "Einhaltung gesetzlicher Vorschriften",
                "Verhinderung von Datenlecks",
                "Erhöhtes Kundenvertrauen",
              ],
            },
            {
              id: "compliance",
              title: "Compliance",
              description:
                "Sicherstellung der Einhaltung von Geschäftsprozessen und Systemen mit regulatorischen Anforderungen und Standards.",
              features: [
                "Compliance-Prüfung",
                "Entwicklung von Richtlinien und Verfahren",
                "Implementierung von Kontrollsystemen",
                "Regelmäßige Überwachung",
              ],
              benefits: [
                "Vermeidung von Bußgeldern und Sanktionen",
                "Erhöhtes Anlegervertrauen",
                "Optimierte Geschäftsprozesse",
                "Reduzierte rechtliche Risiken",
              ],
            },
            {
              id: "risc-management",
              title: "Risc Management",
              description:
                "Identifizierung, Bewertung und Management von Risiken zur Minimierung ihrer Auswirkungen auf das Geschäft.",
              features: [
                "Risikoidentifizierung",
                "Bewertung von Wahrscheinlichkeit und Auswirkung",
                "Entwicklung von Risikomanagementstrategien",
                "Überwachung und Berichterstattung",
              ],
              benefits: [
                "Reduzierte Unsicherheit",
                "Verbesserte Entscheidungsfindung",
                "Ressourcenoptimierung",
                "Erhöhte Geschäftsresilienz",
              ],
            },
            {
              id: "lean-management",
              title: "Lean Management",
              description: "Optimierung von Geschäftsprozessen zur Steigerung der Effizienz und Senkung der Kosten.",
              features: [
                "Analyse aktueller Prozesse",
                "Identifizierung und Beseitigung von Verschwendung",
                "Prozessstandardisierung",
                "Kontinuierliche Verbesserung",
              ],
              benefits: [
                "Erhöhte Produktivität",
                "Reduzierte Betriebskosten",
                "Verbesserte Produkt- und Servicequalität",
                "Erhöhte Kundenzufriedenheit",
              ],
            },
          ],
        }
      default:
        return {
          title: "Наши услуги",
          description: "Мы предлагаем широкий спектр услуг для оптимизации вашего бизнеса и обеспечения безопасности.",
          services: [
            {
              id: "loss-prevention",
              title: "Loss Prevention",
              description: "Предотвращение потерь через комплексный анализ и внедрение превентивных мер.",
              features: [
                "Анализ уязвимостей и угроз",
                "Разработка стратегий предотвращения потерь",
                "Обучение персонала",
                "Мониторинг и аудит",
              ],
              benefits: [
                "Снижение финансовых потерь",
                "Повышение безопасности активов",
                "Оптимизация бизнес-процессов",
                "Улучшение репутации компании",
              ],
            },
            {
              id: "data-security",
              title: "Data Security",
              description:
                "Защита конфиденциальных данных и информационных активов от несанкционированного доступа и утечек.",
              features: [
                "Оценка безопасности данных",
                "Внедрение систем защиты",
                "Шифрование данных",
                "Управление доступом",
              ],
              benefits: [
                "Защита конфиденциальной информации",
                "Соответствие нормативным требованиям",
                "Предотвращение утечек данных",
                "Повышение доверия клиентов",
              ],
            },
            {
              id: "compliance",
              title: "Compliance",
              description: "Обеспечение соответствия бизнес-процессов и систем нормативным требованиям и стандартам.",
              features: [
                "Аудит соответствия",
                "Разработка политик и процедур",
                "Внедрение систем контроля",
                "Регулярный мониторинг",
              ],
              benefits: [
                "Избежание штрафов и санкций",
                "Повышение доверия инвесторов",
                "Оптимизация бизнес-процессов",
                "Снижение юридических рисков",
              ],
            },
            {
              id: "risc-management",
              title: "Risc Management",
              description: "Идентификация, оценка и управление рисками для минимизации их влияния на бизнес.",
              features: [
                "Идентификация рисков",
                "Оценка вероятности и влияния",
                "Разработка стратегий управления рисками",
                "Мониторинг и отчетность",
              ],
              benefits: [
                "Снижение неопределенности",
                "Улучшение принятия решений",
                "Оптимизация ресурсов",
                "Повышение устойчивости бизнеса",
              ],
            },
            {
              id: "lean-management",
              title: "Lean Management",
              description: "Оптимизация бизнес-процессов для повышения эффективности и снижения затрат.",
              features: [
                "Анализ текущих процессов",
                "Выявление и устранение потерь",
                "Стандартизация процессов",
                "Постоянное совершенствование",
              ],
              benefits: [
                "Повышение производительности",
                "Снижение операционных затрат",
                "Улучшение качества продуктов и услуг",
                "Повышение удовлетворенности клиентов",
              ],
            },
          ],
        }
    }
  }

  const serviceData = getServiceData()

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl font-light mb-4">{serviceData.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">{serviceData.description}</p>
        </motion.div>

        <div className="space-y-24">
          {serviceData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                <h2 className="text-2xl font-light mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 font-light">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 font-light flex items-start">
                        <span className="text-gray-300 mr-2">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-600 font-light flex items-start">
                        <span className="text-gray-300 mr-2">—</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`bg-gray-50 h-64 flex items-center justify-center ${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}
              >
                <h3 className="text-5xl font-extralight text-gray-200">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link href="/contact">
            <button className="group bg-white hover:bg-gray-50 text-black border border-gray-200 font-light py-3 px-8 transition duration-300 flex items-center mx-auto">
              {language === "uk"
                ? "Зв'язатися з нами"
                : language === "en"
                  ? "Contact Us"
                  : language === "pl"
                    ? "Skontaktuj się z nami"
                    : language === "de"
                      ? "Kontaktiere uns"
                      : "Связаться с нами"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
