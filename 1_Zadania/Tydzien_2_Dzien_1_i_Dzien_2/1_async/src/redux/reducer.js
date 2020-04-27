import { combineReducers } from 'redux';
import {
    QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR,
    startFetching, quoteFetched, quoteError
} from "./actions"


const initState = {
    loading: false,
    error: "",
    quote: null
}

const quote = (state = initState, { loading, error, quote }) => {
    switch (action.type) {
        case QUOTE_FETCHING:

            return {
                loading: true,

            };
        case QUOTE_FETCHED:

            return {

                quote: quote.push(...quote, quote)
            };
        case QUOTE_ERROR:
            return { error: error };
        default:
            return state;
    }
}

export default combineReducers({
    quote,
});
