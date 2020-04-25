# Redux - Podstawy

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_4`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `index.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - Własny store
Na bazie Redux API zaimplementuj własną wersję `store` w pliku `redux/customStore.js`. 

Store powinien implementować następujące metody:

- `getState`
- `subscribe`
- `dispatch`
 
--- 

### Zadanie 0b - Licznik
W pliku `counterApp.js` zaimplementuj aplikację typu "licznik" bazującą na reduxie.

Aplikacja powinna utworzyć nowy store za pomocą zaimplementowanej funkcji z zadania `0a`.

Następnie za pomocą metody `subscribe` należy zapisać się na zmiany w store. Podczas każdej zmiany w store należy "wyrzucić" na konsolę odpowiedni tekst:

`from subscribe {COUNTER_VALUE}`

Stan aplikacji powinien przechowywać liczbę. Na początku niech będzie to `0`.

Aby zmienić stan należy zaimplementować dwie akcje:

- `INCREMENT` - zwiększającą licznik o podaną wartość
- `DECREMENT` - zmniejszającą licznik o podaną wartość

W pliku `redux/actions/counter.js` zaimplementuj akcje wraz z kreatorami akcji. Pamiętaj o exporcie.

Reducer do aplikacji zaimplementuj w pliku `redux/reducers/counter.js`.

Aplikacja counter powinna:
1. stworzyć nowy store
1. zapisać się na zmiany, każda zmiana loguje na konsole "from subsribe {VALUE}"
1. odpalić akcję `increment(5)` zwiększającą licznik o 5
1. odpalić akcję `decrement(2)` zmniejszającą licznik o 2
1. wypisać się ze zmian
1. odpalić akcję `decrement(2)`
1. sprawdzić poprzez prosty console.log czy wartość stanu uległa zmianie.

Wynikiem aplikacji powinnien być następujący zapis z konsoli:
```
from subscribe 5
from subscribe 3
1
```

## Zadania do samodzielnego wykonania

### Zadanie 1 - Zamiana własnego store na store z reduxa
Po implementacji zadania spróbuj zmienić funkcję tworzącą store na tą z biblioteki `redux`. Czy widać różnicę?

---

### Zadanie 2 - Aplikacja do zarządzania kontem w banku

W pliku `bankApp.js` znajduje się szkielet aplikacji. Twoim zadaniem jest połączenie aplikacji z reduxem.

Celem aplikacji jest wyświetlanie stanu konta. Udostępnia ona pole do wpisania kwoty i dwa przyciski do wpłaty i wypłaty środków.

Stwórz store, który będzie przechowywał dane o saldzie konta. Powinien on także reagować na dwie akcje:
1. `WITHDRAW` - wypłać pieniądze
1. `DEPOSIT` - wpłać pieniądze
Każda akcja powinna mieć swój action-creator (`withdrawMoney` oraz `depositMoney`).

Reducer zaimplementuj w pliku `redux/reducers/bank.js`, akcje natomiast w pliku `redux/actions/bank.js`.

Odpowiednio zabezpiecz konto przed ujemnym saldem.

---

### Zadnie 3 - Połączenie reducerów
W pliku `redux/combinedReducer.js` utwórz reducer, który będzie połączeniem dwóch reducerów z poprzednich zadań.
Licznik trzymaj pod polem `counter`, a saldo bankowe pod polem `saldo`. Użyj funkcji `combineReducers` z pakietu `redux`.

