/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 */
import { DEPOSIT, WITHDRAW } from "../actions/bankActions"

const bankReducer = (state = 0, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.value;
        case WITHDRAW:
            if (action.value > state) {
                alert(`Nie masz tyle na koncie, podaj kwotę mniejszą od ${state} PLN`);
                return state;

            } else {
                return state - action.value;
            }
        default:
            return state;
    }
}


export default bankReducer;
