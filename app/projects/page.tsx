"use client"
import { useLanguage } from "@/context/language-context"
import ProjectCard from "@/components/ProjectCard"
import { motion } from "framer-motion"

export default function Projects() {
  const { t, language } = useLanguage()

  // The getProjectSections function remains the same as before
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
                          "Логистика и цепочки | Кол-во точек риска в логистике, прослеживаемость",
                          "Цифровой контроль | Количество инцидентов на коммуникационных каналах",
                          "Общая эффективность | Экономия, предотвращение потерь, возврат ROI",
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
          {
            title:
              language === "uk"
                ? "🎯 Що вирішує система?"
                : language === "en"
                  ? "🎯 What does the system solve?"
                  : language === "pl"
                    ? "🎯 Co rozwiązuje system?"
                    : language === "de"
                      ? "🎯 Was löst das System?"
                      : "🎯 Что решает система?",
            content:
              language === "uk"
                ? [
                    "Compliance Intelligence System (CIS) — це інтелектуальна система управління комплаєнс-ризиками. Ми:",
                    "Забезпечуємо відповідність діяльності компанії нормативним вимогам",
                    "Виявляємо та запобігаємо порушенням корпоративної етики",
                    "Впроваджуємо системи контролю та моніторингу комплаєнс-ризиків",
                    "Захищаємо репутацію компанії та мінімізуємо регуляторні ризики",
                    "Комплаєнс — це не формальність, а стратегічна перевага в сучасному бізнесі.",
                  ]
                : language === "en"
                  ? [
                      "Compliance Intelligence System (CIS) is an intelligent compliance risk management system. We:",
                      "Ensure company activities comply with regulatory requirements",
                      "Identify and prevent violations of corporate ethics",
                      "Implement compliance risk control and monitoring systems",
                      "Protect company reputation and minimize regulatory risks",
                      "Compliance is not a formality, but a strategic advantage in modern business.",
                    ]
                  : language === "pl"
                    ? [
                        "Compliance Intelligence System (CIS) to inteligentny system zarządzania ryzykiem zgodności. My:",
                        "Zapewniamy zgodność działań firmy z wymogami regulacyjnymi",
                        "Identyfikujemy i zapobiegamy naruszeniom etyki korporacyjnej",
                        "Wdrażamy systemy kontroli i monitorowania ryzyka zgodności",
                        "Chronimy reputację firmy i minimalizujemy ryzyko regulacyjne",
                        "Zgodność to nie formalność, ale strategiczna przewaga w nowoczesnym biznesie.",
                      ]
                    : language === "de"
                      ? [
                          "Compliance Intelligence System (CIS) ist ein intelligentes Compliance-Risikomanagement-System. Wir:",
                          "Stellen sicher, dass Unternehmensaktivitäten den regulatorischen Anforderungen entsprechen",
                          "Identifizieren und verhindern Verstöße gegen die Unternehmensethik",
                          "Implementieren Compliance-Risikokontroll- und Überwachungssysteme",
                          "Schützen den Unternehmensruf und minimieren regulatorische Risiken",
                          "Compliance ist keine Formalität, sondern ein strategischer Vorteil im modernen Geschäft.",
                        ]
                      : [
                          "Compliance Intelligence System (CIS) — это интеллектуальная система управления комплаенс-рисками. Мы:",
                          "Обеспечиваем соответствие деятельности компании нормативным требованиям",
                          "Выявляем и предотвращаем нарушения корпоративной этики",
                          "Внедряем системы контроля и мониторинга комплаенс-рисков",
                          "Защищаем репутацию компании и минимизируем регуляторные риски",
                          "Комплаенс — это не формальность, а стратегическая перевага в современном бізнесі.",
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
                    "Зниження ризиків штрафів та санкцій від регуляторів",
                    "Підвищення довіри інвесторів, партнерів та клієнтів",
                    "Створення прозорої та етичної корпоративної культури",
                    "Захист від репутаційних ризиків та негативного PR",
                    "Підвищення інвестиційної привабливості компанії",
                  ]
                : language === "en"
                  ? [
                      "Reduction of risks of fines and sanctions from regulators",
                      "Increased trust from investors, partners, and clients",
                      "Creation of a transparent and ethical corporate culture",
                      "Protection from reputational risks and negative PR",
                      "Increased investment attractiveness of the company",
                    ]
                  : language === "pl"
                    ? [
                        "Zmniejszenie ryzyka kar i sankcji ze strony regulatorów",
                        "Zwiększone zaufanie inwestorów, partnerów i klientów",
                        "Tworzenie przejrzystej i etycznej kultury korporacyjnej",
                        "Ochrona przed ryzykiem utraty reputacji i negatywnym PR",
                        "Zwiększona atrakcyjność inwestycyjna firmy",
                      ]
                    : language === "de"
                      ? [
                          "Reduzierung der Risiken von Geldstrafen und Sanktionen durch Aufsichtsbehörden",
                          "Erhöhtes Vertrauen von Investoren, Partnern und Kunden",
                          "Schaffung einer transparenten und ethischen Unternehmenskultur",
                          "Schutz vor Reputationsrisiken und negativer PR",
                          "Erhöhte Investitionsattraktivität des Unternehmens",
                        ]
                      : [
                          "Снижение рисков штрафов и санкций от регуляторов",
                          "Повышение доверия инвесторов, партнеров и клиентов",
                          "Создание прозрачной и этичной корпоративной культуры",
                          "Защита от репутационных рисков и негативного PR",
                          "Повышение инвестиционной привлекательности компании",
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
                    "Регуляторні ризики | Кількість виявлених та усунених порушень",
                    "Корпоративна етика | Індекс етичності, кількість етичних конфліктів",
                    "Прозорість | Рівень відповідності міжнародним стандартам (ISO, COSO)",
                    "Репутація | Оцінка репутації компанії, медіа-індекс",
                    "Ефективність | Економія на штрафах, зростання інвестиційної привабливості",
                  ]
                : language === "en"
                  ? [
                      "Direction | Metric",
                      "Regulatory risks | Number of identified and eliminated violations",
                      "Corporate ethics | Ethics index, number of ethical conflicts",
                      "Transparency | Level of compliance with international standards (ISO, COSO)",
                      "Reputation | Company reputation assessment, media index",
                      "Efficiency | Savings on fines, growth in investment attractiveness",
                    ]
                  : language === "pl"
                    ? [
                        "Kierunek | Metryka",
                        "Ryzyko regulacyjne | Liczba zidentyfikowanych i wyeliminowanych naruszeń",
                        "Etyka korporacyjna | Indeks etyczny, liczba konfliktów etycznych",
                        "Przejrzystość | Poziom zgodności z międzynarodowymi standardami (ISO, COSO)",
                        "Reputacja | Ocena reputacji firmy, indeks medialny",
                        "Efektywność | Oszczędności na karach, wzrost atrakcyjności inwestycyjnej",
                      ]
                    : language === "de"
                      ? [
                          "Richtung | Metrik",
                          "Regulatorische Risiken | Anzahl identifizierter und beseitigter Verstöße",
                          "Unternehmensethik | Ethik-Index, Anzahl ethischer Konflikte",
                          "Transparenz | Grad der Einhaltung internationaler Standards (ISO, COSO)",
                          "Reputation | Bewertung des Unternehmensrufs, Medienindex",
                          "Effizienz | Einsparungen bei Geldstrafen, Wachstum der Investitionsattraktivität",
                        ]
                      : [
                          "Направление | Метрика",
                          "Регуляторные риски | Количество выявленных и устраненных нарушений",
                          "Корпоративная этика | Индекс этичности, количество этических конфликтов",
                          "Прозрачность | Уровень соответствия международным стандартам (ISO, COSO)",
                          "Репутация | Оценка репутации компании, медиа-индекс",
                          "Эффективность | Экономия на штрафах, рост инвестиционной привлекательности",
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
                    "Інтеграція комплаєнсу в бізнес-процеси, а не формальне дотримання",
                    "Ризик-орієнтований підхід — фокус на найбільш критичних зонах",
                    "Прозорість та етичність як основа корпоративної культури",
                    "Постійний моніторинг та адаптація до змін регуляторного середовища",
                  ]
                : language === "en"
                  ? [
                      "Integration of compliance into business processes, not formal adherence",
                      "Risk-oriented approach — focus on the most critical areas",
                      "Transparency and ethics as the foundation of corporate culture",
                      "Continuous monitoring and adaptation to changes in the regulatory environment",
                    ]
                  : language === "pl"
                    ? [
                        "Integracja zgodności z procesami biznesowymi, a nie formalne przestrzeganie",
                        "Podejście zorientowane na ryzyko — koncentracja na najbardziej krytycznych obszarach",
                        "Przejrzystość i etyka jako podstawa kultury korporacyjnej",
                        "Ciągłe monitorowanie i adaptacja do zmian w środowisku regulacyjnym",
                      ]
                    : language === "de"
                      ? [
                          "Integration von Compliance in Geschäftsprozesse, nicht formale Einhaltung",
                          "Risikoorientierter Ansatz — Fokus auf die kritischsten Bereiche",
                          "Transparenz und Ethik als Grundlage der Unternehmenskultur",
                          "Kontinuierliche Überwachung und Anpassung an Änderungen im regulatorischen Umfeld",
                        ]
                      : [
                          "Интеграция комплаенса в бизнес-процессы, а не формальное соблюдение",
                          "Риск-ориентированный подход — фокус на наиболее критичных зонах",
                          "Прозрачность и этичность как основа корпоративной культуры",
                          "Постоянный мониторинг и адаптация к изменениям регуляторной среды",
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
                    "Комплаєнс-аудит поточної системи та виявлення ризиків",
                    "Розробка комплаєнс-політик та процедур",
                    "Впровадження CIS з урахуванням специфіки вашого бізнесу",
                    "Навчання персоналу та формування комплаєнс-культури",
                    "Регулярний моніторинг та вдосконалення системи",
                  ]
                : language === "en"
                  ? [
                      "Compliance audit of the current system and risk identification",
                      "Development of compliance policies and procedures",
                      "Implementation of CIS taking into account the specifics of your business",
                      "Personnel training and formation of compliance culture",
                      "Regular monitoring and system improvement",
                    ]
                  : language === "pl"
                    ? [
                        "Audyt zgodności obecnego systemu i identyfikacja ryzyka",
                        "Opracowanie polityk i procedur zgodności",
                        "Wdrożenie CIS z uwzględnieniem specyfiki Twojego biznesu",
                        "Szkolenie personelu i kształtowanie kultury zgodności",
                        "Regularne monitorowanie i doskonalenie systemu",
                      ]
                    : language === "de"
                      ? [
                          "Compliance-Audit des aktuellen Systems und Risikoidentifikation",
                          "Entwicklung von Compliance-Richtlinien und -Verfahren",
                          "Implementierung von CIS unter Berücksichtigung der Besonderheiten Ihres Unternehmens",
                          "Personalschulung und Bildung einer Compliance-Kultur",
                          "Regelmäßige Überwachung und Systemverbesserung",
                        ]
                      : [
                          "Комплаенс-аудит текущей системы и выявление рисков",
                          "Разработка комплаенс-политик и процедур",
                          "Внедрение CIS с учетом специфики вашего бизнеса",
                          "Обучение персонала и формирование комплаенс-культуры",
                          "Регулярный мониторинг и совершенствование системы",
                        ],
          },
        ]
      case "fs":
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
                    "Великі корпорації з розподіленою структурою та високими ризиками",
                    "Компанії, що працюють у конкурентних або кризових галузях",
                    "Бізнес з високою вартістю інтелектуальної власності та ноу-хау",
                    "Організації, що потребують комплексної системи корпоративної безпеки",
                  ]
                : language === "en"
                  ? [
                      "Large corporations with distributed structure and high risks",
                      "Companies operating in competitive or crisis industries",
                      "Businesses with high value of intellectual property and know-how",
                      "Organizations requiring a comprehensive corporate security system",
                    ]
                  : language === "pl"
                    ? [
                        "Duże korporacje o rozproszonej strukturze i wysokim ryzyku",
                        "Firmy działające w konkurencyjnych lub kryzysowych branżach",
                        "Biznesy o wysokiej wartości własności intelektualnej i know-how",
                        "Organizacje wymagające kompleksowego systemu bezpieczeństwa korporacyjnego",
                      ]
                    : language === "de"
                      ? [
                          "Große Unternehmen mit verteilter Struktur und hohen Risiken",
                          "Unternehmen, die in wettbewerbsintensiven oder krisengeschüttelten Branchen tätig sind",
                          "Unternehmen mit hohem Wert an geistigem Eigentum und Know-how",
                          "Organisationen, die ein umfassendes Unternehmenssicherheitssystem benötigen",
                        ]
                      : [
                          "Крупные корпорации с распределенной структурой и высокими рисками",
                          "Компании, работающие в конкурентных или кризисных отраслях",
                          "Бизнес с высокой стоимостью интеллектуальной собственности и ноу-хау",
                          "Организации, нуждающиеся в комплексной системе корпоративной безопасности",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🎯 Що таке Frumen Securitas?"
                : language === "en"
                  ? "🎯 What is Frumen Securitas?"
                  : language === "pl"
                    ? "🎯 Czym jest Frumen Securitas?"
                    : language === "de"
                      ? "🎯 Was ist Frumen Securitas?"
                      : "🎯 Что такое Frumen Securitas?",
            content:
              language === "uk"
                ? [
                    "Frumen Securitas — це інтегрована розвідувально-оперативна система корпоративної безпеки, заснована на принципах роботи історичної служби Фрументаріїв Римської імперії.",
                    "Система поєднує класичні методи корпоративної безпеки з сучасними технологіями аналітики та розвідки.",
                    "Ми створюємо комплексну систему захисту бізнесу від зовнішніх та внутрішніх загроз.",
                    "Наш підхід базується на проактивному виявленні та нейтралізації ризиків до їх реалізації.",
                    "Ми забезпечуємо інформаційну, економічну, фізичну та кадрову безпеку вашого бізнесу.",
                  ]
                : language === "en"
                  ? [
                      "Frumen Securitas is an integrated intelligence and operational corporate security system based on the principles of the historical Frumentarii service of the Roman Empire.",
                      "The system combines classical corporate security methods with modern analytics and intelligence technologies.",
                      "We create a comprehensive business protection system against external and internal threats.",
                      "Our approach is based on proactive identification and neutralization of risks before they materialize.",
                      "We provide information, economic, physical, and personnel security for your business.",
                    ]
                  : language === "pl"
                    ? [
                        "Frumen Securitas to zintegrowany wywiadowczo-operacyjny system bezpieczeństwa korporacyjnego oparty na zasadach historycznej służby Frumentarii Imperium Rzymskiego.",
                        "System łączy klasyczne metody bezpieczeństwa korporacyjnego z nowoczesnymi technologiami analitycznymi i wywiadowczymi.",
                        "Tworzymy kompleksowy system ochrony biznesu przed zagrożeniami zewnętrznymi i wewnętrznymi.",
                        "Nasze podejście opiera się na proaktywnej identyfikacji i neutralizacji ryzyk przed ich materializacją.",
                        "Zapewniamy bezpieczeństwo informacyjne, ekonomiczne, fizyczne i kadrowe dla Twojego biznesu.",
                      ]
                    : language === "de"
                      ? [
                          "Frumen Securitas ist ein integriertes Nachrichtendienst- und operatives Unternehmenssicherheitssystem, das auf den Prinzipien des historischen Frumentarii-Dienstes des Römischen Reiches basiert.",
                          "Das System kombiniert klassische Unternehmenssicherheitsmethoden mit modernen Analyse- und Nachrichtendiensttechnologien.",
                          "Wir schaffen ein umfassendes Geschäftsschutzsystem gegen externe und interne Bedrohungen.",
                          "Unser Ansatz basiert auf der proaktiven Identifizierung und Neutralisierung von Risiken, bevor sie sich materialisieren.",
                          "Wir bieten Informations-, Wirtschafts-, Physische und Personalsicherheit für Ihr Unternehmen.",
                        ]
                      : [
                          "Frumen Securitas — это интегрированная разведывательно-оперативная система корпоративной безопасности, основанная на принципах работы исторической службы Фрументариев Римской империи.",
                          "Система сочетает классические методы корпоративной безопасности с современными технологиями аналитики и разведки.",
                          "Мы создаем комплексную систему защиты бизнеса от внешних и внутренних угроз.",
                          "Наш подход основан на проактивном выявлении и нейтрализации рисков до их реализации.",
                          "Мы обеспечиваем информационную, экономическую, физическую и кадровую безопасность вашего бизнеса.",
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
                    "Зниження ризиків втрат від зовнішніх та внутрішніх загроз",
                    "Підвищення рівня захищеності інтелектуальної власності та комерційної таємниці",
                    "Створення надійної системи перевірки контрагентів та персоналу",
                    "Формування культури безпеки в компанії",
                    "Забезпечення безперервності бізнес-процесів в кризових ситуаціях",
                  ]
                : language === "en"
                  ? [
                      "Reduction of loss risks from external and internal threats",
                      "Increased protection of intellectual property and trade secrets",
                      "Creation of a reliable system for checking counterparties and personnel",
                      "Formation of a security culture in the company",
                      "Ensuring business process continuity in crisis situations",
                    ]
                  : language === "pl"
                    ? [
                        "Zmniejszenie ryzyka strat z zagrożeń zewnętrznych i wewnętrznych",
                        "Zwiększona ochrona własności intelektualnej i tajemnic handlowych",
                        "Stworzenie niezawodnego systemu weryfikacji kontrahentów i personelu",
                        "Kształtowanie kultury bezpieczeństwa w firmie",
                        "Zapewnienie ciągłości procesów biznesowych w sytuacjach kryzysowych",
                      ]
                    : language === "de"
                      ? [
                          "Reduzierung von Verlustrisiken durch externe und interne Bedrohungen",
                          "Erhöhter Schutz von geistigem Eigentum und Geschäftsgeheimnissen",
                          "Schaffung eines zuverlässigen Systems zur Überprüfung von Geschäftspartnern und Personal",
                          "Bildung einer Sicherheitskultur im Unternehmen",
                          "Sicherstellung der Geschäftsprozess-Kontinuität in Krisensituationen",
                        ]
                      : [
                          "Снижение рисков потерь от внешних и внутренних угроз",
                          "Повышение уровня защищенности интеллектуальной собственности и коммерческой тайны",
                          "Создание надежной системы проверки контрагентов и персонала",
                          "Формирование культуры безопасности в компании",
                          "Обеспечение непрерывности бизнес-процессов в кризисных ситуациях",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🛠 Компоненти системи"
                : language === "en"
                  ? "🛠 System components"
                  : language === "pl"
                    ? "🛠 Komponenty systemu"
                    : language === "de"
                      ? "🛠 Systemkomponenten"
                      : "🛠 Компоненты системы",
            content:
              language === "uk"
                ? [
                    "Розвідувально-аналітичний модуль — збір та аналіз інформації про загрози",
                    "Система економічної безпеки — захист від фінансових ризиків та шахрайства",
                    "Інформаційна безпека — захист даних та комунікацій",
                    "Кадрова безпека — перевірка та моніторинг персоналу",
                    "Фізична безпека — захист об'єктів та осіб",
                    "Кризовий менеджмент — реагування на інциденти та надзвичайні ситуації",
                  ]
                : language === "en"
                  ? [
                      "Intelligence and analytical module — collection and analysis of threat information",
                      "Economic security system — protection from financial risks and fraud",
                      "Information security — protection of data and communications",
                      "Personnel security — verification and monitoring of personnel",
                      "Physical security — protection of objects and persons",
                      "Crisis management — response to incidents and emergencies",
                    ]
                  : language === "pl"
                    ? [
                        "Moduł wywiadowczo-analityczny — zbieranie i analiza informacji o zagrożeniach",
                        "System bezpieczeństwa ekonomicznego — ochrona przed ryzykiem finansowym i oszustwami",
                        "Bezpieczeństwo informacji — ochrona danych i komunikacji",
                        "Bezpieczeństwo personelu — weryfikacja i monitorowanie personelu",
                        "Bezpieczeństwo fizyczne — ochrona obiektów i osób",
                        "Zarządzanie kryzysowe — reagowanie na incydenty i sytuacje awaryjne",
                      ]
                    : language === "de"
                      ? [
                          "Nachrichtendienst- und Analysemodul — Sammlung und Analyse von Bedrohungsinformationen",
                          "Wirtschaftssicherheitssystem — Schutz vor finanziellen Risiken und Betrug",
                          "Informationssicherheit — Schutz von Daten und Kommunikation",
                          "Personalsicherheit — Überprüfung und Überwachung des Personals",
                          "Physische Sicherheit — Schutz von Objekten und Personen",
                          "Krisenmanagement — Reaktion auf Vorfälle und Notfälle",
                        ]
                      : [
                          "Разведывательно-аналитический модуль — сбор и анализ информации об угрозах",
                          "Система экономической безопасности — защита от финансовых рисков и мошенничества",
                          "Информационная безопасность — защита данных и коммуникаций",
                          "Кадровая безопасность — проверка и мониторинг персонала",
                          "Физическая безопасность — защита объектов и лиц",
                          "Кризисный менеджмент — реагирование на инциденты и чрезвычайные ситуации",
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
                    "Комплексний аудит безпеки компанії та виявлення вразливостей",
                    "Розробка стратегії безпеки з урахуванням специфіки вашого бізнесу",
                    "Поетапне впровадження компонентів системи Frumen Securitas",
                    "Навчання персоналу та інтеграція системи в бізнес-процеси",
                    "Постійний моніторинг та вдосконалення системи безпеки",
                  ]
                : language === "en"
                  ? [
                      "Comprehensive security audit of the company and identification of vulnerabilities",
                      "Development of a security strategy taking into account the specifics of your business",
                      "Phased implementation of Frumen Securitas system components",
                      "Personnel training and integration of the system into business processes",
                      "Continuous monitoring and improvement of the security system",
                    ]
                  : language === "pl"
                    ? [
                        "Kompleksowy audyt bezpieczeństwa firmy i identyfikacja podatności",
                        "Opracowanie strategii bezpieczeństwa z uwzględnieniem specyfiki Twojego biznesu",
                        "Etapowe wdrażanie komponentów systemu Frumen Securitas",
                        "Szkolenie personelu i integracja systemu z procesami biznesowymi",
                        "Ciągłe monitorowanie i doskonalenie systemu bezpieczeństwa",
                      ]
                    : language === "de"
                      ? [
                          "Umfassendes Sicherheitsaudit des Unternehmens und Identifizierung von Schwachstellen",
                          "Entwicklung einer Sicherheitsstrategie unter Berücksichtigung der Besonderheiten Ihres Unternehmens",
                          "Stufenweise Implementierung der Frumen Securitas-Systemkomponenten",
                          "Personalschulung und Integration des Systems in Geschäftsprozesse",
                          "Kontinuierliche Überwachung und Verbesserung des Sicherheitssystems",
                        ]
                      : [
                          "Комплексный аудит безопасности компании и выявление уязвимостей",
                          "Разработка стратегии безопасности с учетом специфики вашего бизнеса",
                          "Поэтапное внедрение компонентов системы Frumen Securitas",
                          "Обучение персонала и интеграция системы в бизнес-процессы",
                          "Постоянный мониторинг и совершенствование системы безопасности",
                        ],
          },
        ]
      case "poas":
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
                    "Середній та великий бізнес із застарілими або дублюючими процесами",
                    "Компанії на етапі цифрової трансформації",
                    "Організації з високою часткою ручної праці, Excel-звітності, неінтегрованих систем",
                    "Керівники, які втомилися від «милиць» в управлінні",
                  ]
                : language === "en"
                  ? [
                      "Medium and large businesses with outdated or duplicated processes",
                      "Companies undergoing digital transformation",
                      "Organizations with a high proportion of manual labor, Excel reporting, and non-integrated systems",
                      "Managers tired of workarounds in management",
                    ]
                  : language === "pl"
                    ? [
                        "Średni i duży biznes z przestarzałymi lub zduplikowanymi procesami",
                        "Firmy w fazie transformacji cyfrowej",
                        "Organizacje z dużym udziałem pracy ręcznej, raportowania w Excelu, niezintegrowanych systemów",
                        "Menedżerowie zmęczeni obejściami w zarządzaniu",
                      ]
                    : language === "de"
                      ? [
                          "Mittlere und große Unternehmen mit veralteten oder duplizierten Prozessen",
                          "Unternehmen in der digitalen Transformation",
                          "Organisationen mit hohem Anteil an manueller Arbeit, Excel-Reporting und nicht integrierten Systemen",
                          "Manager, die von Workarounds im Management müde sind",
                        ]
                      : [
                          "Средний и крупный бизнес с устаревшими или дублирующими процессами",
                          "Компании на этапе цифровой трансформации",
                          "Организации с высокой долей ручного труда, Excel-отчетности, неинтегрованых систем",
                          "Руководители, уставшие от «костылей» в управлении",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🎯 Що вирішує система?"
                : language === "en"
                  ? "🎯 What does the system solve?"
                  : language === "pl"
                    ? "🎯 Co rozwiązuje system?"
                    : language === "de"
                      ? "🎯 Was löst das System?"
                      : "🎯 Что решает система?",
            content:
              language === "uk"
                ? [
                    "Process Optimization & Automation System (POAS) — це цифрова екосистема, що дозволяє:",
                    "Виявити та усунути неефективності в процесах",
                    "Стандартизувати та регламентувати ключові операції",
                    "Автоматизувати рутину та підвищити прозорість управління",
                    "Створити вимірювану модель процесів на основі KPI та даних",
                    "Наша мета — не просто автоматизація, а зниження витрат і зростання якості управління.",
                  ]
                : language === "en"
                  ? [
                      "Process Optimization & Automation System (POAS) is a digital ecosystem that allows you to:",
                      "Identify and eliminate inefficiencies in processes",
                      "Standardize and regulate key operations",
                      "Automate routine tasks and increase management transparency",
                      "Create a measurable process model based on KPIs and data",
                      "Our goal is not just automation, but cost reduction and improved management quality.",
                    ]
                  : language === "pl"
                    ? [
                        "Process Optimization & Automation System (POAS) to cyfrowy ekosystem, który pozwala:",
                        "Zidentyfikować i wyeliminować nieefektywność w procesach",
                        "Standaryzować i regulować kluczowe operacje",
                        "Automatyzować rutynowe zadania i zwiększać przejrzystość zarządzania",
                        "Stworzyć mierzalny model procesu oparty na KPI i danych",
                        "Naszym celem nie jest tylko automatyzacja, ale redukcja kosztów i poprawa jakości zarządzania.",
                      ]
                    : language === "de"
                      ? [
                          "Process Optimization & Automation System (POAS) ist ein digitales Ökosystem, das Ihnen ermöglicht:",
                          "Ineffizienzen in Prozessen zu identifizieren und zu beseitigen",
                          "Standardisierung und Regulierung von Schlüsseloperationen",
                          "Automatisierung von Routineaufgaben und Erhöhung der Management-Transparenz",
                          "Erstellung eines messbaren Prozessmodells basierend auf KPIs und Daten",
                          "Unser Ziel ist nicht nur die Automatisierung, sondern Kostenreduzierung und verbesserte Managementqualität.",
                        ]
                      : [
                          "Process Optimization & Automation System (POAS) — это цифровая экосистема, которая позволяет:",
                          "Выявить и устранить неэффективности в процессах",
                          "Стандартизировать и регламентировать ключевые операции",
                          "Автоматизировать рутину и повысить прозрачность управления",
                          "Создать измеряемую модель процессов на основе KPI и данных",
                          "Наша цель — не просто автоматизация, а снижение затрат и рост качества управления.",
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
                    "Зниження витрат на операційні процеси",
                    "Підвищення продуктивності праці та ефективності використання ресурсів",
                    "Зменшення кількості помилок та людського фактору",
                    "Покращення якості обслуговування клієнтів",
                    "Збільшення прибутковості бізнесу",
                  ]
                : language === "en"
                  ? [
                      "Reduced costs for operational processes",
                      "Increased labor productivity and resource efficiency",
                      "Reduced number of errors and human factor",
                      "Improved customer service quality",
                      "Increased business profitability",
                    ]
                  : language === "pl"
                    ? [
                        "Zmniejszenie kosztów procesów operacyjnych",
                        "Zwiększenie produktywności pracy i efektywności wykorzystania zasobów",
                        "Zmniejszenie liczby błędów i czynnika ludzkiego",
                        "Poprawa jakości obsługi klienta",
                        "Zwiększenie rentowności biznesu",
                      ]
                    : language === "de"
                      ? [
                          "Reduzierte Kosten für operative Prozesse",
                          "Erhöhte Arbeitsproduktivität und Ressourceneffizienz",
                          "Reduzierte Anzahl von Fehlern und menschlichem Faktor",
                          "Verbesserte Kundenservicequalität",
                          "Erhöhte Unternehmensrentabilität",
                        ]
                      : [
                          "Снижение затрат на операционные процессы",
                          "Повышение производительности труда и эффективности использования ресурсов",
                          "Уменьшение количества ошибок и человеческого фактора",
                          "Улучшение качества обслуживания клиентов",
                          "Увеличение прибыльности бизнеса",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🛠 Компоненти системи"
                : language === "en"
                  ? "🛠 System components"
                  : language === "pl"
                    ? "🛠 Komponenty systemu"
                    : language === "de"
                      ? "🛠 Systemkomponenten"
                      : "🛠 Компоненты системы",
            content:
              language === "uk"
                ? [
                    "Модуль аналізу та моделювання процесів",
                    "Система управління бізнес-правилами (BRMS)",
                    "Платформа автоматизації робочих процесів (BPM)",
                    "Інтеграційна платформа (iPaaS)",
                    "Система моніторингу та аналітики (BI)",
                  ]
                : language === "en"
                  ? [
                      "Process analysis and modeling module",
                      "Business Rules Management System (BRMS)",
                      "Workflow Automation Platform (BPM)",
                      "Integration Platform (iPaaS)",
                      "Monitoring and Analytics System (BI)",
                    ]
                  : language === "pl"
                    ? [
                        "Moduł analizy i modelowania procesów",
                        "System zarządzania regułami biznesowymi (BRMS)",
                        "Platforma automatyzacji przepływu pracy (BPM)",
                        "Platforma integracyjna (iPaaS)",
                        "System monitoringu i analizy (BI)",
                      ]
                    : language === "de"
                      ? [
                          "Prozessanalyse- und Modellierungsmodul",
                          "Business Rules Management System (BRMS)",
                          "Workflow-Automatisierungsplattform (BPM)",
                          "Integrationsplattform (iPaaS)",
                          "Monitoring- und Analysesystem (BI)",
                        ]
                      : [
                          "Модуль анализа и моделирования процессов",
                          "Система управления бизнес-правилами (BRMS)",
                          "Платформа автоматизации рабочих процессов (BPM)",
                          "Интеграционная платформа (iPaaS)",
                          "Система мониторинга и аналитики (BI)",
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
                    "Аудит поточних бізнес-процесів та виявлення «вузьких місць»",
                    "Розробка концепції та дорожньої карти оптимізації",
                    "Впровадження POAS з урахуванням специфіки вашого бізнесу",
                    "Навчання персоналу та підтримка на етапі впровадження",
                    "Постійний моніторинг та вдосконалення системи",
                  ]
                : language === "en"
                  ? [
                      "Audit of current business processes and identification of bottlenecks",
                      "Development of a concept and roadmap for optimization",
                      "Implementation of POAS taking into account the specifics of your business",
                      "Personnel training and support during the implementation phase",
                      "Continuous monitoring and improvement of the system",
                    ]
                  : language === "pl"
                    ? [
                        "Audyt obecnych procesów biznesowych i identyfikacja «wąskich gardeł»",
                        "Opracowanie koncepcji i mapy drogowej optymalizacji",
                        "Wdrożenie POAS z uwzględnieniem specyfiki Twojego biznesu",
                        "Szkolenie personelu i wsparcie na etapie wdrożenia",
                        "Ciągłe monitorowanie i doskonalenie systemu",
                      ]
                    : language === "de"
                      ? [
                          "Audit der aktuellen Geschäftsprozesse und Identifizierung von «Engpässen»",
                          "Entwicklung eines Konzepts und einer Roadmap für die Optimierung",
                          "Implementierung von POAS unter Berücksichtigung der Besonderheiten Ihres Unternehmens",
                          "Personalschulung und Unterstützung in der Implementierungsphase",
                          "Kontinuierliche Überwachung und Verbesserung des Systems",
                        ]
                      : [
                          "Аудит текущих бизнес-процессов и выявление «узких мест»",
                          "Разработка концепции и дорожной карты оптимизации",
                          "Внедрение POAS с учетом специфики вашего бизнеса",
                          "Обучение персонала и поддержка на этапе внедрения",
                          "Постоянный мониторинг и совершенствование системы",
                        ],
          },
        ]
      case "lis":
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
                    "Виробничі підприємства з високою конкуренцією та потребою в оптимізації",
                    "Компанії з великою кількістю бізнес-процесів та операцій",
                    "Організації, що прагнуть впровадити культуру постійного вдосконалення",
                    "Бізнеси, що шукають шляхи підвищення якості при зниженні витрат",
                  ]
                : language === "en"
                  ? [
                      "Manufacturing enterprises with high competition and need for optimization",
                      "Companies with a large number of business processes and operations",
                      "Organizations seeking to implement a culture of continuous improvement",
                      "Businesses looking for ways to improve quality while reducing costs",
                    ]
                  : language === "pl"
                    ? [
                        "Przedsiębiorstwa produkcyjne o wysokiej konkurencji i potrzebie optymalizacji",
                        "Firmy z dużą liczbą procesów biznesowych i operacji",
                        "Organizacje dążące do wdrożenia kultury ciągłego doskonalenia",
                        "Biznesy poszukujące sposobów poprawy jakości przy jednoczesnym obniżeniu kosztów",
                      ]
                    : language === "de"
                      ? [
                          "Produktionsunternehmen mit hohem Wettbewerb und Optimierungsbedarf",
                          "Unternehmen mit einer großen Anzahl von Geschäftsprozessen und Operationen",
                          "Organisationen, die eine Kultur der kontinuierlichen Verbesserung implementieren möchten",
                          "Unternehmen, die nach Wegen suchen, die Qualität zu verbessern und gleichzeitig Kosten zu senken",
                        ]
                      : [
                          "Производственные предприятия с высокой конкуренцией и потребностью в оптимизации",
                          "Компании с большим количеством бизнес-процессов и операций",
                          "Организации, стремящиеся внедрить культуру постоянного совершенствования",
                          "Бизнесы, ищущие пути повышения качества при снижении затрат",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🎯 Що таке Lean Intelligence System?"
                : language === "en"
                  ? "🎯 What is Lean Intelligence System?"
                  : language === "pl"
                    ? "🎯 Czym jest Lean Intelligence System?"
                    : language === "de"
                      ? "🎯 Was ist Lean Intelligence System?"
                      : "🎯 Что такое Lean Intelligence System?",
            content:
              language === "uk"
                ? [
                    "Lean Intelligence System (LIS) — це комплексна система впровадження принципів ощадливого виробництва (Lean) з використанням сучасних технологій аналітики та автоматизації.",
                    "Ми поєднуємо класичні методології Lean (Toyota Production System) з цифровими інструментами для максимальної ефективності.",
                    "Система дозволяє виявляти та усувати втрати (муда), оптимізувати процеси та створювати культуру постійного вдосконалення.",
                    "LIS включає аналітичні інструменти для моніторингу ключових показників ефективності та прийняття рішень на основі даних.",
                    "Наша мета — створення гнучкої, ефективної та конкурентоспроможної організації.",
                  ]
                : language === "en"
                  ? [
                      "Lean Intelligence System (LIS) is a comprehensive system for implementing lean manufacturing principles using modern analytics and automation technologies.",
                      "We combine classical Lean methodologies (Toyota Production System) with digital tools for maximum efficiency.",
                      "The system allows identifying and eliminating waste (muda), optimizing processes, and creating a culture of continuous improvement.",
                      "LIS includes analytical tools for monitoring key performance indicators and making data-driven decisions.",
                      "Our goal is to create a flexible, efficient, and competitive organization.",
                    ]
                  : language === "pl"
                    ? [
                        "Lean Intelligence System (LIS) to kompleksowy system wdrażania zasad lean manufacturing z wykorzystaniem nowoczesnych technologii analitycznych i automatyzacji.",
                        "Łączymy klasyczne metodologie Lean (Toyota Production System) z narzędziami cyfrowymi dla maksymalnej efektywności.",
                        "System pozwala identyfikować i eliminować marnotrawstwo (muda), optymalizować procesy i tworzyć kulturę ciągłego doskonalenia.",
                        "LIS zawiera narzędzia analityczne do monitorowania kluczowych wskaźników wydajności i podejmowania decyzji opartych na danych.",
                        "Naszym celem jest stworzenie elastycznej, wydajnej i konkurencyjnej organizacji.",
                      ]
                    : language === "de"
                      ? [
                          "Lean Intelligence System (LIS) ist ein umfassendes System zur Implementierung von Lean-Manufacturing-Prinzipien unter Verwendung moderner Analyse- und Automatisierungstechnologien.",
                          "Wir kombinieren klassische Lean-Methodologien (Toyota Production System) mit digitalen Werkzeugen für maximale Effizienz.",
                          "Das System ermöglicht die Identifizierung und Beseitigung von Verschwendung (Muda), die Optimierung von Prozessen und die Schaffung einer Kultur der kontinuierlichen Verbesserung.",
                          "LIS umfasst analytische Werkzeuge zur Überwachung von Schlüsselleistungsindikatoren und zur datengestützten Entscheidungsfindung.",
                          "Unser Ziel ist es, eine flexible, effiziente und wettbewerbsfähige Organisation zu schaffen.",
                        ]
                      : [
                          "Lean Intelligence System (LIS) — это комплексная система внедрения принципов бережливого производства (Lean) с использованием современных технологий аналитики и автоматизации.",
                          "Мы сочетаем классические методологии Lean (Toyota Production System) с цифровыми инструментами для максимальной эффективности.",
                          "Система позволяет выявлять и устранять потери (муда), оптимизировать процессы и создавать культуру постоянного совершенствования.",
                          "LIS включает аналитические инструменты для мониторинга ключевых показателей эффективности и принятия решений на основе данных.",
                          "Наша цель — создание гибкой, эффективной и конкурентоспособной организации.",
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
                    "Підвищення продуктивності праці на 20-40%",
                    "Зниження операційних витрат на 15-30%",
                    "Скорочення часу виконання замовлень на 30-50%",
                    "Підвищення якості продукції та зниження кількості дефектів",
                    "Оптимізація використання ресурсів та зменшення відходів",
                    "Підвищення задоволеності клієнтів та співробітників",
                  ]
                : language === "en"
                  ? [
                      "Increased labor productivity by 20-40%",
                      "Reduced operational costs by 15-30%",
                      "Reduced order fulfillment time by 30-50%",
                      "Improved product quality and reduced defects",
                      "Optimized resource utilization and reduced waste",
                      "Increased customer and employee satisfaction",
                    ]
                  : language === "pl"
                    ? [
                        "Zwiększenie wydajności pracy o 20-40%",
                        "Zmniejszenie kosztów operacyjnych o 15-30%",
                        "Skrócenie czasu realizacji zamówień o 30-50%",
                        "Poprawa jakości produktów i zmniejszenie liczby wad",
                        "Optymalizacja wykorzystania zasobów i zmniejszenie odpadów",
                        "Zwiększenie zadowolenia klientów i pracowników",
                      ]
                    : language === "de"
                      ? [
                          "Erhöhte Arbeitsproduktivität um 20-40%",
                          "Reduzierte Betriebskosten um 15-30%",
                          "Reduzierte Auftragsabwicklungszeit um 30-50%",
                          "Verbesserte Produktqualität und reduzierte Defekte",
                          "Optimierte Ressourcennutzung und reduzierter Abfall",
                          "Erhöhte Kunden- und Mitarbeiterzufriedenheit",
                        ]
                      : [
                          "Повышение производительности труда на 20-40%",
                          "Снижение операционных затрат на 15-30%",
                          "Сокращение времени выполнения заказов на 30-50%",
                          "Повышение качества продукции и снижение количества дефектов",
                          "Оптимизация использования ресурсов и уменьшение отходов",
                          "Повышение удовлетворенности клиентов и сотрудников",
                        ],
          },
          {
            title:
              language === "uk"
                ? "🛠 Інструменти та методи Lean"
                : language === "en"
                  ? "🛠 Lean tools and methods"
                  : language === "pl"
                    ? "🛠 Narzędzia i metody Lean"
                    : language === "de"
                      ? "🛠 Lean-Werkzeuge und Methoden"
                      : "🛠 Инструменты и методы Lean",
            content:
              language === "uk"
                ? [
                    "Value Stream Mapping (VSM) — картування потоку створення цінності",
                    "5S — система організації робочого простору",
                    "Kanban — система управління потоками та запасами",
                    "SMED — швидке переналагодження обладнання",
                    "TPM — загальне продуктивне обслуговування",
                    "Poka-Yoke — захист від помилок",
                    "Kaizen — система постійного вдосконалення",
                    "Цифрові двійники та симуляція процесів",
                  ]
                : language === "en"
                  ? [
                      "Value Stream Mapping (VSM) — mapping the value creation flow",
                      "5S — workplace organization system",
                      "Kanban — flow and inventory management system",
                      "SMED — quick equipment changeover",
                      "TPM — total productive maintenance",
                      "Poka-Yoke — error-proofing",
                      "Kaizen — continuous improvement system",
                      "Digital twins and process simulation",
                    ]
                  : language === "pl"
                    ? [
                        "Value Stream Mapping (VSM) — mapowanie przepływu tworzenia wartości",
                        "5S — system organizacji miejsca pracy",
                        "Kanban — system zarządzania przepływem i zapasami",
                        "SMED — szybkie przezbrojenie",
                        "TPM — całkowite produktywne utrzymanie",
                        "Poka-Yoke — zabezpieczenie przed błędami",
                        "Kaizen — system ciągłego doskonalenia",
                        "Cyfrowe bliźniaki i symulacja procesów",
                      ]
                    : language === "de"
                      ? [
                          "Value Stream Mapping (VSM) — Kartierung des Wertschöpfungsflusses",
                          "5S — Arbeitsplatzorganisationssystem",
                          "Kanban — Fluss- und Bestandsverwaltungssystem",
                          "SMED — schneller Ausrüstungswechsel",
                          "TPM — Total Productive Maintenance",
                          "Poka-Yoke — Fehlersicherung",
                          "Kaizen — kontinuierliches Verbesserungssystem",
                          "Digitale Zwillinge und Prozesssimulation",
                        ]
                      : [
                          "Value Stream Mapping (VSM) — картирование потока создания ценности",
                          "5S — система організації робочого простору",
                          "Kanban — система управления потоками и запасами",
                          "SMED — быстрая переналадка оборудования",
                          "TPM — всеобщее продуктивное обслуживание",
                          "Poka-Yoke — защита от ошибок",
                          "Kaizen — система постоянного совершенствования",
                          "Цифровые двойники и симуляция процессов",
                        ],
          },
          {
            title:
              language === "uk"
                ? "📊 Базові принципи Lean"
                : language === "en"
                  ? "📊 Basic Lean principles"
                  : language === "pl"
                    ? "📊 Podstawowe zasady Lean"
                    : language === "de"
                      ? "📊 Grundlegende Lean-Prinzipien"
                      : "📊 Базовые принципы Lean",
            content:
              language === "uk"
                ? [
                    "Визначення цінності з точки зору клієнта",
                    "Виявлення потоку створення цінності та усунення втрат",
                    "Створення безперервного потоку",
                    "Впровадження системи витягування (pull system)",
                    "Прагнення до досконалості через постійне вдосконалення",
                    "Повага до людей та розвиток персоналу",
                    "Прийняття рішень на основі довгострокової перспективи",
                  ]
                : language === "en"
                  ? [
                      "Defining value from the customer's perspective",
                      "Identifying the value stream and eliminating waste",
                      "Creating continuous flow",
                      "Implementing a pull system",
                      "Striving for perfection through continuous improvement",
                      "Respecting people and developing personnel",
                      "Making decisions based on a long-term perspective",
                    ]
                  : language === "pl"
                    ? [
                        "Definiowanie wartości z perspektywy klienta",
                        "Identyfikacja strumienia wartości i eliminacja marnotrawstwa",
                        "Tworzenie ciągłego przepływu",
                        "Wdrażanie systemu pull",
                        "Dążenie do doskonałości poprzez ciągłe doskonalenie",
                        "Szanowanie ludzi i rozwój personelu",
                        "Podejmowanie decyzji w oparciu o perspektywę długoterminową",
                      ]
                    : language === "de"
                      ? [
                          "Definition von Wert aus Kundensicht",
                          "Identifizierung des Wertstroms und Beseitigung von Verschwendung",
                          "Schaffung eines kontinuierlichen Flusses",
                          "Implementierung eines Pull-Systems",
                          "Streben nach Perfektion durch kontinuierliche Verbesserung",
                          "Respektierung von Menschen und Entwicklung von Personal",
                          "Entscheidungsfindung basierend auf einer langfristigen Perspektive",
                        ]
                      : [
                          "Определение ценности с точки зрения клиента",
                          "Выявление потока создания ценности и устранение потерь",
                          "Создание непрерывного потока",
                          "Внедрение системы вытягивания (pull system)",
                          "Стремление к совершенству через постоянное улучшение",
                          "Уважение к людям и развитие персонала",
                          "Принятие решений на основе долгосрочной перспективы",
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
                    "Діагностика поточного стану процесів та виявлення можливостей для оптимізації",
                    "Навчання ключових співробітників принципам та інструментам Lean",
                    "Розробка дорожньої карти впровадження Lean Intelligence System",
                    "Реалізація пілотних проектів для демонстрації швидких перемог",
                    "Масштабування успішних практик на всю організацію",
                    "Впровадження системи постійного вдосконалення та моніторингу результатів",
                  ]
                : language === "en"
                  ? [
                      "Diagnosis of the current state of processes and identification of opportunities for optimization",
                      "Training key employees in Lean principles and tools",
                      "Development of a roadmap for implementing the Lean Intelligence System",
                      "Implementation of pilot projects to demonstrate quick wins",
                      "Scaling successful practices across the entire organization",
                      "Implementation of a system for continuous improvement and results monitoring",
                    ]
                  : language === "pl"
                    ? [
                        "Diagnoza obecnego stanu procesów i identyfikacja możliwości optymalizacji",
                        "Szkolenie kluczowych pracowników z zasad i narzędzi Lean",
                        "Opracowanie mapy drogowej wdrożenia Lean Intelligence System",
                        "Realizacja projektów pilotażowych w celu zademonstrowania szybkich zwycięstw",
                        "Skalowanie udanych praktyk na całą organizację",
                        "Wdrożenie systemu ciągłego doskonalenia i monitorowania wyników",
                      ]
                    : language === "de"
                      ? [
                          "Diagnose des aktuellen Zustands der Prozesse und Identifizierung von Optimierungsmöglichkeiten",
                          "Schulung von Schlüsselmitarbeitern in Lean-Prinzipien und -Werkzeugen",
                          "Entwicklung einer Roadmap für die Implementierung des Lean Intelligence Systems",
                          "Implementierung von Pilotprojekten zur Demonstration schneller Erfolge",
                          "Skalierung erfolgreicher Praktiken in der gesamten Organisation",
                          "Implementierung eines Systems für kontinuierliche Verbesserung und Ergebnisüberwachung",
                        ]
                      : [
                          "Диагностика текущего состояния процессов и выявление возможностей для оптимизации",
                          "Обучение ключевых сотрудников принципам и инструментам Lean",
                          "Разработка дорожной карты внедрения Lean Intelligence System",
                          "Реализация пилотных проектов для демонстрации быстрых побед",
                          "Масштабирование успешных практик на всю организацию",
                          "Внедрение системы постоянного совершенствования и мониторинга результатов",
                        ],
          },
        ]
      default:
        return []
    }
  }

  const getProjectData = () => {
    switch (language) {
      case "uk":
        return {
          title: "Наші проекти",
          description:
            "Ми розробляємо та впроваджуємо інтелектуальні системи для оптимізації бізнес-процесів та забезпечення безпеки.",
          projects: [
            {
              id: "lpis",
              title: "Loss Prevention Intelligence System",
              shortDescription: "Проактивна модель управління збитками та запобігання втратам.",
            },
            {
              id: "cis",
              title: "Compliance Intelligence System",
              shortDescription: "Інтелектуальна система управління комплаєнс-ризиками.",
            },
            {
              id: "fs",
              title: "Frumen Securitas",
              shortDescription: "Інтегрована розвідувально-оперативна система корпоративної безпеки.",
            },
            {
              id: "poas",
              title: "Process Optimization & Automation System",
              shortDescription: "Цифрова екосистема для оптимізації та автоматизації бізнес-процесів.",
            },
            {
              id: "lis",
              title: "Lean Intelligence System",
              shortDescription: "Комплексна система впровадження принципів ощадливого виробництва.",
            },
          ],
        }
      case "en":
        return {
          title: "Our Projects",
          description: "We develop and implement intelligent systems for business process optimization and security.",
          projects: [
            {
              id: "lpis",
              title: "Loss Prevention Intelligence System",
              shortDescription: "A proactive model for loss management and prevention.",
            },
            {
              id: "cis",
              title: "Compliance Intelligence System",
              shortDescription: "Intelligent compliance risk management system.",
            },
            {
              id: "fs",
              title: "Frumen Securitas",
              shortDescription: "Integrated intelligence and operational corporate security system.",
            },
            {
              id: "poas",
              title: "Process Optimization & Automation System",
              shortDescription: "Digital ecosystem for business process optimization and automation.",
            },
            {
              id: "lis",
              title: "Lean Intelligence System",
              shortDescription: "Comprehensive system for implementing lean manufacturing principles.",
            },
          ],
        }
      case "pl":
        return {
          title: "Nasze Projekty",
          description:
            "Opracowujemy i wdrażamy inteligentne systemy do optymalizacji procesów biznesowych i bezpieczeństwa.",
          projects: [
            {
              id: "lpis",
              title: "Loss Prevention Intelligence System",
              shortDescription: "Proaktywny model zarządzania i zapobiegania stratom.",
            },
            {
              id: "cis",
              title: "Compliance Intelligence System",
              shortDescription: "Inteligentny system zarządzania ryzykiem zgodności.",
            },
            {
              id: "fs",
              title: "Frumen Securitas",
              shortDescription: "Zintegrowany wywiadowczo-operacyjny system bezpieczeństwa korporacyjnego.",
            },
            {
              id: "poas",
              title: "Process Optimization & Automation System",
              shortDescription: "Cyfrowy ekosystem do optymalizacji i automatyzacji procesów biznesowych.",
            },
            {
              id: "lis",
              title: "Lean Intelligence System",
              shortDescription: "Kompleksowy system wdrażania zasad lean manufacturing.",
            },
          ],
        }
      case "de":
        return {
          title: "Unsere Projekte",
          description:
            "Wir entwickeln und implementieren intelligente Systeme zur Optimierung von Geschäftsprozessen und Sicherheit.",
          projects: [
            {
              id: "lpis",
              title: "Loss Prevention Intelligence System",
              shortDescription: "Ein proaktives Modell für Verlustmanagement und -prävention.",
            },
            {
              id: "cis",
              title: "Compliance Intelligence System",
              shortDescription: "Intelligentes Compliance-Risikomanagement-System.",
            },
            {
              id: "fs",
              title: "Frumen Securitas",
              shortDescription: "Integriertes Nachrichtendienst- und operatives Unternehmenssicherheitssystem.",
            },
            {
              id: "poas",
              title: "Process Optimization & Automation System",
              shortDescription: "Digitales Ökosystem zur Optimierung und Automatisierung von Geschäftsprozessen.",
            },
            {
              id: "lis",
              title: "Lean Intelligence System",
              shortDescription: "Umfassendes System zur Implementierung von Lean-Manufacturing-Prinzipien.",
            },
          ],
        }
      default:
        return {
          title: "Наши проекты",
          description:
            "Мы разрабатываем и внедряем интеллектуальные системы для оптимизации бизнес-процессов и обеспечения безопасности.",
          projects: [
            {
              id: "lpis",
              title: "Loss Prevention Intelligence System",
              shortDescription: "Проактивная модель управления убытками и предотвращения потерь.",
            },
            {
              id: "cis",
              title: "Compliance Intelligence System",
              shortDescription: "Интеллектуальная система управления комплаенс-рисками.",
            },
            {
              id: "fs",
              title: "Frumen Securitas",
              shortDescription: "Интегрированная разведывательно-оперативная система корпоративной безопасности.",
            },
            {
              id: "poas",
              title: "Process Optimization & Automation System",
              shortDescription: "Цифровая экосистема для оптимизации и автоматизации бизнес-процессов.",
            },
            {
              id: "lis",
              title: "Lean Intelligence System",
              shortDescription: "Комплексная система внедрения принципов бережливого производства.",
            },
          ],
        }
    }
  }

  const projectData = getProjectData()

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl font-light mb-4">{projectData.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">{projectData.description}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {projectData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                sections={getProjectSections(project.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
