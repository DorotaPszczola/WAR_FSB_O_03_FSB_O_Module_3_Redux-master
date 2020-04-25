/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

//tworzymy reducer

import { INCREMENT, DECREMENT } from "../actions/counterActions"
// z pliku customStore linijka 11 i 12
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.value;
        case DECREMENT:
            return state - action.value;
        default:
            return state;
    }
}

export default counterReducer;