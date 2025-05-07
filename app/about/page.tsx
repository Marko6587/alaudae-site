"use client"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"

export default function About() {
  const { language } = useLanguage()

  const getAboutContent = () => {
    switch (language) {
      case "uk":
        return {
          title: "Про нас",
          description:
            "Ми команда експертів з бізнес-інтелекту та безпеки, яка допомагає компаніям оптимізувати процеси та захистити свої активи.",
          mission: {
            title: "Наша місія",
            content:
              "Наша місія — надавати інноваційні та ефективні рішення, які допомагають нашим клієнтам досягати стратегічних цілей, підвищувати ефективність та забезпечувати безпеку бізнесу.",
          },
          values: {
            title: "Наші цінності",
            items: [
              {
                title: "Інновації",
                description: "Ми постійно шукаємо нові підходи та технології для вирішення складних бізнес-задач.",
              },
              {
                title: "Якість",
                description: "Ми прагнемо до найвищої якості у всьому, що робимо, від розробки до впровадження.",
              },
              {
                title: "Партнерство",
                description:
                  "Ми будуємо довгострокові партнерські відносини з нашими клієнтами, засновані на довірі та взаємній вигоді.",
              },
              {
                title: "Результат",
                description: "Ми орієнтовані на досягнення вимірюваних результатів, які приносять реальну цінність.",
              },
            ],
          },
          team: {
            title: "Наша команда",
            content:
              "Наша команда складається з висококваліфікованих фахівців з різних галузей: бізнес-аналітики, експерти з безпеки, розробники програмного забезпечення та консультанти з оптимізації процесів. Ми об'єднуємо наші знання та досвід для створення комплексних рішень, які відповідають унікальним потребам кожного клієнта.",
          },
        }
      case "en":
        return {
          title: "About Us",
          description:
            "We are a team of business intelligence and security experts helping companies optimize processes and protect their assets.",
          mission: {
            title: "Our Mission",
            content:
              "Our mission is to provide innovative and effective solutions that help our clients achieve strategic goals, increase efficiency, and ensure business security.",
          },
          values: {
            title: "Our Values",
            items: [
              {
                title: "Innovation",
                description: "We constantly seek new approaches and technologies to solve complex business challenges.",
              },
              {
                title: "Quality",
                description:
                  "We strive for the highest quality in everything we do, from development to implementation.",
              },
              {
                title: "Partnership",
                description: "We build long-term partnerships with our clients based on trust and mutual benefit.",
              },
              {
                title: "Results",
                description: "We are focused on achieving measurable results that bring real value.",
              },
            ],
          },
          team: {
            title: "Our Team",
            content:
              "Our team consists of highly qualified specialists from various fields: business analysts, security experts, software developers, and process optimization consultants. We combine our knowledge and experience to create comprehensive solutions that meet the unique needs of each client.",
          },
        }
      case "pl":
        return {
          title: "O nas",
          description:
            "Jesteśmy zespołem ekspertów ds. inteligencji biznesowej i bezpieczeństwa, pomagającym firmom optymalizować procesy i chronić ich aktywa.",
          mission: {
            title: "Nasza misja",
            content:
              "Naszą misją jest dostarczanie innowacyjnych i skutecznych rozwiązań, które pomagają naszym klientom osiągać cele strategiczne, zwiększać efektywność i zapewniać bezpieczeństwo biznesu.",
          },
          values: {
            title: "Nasze wartości",
            items: [
              {
                title: "Innowacja",
                description:
                  "Nieustannie poszukujemy nowych podejść i technologii do rozwiązywania złożonych wyzwań biznesowych.",
              },
              {
                title: "Jakość",
                description: "Dążymy do najwyższej jakości we wszystkim, co robimy, od rozwoju po wdrożenie.",
              },
              {
                title: "Partnerstwo",
                description:
                  "Budujemy długoterminowe partnerstwa z naszymi klientami oparte na zaufaniu i wzajemnych korzyściach.",
              },
              {
                title: "Wyniki",
                description: "Koncentrujemy się na osiąganiu wymiernych wyników, które przynoszą realną wartość.",
              },
            ],
          },
          team: {
            title: "Nasz zespół",
            content:
              "Nasz zespół składa się z wysoko wykwalifikowanych specjalistów z różnych dziedzin: analityków biznesowych, ekspertów ds. bezpieczeństwa, programistów i konsultantów ds. optymalizacji procesów. Łączymy naszą wiedzę i doświadczenie, aby tworzyć kompleksowe rozwiązania, które spełniają unikalne potrzeby każdego klienta.",
          },
        }
      case "de":
        return {
          title: "Über uns",
          description:
            "Wir sind ein Team von Business Intelligence- und Sicherheitsexperten, die Unternehmen bei der Optimierung von Prozessen und dem Schutz ihrer Vermögenswerte unterstützen.",
          mission: {
            title: "Unsere Mission",
            content:
              "Unsere Mission ist es, innovative und effektive Lösungen bereitzustellen, die unseren Kunden helfen, strategische Ziele zu erreichen, die Effizienz zu steigern und die Unternehmenssicherheit zu gewährleisten.",
          },
          values: {
            title: "Unsere Werte",
            items: [
              {
                title: "Innovation",
                description:
                  "Wir suchen ständig nach neuen Ansätzen und Technologien, um komplexe Geschäftsherausforderungen zu lösen.",
              },
              {
                title: "Qualität",
                description:
                  "Wir streben in allem, was wir tun, von der Entwicklung bis zur Implementierung, nach höchster Qualität.",
              },
              {
                title: "Partnerschaft",
                description:
                  "Wir bauen langfristige Partnerschaften mit unseren Kunden auf, die auf Vertrauen und gegenseitigem Nutzen basieren.",
              },
              {
                title: "Ergebnisse",
                description:
                  "Wir konzentrieren uns auf die Erzielung messbarer Ergebnisse, die einen echten Mehrwert bringen.",
              },
            ],
          },
          team: {
            title: "Unser Team",
            content:
              "Unser Team besteht aus hochqualifizierten Spezialisten aus verschiedenen Bereichen: Business-Analysten, Sicherheitsexperten, Softwareentwickler und Prozessoptimierungsberater. Wir kombinieren unser Wissen und unsere Erfahrung, um umfassende Lösungen zu schaffen, die den einzigartigen Bedürfnissen jedes Kunden gerecht werden.",
          },
        }
      default:
        return {
          title: "О нас",
          description:
            "Мы команда экспертов по бизнес-интеллекту и безопасности, которая помогает компаниям оптимизировать процессы и защитить свои активы.",
          mission: {
            title: "Наша миссия",
            content:
              "Наша миссия — предоставлять инновационные и эффективные решения, которые помогают нашим клиентам достигать стратегических целей, повышать эффективность и обеспечивать безопасность бизнеса.",
          },
          values: {
            title: "Наши ценности",
            items: [
              {
                title: "Инновации",
                description: "Мы постоянно ищем новые подходы и технологии для решения сложных бизнес-задач.",
              },
              {
                title: "Качество",
                description: "Мы стремимся к высочайшему качеству во всем, что делаем, от разработки до внедрения.",
              },
              {
                title: "Партнерство",
                description:
                  "Мы строим долгосрочные партнерские отношения с нашими клиентами, основанные на доверии и взаимной выгоде.",
              },
              {
                title: "Результат",
                description:
                  "Мы ориентированы на достижение измеримых результатов, которые приносят реальную ценность.",
              },
            ],
          },
          team: {
            title: "Наша команда",
            content:
              "Наша команда состоит из высококвалифицированных специалистов из различных областей: бизнес-аналитики, эксперты по безопасности, разработчики программного обеспечения и консультанты по оптимизации процессов. Мы объединяем наши знания и опыт для создания комплексных решений, которые соответствуют уникальным потребностям каждого клиента.",
          },
        }
    }
  }

  const content = getAboutContent()

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl font-light mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">{content.description}</p>
        </motion.div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-light mb-6">{content.mission.title}</h2>
            <p className="text-gray-600 font-light">{content.mission.content}</p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-light mb-4">{content.values.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {content.values.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-light mb-6 text-center">{content.team.title}</h2>
          <p className="text-gray-600 font-light text-center">{content.team.content}</p>
        </motion.div>
      </div>
    </div>
  )
}
