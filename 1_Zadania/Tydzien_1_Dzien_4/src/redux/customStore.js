/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */

function createStore(reducerFunction, initialState) {
    let currentState = initialState;
    let listeners = [];

    return {
        dispatch(action) {  // obiekt action bedzie mial type i payload
            currentState = reducerFunction(currentState, action);
            listeners.forEach((listenerFunction) => listenerFunction());
        },

        getState() {
            return currentState;
        },

        subscribe(listener) {
            listeners.push(listener);
            return function () {
                listeners = listeners.filter((currentListener) => currentListener !== listener)
            }
        }
    }
}


export default { createStore };
