# Arkusz egzaminacyjny ELM.08

## Zadanie egzaminacyjne

Twoim zadaniem jest przygotowanie robota do pracy oraz napisanie i przetestowanie programu sterującego robotem.

Na stanowisku egzaminacyjnym znajduje się robot przemysłowy wyposażony w pneumatyczny chwytak szczękowy. Jego zadaniem jest pobieranie detali z magazynu opadowego oraz układanie ich na stole roboczym w jednym rzędzie (w linii prostej) z zachowaniem stałego odstępu technologicznego (offsetu).

Robot na stanowisku znajduje się w pozycji początkowej (HOME).

---

### Wytyczne do przygotowania stanowiska
1. Po uzyskaniu zgody Przewodniczącego ZN podłącz zasilanie elektryczne oraz pneumatyczne.
2. Uruchom kontroler robota i sprawdź komunikację z programatorem ręcznym.
3. Przetestuj działanie wyłącznika bezpieczeństwa (E-STOP).
4. Skonfiguruj narzędzie chwytaka (TOOL) zgodnie z dokumentacją stanowiska.
5. Utwórz program sterujący pracą robota o nazwie **`Egzamin`**. Opisz linie programu komentarzami.

---

### Wytyczne dla programu sterującego
1. Robot rozpoczyna i kończy pracę w pozycji początkowej (**HOME**).
2. Na początku programu (przy rozpoczęciu nowej serii od początku) operator wprowadza na programatorze ręcznym liczbę detali znajdujących się w magazynie opadowym.
3. Robot pobiera detal z magazynu opadowego ruchem w interpolacji liniowej ze strefą pozycjonowania **FINE**.
4. Po zamknięciu oraz po otwarciu chwytaka należy każdorazowo zastosować zwłokę czasową **0,5 s**.
5. Detale należy odkładać w linii prostej z krokiem offsetu wynoszącym **45 mm**.
6. **Warunek ciągłości procesu:**  
   Program musi zachowywać stan realizacji zadania w przypadku jego nieoczekiwanego przerwania. Jeżeli w dowolnym momencie praca robota zostanie zatrzymana (np. przyciskiem STOP lub po resecie wskaźnika programu do początku – *PP to Main*), po ponownym uruchomieniu robot **nie może odłożyć detalu w zajęte wcześniej miejsce**, lecz musi kontynuować odkładanie od **kolejnej wolnej pozycji**.
7. Jeżeli program **nie rozpoczął pracy od samego początku** (nastąpiło wznowienie po przerwaniu cyklu):
   * program nie pyta ponownie o liczbę detali,
   * załącza się lampka sygnalizacyjna **H1**,
   * na ekranie programatora wyświetla się komunikat:  
     **`Program nieoczekiwanie zostal przerwany. Praca rozpoczela sie od: detalu [liczba]`**  
     *(gdzie `[liczba]` oznacza numer aktualnie odkładanego detalu)*.
8. Podczas normalnego cyklu pracy (od pierwszego detalu) lampka **H1 pozostaje wyłączona**.
9. Po odłożeniu ostatniego detalu zadeklarowanego przez operatora robot powraca do pozycji **HOME**, lampka **H1 gaśnie**, a licznik cyklu przygotowuje się do rozpoczęcia nowej serii.

---

### Tabela 1. Lista przyporządkowania sygnałów kontrolera robota

| Oznaczenie | Nazwa sygnału w kontrolerze | Typ | Opis funkcji |
| :---: | :---: | :---: | :--- |
| **H1** | `do_H1` | Wyjście cyfrowe | Sygnalizacja wznowienia po przerwaniu programu |
| **Y1** | `do_Chwytak_Zacisk` | Wyjście cyfrowe | Cewka zacisku chwytaka (zawór 5/2) |
| **Y2** | `do_Chwytak_Otworz` | Wyjście cyfrowe | Cewka otwarcia chwytaka (zawór 5/2) |

---

W programie co najmniej raz wykorzystaj ruch w interpolacji liniowej (`MoveL`) oraz złączowej (`MoveJ`).  
Przetestuj program w trybie ręcznym przy prędkości **do 10%**.  
Po potwierdzeniu bezkolizyjności zgłoś gotowość do wykonania testu w trybie automatycznym z prędkością **minimum 20%**.

**Czas przeznaczony na wykonanie zadania wynosi 150 minut.**

Ocenie będą podlegać rezultaty:
1. Przygotowanie robota i narzędzia do pracy.
2. Program sterujący `Egzamin` z poprawnym nazewnictwem i komentarzami.
3. Test działania układu – poprawność odkładania detali z offsetem.
4. Odporność programu na przerwanie cyklu (brak kolizji i komunikat wznowienia z lampką H1).
