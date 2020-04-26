import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, increment, decrement } from "./actions"
import { ADD_PRODUCT, CHANGE_ORDER, addProduct, changeOrder } from "./actions"

const valueInit = 0;
const value = 3;

const counter = (state = valueInit, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + value;
        case DECREMENT:
            return state - value;
        default:
            return state;
    }
}

const moveUp = (arr, i) => {
    if (i == 0) return arr;
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    return arr;
}

const moveDown = (arr, i) => {
    if (i == arr.length - 1) { return arr; } else {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        return arr;
    }
}

const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.product];
        case CHANGE_ORDER:
            if (action.direction == -1) {
                const newState = [...moveUp(state, action.index)];
                console.log(newState);
                return newState;
            }
            return [...moveDown(state, action.index)];
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    products
});
