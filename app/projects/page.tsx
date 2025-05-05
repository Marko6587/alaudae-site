"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  const { t, language } = useLanguage()

  const getProjectSections = (projectId) => {
    switch (projectId) {
      case "lpis":
        return [
          {
            title:
              language === "uk"
                ? "💼 Для кого?"
                : language === "en"
                  ? "💼 Who is it for?"
                  : language === "pl"
                    ? "💼 Dla kogo?"
                    : language === "de"
                      ? "💼 Für wen?"
                      : "💼 Для кого?",
            content:
              language === "uk"
                ? [
                    "Роздрібні та складські мережі з високим оборотом ТМЦ",
                    "Виробничі та дистрибуційні компанії",
                    "Компанії з розподіленою логістикою та філіальною структурою",
                    "Структури з високою часткою внутрішніх (інсайдерських) втрат",
                  ]
                : language === "en"
                  ? [
                      "Retail and warehouse chains with high inventory turnover",
                      "Manufacturing and distribution companies",
                      "Companies with distributed logistics and branch structure",
                      "Structures with a high proportion of internal (insider) losses",
                    ]
                  : language === "pl"
                    ? [
                        "Sieci detaliczne i magazynowe o wysokim obrocie towarów",
                        "Firmy produkcyjne i dystrybucyjne",
                        "Firmy z rozproszoną logistyką i strukturą oddziałów",
                        "Struktury z wysokim udziałem strat wewnętrznych (insider)",
                      ]
                    : language === "de"
                      ? [
                          "Einzelhandels- und Lagernetzwerke mit hohem Warenumschlag",
                          "Produktions- und Vertriebsunternehmen",
                          "Unternehmen mit verteilter Logistik und Filialstruktur",
                          "Strukturen mit hohem Anteil an internen (Insider-) Verlusten",
                        ]
                      : [
                          "Розничные и складские сети с высоким оборотом ТМЦ",
                          "Производственные и дистрибуционные компании",
                          "Компании с распределённой логистикой и филиальной структурой",
                          "Структуры с высокой долей внутренних (инсайдерских) потерь",
                        ],
          },
          {
            title:
              language === "uk"
                ? "📉 Що вирішує система?"
                : language === "en"
                  ? "📉 What does the system solve?"
                  : language === "pl"
                    ? "📉 Co rozwiązuje system?"
                    : language === "de"
                      ? "📉 Was löst das System?"
                      : "📉 Что решает система?",
            content:
              language === "uk"
                ? [
                    "Loss Prevention Intelligence System (LPIS) — це проактивна модель управління збитками. Ми:",
                    "Виявляємо приховані джерела втрат (крадіжки, маніпуляції, збої в процесах)",
                    "Профілюємо співробітників і підрядників з високим ризиком",
                    "Контролюємо зони ризику в логістиці, IT та внутрішньому контролі",
                    "Використовуємо методи аналізу, що застосовуються в спецслужбах і аудитах",
                    "Ми не просто рахуємо втрати. Ми запобігаємо їх появі.",
                  ]
                : language === "en"
                  ? [
                      "Loss Prevention Intelligence System (LPIS) is a proactive model of loss management. We:",
                      "Identify hidden sources of losses (theft, manipulation, process failures)",
                      "Profile high-risk employees and contractors",
                      "Control risk zones in logistics, IT, and internal control",
                      "Use analysis methods employed in intelligence services and audits",
                      "We don't just count losses. We prevent them from occurring.",
                    ]
                  : language === "pl"
                    ? [
                        "Loss Prevention Intelligence System (LPIS) to proaktywny model zarządzania stratami. My:",
                        "Identyfikujemy ukryte źródła strat (kradzieże, manipulacje, awarie procesów)",
                        "Profilujemy pracowników i podwykonawców wysokiego ryzyka",
                        "Kontrolujemy strefy ryzyka w logistyce, IT i kontroli wewnętrznej",
                        "Stosujemy metody analizy używane w służbach specjalnych i audytach",
                        "Nie tylko liczymy straty. Zapobiegamy ich powstawaniu.",
                      ]
                    : language === "de"
                      ? [
                          "Loss Prevention Intelligence System (LPIS) ist ein proaktives Modell des Verlustmanagements. Wir:",
                          "Identifizieren versteckte Verlustquellen (Diebstahl, Manipulation, Prozessausfälle)",
                          "Erstellen Profile von Mitarbeitern und Auftragnehmern mit hohem Risiko",
                          "Kontrollieren Risikozonen in Logistik, IT und interner Kontrolle",
                          "Verwenden Analysemethoden, die in Geheimdiensten und Audits eingesetzt werden",
                          "Wir zählen nicht nur Verluste. Wir verhindern ihr Auftreten.",
                        ]
                      : [
                          "Loss Prevention Intelligence System (LPIS) — это проактивная модель управления убытками. Мы:",
                          "Выявляем скрытые источники потерь (хищения, манипуляции, сбои в процессах)",
                          "Профилируем сотрудников и подрядчиков с высоким риском",
                          "Контролируем зоны риска в логистике, IT и внутреннем контроле",
                          "Используем методы анализа, используемые в спецслужбах и аудитах",
                          "Мы не просто считаем потери. Мы предотвращаем их появление.",
                        ],
          },
          {
            title:
              language === "uk"
                ? "📈 Результати та ефекти"
                : language === "en"
                  ? "📈 Results and effects"
                  : language === "pl"
                    ? "📈 Wyniki i efekty"
                    : language === "de"
                      ? "📈 Ergebnisse und Effekte"
                      : "📈 Результаты и эффекты",
            content:
              language === "uk"
                ? [
                    "Зниження shrinkage (частка втрат) по складах і точках",
                    "Виключення повторюваних схем зловживань",
                    "Зростання надійності персоналу та прозорості операцій",
                    "ROI від впровадження LPIS в 6–15 разів вище вартості проекту",
                  ]
                : language === "en"
                  ? [
                      "Reduction of shrinkage (loss share) in warehouses and points",
                      "Elimination of recurring abuse schemes",
                      "Increased personnel reliability and operational transparency",
                      "ROI from LPIS implementation is 6-15 times higher than the project cost",
                    ]
                  : language === "pl"
                    ? [
                        "Zmniejszenie kurczenia się (udziału strat) w magazynach i punktach",
                        "Eliminacja powtarzających się schematów nadużyć",
                        "Wzrost niezawodności personelu i przejrzystości operacji",
                        "ROI z wdrożenia LPIS jest 6-15 razy wyższy niż koszt projektu",
                      ]
                    : language === "de"
                      ? [
                          "Reduzierung der Schwundrate (Verlustanteil) in Lagern und Verkaufsstellen",
                          "Beseitigung wiederkehrender Missbrauchsschemata",
                          "Erhöhte Personalzuverlässigkeit und Betriebstransparenz",
                          "ROI aus der LPIS-Implementierung ist 6-15 Mal höher als die Projektkosten",
                        ]
                      : [
                          "Снижение shrinkage (доля потерь) по складам и точкам",
                          "Исключение повторяющихся схем злоупотреблений",
                          "Рост надёжности персонала и прозрачности операций",
                          "ROI от внедрения LPIS в 6–15 раз выше стоимости проекта",
                        ],
          },
          {
            title:
              language === "uk"
                ? "📊 KPI та вимірювані показники"
                : language === "en"
                  ? "📊 KPI and measurable indicators"
                  : language === "pl"
                    ? "📊 KPI i mierzalne wskaźniki"
                    : language === "de"
                      ? "📊 KPI und messbare Indikatoren"
                      : "📊 KPI и измеримые показатели",
            content:
              language === "uk"
                ? [
                    "Напрямок | Метрика",
                    "Контроль втрат | Динаміка shrinkage до/після впровадження",
                    "Поведінковий ризик | Індекс довіри персоналу, кількість виявлених кейсів",
                    "Логістика та ланцюги | Кількість точок ризику в логістиці, простежуваність",
                    "Цифровий контроль | Кількість інцидентів на комунікаційних каналах",
                    "Загальна ефективність | Економія, запобігання втратам, повернення ROI",
                  ]
                : language === "en"
                  ? [
                      "Direction | Metric",
                      "Loss control | Shrinkage dynamics before/after implementation",
                      "Behavioral risk | Personnel trust index, number of identified cases",
                      "Logistics and chains | Number of risk points in logistics, traceability",
                      "Digital control | Number of incidents on communication channels",
                      "Overall efficiency | Savings, prevented losses, ROI returns",
                    ]
                  : language === "pl"
                    ? [
                        "Kierunek | Metryka",
                        "Kontrola strat | Dynamika kurczenia się przed/po wdrożeniu",
                        "Ryzyko behawioralne | Indeks zaufania personelu, liczba zidentyfikowanych przypadków",
                        "Logistyka i łańcuchy | Liczba punktów ryzyka w logistyce, identyfikowalność",
                        "Kontrola cyfrowa | Liczba incydentów w kanałach komunikacji",
                        "Ogólna efektywność | Oszczędności, zapobieganie stratom, zwroty ROI",
                      ]
                    : language === "de"
                      ? [
                          "Richtung | Metrik",
                          "Verlustkontrolle | Schwunddynamik vor/nach der Implementierung",
                          "Verhaltensrisiko | Personalvertrauensindex, Anzahl identifizierter Fälle",
                          "Logistik und Ketten | Anzahl der Risikopunkte in der Logistik, Rückverfolgbarkeit",
                          "Digitale Kontrolle | Anzahl der Vorfälle auf Kommunikationskanälen",
                          "Gesamteffizienz | Einsparungen, verhinderte Verluste, ROI-Renditen",
                        ]
                      : [
                          "Направление | Метрика",
                          "Контроль потерь | Динамика shrinkage до/после внедрения",
                          "Поведенческий риск | Индекс доверия персонала, кол-во выявленных кейсов",
                          "Логистика и цепочки | Кол-во точек ризику в логістиці, простежуваність",
                          "Цифровий контроль | Кількість інцидентів на комунікаційних каналах",
                          "Загальна ефективність | Економія, запобігання втратам, повернення ROI",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🛠 Принципи підходу"
                : language === "en"
                  ? "🛠 Approach principles"
                  : language === "pl"
                    ? "🛠 Zasady podejścia"
                    : language === "de"
                      ? "🛠 Grundsätze des Ansatzes"
                      : "🛠 Принципы подхода",
            content:
              language === "uk"
                ? [
                    "Інтеграція LP, HR та СБ — в єдину модель контролю",
                    "Юридична чистота та етика — строго в рамках закону",
                    "Превентивність — не караємо, а попереджаємо",
                    "Інформаційна витонченість — збір даних з землі, логів, камер, сигналів",
                  ]
                : language === "en"
                  ? [
                      "Integration of LP, HR, and Security into a unified control model",
                      "Legal compliance and ethics — strictly within the law",
                      "Preventiveness — we don't punish, we prevent",
                      "Information sophistication — data collection from the ground, logs, cameras, signals",
                    ]
                  : language === "pl"
                    ? [
                        "Integracja LP, HR i Bezpieczeństwa w jednolity model kontroli",
                        "Zgodność prawna i etyka — ściśle w ramach prawa",
                        "Prewencyjność — nie karamy, zapobiegamy",
                        "Wyrafinowanie informacyjne — zbieranie danych z terenu, logów, kamer, sygnałów",
                      ]
                    : language === "de"
                      ? [
                          "Integration von LP, HR und Sicherheit in ein einheitliches Kontrollmodell",
                          "Rechtliche Konformität und Ethik — streng im Rahmen des Gesetzes",
                          "Prävention — wir bestrafen nicht, wir verhindern",
                          "Informationskomplexität — Datenerfassung vom Boden, Logs, Kameras, Signalen",
                        ]
                      : [
                          "Интеграция LP, HR и СБ — в единую модель контроля",
                          "Юридическая чистота и этика — строго в рамках закона",
                          "Превентивность — не наказываем, а предупреждаем",
                          "Информационная изощрённость — сбор данных с земли, логов, камер, сигналов",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🚀 Як починається проект?"
                : language === "en"
                  ? "🚀 How does the project start?"
                  : language === "pl"
                    ? "🚀 Jak zaczyna się projekt?"
                    : language === "de"
                      ? "🚀 Wie beginnt das Projekt?"
                      : "🚀 Как начинается проект?",
            content:
              language === "uk"
                ? [
                    "Аудит поточної системи безпеки та втрат",
                    "Виявлення вразливих ланок",
                    "Впровадження модулів LPIS під ваш масштаб та галузь",
                    "Супровід та навчання",
                    "Втрати — це дзеркало процесу. Зробіть його прозорим.",
                  ]
                : language === "en"
                  ? [
                      "Audit of the current security system and losses",
                      "Identification of vulnerable links",
                      "Implementation of LPIS modules tailored to your scale and industry",
                      "Support and training",
                      "Losses are a mirror of the process. Make it transparent.",
                    ]
                  : language === "pl"
                    ? [
                        "Audyt obecnego systemu bezpieczeństwa i strat",
                        "Identyfikacja słabych ogniw",
                        "Wdrożenie modułów LPIS dostosowanych do Twojej skali i branży",
                        "Wsparcie i szkolenie",
                        "Straty są lustrem procesu. Uczyń go przejrzystym.",
                      ]
                    : language === "de"
                      ? [
                          "Prüfung des aktuellen Sicherheitssystems und der Verluste",
                          "Identifizierung verwundbarer Verbindungen",
                          "Implementierung von LPIS-Modulen, die auf Ihre Größe und Branche zugeschnitten sind",
                          "Unterstützung und Schulung",
                          "Verluste sind ein Spiegel des Prozesses. Machen Sie ihn transparent.",
                        ]
                      : [
                          "Аудит текущей системы безопасности и потерь",
                          "Выявление уязвимых звеньев",
                          "Внедрение модулей LPIS под ваш масштаб и отрасль",
                          "Сопровождение и обучение",
                          "Потери — это зеркало процесса. Сделайте его прозрачным.",
                        ],
          },
        ]
      case "cis":
        return [
          {
            title:
              language === "uk"
                ? "💼 Для кого?"
                : language === "en"
                  ? "💼 Who is it for?"
                  : language === "pl"
                    ? "💼 Dla kogo?"
                    : language === "de"
                      ? "💼 Für wen?"
                      : "💼 Для кого?",
            content:
              language === "uk"
                ? [
                    "Холдинги з міжнародною діяльністю та регуляторними ризиками",
                    "Компанії, що підлягають перевіркам (ЦБ, Росфінмоніторинг, міжнародні аудитори)",
                    "Структури з високим рівнем публічності, ESG-зобов'язаннями та відповідальним управлінням",
                    "Компанії, де цінність репутації вище будь-яких інвестицій",
                  ]
                : language === "en"
                  ? [
                      "Holdings with international activities and regulatory risks",
                      "Companies subject to inspections (Central Bank, Financial Monitoring, international auditors)",
                      "Structures with high levels of publicity, ESG commitments, and responsible management",
                      "Companies where reputation value exceeds any investments",
                    ]
                  : language === "pl"
                    ? [
                        "Holdingi z działalnością międzynarodową i ryzykami regulacyjnymi",
                        "Firmy podlegające kontrolom (Bank Centralny, Monitoring Finansowy, międzynarodowi audytorzy)",
                        "Struktury o wysokim poziomie rozgłosu, zobowiązaniach ESG i odpowiedzialnym zarządzaniu",
                        "Firmy, w których wartość reputacji przewyższa wszelkie inwestycje",
                      ]
                    : language === "de"
                      ? [
                          "Holdings mit internationalen Aktivitäten und regulatorischen Risiken",
                          "Unternehmen, die Inspektionen unterliegen (Zentralbank, Finanzüberwachung, internationale Prüfer)",
                          "Strukturen mit hohem Öffentlichkeitsgrad, ESG-Verpflichtungen und verantwortungsvoller Führung",
                          "Unternehmen, bei denen der Reputationswert alle Investitionen übersteigt",
                        ]
                      : [
                          "Холдинги с международной деятельностью и регуляторными рисками",
                          "Компании, подлежащие проверкам (ЦБ, Росфинмониторинг, международные аудиторы)",
                          "Структуры с высоким уровнем публичности, ESG-обязательствами и ответственным управлением",
                          "Компании, где ценность репутации выше любых инвестиций",
                        ],
          },
          // Add more translated sections for CIS project
          // Continue with similar pattern for other projects
        ]
      // Add cases for other projects (fs, poas, lis)
      default:
        return []
    }
  }

  const projects = [
    {
      id: "lpis",
      title: "LOSS PREVENTION INTELLIGENCE SYSTEM",
      subtitle:
        language === "uk"
          ? "Інтелектуальна система запобігання збиткам та контролю внутрішніх втрат"
          : language === "en"
            ? "Intelligent system for loss prevention and internal loss control"
            : language === "pl"
              ? "Inteligentny system zapobiegania stratom i kontroli strat wewnętrznych"
              : language === "de"
                ? "Intelligentes System zur Verlustvermeidung und internen Verlustkontrolle"
                : "Интеллектуальная система предотвращения убытков и контроля внутренних потерь",
      description:
        language === "uk"
          ? "Втрати — це не витрати. Це керований процес, який можна зупинити."
          : language === "en"
            ? "Losses are not expenses. It's a manageable process that can be stopped."
            : language === "pl"
              ? "Straty to nie koszty. To zarządzalny proces, który można zatrzymać."
              : language === "de"
                ? "Verluste sind keine Ausgaben. Es ist ein steuerbarer Prozess, der gestoppt werden kann."
                : "Потери — это не издержки. Это управляемый процесс, который можно остановить.",
      sections: getProjectSections("lpis"),
    },
    {
      id: "cis",
      title: "COMPLIANCE INTELLIGENCE SYSTEM",
      subtitle:
        language === "uk"
          ? "Інтелектуальна система управління комплаєнс-ризиками та корпоративною етикою"
          : language === "en"
            ? "Intelligent system for compliance risk management and corporate ethics"
            : language === "pl"
              ? "Inteligentny system zarządzania ryzykiem zgodności i etyką korporacyjną"
              : language === "de"
                ? "Intelligentes System für Compliance-Risikomanagement und Unternehmensethik"
                : "Интеллектуальная система управления комплаенс-рисками и корпоративной этикой",
      description:
        language === "uk"
          ? "Комплаєнс — це не формальність. Це ваш захист в умовах правової турбулентності."
          : language === "en"
            ? "Compliance is not a formality. It's your protection in conditions of legal turbulence."
            : language === "pl"
              ? "Zgodność to nie formalność. To Twoja ochrona w warunkach turbulencji prawnych."
              : language === "de"
                ? "Compliance ist keine Formalität. Es ist Ihr Schutz unter Bedingungen rechtlicher Turbulenzen."
                : "Комплаенс — это не формальность. Это ваша защита в условиях правовой турбулентности.",
      sections: getProjectSections("cis"),
    },
    {
      id: "fs",
      title: "FRUMEN SECURITAS",
      subtitle:
        language === "uk"
          ? "Інтегрована розвідувально-оперативна система корпоративної безпеки"
          : language === "en"
            ? "Integrated intelligence and operational corporate security system"
            : language === "pl"
              ? "Zintegrowany system wywiadowczo-operacyjny bezpieczeństwa korporacyjnego"
              : language === "de"
                ? "Integriertes Nachrichtendienst- und operatives Unternehmenssicherheitssystem"
                : "Интегрированная разведывательно-оперативная система корпоративной безопасности",
      description:
        language === "uk"
          ? "Засновано на принципах роботи історичної служби Фрументаріїв — адаптовано для сучасних ризиків бізнесу."
          : language === "en"
            ? "Based on the principles of the historical Frumentarii service — adapted for modern business risks."
            : language === "pl"
              ? "Oparte na zasadach historycznej służby Frumentarii — dostosowane do współczesnych ryzyk biznesowych."
              : language === "de"
                ? "Basierend auf den Prinzipien des historischen Frumentarii-Dienstes — angepasst an moderne Geschäftsrisiken."
                : "Основано на принципах работы исторической службы Фрументариев — адаптировано для современных рисков бизнеса.",
      sections: getProjectSections("fs"),
    },
    {
      id: "poas",
      title: "PROCESS OPTIMIZATION & AUTOMATION SYSTEM",
      subtitle:
        language === "uk"
          ? "Інтелектуальна система оптимізації, цифровізації та автоматизації бізнес-процесів"
          : language === "en"
            ? "Intelligent system for optimization, digitalization, and automation of business processes"
            : language === "pl"
              ? "Inteligentny system optymalizacji, cyfryzacji i automatyzacji procesów biznesowych"
              : language === "de"
                ? "Intelligentes System zur Optimierung, Digitalisierung und Automatisierung von Geschäftsprozessen"
                : "Интеллектуальная система оптимизации, цифровизации и автоматизации бизнес-процессов",
      description:
        language === "uk"
          ? "Автоматизувати — не означає прискорити хаос. Спочатку оптимізація, потім цифра."
          : language === "en"
            ? "Automating doesn't mean accelerating chaos. First optimization, then digitalization."
            : language === "pl"
              ? "Automatyzacja nie oznacza przyspieszenia chaosu. Najpierw optymalizacja, potem cyfryzacja."
              : language === "de"
                ? "Automatisieren bedeutet nicht, Chaos zu beschleunigen. Erst Optimierung, dann Digitalisierung."
                : "Автоматизировать — не значит ускорить хаос. Сначала оптимизация, затем цифра.",
      sections: getProjectSections("poas"),
    },
    {
      id: "lis",
      title: "LEAN INTELLIGENCE SYSTEM",
      subtitle:
        language === "uk"
          ? "Інтелектуальна система оптимізації процесів та усунення втрат за методологією Lean"
          : language === "en"
            ? "Intelligent system for process optimization and waste elimination using Lean methodology"
            : language === "pl"
              ? "Inteligentny system optymalizacji procesów i eliminacji strat według metodologii Lean"
              : language === "de"
                ? "Intelligentes System zur Prozessoptimierung und Abfallbeseitigung nach Lean-Methodik"
                : "Интеллектуальная система оптимизации процессов и устранения потерь по методологии Lean",
      description:
        language === "uk"
          ? "Lean — це не про скорочення. Це про створення цінності без втрат."
          : language === "en"
            ? "Lean is not about cutting. It's about creating value without waste."
            : language === "pl"
              ? "Lean nie dotyczy cięć. Chodzi o tworzenie wartości bez strat."
              : language === "de"
                ? "Lean geht nicht ums Kürzen. Es geht darum, Wert ohne Verschwendung zu schaffen."
                : "Lean — это не про сокращения. Это про создание ценности без потерь.",
      sections: getProjectSections("lis"),
    },
  ]

  return (
    <main className="min-h-screen py-24 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">{t("projects.title")}</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{t("projects.subtitle")}</p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </main>
  )
}
