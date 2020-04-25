# Podstawowy routing

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_1`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `task01.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Main`, w którym jest `h1` z napisem "Witaj na stronie";
- `/about/us` - ścieżka renderuje komponent `AboutUs`, w którym jest `p` z napisem "Trochę więcej o nas...";
- `/about/company` - ścieżka renderuje komponent `AboutCompany`, w którym jest `p` z napisem "Trochę więcej na temat firmy...".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i treść renderowaną przez dzieci.
 
Dodatkowo, ścieżki zaczynające się od `/about` mają dodatkowy, własny szablon, który zawiera w `div` element `h2` z napisem "O nas" i treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.

---

### Zadanie 2 - `js/task02.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Home`, w którym jest `h1` z napisem "Witaj na stronie";
- `/blog` - ścieżka renderuje komponent `Blog`, w którym jest `h1` z napisem "Blog";
- `/pricing` - ścieżka renderuje komponent `Pricing`, w którym jest `h1` z napisem "Cennik".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i element `ul` z linkami do każdej z podstron oraz treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.
