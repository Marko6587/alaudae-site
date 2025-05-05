"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function Services() {
  const { t, language } = useLanguage()

  // Create translated service data with extended descriptions
  const getServiceData = () => {
    return [
      {
        title: t("service.infosec"),
        description: t("about.mission.text1"),
        features:
          language === "uk"
            ? [
                "Комплексний аудит інформаційної безпеки з використанням міжнародних стандартів ISO 27001, NIST та PCI DSS",
                "Розробка та впровадження політик і процедур безпеки відповідно до галузевих вимог",
                "Проектування та впровадження багаторівневих систем захисту інформації",
                "Тестування на проникнення (Penetration Testing) та оцінка вразливостей",
                "Захист від цілеспрямованих атак (APT) та сучасних кіберзагроз",
                "Навчання персоналу методам протидії соціальній інженерії",
                "Створення центру реагування на інциденти безпеки (CSIRT)",
                "Розробка планів забезпечення безперервності бізнесу та аварійного відновлення",
                "Захист критичної інфраструктури та промислових систем управління",
                "Впровадження систем управління привілейованим доступом (PAM)",
              ]
            : language === "en"
              ? [
                  "Comprehensive information security audit using international standards ISO 27001, NIST and PCI DSS",
                  "Development and implementation of security policies and procedures in accordance with industry requirements",
                  "Design and implementation of multi-level information protection systems",
                  "Penetration Testing and vulnerability assessment",
                  "Protection from targeted attacks (APT) and modern cyber threats",
                  "Training personnel in methods of countering social engineering",
                  "Creating a security incident response center (CSIRT)",
                  "Development of business continuity and disaster recovery plans",
                  "Protection of critical infrastructure and industrial control systems",
                  "Implementation of privileged access management systems (PAM)",
                ]
              : language === "pl"
                ? [
                    "Kompleksowy audyt bezpieczeństwa informacji z wykorzystaniem międzynarodowych standardów ISO 27001, NIST i PCI DSS",
                    "Opracowanie i wdrożenie polityk i procedur bezpieczeństwa zgodnie z wymaganiami branżowymi",
                    "Projektowanie i wdrażanie wielopoziomowych systemów ochrony informacji",
                    "Testy penetracyjne (Penetration Testing) i ocena podatności",
                    "Ochrona przed ukierunkowanymi atakami (APT) i nowoczesnymi cyberzagrożeniami",
                    "Szkolenie personelu w zakresie metod przeciwdziałania inżynierii społecznej",
                    "Tworzenie centrum reagowania na incydenty bezpieczeństwa (CSIRT)",
                    "Opracowanie planów ciągłości działania i odzyskiwania po awarii",
                    "Ochrona infrastruktury krytycznej i przemysłowych systemów sterowania",
                    "Wdrażanie systemów zarządzania uprzywilejowanym dostępem (PAM)",
                  ]
                : language === "de"
                  ? [
                      "Umfassende Informationssicherheitsprüfung nach internationalen Standards ISO 27001, NIST und PCI DSS",
                      "Entwicklung und Implementierung von Sicherheitsrichtlinien und -verfahren gemäß Branchenanforderungen",
                      "Entwurf und Implementierung mehrstufiger Informationsschutzsysteme",
                      "Penetrationstests und Schwachstellenbewertung",
                      "Schutz vor gezielten Angriffen (APT) und modernen Cyberbedrohungen",
                      "Schulung des Personals in Methoden zur Bekämpfung von Social Engineering",
                      "Einrichtung eines Reaktionszentrums für Sicherheitsvorfälle (CSIRT)",
                      "Entwicklung von Plänen für Geschäftskontinuität und Notfallwiederherstellung",
                      "Schutz kritischer Infrastrukturen und industrieller Steuerungssysteme",
                      "Implementierung von Systemen zur Verwaltung privilegierter Zugriffe (PAM)",
                    ]
                  : [
                      "Комплексный аудит информационной безопасности с использованием международных стандартов ISO 27001, NIST и PCI DSS",
                      "Разработка и внедрение политик и процедур безопасности в соответствии с отраслевыми требованиями",
                      "Проектирование и внедрение многоуровневых систем защиты информации",
                      "Тестирование на проникновение (Penetration Testing) и оценка уязвимостей",
                      "Защита от целенаправленных атак (APT) и современных киберугроз",
                      "Обучение персонала методам противодействия социальной инженерии",
                      "Создание центра реагирования на инциденты безопасности (CSIRT)",
                      "Разработка планов обеспечения непрерывности бизнеса и аварийного восстановления",
                      "Защита критической инфраструктуры и промышленных систем управления",
                      "Внедрение систем управления привилегированным доступом (PAM)",
                    ],
        benefits:
          language === "uk"
            ? [
                "Зниження ризиків витоку конфіденційної інформації та інтелектуальної власності",
                "Забезпечення відповідності вимогам регуляторів та уникнення штрафних санкцій",
                "Захист репутації компанії та довіри клієнтів",
                "Мінімізація фінансових втрат від інцидентів безпеки",
                "Підвищення стійкості бізнесу до кіберзагроз",
              ]
            : language === "en"
              ? [
                  "Reducing risks of confidential information and intellectual property leakage",
                  "Ensuring compliance with regulatory requirements and avoiding penalties",
                  "Protecting company reputation and customer trust",
                  "Minimizing financial losses from security incidents",
                  "Increasing business resilience to cyber threats",
                ]
              : language === "pl"
                ? [
                    "Zmniejszenie ryzyka wycieku informacji poufnych i własności intelektualnej",
                    "Zapewnienie zgodności z wymogami regulacyjnymi i unikanie kar",
                    "Ochrona reputacji firmy i zaufania klientów",
                    "Minimalizacja strat finansowych z incydentów bezpieczeństwa",
                    "Zwiększenie odporności biznesu na zagrożenia cybernetyczne",
                  ]
                : language === "de"
                  ? [
                      "Reduzierung der Risiken von Lecks vertraulicher Informationen und geistigen Eigentums",
                      "Sicherstellung der Einhaltung behördlicher Anforderungen und Vermeidung von Strafen",
                      "Schutz des Unternehmensrufs und des Kundenvertrauens",
                      "Minimierung finanzieller Verluste durch Sicherheitsvorfälle",
                      "Erhöhung der Widerstandsfähigkeit des Unternehmens gegen Cyberbedrohungen",
                    ]
                  : [
                      "Снижение рисков утечки конфиденциальной информации и интеллектуальной собственности",
                      "Обеспечение соответствия требованиям регуляторов и избежание штрафных санкций",
                      "Защита репутации компании и доверия клиентов",
                      "Минимизация финансовых потерь от инцидентов безопасности",
                      "Повышение устойчивости бизнеса к киберугрозам",
                    ],
      },
      {
        title: t("service.lossPrevention"),
        description:
          language === "uk"
            ? "Ефективні стратегії та методи запобігання втратам, спрямовані на захист активів компанії та мінімізацію збитків."
            : language === "en"
              ? "Effective strategies and methods for preventing losses, aimed at protecting company assets and minimizing losses."
              : language === "pl"
                ? "Skuteczne strategie i metody zapobiegania stratom, mające na celu ochronę aktywów firmy i minimalizację strat."
                : language === "de"
                  ? "Effektive Strategien und Methoden zur Verlustvermeidung, die darauf abzielen, Unternehmenswerte zu schützen und Verluste zu minimieren."
                  : "Эффективные стратегии и методы предотвращения потерь, направленные на защиту активов компании и минимизацию убытков.",
        features:
          language === "uk"
            ? [
                "Комплексний аналіз вразливостей та ризиків з використанням передових методологій",
                "Розробка та впровадження програм запобігання втратам, адаптованих під специфіку бізнесу",
                "Впровадження сучасних технічних засобів контролю та моніторингу",
                "Аудит процесів та виявлення потенційних точок витоку ресурсів",
                "Розробка KPI та метрик для оцінки ефективності програм запобігання втратам",
                "Навчання персоналу методам запобігання втратам та формування культури безпеки",
                "Проведення розслідувань інцидентів з використанням форензік-аналізу",
                "Впровадження систем контролю доступу та запобігання крадіжкам",
                "Оптимізація процесів управління запасами та активами",
                "Розробка стратегій мінімізації операційних втрат",
              ]
            : language === "en"
              ? [
                  "Comprehensive vulnerability and risk analysis using advanced methodologies",
                  "Development and implementation of loss prevention programs tailored to business specifics",
                  "Implementation of modern technical control and monitoring tools",
                  "Process audit and identification of potential resource leakage points",
                  "Development of KPIs and metrics to evaluate the effectiveness of loss prevention programs",
                  "Training personnel in loss prevention methods and forming a security culture",
                  "Conducting incident investigations using forensic analysis",
                  "Implementation of access control and theft prevention systems",
                  "Optimization of inventory and asset management processes",
                  "Development of strategies to minimize operational losses",
                ]
              : language === "pl"
                ? [
                    "Kompleksowa analiza podatności i ryzyka z wykorzystaniem zaawansowanych metodologii",
                    "Opracowanie i wdrożenie programów zapobiegania stratom dostosowanych do specyfiki biznesu",
                    "Wdrażanie nowoczesnych technicznych narzędzi kontroli i monitorowania",
                    "Audyt procesów i identyfikacja potencjalnych punktów wycieku zasobów",
                    "Opracowanie KPI i metryk do oceny skuteczności programów zapobiegania stratom",
                    "Szkolenie personelu w zakresie metod zapobiegania stratom i kształtowanie kultury bezpieczeństwa",
                    "Prowadzenie dochodzeń w sprawie incydentów z wykorzystaniem analizy śledczej",
                    "Wdrażanie systemów kontroli dostępu i zapobiegania kradzieżom",
                    "Optymalizacja procesów zarządzania zapasami i aktywami",
                    "Opracowanie strategii minimalizacji strat operacyjnych",
                  ]
                : language === "de"
                  ? [
                      "Umfassende Schwachstellen- und Risikoanalyse mit fortschrittlichen Methoden",
                      "Entwicklung und Implementierung von Verlustvermeidungsprogrammen, die auf die Geschäftsspezifika zugeschnitten sind",
                      "Implementierung moderner technischer Kontroll- und Überwachungsinstrumente",
                      "Prozessaudit und Identifizierung potenzieller Ressourcenleckpunkte",
                      "Entwicklung von KPIs und Metriken zur Bewertung der Wirksamkeit von Verlustvermeidungsprogrammen",
                      "Schulung des Personals in Methoden zur Verlustvermeidung und Bildung einer Sicherheitskultur",
                      "Durchführung von Vorfalluntersuchungen mittels forensischer Analyse",
                      "Implementierung von Zugangskontrollen und Diebstahlpräventionssystemen",
                      "Optimierung der Bestands- und Anlagenverwaltungsprozesse",
                      "Entwicklung von Strategien zur Minimierung betrieblicher Verluste",
                    ]
                  : [
                      "Комплексный анализ уязвимостей и рисков с использованием передовых методологий",
                      "Разработка и внедрение программ предотвращения потерь, адаптированных под специфику бизнеса",
                      "Внедрение современных технических средств контроля и мониторинга",
                      "Аудит процессов и выявление потенциальных точек утечки ресурсов",
                      "Разработка KPI и метрик для оценки эффективности программ предотвращения потерь",
                      "Обучение персонала методам предотвращения потерь и формирование культуры безопасности",
                      "Проведение расследований инцидентов с использованием форензик-анализа",
                      "Внедрение систем контроля доступа и предотвращения краж",
                      "Оптимизация процессов управления запасами и активами",
                      "Разработка стратегий минимизации операционных потерь",
                    ],
        benefits:
          language === "uk"
            ? [
                "Значне скорочення операційних втрат та підвищення рентабельності",
                "Підвищення прибутковості бізнесу за рахунок оптимізації процесів",
                "Покращення контролю над матеріальними та нематеріальними активами",
                "Створення культури відповідальності та усвідомленості серед співробітників",
                "Зниження ризиків шахрайства та зловживань",
              ]
            : language === "en"
              ? [
                  "Significant reduction in operational losses and increased profitability",
                  "Increased business profitability through process optimization",
                  "Improved control over tangible and intangible assets",
                  "Creating a culture of responsibility and awareness among employees",
                  "Reduced risks of fraud and abuse",
                ]
              : language === "pl"
                ? [
                    "Znaczne zmniejszenie strat operacyjnych i zwiększona rentowność",
                    "Zwiększona rentowność biznesu dzięki optymalizacji procesów",
                    "Lepsza kontrola nad aktywami materialnymi i niematerialnymi",
                    "Tworzenie kultury odpowiedzialności i świadomości wśród pracowników",
                    "Zmniejszone ryzyko oszustw i nadużyć",
                  ]
                : language === "de"
                  ? [
                      "Erhebliche Reduzierung der betrieblichen Verluste und erhöhte Rentabilität",
                      "Erhöhte Geschäftsprofitabilität durch Prozessoptimierung",
                      "Verbesserte Kontrolle über materielle und immaterielle Vermögenswerte",
                      "Schaffung einer Kultur der Verantwortung und des Bewusstseins unter den Mitarbeitern",
                      "Reduzierte Risiken von Betrug und Missbrauch",
                    ]
                  : [
                      "Значительное сокращение операционных потерь и повышение рентабельности",
                      "Повышение прибыльности бизнеса за счет оптимизации процессов",
                      "Улучшение контроля над материальными и нематериальными активами",
                      "Создание культуры ответственности и осознанности среди сотрудников",
                      "Снижение рисков мошенничества и злоупотреблений",
                    ],
      },
      // Continue with similar pattern for other services (compliance, audit, lean management, risk management)
      {
        title: t("service.compliance"),
        description:
          language === "uk"
            ? "Забезпечення відповідності діяльності організації вимогам законодавства, галузевим стандартам і внутрішнім політикам."
            : language === "en"
              ? "Ensuring that the organization's activities comply with legal requirements, industry standards, and internal policies."
              : language === "pl"
                ? "Zapewnienie zgodności działalności organizacji z wymogami prawnymi, standardami branżowymi i politykami wewnętrznymi."
                : language === "de"
                  ? "Sicherstellung, dass die Aktivitäten der Organisation den gesetzlichen Anforderungen, Branchenstandards und internen Richtlinien entsprechen."
                  : "Обеспечение соответствия деятельности организации требованиям законодательства, отраслевым стандартам и внутренним политикам.",
        features:
          language === "uk"
            ? [
                "Комплексний аналіз вимог регуляторів та оцінка поточного рівня відповідності",
                "Розробка та впровадження програм відповідності нормативним вимогам (GDPR, HIPAA, SOX та ін.)",
                "Створення та впровадження процесів контролю відповідності та управління ризиками",
                "Проведення регулярних внутрішніх аудитів та перевірок на відповідність",
                "Підготовка звітності для регулюючих органів та зацікавлених сторін",
                "Розробка та впровадження політик і процедур для забезпечення відповідності",
                "Навчання персоналу вимогам нормативних актів та внутрішніх політик",
                "Моніторинг змін у законодавстві та своєчасна адаптація процесів",
                "Впровадження автоматизованих систем управління відповідністю",
                "Проведення оцінки ризиків невідповідності та розробка планів щодо їх мінімізації",
              ]
            : language === "en"
              ? [
                  "Comprehensive analysis of regulatory requirements and assessment of current compliance level",
                  "Development and implementation of compliance programs for regulatory requirements (GDPR, HIPAA, SOX, etc.)",
                  "Creation and implementation of compliance control and risk management processes",
                  "Conducting regular internal audits and compliance checks",
                  "Preparation of reports for regulatory authorities and stakeholders",
                  "Development and implementation of policies and procedures to ensure compliance",
                  "Training personnel on regulatory requirements and internal policies",
                  "Monitoring changes in legislation and timely adaptation of processes",
                  "Implementation of automated compliance management systems",
                  "Conducting non-compliance risk assessments and developing plans to minimize them",
                ]
              : language === "pl"
                ? [
                    "Kompleksowa analiza wymogów regulacyjnych i ocena obecnego poziomu zgodności",
                    "Opracowanie i wdrożenie programów zgodności z wymogami regulacyjnymi (GDPR, HIPAA, SOX itp.)",
                    "Tworzenie i wdrażanie procesów kontroli zgodności i zarządzania ryzykiem",
                    "Przeprowadzanie regularnych audytów wewnętrznych i kontroli zgodności",
                    "Przygotowanie raportów dla organów regulacyjnych i interesariuszy",
                    "Opracowanie i wdrożenie polityk i procedur zapewniających zgodność",
                    "Szkolenie personelu w zakresie wymogów regulacyjnych i polityk wewnętrznych",
                    "Monitorowanie zmian w przepisach i terminowa adaptacja procesów",
                    "Wdrażanie zautomatyzowanych systemów zarządzania zgodnością",
                    "Przeprowadzanie ocen ryzyka niezgodności i opracowywanie planów ich minimalizacji",
                  ]
                : language === "de"
                  ? [
                      "Umfassende Analyse der regulatorischen Anforderungen und Bewertung des aktuellen Compliance-Niveaus",
                      "Entwicklung und Implementierung von Compliance-Programmen für regulatorische Anforderungen (DSGVO, HIPAA, SOX usw.)",
                      "Erstellung und Implementierung von Compliance-Kontroll- und Risikomanagementprozessen",
                      "Durchführung regelmäßiger interner Audits und Compliance-Prüfungen",
                      "Erstellung von Berichten für Aufsichtsbehörden und Interessengruppen",
                      "Entwicklung und Implementierung von Richtlinien und Verfahren zur Sicherstellung der Compliance",
                      "Schulung des Personals zu regulatorischen Anforderungen und internen Richtlinien",
                      "Überwachung von Gesetzesänderungen und zeitnahe Anpassung von Prozessen",
                      "Implementierung automatisierter Compliance-Management-Systeme",
                      "Durchführung von Risikobewertungen bei Nichteinhaltung und Entwicklung von Plänen zu deren Minimierung",
                    ]
                  : [
                      "Комплексный анализ требований регуляторов и оценка текущего уровня соответствия",
                      "Разработка и внедрение программ соответствия нормативным требованиям (GDPR, HIPAA, SOX и др.)",
                      "Создание и внедрение процессов контроля соответствия и управления рисками",
                      "Проведение регулярных внутренних аудитов и проверок на соответствие",
                      "Подготовка отчетности для регулирующих органов и заинтересованных сторон",
                      "Разработка и внедрение политик и процедур для обеспечения соответствия",
                      "Обучение персонала требованиям нормативных актов и внутренних политик",
                      "Мониторинг изменений в законодательстве и своевременная адаптация процессов",
                      "Внедрение автоматизированных систем управления соответствием",
                      "Проведение оценки рисков несоответствия и разработка планов по их минимизации",
                    ],
        benefits:
          language === "uk"
            ? [
                "Мінімізація ризиків штрафів, санкцій та правових наслідків",
                "Підвищення довіри клієнтів, партнерів та інвесторів",
                "Покращення репутації компанії на ринку та серед регуляторів",
                "Оптимізація бізнес-процесів та підвищення їх прозорості",
                "Створення конкурентної переваги за рахунок високих стандартів відповідності",
              ]
            : language === "en"
              ? [
                  "Minimizing risks of fines, sanctions, and legal consequences",
                  "Increasing trust of clients, partners, and investors",
                  "Improving company reputation in the market and among regulators",
                  "Optimizing business processes and increasing their transparency",
                  "Creating a competitive advantage through high compliance standards",
                ]
              : language === "pl"
                ? [
                    "Minimalizacja ryzyka kar, sankcji i konsekwencji prawnych",
                    "Zwiększenie zaufania klientów, partnerów i inwestorów",
                    "Poprawa reputacji firmy na rynku i wśród regulatorów",
                    "Optymalizacja procesów biznesowych i zwiększenie ich przejrzystości",
                    "Tworzenie przewagi konkurencyjnej dzięki wysokim standardom zgodności",
                  ]
                : language === "de"
                  ? [
                      "Minimierung der Risiken von Geldstrafen, Sanktionen und rechtlichen Konsequenzen",
                      "Steigerung des Vertrauens von Kunden, Partnern und Investoren",
                      "Verbesserung des Unternehmensrufs auf dem Markt und bei Aufsichtsbehörden",
                      "Optimierung von Geschäftsprozessen und Erhöhung ihrer Transparenz",
                      "Schaffung eines Wettbewerbsvorteils durch hohe Compliance-Standards",
                    ]
                  : [
                      "Минимизация рисков штрафов, санкций и правовых последствий",
                      "Повышение доверия клиентов, партнеров и инвесторов",
                      "Улучшение репутации компании на рынке и среди регуляторов",
                      "Оптимизация бизнес-процессов и повышение их прозрачности",
                      "Создание конкурентного преимущества за счет высоких стандартов соответствия",
                    ],
      },
      {
        title: t("service.audit"),
        description:
          language === "uk"
            ? "Комплексна оцінка ефективності систем управління, контролю та процесів в організації."
            : language === "en"
              ? "Comprehensive assessment of the effectiveness of management systems, controls, and processes in the organization."
              : language === "pl"
                ? "Kompleksowa ocena skuteczności systemów zarządzania, kontroli i procesów w organizacji."
                : language === "de"
                  ? "Umfassende Bewertung der Wirksamkeit von Managementsystemen, Kontrollen und Prozessen in der Organisation."
                  : "Комплексная оценка эффективности систем управления, контроля и процессов в организации.",
        features:
          language === "uk"
            ? [
                "Проведення внутрішнього аудиту бізнес-процесів з використанням міжнародних стандартів",
                "Зовнішній аудит відповідності галузевим та міжнародним стандартам",
                "Оцінка ефективності внутрішніх контрольних процедур та механізмів",
                "Виявлення областей для оптимізації та підвищення ефективності",
                "Розробка детальних рекомендацій щодо вдосконалення процесів",
                "Аудит інформаційних систем та ІТ-інфраструктури",
                "Оцінка ефективності управління ризиками та корпоративного управління",
                "Проведення спеціалізованих аудитів (екологічний, соціальний, етичний)",
                "Аудит ланцюгів поставок та взаємодії з контрагентами",
                "Розробка програм постійного моніторингу та контролю якості",
              ]
            : language === "en"
              ? [
                  "Conducting internal audit of business processes using international standards",
                  "External audit of compliance with industry and international standards",
                  "Evaluation of the effectiveness of internal control procedures and mechanisms",
                  "Identification of areas for optimization and efficiency improvement",
                  "Development of detailed recommendations for process improvement",
                  "Audit of information systems and IT infrastructure",
                  "Evaluation of risk management and corporate governance effectiveness",
                  "Conducting specialized audits (environmental, social, ethical)",
                  "Audit of supply chains and interaction with counterparties",
                  "Development of continuous monitoring and quality control programs",
                ]
              : language === "pl"
                ? [
                    "Przeprowadzanie wewnętrznego audytu procesów biznesowych z wykorzystaniem standardów międzynarodowych",
                    "Zewnętrzny audyt zgodności ze standardami branżowymi i międzynarodowymi",
                    "Ocena skuteczności wewnętrznych procedur i mechanizmów kontrolnych",
                    "Identyfikacja obszarów do optymalizacji i poprawy efektywności",
                    "Opracowanie szczegółowych rekomendacji dotyczących usprawnienia procesów",
                    "Audyt systemów informatycznych i infrastruktury IT",
                    "Ocena skuteczności zarządzania ryzykiem i ładu korporacyjnego",
                    "Przeprowadzanie audytów specjalistycznych (środowiskowych, społecznych, etycznych)",
                    "Audyt łańcuchów dostaw i interakcji z kontrahentami",
                    "Opracowanie programów ciągłego monitorowania i kontroli jakości",
                  ]
                : language === "de"
                  ? [
                      "Durchführung interner Audits von Geschäftsprozessen nach internationalen Standards",
                      "Externes Audit der Einhaltung von Branchen- und internationalen Standards",
                      "Bewertung der Wirksamkeit interner Kontrollverfahren und -mechanismen",
                      "Identifizierung von Bereichen für Optimierung und Effizienzsteigerung",
                      "Entwicklung detaillierter Empfehlungen zur Prozessverbesserung",
                      "Audit von Informationssystemen und IT-Infrastruktur",
                      "Bewertung der Wirksamkeit des Risikomanagements und der Unternehmensführung",
                      "Durchführung spezialisierter Audits (Umwelt, Soziales, Ethik)",
                      "Audit von Lieferketten und Interaktion mit Geschäftspartnern",
                      "Entwicklung von Programmen zur kontinuierlichen Überwachung und Qualitätskontrolle",
                    ]
                  : [
                      "Проведение внутреннего аудита бизнес-процессов с использованием международных стандартов",
                      "Внешний аудит соответствия отраслевым и международным стандартам",
                      "Оценка эффективности внутренних контрольных процедур и механизмов",
                      "Выявление областей для оптимизации и повышения эффективности",
                      "Разработка детальных рекомендаций по совершенствованию процессов",
                      "Аудит информационных систем и ИТ-инфраструктуры",
                      "Оценка эффективности управления рисками и корпоративного управления",
                      "Проведение специализированных аудитов (экологический, социальный, этический)",
                      "Аудит цепочек поставок и взаимодействия с контрагентами",
                      "Разработка программ постоянного мониторинга и контроля качества",
                    ],
        benefits:
          language === "uk"
            ? [
                "Підвищення ефективності та оптимізація бізнес-процесів",
                "Виявлення прихованих проблем, ризиків та можливостей для покращення",
                "Вдосконалення системи внутрішнього контролю та управління",
                "Забезпечення достовірності фінансової та управлінської інформації",
                "Підвищення прозорості діяльності організації для зацікавлених сторін",
              ]
            : language === "en"
              ? [
                  "Improving efficiency and optimizing business processes",
                  "Identifying hidden problems, risks, and opportunities for improvement",
                  "Improving the internal control and management system",
                  "Ensuring the reliability of financial and management information",
                  "Increasing the transparency of the organization's activities for stakeholders",
                ]
              : language === "pl"
                ? [
                    "Poprawa efektywności i optymalizacja procesów biznesowych",
                    "Identyfikacja ukrytych problemów, ryzyk i możliwości poprawy",
                    "Doskonalenie systemu kontroli wewnętrznej i zarządzania",
                    "Zapewnienie wiarygodności informacji finansowych i zarządczych",
                    "Zwiększenie przejrzystości działań organizacji dla interesariuszy",
                  ]
                : language === "de"
                  ? [
                      "Verbesserung der Effizienz und Optimierung von Geschäftsprozessen",
                      "Identifizierung versteckter Probleme, Risiken und Verbesserungsmöglichkeiten",
                      "Verbesserung des internen Kontroll- und Managementsystems",
                      "Sicherstellung der Zuverlässigkeit von Finanz- und Managementinformationen",
                      "Erhöhung der Transparenz der Organisationsaktivitäten für Interessengruppen",
                    ]
                  : [
                      "Повышение эффективности и оптимизация бизнес-процессов",
                      "Выявление скрытых проблем, рисков и возможностей для улучшения",
                      "Совершенствование системы внутреннего контроля и управления",
                      "Обеспечение достоверности финансовой и управленческой информации",
                      "Повышение прозрачности деятельности организации для заинтересованных сторон",
                    ],
      },
      {
        title: t("service.leanManagement"),
        description:
          language === "uk"
            ? "Методологія управління, спрямована на оптимізацію процесів та усунення втрат для підвищення ефективності бізнесу."
            : language === "en"
              ? "Management methodology aimed at optimizing processes and eliminating waste to improve business efficiency."
              : language === "pl"
                ? "Metodologia zarządzania mająca na celu optymalizację procesów i eliminację strat w celu poprawy efektywności biznesowej."
                : language === "de"
                  ? "Managementmethodik zur Optimierung von Prozessen und Beseitigung von Verschwendung zur Verbesserung der Geschäftseffizienz."
                  : "Методология управления, направленная на оптимизацию процессов и устранение потерь для повышения эффективности бизнеса.",
        features:
          language === "uk"
            ? [
                "Аналіз та оптимізація бізнес-процесів",
                "Впровадження принципів бережливого виробництва",
                "Навчання персоналу методам Lean",
                "Розробка системи безперервного вдосконалення",
                "Моніторинг та оцінка результатів",
                "Комплексний аналіз та картування потоку створення цінності (Value Stream Mapping)",
                "Впровадження принципів бережливого виробництва та філософії Кайдзен",
                "Розробка та впровадження системи 5S для організації робочого простору",
                "Навчання персоналу методології Lean та інструментам безперервного вдосконалення",
                "Впровадження методології Six Sigma для мінімізації дефектів та відхилень",
              ]
            : language === "en"
              ? [
                  "Analysis and optimization of business processes",
                  "Implementation of lean manufacturing principles",
                  "Training personnel in Lean methods",
                  "Development of a continuous improvement system",
                  "Monitoring and evaluation of results",
                  "Comprehensive analysis and Value Stream Mapping",
                  "Implementation of lean manufacturing principles and Kaizen philosophy",
                  "Development and implementation of the 5S system for workplace organization",
                  "Training personnel in Lean methodology and continuous improvement tools",
                  "Implementation of Six Sigma methodology to minimize defects and deviations",
                ]
              : language === "pl"
                ? [
                    "Analiza i optymalizacja procesów biznesowych",
                    "Wdrażanie zasad lean manufacturing",
                    "Szkolenie personelu w metodach Lean",
                    "Opracowanie systemu ciągłego doskonalenia",
                    "Monitorowanie i ocena wyników",
                    "Kompleksowa analiza i mapowanie strumienia wartości (Value Stream Mapping)",
                    "Wdrażanie zasad lean manufacturing i filozofii Kaizen",
                    "Opracowanie i wdrożenie systemu 5S do organizacji miejsca pracy",
                    "Szkolenie personelu w metodologii Lean i narzędziach ciągłego doskonalenia",
                    "Wdrażanie metodologii Six Sigma w celu minimalizacji wad i odchyleń",
                  ]
                : language === "de"
                  ? [
                      "Analyse und Optimierung von Geschäftsprozessen",
                      "Implementierung von Lean-Manufacturing-Prinzipien",
                      "Schulung des Personals in Lean-Methoden",
                      "Entwicklung eines kontinuierlichen Verbesserungssystems",
                      "Überwachung und Bewertung der Ergebnisse",
                      "Umfassende Analyse und Wertstromkartierung (Value Stream Mapping)",
                      "Implementierung von Lean-Manufacturing-Prinzipien und Kaizen-Philosophie",
                      "Entwicklung und Implementierung des 5S-Systems zur Arbeitsplatzorganisation",
                      "Schulung des Personals in Lean-Methodik und Werkzeugen zur kontinuierlichen Verbesserung",
                      "Implementierung der Six-Sigma-Methodik zur Minimierung von Defekten und Abweichungen",
                    ]
                  : [
                      "Анализ и оптимизация бизнес-процессов",
                      "Внедрение принципов бережливого производства",
                      "Обучение персонала методам Lean",
                      "Разработка системы непрерывного совершенствования",
                      "Мониторинг и оценка результатов",
                      "Комплексный анализ и картирование потока создания ценности (Value Stream Mapping)",
                      "Внедрение принципов бережливого производства и философии Кайдзен",
                      "Разработка и внедрение системы 5S для организации рабочего пространства",
                      "Обучение персонала методологии Lean и инструментам непрерывного совершенствования",
                      "Внедрение методологии Six Sigma для минимизации дефектов и отклонений",
                    ],
        benefits:
          language === "uk"
            ? [
                "Скорочення витрат та втрат",
                "Підвищення якості продукції та послуг",
                "Прискорення процесів та скорочення часу виконання",
                "Підвищення задоволеності клієнтів",
                "Значне скорочення витрат та усунення непродуктивних втрат",
                "Підвищення якості продукції та послуг, зниження кількості дефектів",
                "Прискорення процесів та скорочення часу виконання операцій",
                "Підвищення задоволеності клієнтів та конкурентоспроможності",
                "Створення культури безперервного вдосконалення в організації",
              ]
            : language === "en"
              ? [
                  "Reduction of costs and losses",
                  "Improvement of product and service quality",
                  "Acceleration of processes and reduction of execution time",
                  "Increased customer satisfaction",
                  "Significant reduction in costs and elimination of unproductive losses",
                  "Improvement of product and service quality, reduction in the number of defects",
                  "Acceleration of processes and reduction of operation execution time",
                  "Increased customer satisfaction and competitiveness",
                  "Creating a culture of continuous improvement in the organization",
                ]
              : language === "pl"
                ? [
                    "Redukcja kosztów i strat",
                    "Poprawa jakości produktów i usług",
                    "Przyspieszenie procesów i skrócenie czasu realizacji",
                    "Zwiększona satysfakcja klientów",
                    "Znaczna redukcja kosztów i eliminacja nieproduktywnych strat",
                    "Poprawa jakości produktów i usług, zmniejszenie liczby wad",
                    "Przyspieszenie procesów i skrócenie czasu wykonania operacji",
                    "Zwiększona satysfakcja klientów i konkurencyjność",
                    "Tworzenie kultury ciągłego doskonalenia w organizacji",
                  ]
                : language === "de"
                  ? [
                      "Reduzierung von Kosten und Verlusten",
                      "Verbesserung der Produkt- und Servicequalität",
                      "Beschleunigung von Prozessen und Verkürzung der Ausführungszeit",
                      "Erhöhte Kundenzufriedenheit",
                      "Erhebliche Kostenreduzierung und Beseitigung unproduktiver Verluste",
                      "Verbesserung der Produkt- und Servicequalität, Reduzierung der Anzahl von Defekten",
                      "Beschleunigung von Prozessen und Verkürzung der Operationsausführungszeit",
                      "Erhöhte Kundenzufriedenheit und Wettbewerbsfähigkeit",
                      "Schaffung einer Kultur der kontinuierlichen Verbesserung in der Organisation",
                    ]
                  : [
                      "Сокращение издержек и потерь",
                      "Повышение качества продукции и услуг",
                      "Ускорение процессов и сокращение времени выполнения",
                      "Повышение удовлетворенности клиентов",
                      "Значительное сокращение издержек и устранение непроизводительных потерь",
                      "Повышение качества продукции и услуг, снижение количества дефектов",
                      "Ускорение процессов и сокращение времени выполнения операций",
                      "Повышение удовлетворенности клиентов и конкурентоспособности",
                      "Создание культуры непрерывного совершенствования в организации",
                    ],
      },
      {
        title: t("service.riskManagement"),
        description:
          language === "uk"
            ? "Систематичний підхід до виявлення, оцінки та управління ризиками, які можуть вплинути на досягнення цілей організації."
            : language === "en"
              ? "A systematic approach to identifying, assessing, and managing risks that may affect the achievement of the organization's objectives."
              : language === "pl"
                ? "Systematyczne podejście do identyfikacji, oceny i zarządzania ryzykami, które mogą wpłynąć na osiągnięcie celów organizacji."
                : language === "de"
                  ? "Ein systematischer Ansatz zur Identifizierung, Bewertung und Steuerung von Risiken, die die Erreichung der Ziele der Organisation beeinträchtigen können."
                  : "Систематический подход к выявлению, оценке и управлению рисками, которые могут повлиять на достижение целей организации.",
        features:
          language === "uk"
            ? [
                "Ідентифікація та аналіз ризиків",
                "Розробка стратегій управління ризиками",
                "Впровадження контрольних процедур",
                "Моніторинг та звітність щодо ризиків",
                "Навчання персоналу",
                "Комплексна ідентифікація та аналіз ризиків з використанням передових методологій",
                "Розробка та впровадження стратегій управління ризиками, адаптованих під специфіку бізнесу",
                "Впровадження ефективних контрольних процедур для мінімізації ризиків",
                "Створення системи моніторингу та регулярної звітності щодо ризиків",
                "Навчання персоналу методам виявлення та управління ризиками",
              ]
            : language === "en"
              ? [
                  "Identification and analysis of risks",
                  "Development of risk management strategies",
                  "Implementation of control procedures",
                  "Risk monitoring and reporting",
                  "Personnel training",
                  "Comprehensive identification and analysis of risks using advanced methodologies",
                  "Development and implementation of risk management strategies tailored to business specifics",
                  "Implementation of effective control procedures to minimize risks",
                  "Creation of a monitoring system and regular risk reporting",
                  "Training personnel in methods of risk identification and management",
                ]
              : language === "pl"
                ? [
                    "Identyfikacja i analiza ryzyk",
                    "Opracowanie strategii zarządzania ryzykiem",
                    "Wdrażanie procedur kontrolnych",
                    "Monitorowanie i raportowanie ryzyka",
                    "Szkolenie personelu",
                    "Kompleksowa identyfikacja i analiza ryzyk z wykorzystaniem zaawansowanych metodologii",
                    "Opracowanie i wdrożenie strategii zarządzania ryzykiem dostosowanych do specyfiki biznesu",
                    "Wdrażanie skutecznych procedur kontrolnych w celu minimalizacji ryzyka",
                    "Tworzenie systemu monitorowania i regularnego raportowania ryzyka",
                    "Szkolenie personelu w zakresie metod identyfikacji i zarządzania ryzykiem",
                  ]
                : language === "de"
                  ? [
                      "Identifizierung und Analyse von Risiken",
                      "Entwicklung von Risikomanagementstrategien",
                      "Implementierung von Kontrollverfahren",
                      "Risikoüberwachung und -berichterstattung",
                      "Personalschulung",
                      "Umfassende Identifizierung und Analyse von Risiken mit fortschrittlichen Methoden",
                      "Entwicklung und Implementierung von Risikomanagementstrategien, die auf die Geschäftsspezifika zugeschnitten sind",
                      "Implementierung effektiver Kontrollverfahren zur Risikominimierung",
                      "Einrichtung eines Überwachungssystems und regelmäßiger Risikoberichterstattung",
                      "Schulung des Personals in Methoden zur Risikoidentifizierung und -management",
                    ]
                  : [
                      "Идентификация и анализ рисков",
                      "Разработка стратегий управления рисками",
                      "Внедрение контрольных процедур",
                      "Мониторинг и отчетность по рискам",
                      "Обучение персонала",
                      "Комплексная идентификация и анализ рисков с использованием передовых методологий",
                      "Разработка и внедрение стратегий управления рисками, адаптированных под специфику бизнеса",
                      "Внедрение эффективных контрольных процедур для минимизации рисков",
                      "Создание системы мониторинга и регулярной отчетности по рискам",
                      "Обучение персонала методам выявления и управления рисками",
                    ],
        benefits:
          language === "uk"
            ? [
                "Зниження ймовірності та наслідків негативних подій",
                "Підвищення стійкості бізнесу",
                "Покращення процесу прийняття рішень",
                "Оптимізація розподілу ресурсів",
                "Значне зниження ймовірності та наслідків негативних подій",
                "Підвищення стійкості бізнесу до зовнішніх та внутрішніх загроз",
                "Покращення процесу прийняття рішень на всіх рівнях організації",
                "Оптимізація розподілу ресурсів з урахуванням пріоритетності ризиків",
                "Підвищення довіри інвесторів, клієнтів та інших зацікавлених сторін",
              ]
            : language === "en"
              ? [
                  "Reducing the probability and consequences of negative events",
                  "Increasing business resilience",
                  "Improving the decision-making process",
                  "Optimizing resource allocation",
                  "Significant reduction in the probability and consequences of negative events",
                  "Increasing business resilience to external and internal threats",
                  "Improving the decision-making process at all levels of the organization",
                  "Optimizing resource allocation taking into account risk priorities",
                  "Increasing the trust of investors, clients, and other stakeholders",
                ]
              : language === "pl"
                ? [
                    "Zmniejszenie prawdopodobieństwa i konsekwencji negatywnych zdarzeń",
                    "Zwiększenie odporności biznesu",
                    "Poprawa procesu podejmowania decyzji",
                    "Optymalizacja alokacji zasobów",
                    "Znaczne zmniejszenie prawdopodobieństwa i konsekwencji negatywnych zdarzeń",
                    "Zwiększenie odporności biznesu na zagrożenia zewnętrzne i wewnętrzne",
                    "Poprawa procesu podejmowania decyzji na wszystkich poziomach organizacji",
                    "Optymalizacja alokacji zasobów z uwzględnieniem priorytetów ryzyka",
                    "Zwiększenie zaufania inwestorów, klientów i innych interesariuszy",
                  ]
                : language === "de"
                  ? [
                      "Reduzierung der Wahrscheinlichkeit und Folgen negativer Ereignisse",
                      "Erhöhung der Geschäftsresilienz",
                      "Verbesserung des Entscheidungsprozesses",
                      "Optimierung der Ressourcenzuweisung",
                      "Erhebliche Reduzierung der Wahrscheinlichkeit und Folgen negativer Ereignisse",
                      "Erhöhung der Widerstandsfähigkeit des Unternehmens gegen externe und interne Bedrohungen",
                      "Verbesserung des Entscheidungsprozesses auf allen Ebenen der Organisation",
                      "Optimierung der Ressourcenzuweisung unter Berücksichtigung von Risikoprioritäten",
                      "Steigerung des Vertrauens von Investoren, Kunden und anderen Interessengruppen",
                    ]
                  : [
                      "Снижение вероятности и последствий негативных событий",
                      "Повышение устойчивости бизнеса",
                      "Улучшение процесса принятия решений",
                      "Оптимизация распределения ресурсов",
                      "Значительное снижение вероятности и последствий негативных событий",
                      "Повышение устойчивости бизнеса к внешним и внутренним угрозам",
                      "Улучшение процесса принятия решений на всех уровнях организации",
                      "Оптимизация распределения ресурсов с учетом приоритетности рисков",
                      "Повышение доверия инвесторов, клиентов и других заинтересованных сторон",
                    ],
      },
    ]
  }

  const serviceData = getServiceData()

  return (
    <main className="min-h-screen py-24 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">{t("services.title")}</h1>

        <div className="space-y-16">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <h3 className="text-lg font-medium mb-3">{t("services.features")}:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-lg font-medium mb-3">{t("services.benefits")}:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
