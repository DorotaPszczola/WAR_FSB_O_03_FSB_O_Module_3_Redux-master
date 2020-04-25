# Redux i React

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_6_1`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie do wykonania z wykładowcą

Stwórz aplikację do zliczania artykułów. Powinna ona umożliwiać dodanie artykułu poprzez wpisanie jego tytułu w prosty input.

Każdy artykuł może mieć jednego z dwóch autorów:
- jan
- gosia

Po kliknięciu przycisku "Dodaj artykuł" powinien on pojawić się na liście artykułów.

Dodatkowo aplikacja powinna pokazywać listę użytkowników (jan, gosia) wraz z licznikami, które wskazują na liczbę napisanych artykułów.

Utwórz odpowiednią akcję wraz z action-creator dla dodania artykułu w pliku `redux/actions`.

Akcja w swoim `payload` powinna nieść informacje na temat tytułu oraz id użytkownika `{ title, userId }`. Obiekt ten powinien być przekazany jako parametr np. `addArticle({ userId: "jan", title: "Tytuł" })`.

Następnie w pliku `redux/reducer` zaimplementuj reducer, który będzie się składał z dwóch pól:
1. `users` - przechowuje listę użytkowników w ramach obiektu. Stan początkowy powinien ustawić liczbę artykułów na `0`.
```js
// Przykładowy initialState dla reducera users
{
  jan: 0,
  gosia: 0
};
```
2. `articles` - przechowuje tablicę artykułów (lista tytułów)

Każdy z powyższych reducerów powinien korzystać z jednej, wcześniej stworzonej akcji `ADD_ARTICLE`.


#### Komponenty prezentacyjne
One są już przygotowane, a ich pełna implementacja znajduje się w pliku `components/Articles`.

- `ArticleInput` - input + select z listą użytkowników wraz z przyciskiem do dodania artykułu
- `UsersList` - lista użytkowników wraz z licznikiem artykułów
- `ArticlesList` - lista artykułów
- `Articles` - komponent agregujący `ArticleInput`, `UsersList`, `ArticlesList`
- `UserInput` - komponent, dzięki któremu będziemy mogli dodać nowego użytkownika

Zamiast przekazywać store przez props wykorzystamy `<Provider>`.

Po dodaniu nowego użytkownika ma on się pojawić na liście dropdown.


#### Komponenty kontenerowe
Potrzebne nam też będą komponenty kontenerowe:

- `Articles`
- `UserInput`

Dodaj akcję `ADD_USER` wraz z action-creatorem. Będziemy ją wyzwalać w momencie dodawania nowego użytkownika.

Pamiętaj o modyfikacji reducera, tak aby reagował na akcję `ADD_USER`.