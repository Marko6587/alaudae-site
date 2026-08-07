import type { BlogCopy } from "../types"

export const blogDe: BlogCopy = {
  title: "Analysen",
  description:
    "Notizen aus Audits, Ermittlungen und Krisenstäben. Geschrieben für die Menschen, die entscheiden müssen — nicht für eine Suchmaschine.",
  allLabel: "Alle Themen",
  readMore: "Beitrag lesen",
  backToIndex: "Zurück zu den Analysen",
  minRead: "Min. Lesezeit",
  relatedLabel: "Weiterführende Beiträge",
  notFound: "Dieser Beitrag existiert nicht.",
  posts: [
    {
      slug: "nis2-what-actually-changes",
      category: "audits",
      categoryLabel: "Audits & Compliance",
      date: "2026-06-18",
      readingTime: 7,
      title: "NIS2: was sich für mittelgroße Betreiber tatsächlich ändert",
      excerpt:
        "Die Berichterstattung dreht sich um Bußgelder. Die härtere Verschiebung ist die persönliche Verantwortung der Leitungsorgane und die 24-Stunden-Frist zur Frühwarnung.",
      body: [
        {
          paragraphs: [
            "NIS2 hat den Anwendungsbereich der europäischen Cyberregulierung weit über die Betreiber kritischer Infrastruktur hinaus erweitert, auf die NIS1 zielte. Produktion, Lebensmittelherstellung, Abfallwirtschaft, Postdienste und digitale Anbieter fallen nun bei Schwellen darunter, die Unternehmen mit fünfzig Beschäftigten erfassen.",
            "Was den Betrieb tatsächlich verändert, sind nicht die Bußgeldobergrenzen. Es sind die Meldefristen, die Pflicht zur Absicherung der Lieferkette und der Umstand, dass Leitungsorgane persönlich haftbar gemacht werden können, wenn sie Risikomaßnahmen nicht billigen und überwachen.",
          ],
        },
        {
          heading: "Die 24 Stunden sind ein Prozessproblem",
          paragraphs: [
            "Sie haben 24 Stunden ab Kenntnis eines erheblichen Vorfalls für die Frühwarnung, 72 Stunden für die vollständige Meldung und einen Monat für den Abschlussbericht. Vierundzwanzig Stunden klingen großzügig, bis man eine Erkennung am Freitagabend, einen Bereitschaftsingenieur ohne Befugnis zur Kommunikation mit der Aufsicht und eine Rechtsabteilung einrechnet, die Formulierungen prüfen will.",
            "Organisationen, die diese Frist halten, haben vorab entschieden, wer einen Vorfall als erheblich einstuft, wer die Meldung unterschreibt und was darin steht. Diese Entscheidung lässt sich nicht während des Vorfalls treffen.",
          ],
          bullets: [
            "Benennen Sie eine verantwortliche Person und zwei Stellvertreter, mit Kontaktwegen unabhängig von der Firmen-E-Mail",
            "Formulieren Sie die Frühwarnvorlage vorab, sodass nur Fakten einzutragen sind",
            "Üben Sie die Einstufungsentscheidung im Tabletop, nicht in der Nacht des Vorfalls",
          ],
        },
        {
          heading: "Die Lieferkette ist jetzt vertraglich Ihr Problem",
          paragraphs: [
            "Die Richtlinie verlangt, Sicherheitsrisiken in Lieferantenbeziehungen zu adressieren, einschließlich der Sicherheitspraktiken Ihrer direkten Lieferanten und Dienstleister. Praktisch heißt das: Lieferanten nach Zugriffsniveau einstufen, Sicherheitspflichten in Verträge schreiben und Nachweise für deren Überprüfung vorhalten.",
            "Beginnen Sie mit den Lieferanten, die administrativen Zugriff auf Ihre Systeme oder Kundendaten haben. Diese Liste ist meist kürzer als erwartet und überproportional riskant.",
          ],
        },
        {
          heading: "Wie eine belastbare Position aussieht",
          paragraphs: [
            "Aufsichtsbehörden suchen keine Perfektion. Sie suchen Nachweise, dass die Leitung das Risiko verstanden hat, verhältnismäßige Maßnahmen gebilligt hat und belegen kann, wann Entscheidungen getroffen wurden. Protokolle, datierte Risikoregister und durchgeführte Übungen wiegen mehr als eine Richtlinie, die niemand gelesen hat.",
          ],
        },
      ],
    },
    {
      slug: "shrinkage-is-a-data-problem",
      category: "loss-prevention",
      categoryLabel: "Loss Prevention",
      date: "2026-05-27",
      readingTime: 6,
      title: "Inventurdifferenz ist zuerst ein Datenproblem, dann ein Diebstahlproblem",
      excerpt:
        "In den meisten Filialnetzen hat ein Drittel des erfassten Schwunds das Gebäude nie verlassen. Prozessfehler von Diebstahl zu trennen verändert, wohin das Budget fließt.",
      body: [
        {
          paragraphs: [
            "Steigt der Schwund, ist der Reflex, Kameras und Wachpersonal hinzuzufügen. Das ist teuer und meist fehlgeleitet, denn ein erheblicher Anteil des erfassten Verlusts ist überhaupt kein Diebstahl: Wareneingangsfehler, falsch gescannte Lieferungen, nicht erfasste Abschriften, inkonsistent ausgebuchte Beschädigungen und Bestand, der existiert, aber nicht gefunden wird.",
            "Solange diese Kategorien nicht getrennt sind, ist jede Maßnahme geraten. Die erste Aufgabe eines Loss-Prevention-Programms ist Zuordnung, nicht Durchsetzung.",
          ],
        },
        {
          heading: "Zuordnen, bevor Sie eingreifen",
          paragraphs: [
            "Verlustzuordnung bedeutet, erfassten Schwund gegen die operativen Ereignisse abzugleichen, die ihn erklären könnten — auf der kleinsten verfügbaren Einheit: Standort, Schicht, Kasse, Bediener, Warengruppe. Muster zeigen sich schnell. Diebstahl gruppiert sich um bestimmte Personen, Zeiten und hochwertige, kleinvolumige Waren. Prozessfehler gruppieren sich um bestimmte Abläufe und neue Mitarbeitende.",
          ],
          bullets: [
            "Vergleichen Sie Schwund je Standort mit Abweichungen beim Wareneingang im gleichen Zeitraum",
            "Prüfen Sie Storno-, Rückgabe- und Manuellrabatt-Quoten je Bediener gegen den Durchschnitt",
            "Prüfen Sie, ob Standorte mit hohem Schwund auch hohe Personalfluktuation haben — Schulungslücken sehen wie Diebstahl aus",
          ],
        },
        {
          heading: "Interne Absprachen haben eine Signatur",
          paragraphs: [
            "Ist der Diebstahl intern, ist es selten ein Einzeltäter, der Ware unter der Jacke hinausträgt. Es ist eine Rückgabe auf eine bekannte Karte, eine mit Minderbestand quittierte Lieferung, ein Rabatt für einen Kollegen oder ein Lieferant, der nie gelieferte Ware fakturiert. All das hinterlässt Transaktionsspuren, die Ausnahmeberichte sichtbar machen — sofern die Regeln auf Ihre eigenen Basiswerte kalibriert sind und nicht auf Herstellervorgaben.",
          ],
        },
        {
          heading: "Und erst dann Geld ausgeben",
          paragraphs: [
            "Sind Verluste zugeordnet, lassen sich physische und prozessuale Maßnahmen zielgenau setzen: strengere Eingangskontrollen dort, wo der Abgleich scheitert, geänderte Kassenabläufe dort, wo Ausnahmen sich häufen, und Ermittlungen dort, wo das Transaktionsmuster eindeutig ist. Dasselbe Budget so eingesetzt holt typischerweise ein Vielfaches dessen zurück, was ein flächiger Kamerarollout erreicht.",
          ],
        },
      ],
    },
    {
      slug: "phishing-training-that-changes-behaviour",
      category: "training",
      categoryLabel: "Schulung & Awareness",
      date: "2026-04-30",
      readingTime: 5,
      title: "Warum Ihr Phishing-Training falsch gemessen wird",
      excerpt:
        "Abschlussquoten messen Anwesenheit. Klickraten messen das letzte Quartal. Die Zahl, die den nächsten Vorfall vorhersagt, ist die Meldegeschwindigkeit.",
      body: [
        {
          paragraphs: [
            "Fast jedes Awareness-Programm berichtet dem Gremium zwei Zahlen: wie viele Mitarbeitende die Schulung abgeschlossen haben und welcher Anteil auf das simulierte Phishing geklickt hat. Keine der beiden sagt, ob Sie eine echte Kampagne überstehen würden.",
            "Abschluss ist Anwesenheit. Die Klickrate ist ein nachlaufender Indikator, der natürlich sinkt, wenn Mitarbeitende die Simulationsplattform statt des Angriffs erkennen lernen. Keine erfasst die Variable, die die Schwere eines Vorfalls tatsächlich entscheidet.",
          ],
        },
        {
          heading: "Messen Sie die Zeit bis zur Meldung",
          paragraphs: [
            "In einer echten Zugangsdaten-Kampagne wird jemand klicken. Die Frage ist, wie lange es dauert, bis ein Mensch das Sicherheitsteam informiert, denn dieses Intervall ist das ungestörte Arbeitsfenster des Angreifers. Eine Organisation, in der die erste Meldung nach vier Minuten eintrifft, kann Sitzungen widerrufen und Zugangsdaten zurücksetzen, bevor die Lateralbewegung beginnt. Eine, in der sie am nächsten Morgen eintrifft, kann das nicht.",
          ],
          bullets: [
            "Erfassen Sie Median und Worst Case von der Zustellung bis zur ersten internen Meldung",
            "Messen Sie die Melderate bezogen auf alle Empfänger, nicht nur auf die Klickenden",
            "Machen Sie die Meldung zu einem Klick, ohne Risiko eines Vorwurfs bei Fehlalarm",
          ],
        },
        {
          heading: "Trainieren Sie die Reaktion, nicht das Erkennen",
          paragraphs: [
            "Erkennungstraining hat eine Obergrenze: eine ausreichend gezielte Nachricht kommt durch. Reaktionstraining hat sie nicht, weil es auch dann wirkt, wenn das Erkennen versagt. Wer geklickt hat, sollte genau wissen, was in den nächsten dreißig Sekunden zu tun ist — und aus dem Programm gelernt haben, dass das Melden eines Fehlers belohnt und nicht bestraft wird.",
            "Die schnellste Verbesserung ist für die meisten Organisationen kulturell, nicht technisch: entfernen Sie jeden Anreiz, nicht zu melden, und prüfen Sie dann, ob die Meldungen eintreffen.",
          ],
        },
      ],
    },
    {
      slug: "fraud-controls-transaction-lifecycle",
      category: "anti-fraud",
      categoryLabel: "Betrugsprävention",
      date: "2026-03-12",
      readingTime: 6,
      title: "Betrugskontrollen entlang des Transaktionslebenszyklus gestalten",
      excerpt:
        "Weitere Regeln in der Monitoring-Engine behandeln Symptome. Kontrollen je Transaktionsphase entfernen die Gelegenheit.",
      body: [
        {
          paragraphs: [
            "Treten Betrugsschäden auf, lautet die übliche Antwort: mehr Erkennungsregeln schreiben. Erkennung ist wichtig, wirkt aber im Nachhinein und erbt jede Schwäche des Prozesses, der die Transaktion erzeugt hat. Dauerhafte Betrugsreduktion entsteht durch Kontrollen über den gesamten Lebenszyklus: Onboarding, Autorisierung, Ausführung, Abwicklung und Abstimmung.",
          ],
        },
        {
          heading: "Wo sich Gelegenheit konzentriert",
          paragraphs: [
            "Die meisten internen Betrugsfälle nutzen eine von drei strukturellen Schwächen: eine Person kann eine Transaktion sowohl anlegen als auch genehmigen, eine Stammdatenänderung bleibt ungeprüft, oder eine Abstimmungsdifferenz wird ohne unabhängigen Nachweis ausgebucht. Jede davon ist eine Entscheidung im Kontrolldesign, kein Monitoring-Fehler.",
          ],
          bullets: [
            "Trennen Sie Anlage und Genehmigung bei Zahlungen, Rückgaben, Gutschriften und Ausbuchungen",
            "Behandeln Sie Änderungen an Lieferanten- und Lohnstammdaten als Hochrisikoereignisse mit Prüfung durch die zweite Linie",
            "Verlangen Sie dokumentierte Nachweise, bevor eine Abstimmungsdifferenz ausgebucht wird",
          ],
        },
        {
          heading: "Kalibrieren Sie Erkennung an Ihrer eigenen Historie",
          paragraphs: [
            "Stehen die strukturellen Kontrollen, rechnet sich Monitoring. Regeln auf Herstellervorgaben erzeugen jedoch Alarmvolumina, die kein Team bearbeiten kann, und eine Warteschlange, die niemand liest, ist schlechter als keine. Kalibrieren Sie Schwellen an Ihren bestätigten Fällen, messen Sie Präzision ehrlich und nehmen Sie Regeln außer Betrieb, die nie einen echten Treffer erzeugt haben.",
          ],
        },
        {
          heading: "Geben Sie Menschen einen Kanal",
          paragraphs: [
            "Über veröffentlichte Falldaten hinweg bleiben Hinweise von Mitarbeitenden die produktivste Quelle der Betrugsaufdeckung — vor interner Revision und Monitoringsystemen. Ein Hinweisgeberkanal, der wirklich vertraulich ist, unabhängig entgegengenommen wird und sichtbar bearbeitet wird, ist eine der günstigsten verfügbaren Kontrollen und eine der am konstantesten unterfinanzierten.",
          ],
        },
      ],
    },
    {
      slug: "red-team-versus-penetration-test",
      category: "cybersecurity",
      categoryLabel: "Cybersicherheit",
      date: "2026-02-04",
      readingTime: 5,
      title: "Red Team oder Penetrationstest: das richtige Mandat wählen",
      excerpt:
        "Sie beantworten verschiedene Fragen. Das falsche zu beauftragen verbrennt Budget und liefert einen Bericht, der Sie zu Unrecht beruhigt.",
      body: [
        {
          paragraphs: [
            "In Beschaffungsunterlagen werden beide Begriffe synonym verwendet — das sollten sie nicht sein. Ein Penetrationstest beantwortet eine Abdeckungsfrage: welche Schwachstellen im definierten Umfang existieren. Ein Red-Team-Mandat beantwortet eine Fähigkeitsfrage: kann ein motivierter Gegner ein bestimmtes Ziel erreichen, ohne erkannt und gestoppt zu werden.",
          ],
        },
        {
          heading: "Erst testen, später Red Team",
          paragraphs: [
            "Wenn Sie Ihren externen Perimeter, das interne Netz und Ihre Anwendungen nicht systematisch getestet haben, ist ein Red Team verfrüht. Es wird über den ersten ungepatchten Dienst erfolgreich sein und Ihnen etwas beibringen, das ein Bruchteil des Budgets gezeigt hätte — Ihre Erkennungsfähigkeit wird dabei nicht sinnvoll gefordert.",
            "Penetrationstests setzen die Baseline. Red Teaming prüft, ob Menschen, Prozesse und Werkzeuge um diese Baseline unter Druck tatsächlich funktionieren.",
          ],
        },
        {
          heading: "Was bei der Beauftragung festzulegen ist",
          paragraphs: [
            "Die Qualität des Mandats bestimmt das Scope-Dokument stärker als der Anbieter. Unklarheit über Ziele, Autorisierung und Rules of Engagement erzeugt Berichte voller Befunde, mit denen niemand arbeiten kann.",
          ],
          bullets: [
            "Formulieren Sie das Ziel geschäftlich: welche Daten oder Fähigkeit soll der Gegner erreichen",
            "Definieren Sie die Autorisierung ausdrücklich, inklusive Social Engineering und physischem Zugang, sofern im Umfang",
            "Fordern Sie einen kostenlosen Nachtest behobener Befunde und benennen Sie, wer den Abschluss zeichnet",
          ],
        },
      ],
    },
    {
      slug: "executive-protection-starts-with-data",
      category: "corporate-security",
      categoryLabel: "Unternehmenssicherheit",
      date: "2026-01-15",
      readingTime: 5,
      title: "Personenschutz beginnt mit der Prüfung des Datenfußabdrucks",
      excerpt:
        "Entfernen Sie vor jedem Schutzeinsatz die Informationen, mit denen sich eine Annäherung an Ihre Führung planen lässt. Das ist günstiger und oft wirksamer.",
      body: [
        {
          paragraphs: [
            "Entscheidet ein Unternehmen, dass seine Führung Schutz braucht, beginnt das Gespräch meist bei Personal und Fahrzeugen. Das ist das sichtbare Ende der Disziplin und bei wirklich erhöhter Bedrohungslage notwendig. Der günstigste und verlässlich nützlichste erste Schritt ist jedoch, die Informationen zu reduzieren, die jemandem für die Planung einer Annäherung zur Verfügung stehen.",
          ],
        },
        {
          heading: "Was üblicherweise offenliegt",
          paragraphs: [
            "Wohnadressen in Handelsregistereinträgen und Grundbuchdaten. Familienmitglieder, über soziale Medien identifizierbar. Vorhersehbare Routinen, veröffentlicht in Konferenzprogrammen. Kfz-Kennzeichen, Fitnessmitgliedschaften, Schulzugehörigkeiten und Reisemuster, sichtbar über Sport-Apps und Foto-Metadaten. Einzeln harmlos, zusammen ein Planungsdokument.",
          ],
          bullets: [
            "Prüfen Sie Registereinträge und Unternehmensmeldungen auf private Wohnadressen",
            "Bewerten Sie den digitalen Fußabdruck der Familie, nicht nur der Führungsperson",
            "Prüfen Sie, ob veröffentlichte Termine Bewegungen Wochen im Voraus vorhersehbar machen",
          ],
        },
        {
          heading: "Und erst dann die physischen Maßnahmen",
          paragraphs: [
            "Mit reduzierter Exposition lassen sich Schutzmaßnahmen verhältnismäßig gestalten: Sicherheitsbewertung des Wohnobjekts, sicherer Transport für definierte Hochrisikobewegungen, Reisebriefings für konkrete Ziele und ein geübtes Kommunikationsprotokoll für die Familie. Die meisten Organisationen stellen fest, dass sie weit weniger ständigen Schutz brauchen als angenommen — und weit mehr Vorbereitung.",
          ],
        },
      ],
    },
  ],
}
