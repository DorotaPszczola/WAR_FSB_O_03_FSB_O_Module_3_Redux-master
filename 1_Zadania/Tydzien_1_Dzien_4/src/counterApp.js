// Tu dodaj odpowiednie importy (createStore, akcje, reducer)
import { createStore } from "redux";
import { increment, decrement } from "./redux/actions/counterActions";
// import customStore from "./redux/customStore"

// import reducera z index.js, jest barrel, dlatego domyślnie bierze z index.js
import reducer from "./redux/reducers"

export default function () {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1
  // tworzymy action creator w katalogu actions

  const store = createStore(reducer);
  const check = () => console.log("counterApp: " + store.getState());
  store.subscribe(check);
  store.dispatch(increment(5));  //dispacherem uruchamiamy 
  store.dispatch(decrement(2));

}
