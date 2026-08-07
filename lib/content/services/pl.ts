import type { ServicesCopy } from "../types"

export const servicesPl: ServicesCopy = {
  title: "Usługi",
  description:
    "Sześć obszarów praktyki obejmujących cały perymetr nowoczesnej organizacji — od pakietów sieciowych do rampy załadunkowej. Każdy obszar zamawiany osobno lub łączony w jeden program bezpieczeństwa.",
  categoriesLabel: "Obszary praktyki",
  deliverablesLabel: "Co otrzymujesz",
  ctaTitle: "Nie wiesz, od czego zacząć?",
  ctaText:
    "Większość klientów zaczyna od audytu diagnostycznego. Mapujemy ekspozycję we wszystkich sześciu obszarach i przekazujemy uporządkowaną mapę drogową z szacunkiem kosztów.",
  ctaButton: "Zamów diagnostykę",
  categories: [
    {
      id: "cybersecurity",
      label: "Cyberbezpieczeństwo",
      title: "Cyberbezpieczeństwo",
      tagline: "Testy ofensywne, stały monitoring i reagowanie na incydenty.",
      description:
        "Traktujemy Państwa infrastrukturę tak, jak zrobiłby to zmotywowany atakujący, a następnie budujemy zdolność detekcji i reakcji, która zatrzyma go przy drugiej próbie. Zakres obejmuje sieci lokalne, środowiska chmurowe, aplikacje i stacje końcowe.",
      items: [
        {
          id: "penetration-testing",
          title: "Testy penetracyjne i Red Teaming",
          description:
            "Symulacja działań przeciwnika z określonymi celami: sieci, aplikacje webowe i mobilne, API, infrastruktura bezprzewodowa. Red Team obejmuje socjotechnikę i próby fizycznego wejścia, gdy jest to dozwolone.",
          deliverables: [
            "Streszczenie zarządcze z rankingiem wpływu na biznes",
            "Odtwarzalne ustalenia techniczne z dowodem eksploatacji",
            "Plan naprawczy i bezpłatny retest poprawek",
          ],
        },
        {
          id: "managed-detection",
          title: "Zarządzana detekcja i reakcja",
          description:
            "Monitoring 24/7 oparty na Państwa istniejącej telemetrii. Dostrajamy reguły detekcji do środowiska, obsługujemy alerty i izolujemy potwierdzone incydenty, zanim rozejdą się na inne systemy.",
          deliverables: [
            "Wdrożenie i dostrojenie SIEM/EDR oraz biblioteka scenariuszy",
            "Całodobowa obsługa alertów z określonymi ścieżkami eskalacji",
            "Miesięczne raporty o zagrożeniach i metryki pokrycia detekcji",
          ],
        },
        {
          id: "incident-response",
          title: "Reagowanie na incydenty i informatyka śledcza",
          description:
            "Szybkie ograniczenie aktywnych naruszeń, ransomware i incydentów wewnętrznych, a następnie śledztwo poprawne dowodowo, które utrzyma się w sądzie i przed ubezpieczycielem.",
          deliverables: [
            "Zespół reakcji na abonament z umownym czasem przyjazdu",
            "Obrazy śledcze, rekonstrukcja chronologii i atrybucja",
            "Raport dla regulatora i warsztat z wnioskami",
          ],
        },
        {
          id: "cloud-security",
          title: "Bezpieczeństwo chmury i aplikacji",
          description:
            "Przegląd architektury i hartowanie środowisk chmurowych oraz własnego oprogramowania: granice tożsamości, obsługa sekretów, integralność potoków i bezpieczne konfiguracje bazowe.",
          deliverables: [
            "Przegląd konfiguracji chmury i uprawnień IAM",
            "Integracja bezpieczeństwa z SDLC i automatyczne kontrole w potokach",
            "Bazowe standardy hartowania i szablony infrastructure-as-code",
          ],
        },
      ],
    },
    {
      id: "corporate-security",
      label: "Bezpieczeństwo korporacyjne",
      title: "Bezpieczeństwo korporacyjne",
      tagline: "Ochrona fizyczna, ryzyko kadrowe i gotowość kryzysowa.",
      description:
        "Kontrole cyfrowe zawodzą, gdy ktoś przechodzi przez niezamknięte drzwi albo kluczowy pracownik okazuje się podstawiony. Ten obszar obejmuje fizyczny i ludzki perymetr wokół Państwa operacji, personelu i kierownictwa.",
      items: [
        {
          id: "physical-security",
          title: "Bezpieczeństwo fizyczne i kontrola dostępu",
          description:
            "Audyty obiektów i projektowanie ochrony warstwowej dla biur, zakładów, magazynów i centrów danych: perymetr, kontrola dostępu, detekcja wtargnięcia, procedury służby ochrony.",
          deliverables: [
            "Audyt podatności obiektu z dokumentacją fotograficzną",
            "Projekt ochrony warstwowej i specyfikacja sprzętu",
            "Procedury i instrukcje posterunkowe dla ochrony",
          ],
        },
        {
          id: "executive-protection",
          title: "Ochrona kierownictwa i ryzyko podróży",
          description:
            "Dyskretna ochrona kadry zarządzającej i rodzin, a także wywiad przed podróżą i wsparcie na miejscu w kierunkach wysokiego ryzyka.",
          deliverables: [
            "Indywidualna ocena zagrożeń i poziomu ekspozycji",
            "Planowanie ochrony osobistej i bezpieczny transport",
            "Briefingi o ryzyku krajowym i linia wsparcia 24/7",
          ],
        },
        {
          id: "due-diligence",
          title: "Due diligence i weryfikacja kandydatów",
          description:
            "Weryfikacja kontrahentów, celów inwestycyjnych, kadry zarządzającej i kandydatów na wrażliwe stanowiska w źródłach otwartych, rejestrach, aktach sądowych i listach sankcyjnych.",
          deliverables: [
            "Profil rzetelności i reputacji dla każdego podmiotu",
            "Struktura własności i beneficjenci rzeczywiści",
            "Weryfikacja sankcji, PEP i negatywnych publikacji",
          ],
        },
        {
          id: "crisis-management",
          title: "Zarządzanie kryzysowe i ciągłość działania",
          description:
            "Plany i ćwiczenia dla zdarzeń zatrzymujących biznes: incydenty cybernetyczne, utrata obiektu, awaria dostaw, wymuszenia, porwania i wrogie zainteresowanie mediów.",
          deliverables: [
            "Analiza wpływu na biznes i cele odtworzenia",
            "Podręczniki kryzysowe, drzewa powiadomień i matryca decyzyjna",
            "Ćwiczenia sztabowe dla zarządu",
          ],
        },
      ],
    },
    {
      id: "audits",
      label: "Audyty i zgodność",
      title: "Audyty bezpieczeństwa i zgodność",
      tagline: "Niezależna ocena wobec realnych zagrożeń i realnych regulacji.",
      description:
        "Audyt powinien pokazać, co może zrobić atakujący i o co zapyta regulator. Nasz dostarcza dowody, uporządkowane luki i wyceniony plan naprawczy, a nie wynik z listy kontrolnej.",
      items: [
        {
          id: "comprehensive-audit",
          title: "Kompleksowy audyt bezpieczeństwa",
          description:
            "Jedna ocena we wszystkich sześciu obszarach, która ustala rzeczywisty poziom bazowy bezpieczeństwa i porównuje go z branżą.",
          deliverables: [
            "Ocena dojrzałości kontroli technicznych, fizycznych i ludzkich",
            "Rejestr luk z priorytetami oraz szacunkiem pracy i kosztów",
            "Mapa drogowa naprawcza na 12–18 miesięcy",
          ],
        },
        {
          id: "risk-assessment",
          title: "Ocena ryzyka i podatności",
          description:
            "Uporządkowana identyfikacja istotnych aktywów, zagrożeń realnie w nie celujących i kontroli, które obecnie stoją na drodze.",
          deliverables: [
            "Inwentaryzacja aktywów i przepływów danych z właścicielami",
            "Modelowanie zagrożeń i ilościowy rejestr ryzyk",
            "Ocena skuteczności kontroli i ryzyko rezydualne",
          ],
        },
        {
          id: "compliance",
          title: "Zgodność z regulacjami i standardami",
          description:
            "Analiza luk, dokumentacja i wsparcie audytowe dla ISO 27001, NIS2, RODO, DORA, PCI DSS i wymogów nadzorczych sektorowych.",
          deliverables: [
            "Analiza luk wymóg po wymogu",
            "Zestaw polityk, rejestry przetwarzania i pakiet dowodowy",
            "Asysta przy audycie certyfikacyjnym lub nadzorczym",
          ],
        },
        {
          id: "supply-chain-audit",
          title: "Audyt stron trzecich i łańcucha dostaw",
          description:
            "Ocena dostawców, wykonawców i partnerów logistycznych, którzy mają dostęp do Państwa danych lub towarów, wraz z weryfikacją na miejscu tam, gdzie to istotne.",
          deliverables: [
            "Kategoryzacja dostawców według krytyczności i poziomu dostępu",
            "Raporty z oceny na miejscu lub zdalnej dla każdego dostawcy",
            "Klauzule bezpieczeństwa w umowach i częstotliwość przeglądów",
          ],
        },
      ],
    },
    {
      id: "training",
      label: "Szkolenia pracowników",
      title: "Szkolenia i świadomość pracowników",
      tagline: "Zamiana personelu z najszerszej powierzchni ataku w działające czujniki.",
      description:
        "Większość incydentów zaczyna się od człowieka, nie od protokołu. Budujemy szkolenia, które zmieniają zachowanie i są mierzone danymi o incydentach, a nie odsetkiem ukończenia kursu.",
      items: [
        {
          id: "awareness-programme",
          title: "Program świadomości bezpieczeństwa",
          description:
            "Roczny program cykliczny: phishing, higiena haseł, obchodzenie się z danymi, dostęp fizyczny i obowiązek zgłaszania — w językach, w których Państwa personel faktycznie pracuje.",
          deliverables: [
            "Program segmentowany rolami z rocznym kalendarzem",
            "Moduły stacjonarne i e-learning w czterech językach",
            "Panel metryk behawioralnych powiązany z liczbą incydentów",
          ],
        },
        {
          id: "phishing-simulation",
          title: "Symulacje phishingu i socjotechniki",
          description:
            "Kontrolowane kampanie e-mailowe, telefoniczne i w komunikatorach mierzące realną podatność i szybkość zgłaszania, a następnie ukierunkowany coaching.",
          deliverables: [
            "Scenariusze kampanii według działu i szczebla",
            "Benchmark kliknięć, podania danych i zgłoszeń",
            "Coaching punktowy dla osób szczególnie podatnych",
          ],
        },
        {
          id: "executive-briefings",
          title: "Briefingi dla kierownictwa i zarządu",
          description:
            "Krótkie, nietechniczne sesje przedstawiające obraz zagrożeń, osobistą ekspozycję i decyzje, których będzie się od nich oczekiwać w trakcie incydentu.",
          deliverables: [
            "Sektorowy briefing o zagrożeniach dla zarządu",
            "Analiza cyfrowego śladu i ryzyka osobistego kadry",
            "Ćwiczenie decyzyjne na najbardziej prawdopodobnym scenariuszu",
          ],
        },
        {
          id: "technical-training",
          title: "Szkolenia techniczne według roli",
          description:
            "Praktyczne szkolenia dla programistów, administratorów, zespołów bezpieczeństwa i służb ochrony: bezpieczny kod, hartowanie, inżynieria detekcji, obsługa incydentów.",
          deliverables: [
            "Warsztaty z bezpiecznego rozwoju i przeglądu kodu",
            "Laboratoria z inżynierii detekcji i obsługi incydentów",
            "Ćwiczenia na żywo z omówieniem po zakończeniu",
          ],
        },
      ],
    },
    {
      id: "loss-prevention",
      label: "Zapobieganie stratom",
      title: "Zapobieganie stratom",
      tagline: "Znaleźć, gdzie marża ucieka z firmy, i zamknąć tę lukę.",
      description:
        "Straty to rzadko jeden złodziej. To mieszanka zmowy wewnętrznej, luk procesowych, nadużyć przy zwrotach i martwych punktów logistyki — a analityka działa tu lepiej niż kolejne kamery.",
      items: [
        {
          id: "retail-programme",
          title: "Programy zapobiegania stratom w handlu",
          description:
            "Projektowanie kompletnego programu dla sieci sklepów: cele strat, procedury na sali, kontrola kas, motywacja personelu i rutyny audytowe.",
          deliverables: [
            "Diagnostyka strat na poziomie sklepu i wyznaczenie celów",
            "Zestaw procedur dla sali, kasy i obiegu gotówki",
            "Regionalna rutyna audytowa i model pracy zespołu LP",
          ],
        },
        {
          id: "shrinkage-analytics",
          title: "Analityka ubytków magazynowych",
          description:
            "Identyfikacja ognisk strat według obiektu, zmiany, linii produktowej i operatora na podstawie danych, z oddzieleniem kradzieży od błędu procesowego.",
          deliverables: [
            "Model atrybucji strat według obiektu, zmiany i SKU",
            "Raportowanie wyjątków: anulacje, zwroty, rabaty",
            "Uszeregowana lista działań z oczekiwanym efektem",
          ],
        },
        {
          id: "internal-theft",
          title: "Śledztwa w sprawie kradzieży wewnętrznych",
          description:
            "Dyskretne, prawnie obronne śledztwa dotyczące kradzieży pracowniczych i zmowy z dostawcami lub klientami, prowadzone tak, by wynik utrzymał się w sporze pracowniczym.",
          deliverables: [
            "Gromadzenie dowodów w granicach prawa",
            "Ustrukturyzowane rozmowy i obsługa przyznania się",
            "Akta sprawy dla postępowania dyscyplinarnego lub karnego",
          ],
        },
        {
          id: "logistics-protection",
          title: "Ochrona łańcucha dostaw i logistyki",
          description:
            "Ochrona towaru w transporcie i w spoczynku: magazyny, cross-docki, ostatnia mila, w tym weryfikacja kierowców i analiza ryzyka tras.",
          deliverables: [
            "Ocena ryzyka tras i węzłów w łańcuchu",
            "Projekt kontroli plomb, śledzenia i uzgodnień",
            "Standardy weryfikacji przewoźników i kierowców",
          ],
        },
      ],
    },
    {
      id: "anti-fraud",
      label: "Systemy antyfraudowe",
      title: "Systemy antyfraudowe",
      tagline: "Logika detekcji, kontrole i śledztwa w sprawach przestępstw finansowych.",
      description:
        "Oszustwo to problem systemowy. Projektujemy kontrole, logikę monitoringu i kanały zgłoszeń, które ujawniają je wcześnie, a następnie badamy to, co już się stało.",
      items: [
        {
          id: "fraud-risk-assessment",
          title: "Ocena ryzyka nadużyć",
          description:
            "Mapowanie wszystkich schematów realnie dostępnych osobom wewnętrznym, klientom, dostawcom i grupom zorganizowanym w zestawieniu z obecnymi kontrolami.",
          deliverables: [
            "Rejestr ryzyk nadużyć według schematów",
            "Analiza luk kontrolnych w całym cyklu transakcji",
            "Oświadczenie o ekspozycji na nadużycia dla zarządu",
          ],
        },
        {
          id: "transaction-monitoring",
          title: "Monitoring i scoring transakcji",
          description:
            "Projektowanie reguł i modeli dla płatności, roszczeń i zamówień — skalibrowanych tak, by realne nadużycia wychodziły na wierzch bez zalewu fałszywych alarmów.",
          deliverables: [
            "Zestaw reguł detekcji i logika scoringu ryzyka",
            "Przepływ obsługi alertów i system prowadzenia spraw",
            "Kalibracja precyzji i czułości na historycznych sprawach",
          ],
        },
        {
          id: "aml-kyc",
          title: "Budowa programu AML / KYC",
          description:
            "Należyta staranność wobec klienta, screening sankcyjny, weryfikacja beneficjentów rzeczywistych i raportowanie podejrzanych działań, zbudowane pod kontrolę nadzorczą.",
          deliverables: [
            "Ramy należytej staranności oparte na ryzyku",
            "Konfiguracja screeningu i redukcja fałszywych trafień",
            "Procedury raportowania i certyfikacja personelu",
          ],
        },
        {
          id: "forensic-accounting",
          title: "Rachunkowość śledcza i dochodzenia",
          description:
            "Rekonstrukcja zapisów finansowych w celu wyliczenia strat, śledzenia środków i wsparcia odzyskiwania, roszczeń ubezpieczeniowych i zawiadomień karnych.",
          deliverables: [
            "Wyliczenie strat wraz z dowodami",
            "Śledzenie środków i identyfikacja aktywów",
            "Opinia biegłego i wsparcie w postępowaniu",
          ],
        },
      ],
    },
  ],
}
