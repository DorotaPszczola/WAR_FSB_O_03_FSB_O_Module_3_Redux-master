## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_2_Dzien_1_i_Dzien_2/2_rocket`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


# Tydzień 2 - Dzień 2

## Zadania do samodzielnego wykonania

Zaimplementuj aplikację do odpalania rakiety. Rakieta znajduje się na platformie. 

Po kliknięciu przycisku `Launch the rocket!` licznik powinien odliczać od 5 do 0.

Kiedy licznik osiągnie wartość 0 rakieta powinna wystartować.

Przeanalizuj gotowe komponenty:

- `Counter`
- `Rocket`
- `LaunchButton`

Następnie zaimplementuj odpowiedni reducer oraz akcje w plikach `redux/reducer` oraz `redux/actions`.

Przykładowy stan początkowy aplikacji:`

```json
{ launched: false, counter: 5 }
```
