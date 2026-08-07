import type { ServicesCopy } from "../types"

export const servicesDe: ServicesCopy = {
  title: "Leistungen",
  description:
    "Sechs Fachbereiche, die den gesamten Perimeter einer modernen Organisation abdecken — von Netzwerkpaketen bis zur Laderampe. Mandate werden einzeln beauftragt oder zu einem Sicherheitsprogramm kombiniert.",
  categoriesLabel: "Fachbereiche",
  deliverablesLabel: "Was Sie erhalten",
  ctaTitle: "Unsicher, wo Sie beginnen sollen?",
  ctaText:
    "Die meisten Mandanten starten mit einem diagnostischen Audit. Wir erfassen Ihre Exposition über alle sechs Bereiche und liefern eine priorisierte Roadmap mit Kostenschätzung.",
  ctaButton: "Diagnose anfragen",
  categories: [
    {
      id: "cybersecurity",
      label: "Cybersicherheit",
      title: "Cybersicherheit",
      tagline: "Offensive Tests, kontinuierliches Monitoring und Incident Response.",
      description:
        "Wir behandeln Ihre Infrastruktur so, wie es ein motivierter Angreifer täte, und bauen anschließend die Erkennungs- und Reaktionsfähigkeit auf, die ihn beim zweiten Mal stoppt. Abgedeckt werden lokale Netzwerke, Cloud-Workloads, Anwendungen und Endgeräte.",
      items: [
        {
          id: "penetration-testing",
          title: "Penetrationstests & Red Teaming",
          description:
            "Zielbasierte Angreifersimulation gegen Netzwerke, Web- und Mobile-Anwendungen, APIs und Funkinfrastruktur. Red-Team-Mandate umfassen Social Engineering und physische Zugangsversuche, sofern autorisiert.",
          deliverables: [
            "Management-Zusammenfassung mit Bewertung der Geschäftsauswirkung",
            "Reproduzierbare technische Befunde mit Exploit-Nachweis",
            "Maßnahmenplan und kostenloser Nachtest behobener Schwachstellen",
          ],
        },
        {
          id: "managed-detection",
          title: "Managed Detection & Response",
          description:
            "Eine 24/7-Überwachung, aufgebaut auf Ihrer bestehenden Telemetrie. Wir passen Erkennungsregeln an Ihre Umgebung an, priorisieren Alarme und begrenzen bestätigte Vorfälle, bevor sie sich lateral ausbreiten.",
          deliverables: [
            "SIEM/EDR-Einführung, Tuning und Use-Case-Bibliothek",
            "Durchgehende Alarmbearbeitung mit definierten Eskalationswegen",
            "Monatliches Threat-Reporting und Kennzahlen zur Erkennungsabdeckung",
          ],
        },
        {
          id: "incident-response",
          title: "Incident Response & digitale Forensik",
          description:
            "Schnelle Eindämmung laufender Angriffe, Ransomware und Innentäter-Vorfälle, gefolgt von forensisch belastbarer Untersuchung, die vor Gericht und bei Versicherern Bestand hat.",
          deliverables: [
            "Reaktionsteam auf Abruf mit vertraglichen Eintreffzeiten",
            "Forensische Sicherung, Zeitlinien-Rekonstruktion und Attribution",
            "Aufsichtsfähiger Vorfallsbericht und Lessons-Learned-Workshop",
          ],
        },
        {
          id: "cloud-security",
          title: "Cloud- & Anwendungssicherheit",
          description:
            "Architekturprüfung und Härtung für Cloud-Umgebungen und Ihre Software — Identitätsgrenzen, Secrets-Handling, Pipeline-Integrität und sichere Standardkonfigurationen.",
          deliverables: [
            "Prüfung von Cloud-Konfiguration und IAM-Berechtigungen",
            "Integration eines sicheren SDLC mit automatisierten Pipeline-Prüfungen",
            "Härtungs-Baselines und Infrastructure-as-Code-Vorlagen",
          ],
        },
      ],
    },
    {
      id: "corporate-security",
      label: "Unternehmenssicherheit",
      title: "Unternehmenssicherheit",
      tagline: "Physischer Schutz, Personalrisiken und Krisenbereitschaft.",
      description:
        "Digitale Kontrollen versagen, wenn jemand durch eine unverschlossene Tür geht oder eine Schlüsselbesetzung sich als eingeschleust erweist. Dieser Bereich deckt den physischen und menschlichen Perimeter um Betrieb, Personal und Führung ab.",
      items: [
        {
          id: "physical-security",
          title: "Physische Sicherheit & Zutrittskontrolle",
          description:
            "Objektbegehungen und mehrschichtige Schutzkonzepte für Büros, Werke, Lager und Rechenzentren — Perimeter, Zutrittskontrolle, Einbruchmeldung und Wachdienstverfahren.",
          deliverables: [
            "Objektschwachstellenanalyse mit fotografischem Nachweis",
            "Mehrschichtiges Schutzkonzept und Technikspezifikation",
            "Wachdienstverfahren und Postenanweisungen",
          ],
        },
        {
          id: "executive-protection",
          title: "Personenschutz & Reiserisiko",
          description:
            "Diskreter Schutz für Führungskräfte und deren Familien sowie Vorab-Lageinformationen und Unterstützung vor Ort in Hochrisikoregionen.",
          deliverables: [
            "Individuelle Bedrohungs- und Expositionsbewertung",
            "Planung des Schutzeinsatzes und sichere Transporte",
            "Länderrisiko-Briefings und 24/7-Reisenotfallnummer",
          ],
        },
        {
          id: "due-diligence",
          title: "Due Diligence & Hintergrundprüfung",
          description:
            "Überprüfung von Geschäftspartnern, Investitionszielen, Führungskräften und sensiblen Neueinstellungen über offene Quellen, Handelsregister, Gerichtsakten und Sanktionslisten.",
          deliverables: [
            "Integritäts- und Reputationsprofil je Person oder Firma",
            "Abbildung der Eigentümerstruktur und wirtschaftlich Berechtigten",
            "Sanktions-, PEP- und Negativpresse-Screening",
          ],
        },
        {
          id: "crisis-management",
          title: "Krisenmanagement & Betriebskontinuität",
          description:
            "Pläne und Übungen für Ereignisse, die das Geschäft stoppen — Cyber-Vorfälle, Standortverlust, Lieferausfall, Erpressung, Entführung und feindselige Medienaufmerksamkeit.",
          deliverables: [
            "Business-Impact-Analyse und Wiederherstellungsziele",
            "Krisen-Playbooks, Meldeketten und Entscheidungsmatrix",
            "Tabletop-Übungen für die Geschäftsleitung",
          ],
        },
      ],
    },
    {
      id: "audits",
      label: "Audits & Compliance",
      title: "Sicherheitsaudits & Compliance",
      tagline: "Unabhängige Bewertung gegen reale Bedrohungen und reale Vorschriften.",
      description:
        "Ein Audit soll zeigen, was ein Angreifer tun kann und was eine Aufsichtsbehörde fragen wird. Unsere Audits liefern Nachweise, priorisierte Lücken und einen kalkulierten Maßnahmenpfad statt einer Checklistenpunktzahl.",
      items: [
        {
          id: "comprehensive-audit",
          title: "Umfassendes Sicherheitsaudit",
          description:
            "Eine einzige Bewertung über alle sechs Fachbereiche, die Ihre tatsächliche Sicherheitsbasis feststellt und mit Wettbewerbern Ihrer Branche vergleicht.",
          deliverables: [
            "Reifegradbewertung technischer, physischer und menschlicher Kontrollen",
            "Priorisiertes Lückenregister mit Aufwands- und Kostenschätzung",
            "Maßnahmen-Roadmap über zwölf bis achtzehn Monate",
          ],
        },
        {
          id: "risk-assessment",
          title: "Risiko- & Schwachstellenanalyse",
          description:
            "Strukturierte Erfassung der wesentlichen Werte, der realistisch auf sie gerichteten Bedrohungen und der Kontrollen, die derzeit dazwischenstehen.",
          deliverables: [
            "Inventar von Werten und Datenflüssen mit Verantwortlichkeiten",
            "Threat Modelling und quantifiziertes Risikoregister",
            "Bewertung der Kontrollwirksamkeit und Restrisikoerklärung",
          ],
        },
        {
          id: "compliance",
          title: "Regulatorik & Normkonformität",
          description:
            "Gap-Analyse, Dokumentation und Auditbegleitung für ISO 27001, NIS2, DSGVO, DORA, PCI DSS und branchenspezifische Aufsichtsanforderungen.",
          deliverables: [
            "Anforderungsbezogene Gap-Analyse",
            "Richtlinienwerk, Verarbeitungsverzeichnis und Nachweispaket",
            "Begleitung von Zertifizierungs- oder Aufsichtsaudits",
          ],
        },
        {
          id: "supply-chain-audit",
          title: "Drittparteien- & Lieferkettenaudit",
          description:
            "Bewertung der Lieferanten, Dienstleister und Logistikpartner, die Ihre Daten halten oder Ihre Waren berühren — inklusive Vor-Ort-Prüfung, wo es darauf ankommt.",
          deliverables: [
            "Lieferanteneinstufung nach Kritikalität und Zugriffsniveau",
            "Prüfberichte je Lieferant, vor Ort oder remote",
            "Vertragliche Sicherheitsklauseln und laufender Prüfrhythmus",
          ],
        },
      ],
    },
    {
      id: "training",
      label: "Schulung & Awareness",
      title: "Mitarbeiterschulung & Awareness",
      tagline: "Aus der größten Angriffsfläche funktionierende Sensoren machen.",
      description:
        "Die meisten Vorfälle beginnen mit einem Menschen, nicht mit einem Protokoll. Wir bauen Schulungen, die Verhalten verändern und an Vorfallsdaten statt an Abschlussquoten gemessen werden.",
      items: [
        {
          id: "awareness-programme",
          title: "Security-Awareness-Programm",
          description:
            "Ein fortlaufendes Jahrescurriculum zu Phishing, Zugangsdaten-Hygiene, Datenumgang, physischem Zutritt und Meldepflichten — in den Sprachen, in denen Ihre Belegschaft tatsächlich arbeitet.",
          deliverables: [
            "Rollenbezogenes Curriculum mit Jahreskalender",
            "Präsenz- und E-Learning-Module in vier Sprachen",
            "Verhaltenskennzahlen-Dashboard, verknüpft mit Vorfallszahlen",
          ],
        },
        {
          id: "phishing-simulation",
          title: "Phishing- & Social-Engineering-Simulation",
          description:
            "Kontrollierte Kampagnen per E-Mail, Telefon und Messenger, die tatsächliche Anfälligkeit und Meldegeschwindigkeit messen, gefolgt von gezieltem Coaching für die Betroffenen.",
          deliverables: [
            "Maßgeschneiderte Szenarien je Abteilung und Hierarchieebene",
            "Benchmarking von Klick-, Eingabe- und Melderaten",
            "Sofort-Coaching für wiederholt anfällige Mitarbeitende",
          ],
        },
        {
          id: "executive-briefings",
          title: "Briefings für Führung & Aufsichtsrat",
          description:
            "Kurze, nicht-technische Sitzungen, die der Führung das Lagebild, die persönliche Exposition und die während eines Vorfalls erwarteten Entscheidungen vermitteln.",
          deliverables: [
            "Branchenspezifisches Bedrohungsbriefing für das Gremium",
            "Prüfung des digitalen Fußabdrucks und persönlichen Risikos",
            "Entscheidungsübung für das wahrscheinlichste Krisenszenario",
          ],
        },
        {
          id: "technical-training",
          title: "Rollenbasierte technische Schulung",
          description:
            "Praxisnahe Schulung für Entwickler, Administratoren, Sicherheitsteams und Wachpersonal — sichere Entwicklung, Härtung, Detection Engineering und Vorfallsbearbeitung.",
          deliverables: [
            "Workshops zu sicherer Entwicklung und Code-Review",
            "Labore für Detection Engineering und Incident Handling",
            "Live-Vorfallsübungen mit Nachbesprechung",
          ],
        },
      ],
    },
    {
      id: "loss-prevention",
      label: "Loss Prevention",
      title: "Loss Prevention",
      tagline: "Finden, wo Marge das Unternehmen verlässt, und die Lücke schließen.",
      description:
        "Inventurdifferenz ist selten ein einzelner Dieb. Sie ist eine Mischung aus interner Absprache, Prozesslücken, Rückgabemissbrauch und blinden Flecken in der Logistik — und reagiert auf Analytik deutlich besser als auf zusätzliche Kameras.",
      items: [
        {
          id: "retail-programme",
          title: "Loss-Prevention-Programme im Handel",
          description:
            "Durchgängige Programmgestaltung für Filialnetze: Schwundziele, Flächenabläufe, Kassenkontrollen, Mitarbeiteranreize und Prüfroutinen.",
          deliverables: [
            "Schwunddiagnose auf Filialebene und Zielsetzung",
            "Verfahrenswerk für Fläche, Kasse und Bargeldhandling",
            "Regionale Prüfroutine und Betriebsmodell des LP-Teams",
          ],
        },
        {
          id: "shrinkage-analytics",
          title: "Analytik der Inventurdifferenzen",
          description:
            "Datenbasierte Identifikation von Verlust-Hotspots nach Standort, Schicht, Warengruppe und Bediener — mit Trennung von echtem Diebstahl, Prozessfehler und Systemrauschen.",
          deliverables: [
            "Verlustzuordnungsmodell nach Standort, Schicht und Artikel",
            "Ausnahmeberichte zu Storni, Rückgaben und Rabatten",
            "Priorisierte Maßnahmenliste mit erwarteter Rückgewinnung",
          ],
        },
        {
          id: "internal-theft",
          title: "Untersuchung interner Delikte",
          description:
            "Diskrete, rechtlich belastbare Untersuchung von Mitarbeiterdiebstahl und Absprachen mit Lieferanten oder Kunden — geführt so, dass das Ergebnis arbeitsrechtlich Bestand hat.",
          deliverables: [
            "Verdeckte Beweiserhebung innerhalb rechtlicher Grenzen",
            "Strukturierte Befragungen und Umgang mit Geständnissen",
            "Fallakte für arbeitsrechtliche oder strafrechtliche Verfolgung",
          ],
        },
        {
          id: "logistics-protection",
          title: "Lieferketten- & Logistikschutz",
          description:
            "Schutz von Waren in Transport und Lagerung über Lager, Cross-Docks und die letzte Meile, inklusive Fahrerprüfung und Routenrisikoanalyse.",
          deliverables: [
            "Risikobewertung von Routen und Knotenpunkten",
            "Gestaltung von Siegel-, Tracking- und Abgleichkontrollen",
            "Prüfstandards für Frachtführer und Fahrer",
          ],
        },
      ],
    },
    {
      id: "anti-fraud",
      label: "Betrugsprävention",
      title: "Anti-Fraud-Systeme",
      tagline: "Erkennungslogik, Kontrollen und Untersuchungen bei Wirtschaftskriminalität.",
      description:
        "Betrug ist ein Systemproblem. Wir gestalten die Kontrollen, die Überwachungslogik und die Meldekanäle, die ihn früh sichtbar machen, und untersuchen anschließend, was bereits geschehen ist.",
      items: [
        {
          id: "fraud-risk-assessment",
          title: "Betrugsrisikoanalyse",
          description:
            "Abbildung jeder Vorgehensweise, die Innentätern, Kunden, Lieferanten und organisierten Gruppen realistisch offensteht, gegen die derzeit bestehenden Kontrollen.",
          deliverables: [
            "Betrugsrisikoregister je Schema",
            "Kontrolllückenanalyse über den gesamten Transaktionszyklus",
            "Darstellung der Betrugsexposition auf Leitungsebene",
          ],
        },
        {
          id: "transaction-monitoring",
          title: "Transaktionsüberwachung & Scoring",
          description:
            "Regel- und Modellgestaltung für Zahlungs-, Schaden- und Auftragsströme — kalibriert so, dass echter Betrug auffällt, ohne Ihr Team in Fehlalarmen zu ertränken.",
          deliverables: [
            "Erkennungsregelwerk und Risiko-Scoring-Logik",
            "Workflow zur Alarmbearbeitung und Fallmanagement",
            "Präzisions- und Trefferquoten-Tuning an historischen Fällen",
          ],
        },
        {
          id: "aml-kyc",
          title: "Gestaltung von AML-/KYC-Programmen",
          description:
            "Kundensorgfaltspflichten, Sanktionsscreening, Prüfung wirtschaftlich Berechtigter und Verdachtsmeldungen — aufgebaut für die aufsichtliche Prüfung.",
          deliverables: [
            "Risikobasiertes Rahmenwerk zur Kundensorgfalt",
            "Screening-Konfiguration und Reduktion von Fehlalarmen",
            "Meldeverfahren und Zertifizierung der Mitarbeitenden",
          ],
        },
        {
          id: "forensic-accounting",
          title: "Forensische Rechnungsprüfung & Ermittlungen",
          description:
            "Rekonstruktion von Finanzunterlagen zur Bezifferung von Schäden, Nachverfolgung von Mitteln und Unterstützung von Rückforderungen, Versicherungsansprüchen und Strafanzeigen.",
          deliverables: [
            "Quantifizierte Schadensberechnung mit Belegen",
            "Mittelnachverfolgung und Vermögensermittlung",
            "Gutachten und Unterstützung im Rechtsstreit",
          ],
        },
      ],
    },
  ],
}
