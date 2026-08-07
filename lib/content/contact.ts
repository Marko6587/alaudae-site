import type { ContactCopy, Locale } from "./types"

const en: ContactCopy = {
  title: "Contact",
  description:
    "Reach the practice directly. Initial consultations are confidential and carry no obligation. Active incidents go to the response line at any hour.",
  form: {
    heading: "Send a brief",
    name: "Name",
    email: "Work email",
    company: "Company",
    interest: "What do you need",
    interestPlaceholder: "Select a practice area",
    message: "Context",
    consent: "I agree that Alaudae may store this message in order to respond to it.",
    submit: "Send message",
    success: "Your message has reached the practice.",
    successNote: "A consultant will reply within one business day. For an active incident, call the response line.",
  },
  channelsLabel: "Direct channels",
  officesLabel: "Offices",
  hoursLabel: "Office hours",
  hours: "Monday to Friday, 09:00 – 18:00 CET. Incident response operates continuously.",
  emergencyLabel: "Active incident",
  emergencyText:
    "If you are dealing with a breach, ransomware, extortion or an immediate physical threat, call the response line rather than using the form.",
  channels: [
    { label: "General enquiries", value: "contact@alaudae.com", href: "mailto:contact@alaudae.com" },
    {
      label: "Incident response, 24/7",
      value: "+48 22 000 00 00",
      href: "tel:+48220000000",
      note: "Answered by a duty responder, not an answering service",
    },
    {
      label: "Encrypted contact",
      value: "Signal on request",
      note: "We will confirm a number and safety words over a separate channel",
    },
    { label: "Media and speaking", value: "press@alaudae.com", href: "mailto:press@alaudae.com" },
  ],
  offices: [
    {
      city: "Warsaw",
      country: "Poland",
      address: "Registered seat and operations centre",
      focus: "Audits, incident response, loss prevention",
    },
    {
      city: "Kyiv",
      country: "Ukraine",
      address: "Regional delivery office",
      focus: "Corporate security, training, investigations",
    },
    {
      city: "Berlin",
      country: "Germany",
      address: "Client liaison office",
      focus: "Compliance, NIS2 and DORA advisory",
    },
  ],
}

const uk: ContactCopy = {
  title: "Контакти",
  description:
    "Зв’яжіться з практикою напряму. Первинна консультація конфіденційна і не має жодних зобов’язань. Активні інциденти — на лінію реагування в будь-яку годину.",
  form: {
    heading: "Надіслати запит",
    name: "Ім’я",
    email: "Робоча пошта",
    company: "Компанія",
    interest: "Що вам потрібно",
    interestPlaceholder: "Виберіть напрям",
    message: "Контекст",
    consent: "Погоджуюсь, що Alaudae збереже це повідомлення, щоб на нього відповісти.",
    submit: "Надіслати",
    success: "Ваше повідомлення отримано.",
    successNote:
      "Консультант відповість протягом одного робочого дня. У разі активного інциденту телефонуйте на лінію реагування.",
  },
  channelsLabel: "Прямі канали",
  officesLabel: "Офіси",
  hoursLabel: "Робочі години",
  hours: "Понеділок – п’ятниця, 09:00 – 18:00 CET. Реагування на інциденти працює безперервно.",
  emergencyLabel: "Активний інцидент",
  emergencyText:
    "Якщо ви маєте справу зі зламом, шифрувальником, вимаганням або безпосередньою фізичною загрозою — телефонуйте на лінію реагування, а не заповнюйте форму.",
  channels: [
    { label: "Загальні запити", value: "contact@alaudae.com", href: "mailto:contact@alaudae.com" },
    {
      label: "Реагування на інциденти, 24/7",
      value: "+48 22 000 00 00",
      href: "tel:+48220000000",
      note: "Відповідає чергова група реагування, а не автовідповідач",
    },
    {
      label: "Шифрований зв’язок",
      value: "Signal на запит",
      note: "Номер і кодові слова підтверджуємо окремим каналом",
    },
    { label: "Медіа та виступи", value: "press@alaudae.com", href: "mailto:press@alaudae.com" },
  ],
  offices: [
    {
      city: "Варшава",
      country: "Польща",
      address: "Юридична адреса та операційний центр",
      focus: "Аудити, реагування на інциденти, запобігання втратам",
    },
    {
      city: "Київ",
      country: "Україна",
      address: "Регіональний офіс виконання проєктів",
      focus: "Корпоративна безпека, навчання, розслідування",
    },
    {
      city: "Берлін",
      country: "Німеччина",
      address: "Офіс роботи з клієнтами",
      focus: "Відповідність, консультації щодо NIS2 і DORA",
    },
  ],
}

