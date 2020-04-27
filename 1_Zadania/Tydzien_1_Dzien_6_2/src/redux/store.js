import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const logger = store => next => action => {
    console.log('dispatching', action);
    console.log('current state', store.getState());
    const result = next(action);
    console.log('next state', store.getState());
    return result
} // loguje zdarzenia w konsoli

const store = createStore(reducer, applyMiddleware(logger));

export default store;
