// Plik z akcjami
import api from "../api/index"

const QUOTE_FETCHING = "[QUOTE] QUOTE_FETCHING";
const QUOTE_FETCHED = "[QUOTE] QUOTE_FETCHED";
const QUOTE_ERROR = "[QUOTE] QUOTE_ERROR";
const ADD_FAV = "[QUOTE] add quote to favourites"


const startFetching = () => ({
    type: QUOTE_FETCHING,
});

const quoteFetched = (response) => ({
    type: QUOTE_FETCHED,
    response
});

const quoteError = (error) => ({
    type: QUOTE_ERROR,
    error
});

const addFav = (quote) => ({
    type: ADD_FAV,
    quote
})

// const quoteToFav = () => (dispatch) => {
//     dispatch(addFav());
// }


//zwracamy thunka (funkcję) który doda dispaczera jako argument, to jest thunk:
const fetchQuote = () => (dispatch) => {
    dispatch(startFetching());
    api.fetchQuote() //idzie z api, gdyby nie było, to fetch
        .then(res => dispatch(quoteFetched(res)))
        .catch(error => dispatch(quoteError(error)))
}

export {
    QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV,
    startFetching, quoteFetched, quoteError,
    fetchQuote, addFav
}
