# Zadania podsumowujące

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_6_2`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadania do samodzielnego wykonania

### Zadanie 1 - Licznik z UI w React
Zaimplementuj prostą aplikację licznika. Aplikacja ma składać się z prostego reducera, który przechowuje liczbę. Niech wartością początkową będzie `0`.

Reducer powinien reagować na akcje: `INCREMENT` oraz `DECREMENT`. Zaimplementuj je w pliku `redux/actions.js`. Sam reducer powinien znaleźć się w pliku `redux/reducers.js`.

Plik `reducers.js` będzie nam potrzebny przy następnych zadaniach. Dlatego zamiast eksportować jeden reducer, wyeksportuj wynik łączenia reducerów używając funkcji `combineReducers`.

Reducer od licznika powinien znajdować się w polu `counter`.

W pliku `components/Counter` stworzony jest komponent prezentacyjny. Wyświetla wartość licznika, przekazaną pod propsem `value` w tagu `h1`. 
Dodatkowo renderuje dwa przyciski. `+` - dla przycisku zwiększającego licznik, `-` - dla przycisku zmniejszającego licznik.
Wywołują one odpowienie metody `increment` oraz `decrement` przekazane jako props.

W pliku `containers/Counter` utwórz komponent kontenerowy. Przemapuj odpowiednio stan oraz `dispatch` na propsy tak aby odpowiadały API komponentu prezentacyjnego.

W pliku `apps/Counter` znajdziesz wrapper aplikacji. Aby ją przetestować wizualnie możesz w pliku `index.js` zamiast komponentu `Main` podpiąć ten z `apps/Counter`.

---

### Zadanie 2 - Lista zakupów wraz z kolejnością
Zaimplementuj aplikację realizującą listę zakupów. Aplikacja powinna składać się:

- z elementu `input`, do którego możemy wpisać nazwę produktu.
- z przycisku "Dodaj produkt". Po jego naciśnięciu produkt ma zostać dodany do listy
- z listy produktów. Każdy produkt reprezentowany jest na liście poprzez jego nazwę oraz dwa przyciski `up` i `down` zmieniające kolejność elementu na liście.

Do realizacji zadania należy zaimplementować:

- reducer w pliku `redux/reducers.js`, pod polem `products`. Reducer powinien reagować na akcje `ADD_PRODUCT` i `CHANGE_ORDER`.
- akcje wraz z action creators w pliku `redux/actions.js`


Komponent prezentacyjny jest już gotowy w pliku `components/ShoppingList`.
Oczywiście lista `ol` powinna być dynamiczna i bazować na elementach znajdujących się w stanie.

Jego `props` wyglądają następująco:

```json
{
 changeOrder: function,
 addProduct: function,
 production: array
}
```

Zaimplementuj komponent kontenerowy, tak aby spełniał on założenia.

Wizualny efekt swojej pracy możesz podejrzeć modyfikując plik `index.js` - podobnie jak w zadaniu 1. Podmień `Main` na `ShoppingList` z folderu `apps`.

---

### Zadanie 3 - Router - łączymy w całość
W pliku `apps/Main.js` zaimplementuj router, który wyświetli poprzednio zaimplementowane aplikacje pod odpowiednimi ścieżkami:

- `/counter` - licznik
- `/list` - lista zakupów

Zaimplementuj menu nawigacji:

- Counter - powinien przekierować do aplikacji licznika
- Articles - aplikacja z artykułami
- Shopping List - aplikacja z listą zakupów

Dodatkowo zaimplementuj prosty komponent `Hello` w pliku `components/Hello`, w którym wyświetlisz wiadomość:

```html
<h1>Witaj! Wybierz aplikację</h1>
```

Zadbaj też o obsłużenie niepoprawnej ścieżki (404). Wyświetl wtedy komponent `components/NotFound` w którym wyświetlisz wiadomość:

```html
<h1>Nie znaleziono strony</h1>
```
