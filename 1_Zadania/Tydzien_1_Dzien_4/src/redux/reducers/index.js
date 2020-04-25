/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */
import { combineReducers } from "redux";
import counter from "./counter";
import bankReducer from "./bank"

export default combineReducers({
    counter,
    bankReducer
})

//tworzymy klucz counter ktory przyjmuje wartosci reducera (po przecinku kolejne reducery)