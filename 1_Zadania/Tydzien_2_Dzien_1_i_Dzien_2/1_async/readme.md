## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_2_Dzien_1_i_Dzien_2/1_async`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


# Tydzień 2 - Dzień 1

## Zadania do samodzielnego wykonania

Przygotuj grunt pod zadanie z wykładowcą. Zadanie będzie polegało na pobieraniu cytatów z serwera. Twoim zadaniem jest przygotowanie reducera oraz akcji.

Reducer ma przyjąć następujący stan początkowy:

```json
{
  loading: false,
  error: "",
  quote: null
}
```

Pole `quote` może przyjmować wartość `null` bądź obiekt:

```json
{
 quote: "Chyba walnęliśmy jakiegoś jeża...",
 author: "Grucha"
}
```

Reducer powinien reagaować na akcje:
 
- `QUOTE_FETCHING`, odpalana w momencie kiedy zaczynamy pobieranie cytatu
- `QUOTE_FETCHED`, odpalana w momencie kiedy cytat zostanie pobrany z serwera
- `QUOTE_ERROR`, odpalana w momencie kiedy nastąpi błąd w komunikacji z serwerem

Każda z tych akcji powinna mieć action-creatora, który przekaże odpowiednie dane w polu `payload`:

- dla pomyślnego pobrania będzie to cytat `quote`,
- dla błędu będzie to `error`

Lista action-creators:

- `startFetching`
- `quoteFetched`
- `quoteError`

Pamiętaj, że błąd także powinien ustawić flagę `loading` na false.

Wyeksportuj stworzony reducer pod polem `quote` w funkcji `combineReducers`.

Komponent prezentacyjny jest już przygotowany w pliku `components/Quote.js`.


--- 

# Tydzień 2 - Dzień 2

## Zadanie do wykonania z wykładowcą

W pliku `redux/store.js` utwórz store i dodaj middleware `redux-thunk`.

Utwórz kreator akcji `fetchQuote`, który zamiast zwarać obiekt akcji, zwróci funkcję.
Funkcja ta powinna wywołać metodę `fetchQuote` z obiektu `api/index.js` oraz wcześniej utworzone akcje:

- `startFetching` - dla uaktualnienia stanu ładowania
- `quoteFetched` - w momencie rozwiązania Promise
- `quoteError` - w momencie błędu

## Zadania do samodzielnego wykonania

Zaimplementuj dodatkowy reducer `favourites`, w którym będziesz przechowywać ulubione cytaty. Niech reaguje on na akcję `ADD_FAV`.

Cytat do ulubionych można dodać poprzez kliknięcie przycisku `Dodaj do ulubionych`.
Dodaj taki przycisk do komponentu `Quote`, ale wyświetl go tylko wtedy kiedy pobrany został cytat.

Utwórz nowy kontener oraz komponent o nazwie `Favourites`. Ma on wyświetlać listę ulubionych cytatów.
