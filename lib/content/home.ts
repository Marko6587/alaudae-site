import type { Locale } from "./types"

export interface HomeCopy {
  eyebrow: string
  headline: string
  subtitle: string
  description: string
  cta: string
  insightsCta: string
  practicesLabel: string
  practicesTitle: string
  practicesText: string
  practicesCta: string
  approachLabel: string
  approachTitle: string
  approachSteps: { title: string; description: string }[]
  insightsLabel: string
  insightsTitle: string
  insightsLink: string
  contact: { title: string; description: string; button: string }
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    eyebrow: "Corporate & cyber security consulting",
    headline: "Investing in security today is preventing losses tomorrow",
    subtitle: "This is the foundation of our corporate culture and approach to digital security",
    description:
      "Alaudae builds security programmes that hold up in practice: cyber defence, corporate security, audits, fraud and loss prevention, and the staff training that makes all of it stick.",
    cta: "Explore services",
    insightsCta: "Read insights",
    practicesLabel: "Practice areas",
    practicesTitle: "Six disciplines, one security programme",
    practicesText:
      "Most incidents are not purely technical. We work across the digital, physical and human layers of your business so that controls reinforce each other instead of leaving gaps between departments.",
    practicesCta: "See all services",
    approachLabel: "How we work",
    approachTitle: "Assess, prioritise, implement, verify",
    approachSteps: [
      {
        title: "Assess",
        description:
          "We map your assets, processes and threat exposure, then measure the current controls against the risk they are meant to carry.",
      },
      {
        title: "Prioritise",
        description:
          "Findings are ranked by business impact and effort, so the first quarter of work removes the largest share of real risk.",
      },
      {
        title: "Implement",
        description:
          "We work alongside your teams to deploy controls, rewrite procedures and train the people who operate them day to day.",
      },
      {
        title: "Verify",
        description:
          "Retesting, tabletop exercises and metrics confirm that each control performs under pressure and keeps performing.",
      },
    ],
    insightsLabel: "Insights",
    insightsTitle: "Notes from our practice",
    insightsLink: "Read the article",
    contact: {
      title: "Ready to secure your business?",
      description:
        "Tell us where you are exposed, or ask us to find out. We will come back with a scoped, prioritised plan rather than a product list.",
      button: "Get in touch",
    },
  },
  uk: {
    eyebrow: "Консалтинг з корпоративної та кібербезпеки",
    headline: "Інвестиція в безпеку сьогодні — це запобігання втратам завтра",
    subtitle: "Це основа нашої корпоративної культури та підходу до цифрової безпеки",
    description:
      "Alaudae будує програми безпеки, які працюють на практиці: кіберзахист, корпоративна безпека, аудити, протидія шахрайству та втратам, а також навчання персоналу, яке закріплює результат.",
    cta: "Переглянути послуги",
    insightsCta: "Читати блог",
    practicesLabel: "Напрями практики",
    practicesTitle: "Шість дисциплін, одна програма безпеки",
    practicesText:
      "Більшість інцидентів не є суто технічними. Ми працюємо з цифровим, фізичним та людським рівнями бізнесу, щоб контролі підсилювали один одного, а не залишали прогалини між підрозділами.",
    practicesCta: "Усі послуги",
    approachLabel: "Як ми працюємо",
    approachTitle: "Оцінити, розставити приоритети, впровадити, перевірити",
    approachSteps: [
      {
        title: "Оцінка",
        description:
          "Ми описуємо ваші активи, процеси та поверхню атаки, після чого зіставляємо наявні контролі з ризиком, який вони мають закривати.",
      },
      {
        title: "Приоритети",
        description:
          "Висновки ранжуються за впливом на бізнес та витратами, тому перший квартал робіт знімає найбільшу частку реального ризику.",
      },
      {
        title: "Впровадження",
        description:
          "Разом із вашими командами ми впроваджуємо контролі, переписуємо процедури та навчаємо людей, які працюють із ними щодня.",
      },
      {
        title: "Перевірка",
        description:
          "Повторне тестування, штабні навчання та метрики підтверджують, що кожен контроль працює під тиском і продовжує працювати.",
      },
    ],
    insightsLabel: "Матеріали",
    insightsTitle: "Нотатки з нашої практики",
    insightsLink: "Читати статтю",
    contact: {
      title: "Готові захистити свій бізнес?",
      description:
        "Розкажіть, де ви уразливі, або доручіть нам це з'ясувати. Ми повернемося з чітко визначеним планом за приоритетами, а не зі списком продуктів.",
      button: "Зв'язатися з нами",
    },
  },
  pl: {
    eyebrow: "Doradztwo w zakresie bezpieczeństwa korporacyjnego i cyberbezpieczeństwa",
    headline: "Inwestycja w bezpieczeństwo dziś to zapobieganie stratom jutro",
    subtitle: "To fundament naszej kultury organizacyjnej i podejścia do bezpieczeństwa cyfrowego",
    description:
      "Alaudae buduje programy bezpieczeństwa, które sprawdzają się w praktyce: cyberobrona, bezpieczeństwo korporacyjne, audyty, przeciwdziałanie nadużyciom i stratom oraz szkolenia pracowników, które to utrwalają.",
    cta: "Zobacz usługi",
    insightsCta: "Czytaj blog",
    practicesLabel: "Obszary praktyki",
    practicesTitle: "Sześć dyscyplin, jeden program bezpieczeństwa",
    practicesText:
      "Większość incydentów nie jest wyłącznie techniczna. Pracujemy na cyfrowej, fizycznej i ludzkiej warstwie firmy, aby mechanizmy kontrolne wzajemnie się wzmacniały, a nie zostawiały luk między działami.",
    practicesCta: "Wszystkie usługi",
    approachLabel: "Jak pracujemy",
    approachTitle: "Ocena, priorytety, wdrożenie, weryfikacja",
    approachSteps: [
      {
        title: "Ocena",
        description:
          "Mapujemy aktywa, procesy i powierzchnię ataku, a następnie porównujemy istniejące kontrole z ryzykiem, które mają pokrywać.",
      },
      {
        title: "Priorytety",
        description:
          "Ustalenia porządkujemy według wpływu na biznes i nakładu pracy, dzięki czemu pierwszy kwartał usuwa największą część realnego ryzyka.",
      },
      {
        title: "Wdrożenie",
        description:
          "Wspólnie z waszymi zespołami wdrażamy kontrole, przepisujemy procedury i szkolimy ludzi, którzy obsługują je codziennie.",
      },
      {
        title: "Weryfikacja",
        description:
          "Ponowne testy, ćwiczenia sztabowe i metryki potwierdzają, że każda kontrola działa pod presją i działa nadal.",
      },
    ],
    insightsLabel: "Publikacje",
    insightsTitle: "Notatki z naszej praktyki",
    insightsLink: "Czytaj artykuł",
    contact: {
      title: "Gotowi zabezpieczyć swoją firmę?",
      description:
        "Powiedzcie nam, gdzie jesteście narażeni, albo zlećcie nam ustalenie tego. Wrócimy z konkretnym, uporządkowanym planem, a nie listą produktów.",
      button: "Skontaktuj się z nami",
    },
  },
  de: {
    eyebrow: "Beratung für Unternehmens- und Cybersicherheit",
    headline: "Heute in Sicherheit investieren heißt morgen Verluste vermeiden",
    subtitle: "Das ist die Grundlage unserer Unternehmenskultur und unseres Ansatzes für digitale Sicherheit",
    description:
      "Alaudae baut Sicherheitsprogramme, die in der Praxis halten: Cyberabwehr, Unternehmenssicherheit, Audits, Betrugs- und Verlustprävention sowie die Mitarbeiterschulung, die alles verankert.",
    cta: "Leistungen ansehen",
    insightsCta: "Blog lesen",
    practicesLabel: "Praxisfelder",
    practicesTitle: "Sechs Disziplinen, ein Sicherheitsprogramm",
    practicesText:
      "Die meisten Vorfälle sind nicht rein technisch. Wir arbeiten auf der digitalen, physischen und menschlichen Ebene Ihres Unternehmens, damit Kontrollen sich gegenseitig verstärken statt Lücken zwischen Abteilungen zu lassen.",
    practicesCta: "Alle Leistungen",
    approachLabel: "So arbeiten wir",
    approachTitle: "Bewerten, priorisieren, umsetzen, überprüfen",
    approachSteps: [
      {
        title: "Bewerten",
        description:
          "Wir erfassen Ihre Assets, Prozesse und Angriffsfläche und messen die bestehenden Kontrollen an dem Risiko, das sie tragen sollen.",
      },
      {
        title: "Priorisieren",
        description:
          "Befunde werden nach Geschäftswirkung und Aufwand geordnet, sodass das erste Quartal den größten Teil des realen Risikos beseitigt.",
      },
      {
        title: "Umsetzen",
        description:
          "Gemeinsam mit Ihren Teams führen wir Kontrollen ein, schreiben Verfahren neu und schulen die Menschen, die sie täglich bedienen.",
      },
      {
        title: "Überprüfen",
        description:
          "Nachtests, Tabletop-Übungen und Metriken belegen, dass jede Kontrolle unter Druck funktioniert und weiter funktioniert.",
      },
    ],
    insightsLabel: "Einblicke",
    insightsTitle: "Notizen aus unserer Praxis",
    insightsLink: "Artikel lesen",
    contact: {
      title: "Bereit, Ihr Unternehmen zu schützen?",
      description:
        "Sagen Sie uns, wo Sie exponiert sind, oder lassen Sie es uns herausfinden. Wir kommen mit einem klar umrissenen, priorisierten Plan zurück, nicht mit einer Produktliste.",
      button: "Kontakt aufnehmen",
    },
  },
}
