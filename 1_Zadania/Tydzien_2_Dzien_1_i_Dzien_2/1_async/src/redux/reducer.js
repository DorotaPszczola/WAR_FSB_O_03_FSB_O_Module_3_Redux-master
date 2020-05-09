import { combineReducers } from 'redux';
import {
    QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV,
    startFetching, quoteFetched, quoteError
} from "./actions"


const initState = {
    loading: false,
    error: "",
    quote: null
}

const quote = (state = initState, action) => {
    switch (action.type) {
        case QUOTE_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case QUOTE_FETCHED:

            return {
                ...state,
                quote: action.response,
                loading: false,
            };
        case QUOTE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
// let favs = [];
const favourites = (state = [], action) => {
    switch (action.type) {
        case ADD_FAV:
            return [...state, action.quote];
        default:
            return state;
    }
}

export default combineReducers({
    quote,
    favourites
});
