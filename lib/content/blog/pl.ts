import type { BlogCopy } from "../types"

export const blogPl: BlogCopy = {
  title: "Analizy",
  description:
    "Notatki z audytów, postępowań wyjaśniających i sztabów kryzysowych. Pisane dla osób, które muszą podjąć decyzję, a nie dla wyszukiwarek.",
  allLabel: "Wszystkie tematy",
  readMore: "Czytaj artykuł",
  backToIndex: "Powrót do analiz",
  minRead: "min czytania",
  relatedLabel: "Powiązane materiały",
  notFound: "Taki artykuł nie istnieje.",
  posts: [
    {
      slug: "nis2-what-actually-changes",
      category: "audits",
      categoryLabel: "Audyty i zgodność",
      date: "2026-06-18",
      readingTime: 7,
      title: "NIS2: co naprawdę zmienia się dla średnich firm",
      excerpt:
        "Większość publikacji skupia się na karach. Trudniejszą zmianą jest osobista odpowiedzialność organów zarządzających i 24-godzinny termin wczesnego ostrzeżenia.",
      body: [
        {
          paragraphs: [
            "NIS2 rozszerzyła zakres europejskich regulacji cyberbezpieczeństwa daleko poza operatorów infrastruktury krytycznej, do których adresowana była NIS1. Produkcja, przetwórstwo spożywcze, gospodarka odpadami, usługi pocztowe i dostawcy cyfrowi są dziś objęci dyrektywą przy progach obejmujących firmy z pięćdziesięcioma pracownikami.",
            "Na codzienną działalność najbardziej wpływają nie górne granice kar, lecz terminy raportowania, obowiązek zabezpieczenia łańcucha dostaw oraz to, że organy zarządzające mogą ponosić osobistą odpowiedzialność za brak zatwierdzenia i nadzoru nad środkami zarządzania ryzykiem.",
          ],
        },
        {
          heading: "24 godziny to problem procesu, nie technologii",
          paragraphs: [
            "Macie 24 godziny od powzięcia wiedzy o istotnym incydencie na przekazanie wczesnego ostrzeżenia, 72 godziny na pełne zgłoszenie i miesiąc na raport końcowy. Dwadzieścia cztery godziny wydają się wystarczające, dopóki nie uwzględnimy wykrycia w piątek wieczorem, dyżurnego inżyniera bez uprawnień do kontaktu z organem nadzoru i działu prawnego, który chce uzgodnić brzmienie.",
            "Organizacje dotrzymujące tego terminu zdecydowały wcześniej, kto uznaje incydent za istotny, kto podpisuje zgłoszenie i co dokładnie się w nim znajduje. Tej decyzji nie da się podjąć w trakcie incydentu.",
          ],
          bullets: [
            "Wyznaczcie jedną osobę odpowiedzialną i dwóch zastępców, z kanałami kontaktu niezależnymi od poczty firmowej",
            "Przygotujcie szablon wczesnego ostrzeżenia z wyprzedzeniem, tak by pozostało wpisanie samych faktów",
            "Przećwiczcie decyzję o zgłoszeniu na ćwiczeniu sztabowym, a nie w noc zdarzenia",
          ],
        },
        {
          heading: "Łańcuch dostaw jest teraz waszym obowiązkiem umownym",
          paragraphs: [
            "Dyrektywa wymaga zarządzania ryzykiem bezpieczeństwa w relacjach z dostawcami, włącznie z ich własnymi praktykami ochronnymi. W praktyce oznacza to podział dostawców według poziomu dostępu, wpisanie obowiązków bezpieczeństwa do umów i posiadanie dowodów ich regularnego przeglądu.",
            "Zacznijcie od dostawców posiadających dostęp administracyjny do waszych systemów lub danych klientów. Ta lista jest zwykle krótsza, niż się oczekuje, i nieproporcjonalnie ryzykowna.",
          ],
        },
        {
          heading: "Jak wygląda obronna pozycja",
          paragraphs: [
            "Organy nadzoru nie szukają doskonałości. Szukają dowodu, że kierownictwo rozumiało ryzyko, zatwierdziło proporcjonalne środki i potrafi wykazać, kiedy podjęto decyzje. Protokoły, datowane rejestry ryzyka i przeprowadzone ćwiczenia znaczą więcej niż polityka, której nikt nie przeczytał.",
          ],
        },
      ],
    },
    {
      slug: "shrinkage-is-a-data-problem",
      category: "loss-prevention",
      categoryLabel: "Zapobieganie stratom",
      date: "2026-05-27",
      readingTime: 6,
      title: "Straty to najpierw problem danych, a dopiero potem kradzieży",
      excerpt:
        "W większości sieci handlowych jedna trzecia zarejestrowanych strat nigdy nie opuściła budynku. Rozdzielenie błędu procesowego od kradzieży zmienia to, gdzie idzie budżet.",
      body: [
        {
          paragraphs: [
            "Gdy straty rosną, pierwszym odruchem jest dodanie kamer i ochrony. To kosztowne i zwykle skierowane w niewłaściwe miejsce, bo znaczna część zarejestrowanych strat wcale nie jest kradzieżą: to błędy przyjęcia towaru, nieskanowane dostawy, nieujęte przeceny, niekonsekwentne spisywanie uszkodzonego towaru i zapas, który istnieje, ale nie da się go znaleźć.",
            "Dopóki te kategorie nie zostaną rozdzielone, każda interwencja jest zgadywaniem. Pierwszym zadaniem programu zapobiegania stratom jest atrybucja, nie karanie.",
          ],
        },
        {
          heading: "Najpierw atrybucja, potem interwencja",
          paragraphs: [
            "Atrybucja oznacza uzgodnienie zarejestrowanych strat ze zdarzeniami operacyjnymi, które mogą je wyjaśnić, na najmniejszym dostępnym poziomie: obiekt, zmiana, kasa, operator, grupa towarowa. Wzory pojawiają się szybko. Kradzież skupia się wokół konkretnych osób, godzin i towarów o wysokiej wartości i małej objętości. Błąd procesowy — wokół konkretnych procedur i nowych pracowników.",
          ],
          bullets: [
            "Porównajcie straty na obiekt z rozbieżnościami przyjęć dostaw w tym samym okresie",
            "Sprawdźcie częstość anulowań, zwrotów i ręcznych rabatów na operatora względem średnich",
            "Ustalcie, czy obiekty o wysokich stratach mają też wysoką rotację kadr — luki w szkoleniu wyglądają jak kradzież",
          ],
        },
        {
          heading: "Zmowa wewnętrzna ma swój ślad",
          paragraphs: [
            "Gdy kradzież jest wewnętrzna, rzadko jest to samotny sprawca wynoszący towar pod ubraniem. To zwrot przetworzony na znaną kartę, dostawa podpisana z niedoborem, rabat udzielony koledze lub dostawca fakturujący towar, który nigdy nie dotarł. Wszystko to zostawia ślady transakcyjne, które ujawni raportowanie wyjątków, jeśli reguły są kalibrowane na waszych własnych danych bazowych, a nie na domyślnych ustawieniach dostawcy.",
          ],
        },
        {
          heading: "I dopiero wtedy wydawajcie pieniądze",
          paragraphs: [
            "Gdy straty są przypisane, działania fizyczne i proceduralne stają się celowane: ściślejsza kontrola przyjęć tam, gdzie nie zgadza się uzgodnienie, zmiana procedur kasowych tam, gdzie skupiają się wyjątki, i postępowanie wyjaśniające tam, gdzie obraz transakcyjny jest jednoznaczny. Ten sam budżet użyty w ten sposób zwraca zwykle wielokrotnie więcej niż równomierne wdrożenie kamer.",
          ],
        },
      ],
    },
    {
      slug: "phishing-training-that-changes-behaviour",
      category: "training",
      categoryLabel: "Szkolenia i świadomość",
      date: "2026-04-30",
      readingTime: 5,
      title: "Dlaczego wasze szkolenie z phishingu jest mierzone błędnie",
      excerpt:
        "Odsetek ukończenia mierzy obecność. Odsetek kliknięć mierzy poprzedni kwartał. Wskaźnikiem, który przewiduje kolejny incydent, jest szybkość zgłoszenia.",
      body: [
        {
          paragraphs: [
            "Niemal każdy program świadomości raportuje zarządowi dwie liczby: ilu pracowników ukończyło szkolenie i jaki procent kliknął symulowany phishing. Żadna z nich nie mówi, czy przetrwacie prawdziwą kampanię.",
            "Ukończenie to obecność. Odsetek kliknięć to wskaźnik opóźniony, który naturalnie spada, gdy pracownicy uczą się rozpoznawać platformę symulacyjną, a nie atak. Żaden z nich nie ujmuje zmiennej, która faktycznie decyduje o skali incydentu.",
          ],
        },
        {
          heading: "Mierzcie czas do zgłoszenia",
          paragraphs: [
            "W prawdziwej kampanii wykradania danych uwierzytelniających ktoś kliknie. Pytanie brzmi, ile czasu minie, aż człowiek powiadomi zespół bezpieczeństwa, bo ten odstęp to niezakłócone okno pracy atakującego. Organizacja, w której pierwsze zgłoszenie przychodzi po czterech minutach, może unieważnić sesje i zresetować hasła przed rozpoczęciem ruchu poprzecznego. Ta, w której przychodzi następnego rana, nie może.",
          ],
          bullets: [
            "Mierzcie medianę i najgorszy czas od dostarczenia do pierwszego zgłoszenia wewnętrznego",
            "Liczcie odsetek zgłaszających wśród wszystkich odbiorców, nie tylko wśród klikających",
            "Uczyńcie zgłoszenie jednym kliknięciem, bez ryzyka nagany za fałszywy alarm",
          ],
        },
        {
          heading: "Trenujcie reakcję, nie rozpoznawanie",
          paragraphs: [
            "Szkolenie z rozpoznawania ma granicę: wystarczająco ukierunkowana wiadomość przejdzie. Szkolenie z reakcji granicy nie ma, bo działa nawet wtedy, gdy rozpoznanie zawiedzie. Kto kliknął, powinien dokładnie wiedzieć, co zrobić w kolejnych trzydziestu sekundach, i wynieść z programu jasny wniosek: zgłoszenie błędu jest nagradzane, a nie karane.",
            "Najszybszą poprawą dla większości organizacji jest nie technika, a kultura: usuńcie każdy bodziec do niezgłaszania, a potem sprawdźcie, czy zgłoszenia przychodzą.",
          ],
        },
      ],
    },
    {
      slug: "fraud-controls-transaction-lifecycle",
      category: "anti-fraud",
      categoryLabel: "Systemy antyfraudowe",
      date: "2026-03-12",
      readingTime: 6,
      title: "Projektowanie kontroli antyfraudowych wokół cyklu życia transakcji",
      excerpt:
        "Dodawanie reguł do systemu monitoringu leczy objawy. Rozłożenie kontroli na etapy transakcji usuwa samą okazję.",
      body: [
        {
          paragraphs: [
            "Gdy pojawiają się straty z tytułu nadużyć, typową reakcją jest napisanie kolejnych reguł detekcji. Detekcja ma znaczenie, ale działa po fakcie i dziedziczy każdą słabość procesu, który utworzył transakcję. Trwałe ograniczenie nadużyć daje rozłożenie kontroli na cały cykl: pozyskanie klienta, autoryzację, wykonanie, rozliczenie i uzgodnienie.",
          ],
        },
        {
          heading: "Gdzie koncentruje się okazja",
          paragraphs: [
            "Większość nadużyć wewnętrznych wykorzystuje jedną z trzech słabości strukturalnych: jedna osoba może utworzyć i zatwierdzić transakcję, zmiana danych podstawowych przechodzi bez przeglądu, a rozbieżność uzgodnienia jest zamykana bez niezależnych dowodów. Każda z nich to decyzja projektowa w kontrolach, nie awaria monitoringu.",
          ],
          bullets: [
            "Rozdzielcie tworzenie od zatwierdzania dla płatności, zwrotów, not kredytowych i odpisów",
            "Traktujcie zmiany danych dostawców i list płac jako zdarzenia wysokiego ryzyka wymagające przeglądu drugiej linii",
            "Wymagajcie udokumentowanych dowodów przed odpisaniem jakiejkolwiek różnicy uzgodnieniowej",
          ],
        },
        {
          heading: "Kalibrujcie detekcję na własnej historii",
          paragraphs: [
            "Gdy kontrole strukturalne działają, monitoring zaczyna się opłacać. Ale reguły ustawione na domyślnych wartościach dostawcy generują wolumen alertów, którego żaden zespół nie obsłuży, a kolejka, której nikt nie czyta, jest gorsza od braku kolejki. Kalibrujcie progi na własnych potwierdzonych sprawach, uczciwie mierzcie precyzję i wycofujcie reguły, które nigdy nie dały prawdziwego trafienia.",
          ],
        },
        {
          heading: "Dajcie ludziom kanał",
          paragraphs: [
            "W publikowanych danych o sprawach zgłoszenia pracowników pozostają najbardziej produktywnym źródłem wykrywania nadużyć — przed audytem wewnętrznym i systemami monitoringu. Kanał zgłoszeń, który jest naprawdę poufny, przyjmowany niezależnie i widocznie obsługiwany, to jedna z najtańszych dostępnych kontroli i jedna z najbardziej konsekwentnie niedofinansowanych.",
          ],
        },
      ],
    },
    {
      slug: "red-team-versus-penetration-test",
      category: "cybersecurity",
      categoryLabel: "Cyberbezpieczeństwo",
      date: "2026-02-04",
      readingTime: 5,
      title: "Red team czy test penetracyjny: jak wybrać właściwy format",
      excerpt:
        "Odpowiadają na różne pytania. Kupno niewłaściwego marnuje budżet i daje raport, który błędnie was uspokaja.",
      body: [
        {
          paragraphs: [
            "W dokumentach zakupowych te terminy stosuje się wymiennie, choć nie są tożsame. Test penetracyjny odpowiada na pytanie o pokrycie: jakie podatności istnieją w zdefiniowanym zakresie. Red team odpowiada na pytanie o zdolność: czy zmotywowany przeciwnik może osiągnąć konkretny cel bez wykrycia i zatrzymania.",
          ],
        },
        {
          heading: "Najpierw testy, red team później",
          paragraphs: [
            "Jeśli nie testowaliście systematycznie perymetru zewnętrznego, sieci wewnętrznej i aplikacji, red team jest przedwczesny. Osiągnie cel przez pierwszą niezałataną usługę, ucząc was tego, co można było poznać za ułamek kosztu, i nie przetestuje waszej zdolności detekcyjnej w sposób znaczący.",
            "Test penetracyjny ustala poziom bazowy. Red team weryfikuje, czy ludzie, procesy i narzędzia wokół tego poziomu naprawdę działają pod presją.",
          ],
        },
        {
          heading: "Co zapisać w zamówieniu",
          paragraphs: [
            "Jakość zlecenia określa dokument zakresu bardziej niż wybór wykonawcy. Niejasność co do celów, autoryzacji i zasad prowadzenia działań daje raporty pełne ustaleń, z którymi nikt nic nie zrobi.",
          ],
          bullets: [
            "Sformułujcie cel w kategoriach biznesowych: do jakich danych lub możliwości ma dotrzeć przeciwnik",
            "Określcie autoryzację wprost, włącznie z socjotechniką i wejściem fizycznym, jeśli są w zakresie",
            "Wymagajcie darmowego retestu naprawionych ustaleń i wskażcie, kto podpisuje zamknięcie",
          ],
        },
      ],
    },
    {
      slug: "executive-protection-starts-with-data",
      category: "corporate-security",
      categoryLabel: "Bezpieczeństwo korporacyjne",
      date: "2026-01-15",
      readingTime: 5,
      title: "Ochrona kadry zarządzającej zaczyna się od audytu śladu cyfrowego",
      excerpt:
        "Przed zespołem ochrony usuńcie informacje, które pozwalają zaplanować działanie przeciw waszemu kierownictwu. To tańsze i często skuteczniejsze.",
      body: [
        {
          paragraphs: [
            "Gdy firma decyduje, że kierownictwo potrzebuje ochrony, rozmowa zwykle zaczyna się od ludzi i pojazdów. To widoczna część dyscypliny i przy naprawdę podwyższonym poziomie zagrożenia jest konieczna. Ale najtańszym i najbardziej konsekwentnie użytecznym pierwszym krokiem jest ograniczenie informacji dostępnych komuś, kto planuje zbliżenie.",
          ],
        },
        {
          heading: "Co jest zwykle odsłonięte",
          paragraphs: [
            "Adresy domowe w zgłoszeniach do rejestrów i księgach wieczystych. Członkowie rodziny rozpoznawalni przez media społecznościowe. Przewidywalne rutyny publikowane w agendach konferencji. Numery rejestracyjne, karnety, szkoły i trasy widoczne przez aplikacje sportowe oraz metadane zdjęć. Osobno nieszkodliwe, razem gotowy plan.",
          ],
          bullets: [
            "Sprawdźcie zgłoszenia korporacyjne i wpisy rejestrowe pod kątem adresów zamieszkania",
            "Przejrzyjcie ślad cyfrowy członków rodziny, nie tylko samego kierownika",
            "Ustalcie, czy publikowane harmonogramy czynią przemieszczenia przewidywalnymi na tygodnie naprzód",
          ],
        },
        {
          heading: "I dopiero potem środki fizyczne",
          paragraphs: [
            "Po ograniczeniu ekspozycji środki ochronne mogą być proporcjonalne: ocena bezpieczeństwa miejsca zamieszkania, bezpieczny transport na wskazane ryzykowne przejazdy, briefingi przed podróżą do konkretnych kierunków i przećwiczony protokół komunikacji dla rodziny. Większość organizacji odkrywa, że stałej ochrony potrzebuje znacznie mniej, niż zakładała, a przygotowania znacznie więcej.",
          ],
        },
      ],
    },
  ],
}