const pl: ContactCopy = {
  title: "Kontakt",
  description:
    "Skontaktujcie się bezpośrednio. Pierwsza konsultacja jest poufna i nie zobowiązuje do niczego. Trwające incydenty kierujcie na linię reagowania o każdej godzinie.",
  form: {
    heading: "Wyślij zapytanie",
    name: "Imię i nazwisko",
    email: "Służbowy e-mail",
    company: "Firma",
    interest: "Czego potrzebujecie",
    interestPlaceholder: "Wybierzcie obszar praktyki",
    message: "Kontekst",
    consent: "Zgadzam się, aby Alaudae zachowała tę wiadomość w celu udzielenia odpowiedzi.",
    submit: "Wyślij wiadomość",
    success: "Wiadomość dotarła do nas.",
    successNote:
      "Konsultant odpowie w ciągu jednego dnia roboczego. W przypadku trwającego incydentu dzwońcie na linię reagowania.",
  },
  channelsLabel: "Kanały bezpośrednie",
  officesLabel: "Biura",
  hoursLabel: "Godziny pracy",
  hours: "Poniedziałek – piątek, 09:00 – 18:00 CET. Reagowanie na incydenty działa bez przerwy.",
  emergencyLabel: "Trwający incydent",
  emergencyText:
    "Jeśli macie do czynienia z naruszeniem, ransomware, wymuszeniem lub bezpośrednim zagrożeniem fizycznym — dzwońcie na linię reagowania, nie wypełniajcie formularza.",
  channels: [
    { label: "Zapytania ogólne", value: "contact@alaudae.com", href: "mailto:contact@alaudae.com" },
    {
      label: "Reagowanie na incydenty, 24/7",
      value: "+48 22 000 00 00",
      href: "tel:+48220000000",
      note: "Odbiera dyżurny zespół reagowania, nie automat",
    },
    {
      label: "Kontakt szyfrowany",
      value: "Signal na życzenie",
      note: "Numer i słowa bezpieczeństwa potwierdzamy odrębnym kanałem",
    },
    { label: "Media i wystąpienia", value: "press@alaudae.com", href: "mailto:press@alaudae.com" },
  ],
  offices: [
    {
      city: "Warszawa",
      country: "Polska",
      address: "Siedziba i centrum operacyjne",
      focus: "Audyty, reagowanie na incydenty, zapobieganie stratom",
    },
    {
      city: "Kijów",
      country: "Ukraina",
      address: "Regionalne biuro realizacji",
      focus: "Bezpieczeństwo korporacyjne, szkolenia, postępowania",
    },
    {
      city: "Berlin",
      country: "Niemcy",
      address: "Biuro obsługi klientów",
      focus: "Zgodność, doradztwo NIS2 i DORA",
    },
  ],
}

const de: ContactCopy = {
  title: "Kontakt",
  description:
    "Wenden Sie sich direkt an die Praxis. Erstgespräche sind vertraulich und unverbindlich. Laufende Vorfälle gehen zu jeder Stunde an die Notfalllinie.",
  form: {
    heading: "Anfrage senden",
    name: "Name",
    email: "Geschäftliche E-Mail",
    company: "Unternehmen",
    interest: "Was benötigen Sie",
    interestPlaceholder: "Praxisfeld auswählen",
    message: "Kontext",
    consent: "Ich bin damit einverstanden, dass Alaudae diese Nachricht zur Beantwortung speichert.",
    submit: "Nachricht senden",
    success: "Ihre Nachricht ist bei uns eingegangen.",
    successNote:
      "Ein Berater antwortet innerhalb eines Arbeitstages. Bei einem laufenden Vorfall rufen Sie die Notfalllinie an.",
  },
  channelsLabel: "Direkte Kanäle",
  officesLabel: "Standorte",
  hoursLabel: "Bürozeiten",
  hours: "Montag bis Freitag, 09:00 – 18:00 MEZ. Incident Response arbeitet durchgehend.",
  emergencyLabel: "Laufender Vorfall",
  emergencyText:
    "Wenn Sie mit einem Einbruch, Ransomware, Erpressung oder einer unmittelbaren physischen Bedrohung zu tun haben, rufen Sie die Notfalllinie an, statt das Formular zu nutzen.",
  channels: [
    { label: "Allgemeine Anfragen", value: "contact@alaudae.com", href: "mailto:contact@alaudae.com" },
    {
      label: "Incident Response, 24/7",
      value: "+48 22 000 00 00",
      href: "tel:+48220000000",
      note: "Es antwortet ein Bereitschaftsteam, kein Anrufbeantworter",
    },
    {
      label: "Verschlüsselter Kontakt",
      value: "Signal auf Anfrage",
      note: "Nummer und Sicherheitswörter bestätigen wir über einen separaten Kanal",
    },
    { label: "Presse und Vorträge", value: "press@alaudae.com", href: "mailto:press@alaudae.com" },
  ],
  offices: [
    {
      city: "Warschau",
      country: "Polen",
      address: "Firmensitz und Einsatzzentrale",
      focus: "Audits, Incident Response, Loss Prevention",
    },
    {
      city: "Kyjiw",
      country: "Ukraine",
      address: "Regionales Projektbüro",
      focus: "Unternehmenssicherheit, Schulung, Ermittlungen",
    },
    {
      city: "Berlin",
      country: "Deutschland",
      address: "Büro für Mandantenbetreuung",
      focus: "Compliance, Beratung zu NIS2 und DORA",
    },
  ],
}

export const contactCopy: Record<Locale, ContactCopy> = { en, uk, pl, de }
