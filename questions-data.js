window.QUESTIONS_DATA = [
  {
    "cat": "BHP i procedury",
    "q": "Przed każdym podłączeniem zasilania elektrycznego (230 V AC / 24 V DC) oraz sprężonego powietrza egzaminowany musi:",
    "a": [
      "Samodzielnie włączyć zasilanie i poinformować o tym ZN po fakcie",
      "Podnieść rękę i uzyskać zgodę Przewodniczącego Zespołu Nadzorującego (ZN)",
      "Poczekać aż inni zdający skończą pracę",
      "Wpisać numer zadania do protokołu i włączyć zasilanie"
    ],
    "c": 1,
    "ex": "Zgodnie z procedurą egzaminacyjną zgłoszenie gotowości do włączenia zasilania odbywa się przez podniesienie ręki i uzyskanie zgody Przewodniczącego ZN — dotyczy to zarówno zasilania elektrycznego, jak i pneumatycznego.",
    "id": 1
  },
  {
    "cat": "BHP i procedury",
    "q": "Jaka jest maksymalna dopuszczalna prędkość robota podczas testowania programu w trybie ręcznym (T1) wg zaleceń arkuszy?",
    "a": [
      "Maksymalnie 10% prędkości maksymalnej",
      "Maksymalnie 25% prędkości maksymalnej",
      "Maksymalnie 50% prędkości maksymalnej",
      "Bez ograniczeń, jeśli operator jest w strefie bezpiecznej"
    ],
    "c": 0,
    "ex": "Testowanie w trybie ręcznym (T1) musi odbywać się z prędkością zredukowaną do maksymalnie 10% prędkości maksymalnej. Dopiero po potwierdzeniu bezkolizyjności można uruchomić AUTO z 20–30%.",
    "id": 2
  },
  {
    "cat": "BHP i procedury",
    "q": "Jaki jest minimalny zalecany poziom prędkości robota przy pierwszym uruchomieniu programu w trybie automatycznym (AUTO)?",
    "a": [
      "5%",
      "10%",
      "20% lub 30%",
      "100% dla weryfikacji wydajności"
    ],
    "c": 2,
    "ex": "Po potwierdzeniu bezkolizyjności przebiegu w T1, pierwsze uruchomienie w AUTO odbywa się z prędkością minimum 20% lub 30% prędkości maksymalnej robota.",
    "id": 3
  },
  {
    "cat": "BHP i procedury",
    "q": "Przycisk trójpozycyjny na programatorze ręcznym (teach pendant) to tzw.:",
    "a": [
      "E-STOP",
      "Przycisk czuwaka (deadman switch / enabling device)",
      "Przycisk RESET",
      "Przełącznik trybu T1/AUTO"
    ],
    "c": 1,
    "ex": "Przycisk trójpozycyjny to przycisk zezwolenia (czuwak / deadman switch). Wciśnięty do połowy — zezwala na ruch w T1; całkowicie wciśnięty lub zwolniony — zatrzymuje robota.",
    "id": 4
  },
  {
    "cat": "BHP i procedury",
    "q": "Środki ochrony indywidualnej wymagane podczas prac mechanicznych, montażowych i uruchomieniowych na stanowisku to przede wszystkim:",
    "a": [
      "Kask i pasy bezpieczeństwa",
      "Okulary ochronne i odzież robocza",
      "Rękawice antyprzecięciowe i fartuch",
      "Maska przeciwpyłowa i nauszniki"
    ],
    "c": 1,
    "ex": "Arkusze egzaminacyjne wymagają stosowania okularów ochronnych oraz odzieży roboczej podczas wszystkich prac mechanicznych, montażowych i uruchomieniowych.",
    "id": 5
  },
  {
    "cat": "BHP i procedury",
    "q": "Po zadziałaniu grzybkowego wyłącznika E-STOP robot powinien:",
    "a": [
      "Kontynuować ruch z obniżoną prędkością",
      "Natychmiast zatrzymać ruch (odcięcie zasilania serwonapędów) i wyświetlić komunikat błędu",
      "Przejść w tryb jog manualny",
      "Zaparkować się w pozycji HOME"
    ],
    "c": 1,
    "ex": "E-STOP działa natychmiastowo: odcina zasilanie serwonapędów i zatrzymuje ruch robota, wyświetlając stosowny komunikat. Nie ma tu stopniowego hamowania.",
    "id": 6
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Robot przemysłowy 6-osiowy o strukturze antropomorficznej (ramieniowej) posiada:",
    "a": [
      "4 stopnie swobody",
      "6 stopni swobody",
      "3 stopnie swobody",
      "8 stopni swobody"
    ],
    "c": 1,
    "ex": "Manipulator antropomorficzny ramieniowy ma 6 stopni swobody (6 niezależnych osi obrotowych), co pozwala na pełne pozycjonowanie i orientację końcówki w przestrzeni 3D.",
    "id": 7
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Odczyt współrzędnych przegubowych (Joint 1÷6) robota wyrażany jest w:",
    "a": [
      "Milimetrach",
      "Stopniach",
      "Niutonometrach",
      "Barach"
    ],
    "c": 1,
    "ex": "Współrzędne przegubowe (ang. joint) wyraża się w stopniach (°) — są to wartości kątowe poszczególnych osi obrotowych od pozycji zerowej/synchronizacyjnej.",
    "id": 8
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Aby przywrócić prawidłowe położenie osi robota, należy ustawić je na:",
    "a": [
      "Dowolnej zapamiętanej pozycji",
      "Mechanicznych znacznikach synchronizacyjnych (znacznikach zerowych / vernier)",
      "Krańcowych wyłącznikach bezpieczeństwa",
      "Pozycji PINIT odczytanej przy starcie"
    ],
    "c": 1,
    "ex": "Każda oś ma mechaniczne znaczniki synchronizacyjne. Ustawienie osi 1–6 na tych znacznikach (np. kreska na kreskę) pozwala odtworzyć zerową pozycję bazową manipulatora.",
    "id": 9
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Pojęcie PINIT w dokumentacji robota oznacza:",
    "a": [
      "Punkt startowy programowania / odczyt zaczynanych pozycji osi po wejściu na stanowisko",
      "Kasowanie programu",
      "Pomiar inicjalny TCP",
      "Nazwę pliku programu egzaminacyjnego"
    ],
    "c": 0,
    "ex": "PINIT (ang. Point Initial) to pozycja początkowa robota — zarejestrowane położenia osi odczytane na starcie egzaminu, przed zaprogramowaniem pozycji HOME.",
    "id": 10
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Punkt HOME (PHOME) robota to:",
    "a": [
      "Dowolna pozycja bezpieczna nad paletą",
      "Pozycja bazowa/bezpieczna (np. wszystkie osie na znacznikach z osią 5 obróconą o 90°)",
      "Punkt pobierania detalu z magazynu",
      "Punkt zerowy układu UFRAME"
    ],
    "c": 1,
    "ex": "PHOME (pozycja bazowa/domowa) to bezpieczna pozycja bez kolizji z detalami, do której robot wraca po cyklu — typowo wszystkie osie na znacznikach, oś 5 obrócona o ok. 90°.",
    "id": 11
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Robot SCARA to struktura o charakterze:",
    "a": [
      "Kartezjańskim",
      "Równoległym (DELTA)",
      "O dwóch obrotowych osiach w płaszczyźnie poziomej + pionowym przesuwie",
      "Antropomorficznym 6-osiowym"
    ],
    "c": 2,
    "ex": "SCARA (Selective Compliance Assembly Robot Arm) to struktura o dwóch równoległych osiach obrotowych w płaszczyźnie poziomej oraz pionowym przesuwie — szybka do montażu i precyzyjnych operacji płaskich.",
    "id": 12
  },
  {
    "cat": "Kinematyka i mechanika",
    "q": "Minimalny zasięg robota egzaminacyjnego wymagany do realizacji zadań w arkuszach wynosi:",
    "a": [
      "200 mm",
      "400 mm",
      "800 mm",
      "1600 mm"
    ],
    "c": 1,
    "ex": "W arkuszach egzaminacyjnych zasięg robota na stanowisku wynosi min. 400 mm, przy udźwigu minimalnym 0,5 kg.",
    "id": 13
  },
  {
    "cat": "Układy współrzędnych",
    "q": "TCP (Tool Center Point) to:",
    "a": [
      "Punkt środkowy narzędzia — końcówka robocza, względem której realizowane są ruchy",
      "Punkt zerowy układu bazowego robota",
      "Karta protokołu transmisji z PLC",
      "Tryb pracy robota"
    ],
    "c": 0,
    "ex": "TCP to punkt środkowy narzędzia (ang. Tool Center Point) — wykalibrowany punkt końcówki roboczej, względem którego sterownik planuje trajektorię i do którego dochodzi przy pozycjonowaniu.",
    "id": 14
  },
  {
    "cat": "Układy współrzędnych",
    "q": "Kalibracja TCP metodą wielopunktową wymaga minimum:",
    "a": [
      "1 punktu",
      "2 punktów",
      "3, 4 lub 6 punktów przy użyciu iglicy referencyjnej",
      "10 punktów"
    ],
    "c": 2,
    "ex": "W arkuszach stosuje się kalibrację 3-, 4- lub 6-punktową względem iglicy referencyjnej — im więcej punktów, tym dokładniejsze wyznaczenie TCP. Metoda 4-punktowa to standard.",
    "id": 15
  },
  {
    "cat": "Układy współrzędnych",
    "q": "Definiowanie układu współrzędnych użytkownika (UFRAME) metodą 3 punktów wymaga:",
    "a": [
      "Punktu początkowego, punktu na osi X i punktu na płaszczyźnie XY",
      "Tylko 1 punktu (środka)",
      "2 punktów na linii prostej",
      "4 punktów narożnych prostokąta"
    ],
    "c": 0,
    "ex": "Metoda 3 punktów: (1) Origin Point — początek układu, (2) X Direction Point — punkt na kierunku osi X, (3) Y Direction Point — punkt definiujący płaszczyznę XY. Wyznaczają one położenie i orientację bazy użytkownika.",
    "id": 16
  },
  {
    "cat": "Układy współrzędnych",
    "q": "Po co na stanowisku definiuje się dwa układy UFRAME (np. UFRAME 1 i UFRAME 2)?",
    "a": [
      "Dla dwóch robotów",
      "Aby wykonać ten sam program/trajektorię w innym układzie odniesienia (np. drugi arkusz/pozycja)",
      "Aby zmienić tryb pracy na AUTO",
      "Aby dodać drugi czujnik do kontrolera"
    ],
    "c": 1,
    "ex": "Wielokrotne bazy (UFRAME 1, UFRAME 2) pozwalają na powtórzenie tych samych względnych ruchów (np. rysowania figury) w innym miejscu stanowiska, bez przepisywania programu.",
    "id": 17
  },
  {
    "cat": "Układy współrzędnych",
    "q": "Układ współrzędnych 'World' w sterowniku robota oznacza:",
    "a": [
      "Układ narzędzia",
      "Globalny, nieruchomy układ odniesienia bazowy robota",
      "Układ lokalny detalu w chwytaku",
      "Układ zapisany w PLC"
    ],
    "c": 1,
    "ex": "World to globalny układ bazowy robota (nieruchomy, zwykle w podstawie). Odnosimy do niego inne układy: Base, Tool, UFRAME/WorkObject.",
    "id": 18
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Interpolacja złączowa (Joint / MoveJ) stosowana jest najczęściej do:",
    "a": [
      "Precyzyjnego dojazdu do punktu pobrania detalu",
      "Rysowania okręgu",
      "Szybkich ruchów dojazdowych w przestrzeni otwartej i powrotu do HOME",
      "Detekcji kolizji"
    ],
    "c": 2,
    "ex": "Joint/MoveJ to najszybszy rodzaj ruchu (każda oś interpolowana liniowo w kącie) — używany do przemieszczania w przestrzeni otwartej, ruchy dojazdowe i powroty. Nie gwarantuje prostej ścieżki narzędzia.",
    "id": 19
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Ruch liniowy (Linear / MoveL) jest niezbędny przy:",
    "a": [
      "Powrocie do HOME przez strefę otwartą",
      "Rysowaniu prostych odcinków i precyzyjnym dojeździe do punktu pick/place",
      "Szybkim transporcie robota w tryb AUTO",
      "Zwalnianiu zwolnicy hamulca"
    ],
    "c": 1,
    "ex": "MoveL porusza TCP po prostej między punktami — jest wymagany tam, gdzie ścieżka narzędzia musi być prostoliniowa: dojazd do pobrania detalu, wyciąganie, odkładanie, rysowanie prostych.",
    "id": 20
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Rysowanie okręgu lub łuku na planszy realizuje się przy użyciu interpolacji:",
    "a": [
      "Joint",
      "Linear",
      "Circular (kołowej) z punktem pośrednim",
      "Punktowej"
    ],
    "c": 2,
    "ex": "Interpolacja kołowa (Circular / MoveC) wymaga podania punktu pośredniego (na łuku) oraz punktu końcowego, definiując łuk/okrąg — używana do aplikacji kreślarskich.",
    "id": 21
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Który parametr ruchu zapewnia dokładne zatrzymanie w punkcie (bez zaokrąglania toru)?",
    "a": [
      "CNT (continuous)",
      "FINE / z0 / FINE STOP",
      "WZ (welding zone)",
      "Vmax"
    ],
    "c": 1,
    "ex": "FINE (lub z0, FINE STOP) to strefa zatrzymania dokładnego — robot w pełni wyhamowuje w punkcie, co jest wymagane przy pobieraniu i odkładaniu detali. CNT zaokrągla tor i przechodzi płynnie.",
    "id": 22
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Parametr CNT (Zone) w instrukcji ruchu oznacza:",
    "a": [
      "Dokładne zatrzymanie w punkcie",
      "Historyczny parametr nieużywany",
      "Zaokrąglenie toru — robot przechodzi przez punkt bez zatrzymania, z promieniem zaokrąglenia",
      "Liczbę powtórzeń ruchu"
    ],
    "c": 2,
    "ex": "CNT / Zone (np. CNT50, CNT100) definiuje promień zaokrąglenia toru w punkcie pośrednim — robot przejeżdża płynnie, nie tracąc czasu na wyhamowanie. Wartość wyższa = większy łuk.",
    "id": 23
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Instrukcja WaitTime / Delay stosowana jest do:",
    "a": [
      "Oczekiwania na sygnał wejściowy",
      "Odliczenia opóźnień czasowych, np. 2 s na zamknięcie szczęk chwytaka",
      "Zmiany trybu pracy robota",
      "Zapisu współrzędnych punktu"
    ],
    "c": 1,
    "ex": "WaitTime (Delay) to opóźnienie czasowe — używane m.in. na ustabilizowanie detalu, czas reakcji czujnika, pewne zamknięcie szczęk chwytaka pneumatycznego. Czas wyrażany w sekundach.",
    "id": 24
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Instrukcja WaitDI w programie robota:",
    "a": [
      "Oczekuje na sygnał cyfrowy wejściowy (np. naciśnięcie S1, sygnał z PLC)",
      "Zapisuje stan wyjścia",
      "Zmienia wartość licznika",
      "Aktywuje program PLC"
    ],
    "c": 0,
    "ex": "WaitDI (Wait Digital Input) wstrzymuje wykonywanie programu do momentu pojawienia się oczekiwanego stanu sygnału wejściowego — np. naciśnięcia przycisku START lub potwierdzenia z PLC.",
    "id": 25
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Pętla z warunkiem w programie robota (np. FOR, WHILE) służy do:",
    "a": [
      "Zapisania wielu punktów jednocześnie",
      "Wielokrotnego/celowego powtarzania bloku instrukcji (np. cyklu na detale)",
      "Zabezpieczenia przed kolizją",
      "Kalibracji TCP"
    ],
    "c": 1,
    "ex": "Instrukcje pętli (FOR, WHILE, LOOP) umożliwiają wielokrotne wykonanie bloku czynności — np. sortowanie wielu detali z magazynu bez zwielokrotniania kodu.",
    "id": 26
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Instrukcja warunkowa IF ... THEN ... ELSE w aplikacji sortującej detale pozwala na:",
    "a": [
      "Zmianę układu narzędzia",
      "Podjęcie decyzji o torze ruchu na podstawie stanu czujnika (np. czy detal jest metalowy)",
      "Zapis danych do pliku",
      "Kalibrację osi"
    ],
    "c": 1,
    "ex": "Instrukcja IF czyta stan wejścia (np. czujnika indukcyjnego B5) i rozgałęzia program: detal metalowy → pojemnik A, detal z tworzywa → pojemnik B.",
    "id": 27
  },
  {
    "cat": "Programowanie ruchów",
    "q": "Nadawanie czytelnych nazw punktom (np. POBIERZ_DETAL, PALETA_P1) jest wymagane, ponieważ:",
    "a": [
      "Zmniejsza rozmiar pliku programu",
      "Ułatwia czytelność kodu i komentowanie przeznaczenia punktów (wymóg dobrej praktyki)",
      "Przyspiesza wykonanie ruchu",
      "Jest niezbędne dla sterownika PLC"
    ],
    "c": 1,
    "ex": "Arkusze wymagają komentowania linii programu i stosowania opisowych nazw — ułatwia to weryfikację przez egzaminatora i późniejsze modyfikacje.",
    "id": 28
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Do pomiaru rezystancji przerwanego przewodu z listwy do odbiornika użyjesz multimetru w trybie:",
    "a": [
      "Woltomierza DC",
      "Amperomierza",
      "Omomierza / testera ciągłości (funkcja brzęczyka)",
      "Miernika częstotliwości"
    ],
    "c": 2,
    "ex": "Przerwę w obwodzie wykrywa się omomierzem lub funkcją ciągłości (brzęczyk). Prawidłowo zamknięty przewód daje R≈0 Ω i brzęczyk, przerwany — R=∞ (wyświetlacz: OL).",
    "id": 29
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Wskaźnik OL (przekroczenie) na omomierzu podczas pomiaru przewodu oznacza:",
    "a": [
      "Przewód jest w pełni prawidłowy",
      "Przerwę w obwodzie (R = ∞, przewód zerwany)",
      "Zwarcie do masy",
      "Przeciążenie prądowe"
    ],
    "c": 1,
    "ex": "OL (OverLoad) na omomierzu = wartość poza zakresem pomiarowym, czyli nieskończoność — klasyczny objaw przerwanego przewodu lub rozwartego styku.",
    "id": 30
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Wynik rezystancji R ≈ 0 Ω między dwoma punktami, które w normalnym stanie powinny być rozdzielone, wskazuje na:",
    "a": [
      "Rezystor roboczy",
      "Zwarcie w obwodzie",
      "Przerwanie ciągłości",
      "Brak zasilania"
    ],
    "c": 1,
    "ex": "R≈0 Ω tam, gdzie powinna być przerwa, oznacza zwarcie — np. zetknięcie dwóch żył sygnałowych lub uszkodzony styk.",
    "id": 31
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Pomiar napięcia na wejściu cyfrowym robota w stanie STOP powinien wynosić:",
    "a": [
      "24 V DC",
      "0 V",
      "12 V AC",
      "230 V AC"
    ],
    "c": 1,
    "ex": "Wejście cyfrowe w stanie STOP = 0 V (sygnał nieaktywny). Po wysterowaniu (START) pojawia się 24 V DC. Wnioskowanie o logice PNP opiera się na tej różnicy.",
    "id": 32
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Typowa usterka polegająca na zamianie styków w przycisku monostabilnym START (S1) to:",
    "a": [
      "Zastosowanie styku NC (rozwieranego) zamiast NO (zwieranego) w miejscu gdzie wymagany jest NO",
      "Odwrotne podłączenie zasilania 230 V",
      "Rezystor w szereg z cewką",
      "Mostek na listwie X2"
    ],
    "c": 0,
    "ex": "Przycisk monostabilny START wymaga styku NO (normalnie otwartego). Zamiana na NC powoduje odwrócenie logiki — zasilanie podane przy zwolnionym przycisku, brak po naciśnięciu.",
    "id": 33
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Przypadkowe zamienienie żył sygnałowych z czujnika optycznego B3 i przycisku S2 na listwie wejściowej X3 powoduje:",
    "a": [
      "Zadziałanie bezpiecznika",
      "Błędne odczyty wejść kontrolera (zapisy przypisane do odwrotnych adresów DI)",
      "Utratę komunikacji z PLC",
      "Wyzerowanie TCP"
    ],
    "c": 1,
    "ex": "Zamiana żył na listwie wejść powoduje, że kontroler odbiera sygnał z czujnika jako naciśnięcie S2 i odwrotnie — błędne działanie logiki sterującej bez widocznej awarii sprzętowej.",
    "id": 34
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Brak reakcji czujnika optycznego/pojemnościowego na obecny detal najprawdopodobniej wynika z:",
    "a": [
      "Zbyt wysokiego napięcia 24 V DC",
      "Niewłaściwego ustawienia mechanicznego lub złej regulacji czułości potencjometru (niewykalibrowany czujnik)",
      "Utraty połączenia Ethernet",
      "Błędnego trybu AUTO"
    ],
    "c": 1,
    "ex": "Czujnik może nie reagować, gdy jest źle ustawiony (poza strefą detekcji) lub ma źle ustawioną czułość. Rozwiązanie: mechaniczne dostrojenie pozycji i regulacja potencjometru.",
    "id": 35
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Kolor żyły sygnałowej czujnika oznaczonej BK (black) to:",
    "a": [
      "Zasilanie +24 V",
      "Masa 0 V",
      "Wyjście sygnałowe NO do sterownika",
      "Ekran kabla"
    ],
    "c": 2,
    "ex": "Standard wyprowadzeń czujników 3-przewodowych: BN (brązowy) = +24 V, BU (niebieski) = 0 V, BK (czarny) = wyjście sygnałowe (NO) do wejścia kontrolera.",
    "id": 36
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Do pomiaru napięcia zasilania 24 V DC na szynie X1 użyjesz:",
    "a": [
      "Omomierza",
      "Woltomierza DC (tryb pomiaru napięcia stałego)",
      "Amperomierza szeregowo",
      "Testera ciągłości"
    ],
    "c": 1,
    "ex": "Napięcie mierzy się woltomierzem w trybie DC, przyłączonym równolegle do szyny X1 (biegun +) i X2 (biegun −).",
    "id": 37
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Kod kolorystyczny przewodów w instalacji sterowania: przewód niebieski oznacza:",
    "a": [
      "+24 V DC",
      "0 V (masa / potencjał ujemny)",
      "Sygnał wejściowy dodatni",
      "Przewód ochronny PE"
    ],
    "c": 1,
    "ex": "Zgodnie z konwencją arkuszy: brązowy = +24 V DC, niebieski = 0 V (masa), czarny = sygnały sterujące. Niebieskie żyły trafiają na szynę X2/L−.",
    "id": 38
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Do prawidłowego zarabiania końcówek przewodów giętkich (LgY 1 mm²) użyjesz:",
    "a": [
      "Tylko noża i młotka",
      "Ściągacza izolacji i praski do zaciskania tulejek",
      "Lutownicy i cyny",
      "Zacisku śrubowego bez tulejki"
    ],
    "c": 1,
    "ex": "Praktyka warsztatowa: ściągacz izolacji zdejmuje izolację bez uszkodzenia żyły, a praska zaciska tulejkę końcówkową na przewodzie giętkim — poprawne i pewne połączenie w złączu.",
    "id": 39
  },
  {
    "cat": "Pomiary i diagnostyka",
    "q": "Aparaty elektryczne (przekaźniki, zasilacze) montuje się w rozdzielnicy na:",
    "a": [
      "Taśmie dwustronnej",
      "Szynie DIN TH35 z blokadami końcowymi",
      "Wkrętach do drewna",
      "Luźno na dnie szafki"
    ],
    "c": 1,
    "ex": "Standardowy montaż aparatury modułowej to szyna DIN TH35 (35 mm) z użyciem ścianek końcowych, blokad i ewentualnie mostków wtykanych do łączenia potencjałów.",
    "id": 40
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "Czujnik indukcyjny zbliżeniowy (B5) wykrywa:",
    "a": [
      "Wyłącznie przedmioty metalowe",
      "Wszystkie materiały, w tym tworzywa i ciecze",
      "Tylko przezroczyste przedmioty",
      "Wyłącznie pole magnetyczne Ziemi"
    ],
    "c": 0,
    "ex": "Czujnik indukcyjny reaguje tylko na metale (wykorzystuje zjawisko zmiany pola magnetycznego). Jest to kluczowe przy aplikacji rozróżniania materiału detalu (metal vs tworzywo).",
    "id": 41
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "Do wykrycia obecności detalu z tworzywa sztucznego w magazynie najlepiej użyć:",
    "a": [
      "Czujnika indukcyjnego",
      "Czujnika pojemnościowego",
      "Włącznika krańcowego mechanicznego",
      "Czujnika Halla"
    ],
    "c": 1,
    "ex": "Czujnik pojemnościowy wykrywa wszystkie materiały (w tym tworzywa, ciecze). Czujnik indukcyjny nie zadziała na plastik, dlatego do detekcji tworzyw stosuje się pojemnościowy.",
    "id": 42
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "Czujnik optyczny odbiciowy (B3, B4) na taśmociągu służy do:",
    "a": [
      "Pomiaru temperatury taśmy",
      "Detekcji i pozycjonowania detalu na przenośniku",
      "Zasilenia silnika taśmy",
      "Pomiaru grubości taśmy"
    ],
    "c": 1,
    "ex": "Odbiciowe czujniki optyczne wykrywają obecność detalu w danym punkcie taśmy (jego dojazd/położenie), umożliwiając synchronizację cyklu robota z transportem.",
    "id": 43
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "W logice PNP sterowania przenośnikiem wartość 24 V na wejściu START/STOP oznacza:",
    "a": [
      "STOP",
      "START",
      "Lewo",
      "Prawo"
    ],
    "c": 1,
    "ex": "Według tabeli prawdy przenośnika: wejście START/STOP — 24 V = START, 0 V = STOP. Dla kierunku: 24 V = PRAWO, 0 V = LEWO (logika PNP).",
    "id": 44
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "Regulacji prędkości przesuwu taśmy przenośnika dokonuje się:",
    "a": [
      "Zmianą napięcia zasilania na 5 V",
      "Potencjometrem na sterowniku napędu taśmy",
      "Przez wymianę silnika",
      "Nie ma takiej możliwości"
    ],
    "c": 1,
    "ex": "Prędkość taśmy ustawiana jest potencjometrem w torze sterowania napędem 24 V DC — arkusze wymagają jej regulacji tak, aby detale przemieszczały się stabilnie i były wykrywalne przez czujniki B3/B4.",
    "id": 45
  },
  {
    "cat": "Sensoryka i wykonawcze",
    "q": "Przekaźnik elektromagnetyczny z cewką 24 V DC zabezpiecza się przed przepięciami od indukcyjności cewki za pomocą:",
    "a": [
      "Kondensatora 100 nF",
      "Diod prostowniczych (np. 1N4007) gaszących przepięcia",
      "Rezystora 47 kΩ",
      "Bez żadnego elementu"
    ],
    "c": 1,
    "ex": "Cewki (przekaźniki, elektrozawory) generują przy wyłączaniu przepięcia niszczące sterownik. Standardowo montuje się diody prostownicze równolegle do cewki zwrócone zaporowo.",
    "id": 46
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Do właściwego przygotowania sprężonego powietrza w układzie stosuje się zespół:",
    "a": [
      "Tylko ręcznego zaworu kulowego",
      "Ręczny zawór odcinający 3/2, filtr ze spustem kondensatu, manometr i reduktor ciśnienia",
      "Sprężarkę olejową",
      "Zbiornik buforowy bez uzdatniania"
    ],
    "c": 1,
    "ex": "Zespół przygotowania powietrza obejmuje: zawór odcinający 3/2 z odpowietrzeniem, filtr z odwodnieniem, manometr oraz reduktor (regulacja 0÷10 bar) — dba on o jakość i ciśnienie powietrza zasilającego chwytak.",
    "id": 47
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Elektrozawór 5/2 bistabilny stosowany do sterowania chwytakiem dwustronnego działania posiada:",
    "a": [
      "1 cewkę",
      "2 cewki — osobno zamykanie (Chwytak_ON) i otwieranie (Chwytak_OFF)",
      "2 cewki pracujące równocześnie w jednym kierunku",
      "4 cewki"
    ],
    "c": 1,
    "ex": "Zawór 5/2 bistabilny posiada 2 cewki. Jedna (Chwytak_ON) przełącza szczęki w kierunek zamykania, druga (Chwytak_OFF) je otwiera. Bistabilność utrzymuje ustawienie bez zasilania.",
    "id": 48
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Do regulacji prędkości ruchu szczęk chwytaka stosuje się:",
    "a": [
      "Zawory dławiące (zawory dławiąco-zwrotne) — dławienie powietrza na wylocie",
      "Zmianę napięcia 24 V na cewce",
      "Wymianę sprężyny chwytaka",
      "Reduktor ciśnienia na wejściu robota"
    ],
    "c": 0,
    "ex": "Prędkość ruchu tłoka/szczęk reguluje się zaworami dławiąco-zwrotnymi montowanymi na wylotach powietrza z siłownika — dławienie strumienia ogranicza prędkość.",
    "id": 49
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Który z chwytaków wykorzystuje podciśnienie wytwarzane przez eżektor lub pompę próżniową?",
    "a": [
      "Chwytak szczękowy dwustronnego działania",
      "Chwytak podciśnieniowy (przyssawkowe)",
      "Chwytak magnetyczny",
      "Chwytak igłowy"
    ],
    "c": 1,
    "ex": "Chwytak podciśnieniowy (przyssawka) chwyta za pomocą różnicy ciśnień — podciśnienie w przyssawce działa jak siła docisku detalu. Eżektor wytwarza podciśnienie z powietrza sprężonego.",
    "id": 50
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Tłumiki hałasu w układzie pneumatycznym montuje się na:",
    "a": [
      "Zbiorniku powietrza",
      "Wylotach powietrza odprowadzanego z zaworów/odpowietrzeń",
      "Wejściu sprężonego powietrza",
      "Przewodach 24 V DC"
    ],
    "c": 1,
    "ex": "Tłumiki hałasu na odpowietrzeniach redukują poziom dźwięku powietrza wypuszczanego z układu (duże odprowadzenie sprężonego powietrza generuje hałas).",
    "id": 51
  },
  {
    "cat": "Pneumatyka i chwytaki",
    "q": "Zakres regulacji reduktora ciśnienia powietrza w zespole przygotowania wynosi zwykle:",
    "a": [
      "0÷0,5 bar",
      "0÷10 bar",
      "20÷50 bar",
      "100÷200 bar"
    ],
    "c": 1,
    "ex": "Typowy reduktor w układach pneumatyki stosowanych na stanowiskach robota reguluje ciśnienie w zakresie 0÷10 bar — wystarczającym dla pracy chwytaków i siłowników tego typu.",
    "id": 52
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Szyna X1 na listwie przyłączeniowej robota oznacza:",
    "a": [
      "Wejścia cyfrowe robota",
      "Potencjał dodatni +24 V DC",
      "Masa 0 V",
      "Wyjścia cyfrowe PLC"
    ],
    "c": 1,
    "ex": "X1 – szyna potencjału dodatniego +24 V DC (złączki czerwone, oznaczenie L+). Zasilanie wszystkich cewek, czujników i obwodów sterowniczych.",
    "id": 53
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Sygnały wejść cyfrowych robota (INPUT 1÷8) doprowadzone są do złącza:",
    "a": [
      "X1",
      "X2",
      "X3",
      "X4"
    ],
    "c": 2,
    "ex": "X3 = złącze wejść cyfrowych robota (INPUT 1÷8), na które trafiają sygnały z przycisków, czujników, PLC i innych urządzeń sterujących.",
    "id": 54
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Złącze X4 to:",
    "a": [
      "Zasilanie 24 V",
      "Masa 0 V",
      "Złącze wejść PLC",
      "Złącze wyjść cyfrowych robota (OUTPUT 1÷8)"
    ],
    "c": 3,
    "ex": "X4 = złącze wyjść cyfrowych robota (OUTPUT 1÷8), które sterują lampkami sygnalizacyjnymi, elektrozaworami chwytaka, przekaźnikami i PLC.",
    "id": 55
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Wyjścia cyfrowe PLC oznaczone są jako:",
    "a": [
      "I0.0÷I0.7",
      "Q0.0÷Q0.7",
      "DI1÷DI8",
      "M0.0÷M0.7"
    ],
    "c": 1,
    "ex": "W sterownikach IEC: I (inputs) — wejścia, Q (outputs) — wyjścia. Wyjścia PLC to Q0.0÷Q0.7, doprowadzone do złącza X6.",
    "id": 56
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Przypisanie nazw symbolicznych (tagów) do fizycznych wejść DI[1..8] w kontrolerze robota ma na celu:",
    "a": [
      "Zmniejszenie opóźnień sterowania",
      "Czytelność i jednoznaczność identyfikacji sygnału w programie (np. START_S1 zamiast DI[1])",
      "Zwiększenie liczby wejść",
      "Wyeliminowanie czujników"
    ],
    "c": 1,
    "ex": "Aliasowanie wejść/wyjść pozwala używać w kodzie nazw funkcjonalnych (np. ZEZWOLENIE, CZUJNIK_METAL) — ułatwia utrzymanie i modyfikację programu, spełnia wymóg dobrej praktyki programowania.",
    "id": 57
  },
  {
    "cat": "Schematy i sygnały I/O",
    "q": "Na schemacie połączeń elektrycznych przycisku monostabilnego ze stykami do robota symbol styku NO oznacza:",
    "a": [
      "Styk rozwarty w stanie spoczynku",
      "Styk zwyczajowo otwarty, zwierany przy zadziałaniu (normalnie otwarty)",
      "Styk z opóźnieniem",
      "Wyjście tranzystorowe"
    ],
    "c": 1,
    "ex": "NO (normally open, normalnie otwarty) — w stanie spoczynku rozwarty, przy zadziałaniu zwierany. Stosowany do przycisków START. NC jest odwrotnie.",
    "id": 58
  },
  {
    "cat": "Integracja z PLC",
    "q": "Wymiana sygnałów (handshake) między PLC a kontrolerem robota polega na:",
    "a": [
      "Przesyłaniu tylko energii elektrycznej",
      "Wymianie sygnałów binarnych (zezwolenie na start, potwierdzenie obecności detalu, koniec operacji)",
      "Używaniu tylko sieci Wi-Fi",
      "Trwałym połączeniu kabl komunikacyjnym bez wymiany danych"
    ],
    "c": 1,
    "ex": "Handshake to protokół wymiany sygnałów cyfrowych między dwoma sterownikami: PLC wysyła zezwolenie, robot potwierdza obecność detalu, informuje o zakończeniu cyklu itp., realizowane po liniach wejść/wyjść.",
    "id": 59
  },
  {
    "cat": "Integracja z PLC",
    "q": "Program sterownika PLC zgodnie z IEC 61131-3 może być zapisany w języku:",
    "a": [
      "LAD (drabinkowym), FBD (blokowym) lub STL (tekstowym)",
      "Tylko Python",
      "Tylko C++",
      "Wyłącznie asemblerze"
    ],
    "c": 0,
    "ex": "IEC 61131-3 definiuje 5 języków: LAD (drabinkowy), FBD (schematy blokowe), ST (tekst strukturalny), IL/STL (lista instrukcji) i SFC (sekwencje). Arkusze egzaminacyjne dopuszczają LAD, FBD i STL.",
    "id": 60
  },
  {
    "cat": "Integracja z PLC",
    "q": "Sygnał z czujnika pojemnościowego na palecie przetwarzany przez PLC może być użyty do:",
    "a": [
      "Bezpośredniego sterowania silnikiem robota",
      "Realizacji układu sygnalizatora zajętości palety/strefy odkładczej",
      "Kalibracji TCP",
      "Transportu danych do Internetu"
    ],
    "c": 1,
    "ex": "Sterownik PLC realizuje logikę sygnalizacyjną — np. gdy czujnik pojemnościowy wykryje detal na palecie, PLC zapala sygnalizator zajętości i przekazuje sygnał zwrotny do robota o potwierdzeniu obecności detalu.",
    "id": 61
  },
  {
    "cat": "Metrologia",
    "q": "Suwmiarka uniwersalna noniuszowa o działce elementarnej 0,05 mm pozwala zmierzyć wymiar z rozdzielczością:",
    "a": [
      "0,5 mm",
      "0,05 mm",
      "0,01 mm",
      "1 mm"
    ],
    "c": 1,
    "ex": "Działka elementarna 0,05 mm oznacza, że najmniejszy wymiar odczytywany z noniusza to 0,05 mm. Przykład: 12,35 mm, 47,60 mm.",
    "id": 62
  },
  {
    "cat": "Metrologia",
    "q": "Do pomiaru średnicy zewnętrznej walca użyjesz suwmiarki pozostawiając szczęki:",
    "a": [
      "Rozwarte, obejmując walec szczękami zewnętrznymi",
      "Wciśnięte w otwór walca",
      "Rozsunięte na dowolną odległość",
      "Bez kontaktu z walcem"
    ],
    "c": 0,
    "ex": "Pomiar zewnętrzny: szczęki duże suwmiarki obejmują walec w płaszczyźnie pomiarowej prostopadłej do osi, szczęki lekko dociśnięte, wynik odczytany z noniusza.",
    "id": 63
  },
  {
    "cat": "Metrologia",
    "q": "Detal o większej średnicy i wyraźnej odpowiedzi na czujnik indukcyjny będzie klasyfikowany jako:",
    "a": [
      "Tworzywo sztuczne",
      "Metal",
      "Ciecz",
      "Gaz"
    ],
    "c": 1,
    "ex": "Czujnik indukcyjny reaguje wyłącznie na metale. Dlatego detale wywołujące na nim sygnał klasyfikowane są jako metalowe; brak reakcji → tworzywo (lub niemetal).",
    "id": 64
  },
  {
    "cat": "Metrologia",
    "q": "Protokół pomiarów detali (Tabela 2 w arkuszu) wymaga wpisania wyników w jednostce:",
    "a": [
      "Centymetrach",
      "Milimetrach",
      "Metrach",
      "Calach"
    ],
    "c": 1,
    "ex": "Wszystkie wyniki pomiarów suwmiarką wpisuje się w milimetrach (mm) — z dokładnością do działki elementarnej 0,05 mm.",
    "id": 65
  },
  {
    "cat": "Testowanie i weryfikacja",
    "q": "Po zakończeniu pełnego cyklu program robota powinien:",
    "a": [
      "Zatrzymać się w dowolnym punkcie",
      "Powrócić do pozycji HOME / PHOME",
      "Wyłączyć zasilanie",
      "Zrestartować program od zera"
    ],
    "c": 1,
    "ex": "Kryterium CKE: po zakończeniu cyklu robot powraca bezpiecznie do pozycji HOME. Zapewnia to gotowość do następnego cyklu i bezpieczeństwo operatora.",
    "id": 66
  },
  {
    "cat": "Testowanie i weryfikacja",
    "q": "Weryfikacja bezkolizyjności programu polega na:",
    "a": [
      "Włączeniu AUTO 100% od razu",
      "Sprawdzeniu w trybie T1 (10%) każdego kroku algorytmu i potwierdzeniu braku kolizji z przeszkodami",
      "Wyłączeniu E-STOP",
      "Zmianie TCP"
    ],
    "c": 1,
    "ex": "Zalecana procedura CKE: testowanie krok po kroku w T1 z prędkością 10% i obserwacji trajektorii wobec przeszkód na stanowisku. Dopiero potem AUTO.",
    "id": 67
  },
  {
    "cat": "Testowanie i weryfikacja",
    "q": "Test stanowiska przy braku detalu w magazynie powinien wykazać, że:",
    "a": [
      "Robot zgłasza błąd, ale kontynuuje bez detalu",
      "Robot zachowuje się zgodnie z założeniami (np. błąd/oczekiwanie na detal bez niekontrolowanego ruchu)",
      "Robot przyspiesza do 100%,Robot pomija pozostały cykl bez informacji"
    ],
    "c": 1,
    "ex": "CKE wymaga sprawdzenia reakcji na brak detalu lub jego nieprawidłowe usytuowanie. Prawidłowe zachowanie: brak niekontrolowanego ruchu, oczekiwanie/błąd sygnalizowany, cykl przerwany bezpiecznie.",
    "id": 68
  },
  {
    "cat": "Testowanie i weryfikacja",
    "q": "Arkusz egzaminacyjny wymaga udzielenia odpowiedzi TAK/NIE na pytanie „Czy zastosowano interpolację liniową w kroku dojazdu do punktu pobrania?”. Prawidłowa odpowiedź to:",
    "a": [
      "NIE, bo użyto tylko interpolacji joint",
      "TAK, bo precyzyjny dojazd do pobrania detalu wymaga toru prostoliniowego (MoveL)",
      "TAK, bo wszystkie ruchy w programie to MoveL",
      "NIE, bo ruch dojazdowy zawsze jest kołowy"
    ],
    "c": 1,
    "ex": "Precyzyjny dojazd do punktu pobrania detalu realizuje się interpolacją liniową (MoveL), by uniknąć nieprzewidywalnego toru. W tabeli wniosków należy to potwierdzić odpowiedzią TAK.",
    "id": 69
  },
  {
    "cat": "Testowanie i weryfikacja",
    "q": "Które z pytań sprawdzających tabeli wniosków NIE dotyczy weryfikacji technologicznej?",
    "a": [
      "Czy użyto podciśnienia do chwytania detali?",
      "Czy zastosowano robot 6-osiowy?",
      "Jaka była cena robota na rynku?",
      "Czy spełniono założenia czasowe (opóźnienia)?"
    ],
    "c": 2,
    "ex": "Pytania weryfikacyjne dotyczą technologii (media, kinematyka, interpolacja, parametry ruchu, czas cyklu) — nie mają nic wspólnego z ceną urządzeń.",
    "id": 70
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "W zadaniu polegającym na sortowaniu detali na metal i tworzywo oznacza się je do pojemników na podstawie sygnału z:",
    "a": [
      "Czujnika pojemnościowego B1",
      "Czujnika indukcyjnego B5",
      "Tylko suwmiarki",
      "Czujnika Halla"
    ],
    "c": 1,
    "ex": "Sortowanie materiałowe w arkuszu 101 opiera się na czujniku indukcyjnym B5 — reakcja (metal) lub brak reakcji (tworzywo) decyduje, do którego pojemnika robot odkłada detal.",
    "id": 71
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Paletyzacja 2x2 na stanowisku egzaminacyjnym polega na:",
    "a": [
      "Ułożeniu 4 detali w siatce 2×2 na palecie z zachowaniem stałych offsetów",
      "Ułożeniu 8 detali w 2 rzędach",
      "Ustawieniu detali obok palety",
      "Buforowaniu detali na taśmie"
    ],
    "c": 0,
    "ex": "Aplikacja 2×2 to klasyczna paletyzacja czterech elementów — program ustawia robot kolejno w 4 punktach matrycy (P1_1, P1_2, P2_1, P2_2), offsetowanych o stałe przesunięcia X/Y.",
    "id": 72
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Aplikacja kreślarska z pisakiem w chwytaku wymaga, aby:",
    "a": [
      "Pisak był luźno trzymany i swobodnie rysował",
      "Pisak był pewnie zamocowany, z zachowaniem stałego docisku do kartki podczas ruchu",
      "Nie było kontaktu pisaka z kartką",
      "TCP był w osi Z pisaka, ale bez sprawdzania kontaktu z papierem"
    ],
    "c": 1,
    "ex": "Rysowanie wymaga pewnego zamocowania pisaka i stałego, kontrolowanego docisku końcówki pisaka do kartki. TCP wyznacza się na końcu pisaka, aby ruchy liniowe/kołowe pokryły się z żądaną figurą.",
    "id": 73
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Budowa stabilnej wieży z klocków przez robota wymaga szczególnie:",
    "a": [
      "Wysokiej prędkości ruchu",
      "Precyzyjnego pozycjonowania każdgo klocka z ruchem MoveL i FINE oraz stałego offsetu pionowego",
      "Maksymalnego docisku chwytaka",
      "Jazdy bez zatrzymywania (CNT100)"
    ],
    "c": 1,
    "ex": "Wieża z klocków wymaga powtarzalnego, dokładnego pozycjonowania z zatrzymaniem FINE na każdej warstwie i ściśle określonym przyrostem wysokości — błąd pozycji powoduje przewrócenie.",
    "id": 74
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Przy wymianie narzędzia (chwytak + pisak) w jednym zadaniu robota kluczowe jest:",
    "a": [
      "Rezygnacja z TCP",
      "Zdefiniowanie dwóch układów Tool (np. Tool 1 = chwytak, Tool 2 = pisak) i przełączanie się między nimi w kodzie",
      "Zmiana bazy UFRAME przy każdym kroku",
      "Konieczność restartedu kontrolera"
    ],
    "c": 1,
    "ex": "Arkusze 109–110 wymagają pracy z dwoma narzędziami — każde ma własny TCP i parametry (masa, środek ciężkości). Przełączenie aktywnego Tool w programie dobiera odpowiednią kinematykę ruchu.",
    "id": 75
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "W zadaniu wymagającym omijania przeszkody terenowej najbezpieczniejsza praktyka to:",
    "a": [
      "Użycie interpolacji liniowej w linii prostej prosto przez przeszkodę",
      "Zaprojektowanie trajektorii nad przeszkodą (lub wokół niej) z użyciem punktów pośrednich i interpolacji joint/linear",
      "Zwiększenie prędkości robota w AUTO",
      "Wyłączenie czujników kolizji"
    ],
    "c": 1,
    "ex": "Omijanie przeszkód: wyznaczenie trajektorii z punktami pośrednimi, tak aby żadna część manipulatora (i detal) nie kolidowała z przeszkodą. Ruch joint używany bezpiecznie nad przeszkodą, linear przy dojazdach.",
    "id": 76
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Zadanie diagnostyczne w arkuszach 102/105/106/108 wymaga od ucznia:",
    "a": [
      "Zgłoszenia usterki i pominięcia zadania",
      "Wykrycia usterki multimetrem, wpisania wyników pomiarów do protokołu i fizycznej naprawy",
      "Przywrócenia ustawień fabrycznych kontrolera",
      "Wymiany całego szcześcianu robota"
    ],
    "c": 1,
    "ex": "Diagnostyczne arkusze egzaminacyjne wymagają: pomiarów multimetrem (U, R), wpisania wyników w protokole, zlokalizowania usterki (przerwa, zamiana NO/NC, zamiana żył) i naprawy (przewody z tulejkami, poprawny montaż).",
    "id": 77
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Arkusz integracyjny z PLC (np. 107) łączy zadanie pomiarowe z:",
    "a": [
      "Programowaniem PLC do obsługi sygnalizacji palety i wymianą sygnałów PLC↔Robot",
      "Rysowaniem figur",
      "Budową wieży",
      "Kalibracją TCP"
    ],
    "c": 0,
    "ex": "Arkusz 107 to zadanie łączące pomiary suwmiarką wymiarów detali, programowanie PLC (LAD/FBD/STL) sygnalizacji zajętości palety oraz wymianę sygnałów handshake między PLC i kontrolerem robota.",
    "id": 78
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "Arkusz 104 (konfiguracja parametrów startowych) obejmuje:",
    "a": [
      "Tylko wypełnienie tabeli wniosków",
      "Pierwsze uruchomienie robota: odczyt współrzędnych PINIT, bazowanie na znacznikach, wyznaczenie PHOME, konfigurację TCP",
      "Tylko diagnostykę usterki",
      "Wyłącznie pomiar suwmiarką"
    ],
    "c": 1,
    "ex": "Arkusz 104 to klasyczne zadanie „first start\": odczyt pozycji osi 1–6, ustawienie osi na znacznikach mechanicznych, zdefiniowanie HOME i TCP. Brak tu elementów manipulacyjnych.",
    "id": 79
  },
  {
    "cat": "Scenariusze egzaminacyjne",
    "q": "W zadaniu rysowania figury (np. okrąg w kwadracie) z użyciem UFRAME, kluczowe jest:",
    "a": [
      "Ustawienie bazy użytkownika i realizacja figury z użyciem interpolacji kołowej dla okręgu i liniowej dla kwadratu",
      "Rysowanie z maksymalną prędkością",
      "Brak kalibracji TCP pisaka",
      "Rysowanie w układzie World bez UFRAME"
    ],
    "c": 0,
    "ex": "Figura składa się z segmentów: proste (MoveL) tworzą kwadrat, okrąg — z interpolacji kołowej (MoveC). Wszystko wyrażone w zdefiniowanym wcześniej UFRAME metodą 3 punktów, co pozwala przenieść figurę w inne miejsce.",
    "id": 80
  }
];
