# HOC

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_5`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie do samodzielnego wykonania

### Zadanie 1
**W tym zadaniu nie korzystamy z Reduxa. Ma ono na celu przybliżenie tematu HOC.**

W pliku `src/hoc/withTimer.js` stwórz HOC (komponent wyższego rzędu) i nazwij go `withTimer`. Powinien on udostępniać następujące funkcjonalości:

- funkcję `startTimer`, która wystartuje licznik, zliczający co sekundę
- funkcję `stopTimer`, która zatrzyma licznik

Oprócz wyżej wymienionych funkcji, HOC powinien wstrzykiwać do komponentu docelowego pole `counter`, które przechowywać będzie wartość licznika.

Początkowa wartość licznika powinna być ustawiona na `0`.

Następnie w pliku `components/Stopper` zaimplementuj komponent wyświetlający:

- przycisk start - startujący licznik
- przycisk stop - zatrzymujący licznik
- `<p>` w którym wyświetlisz aktualną wartość licznika
- komponent powinien też wyświetlać to, co zostanie przekazane do niego jako `children`. Niech wyświetla tą zawartość zaraz poniżej znacznika `<p>` z wartością licznika.

Wyeksportuj oba komponenty `Stopper` i `StopperWithTimer`.