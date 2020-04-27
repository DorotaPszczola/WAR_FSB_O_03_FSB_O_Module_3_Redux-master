// Plik z akcjami

const QUOTE_FETCHING = "[QUOTE] QUOTE_FETCHING";
const QUOTE_FETCHED = "[QUOTE] QUOTE_FETCHED";
const QUOTE_ERROR = "[QUOTE] QUOTE_ERROR"

const startFetching = (payload) => ({
    type: QUOTE_FETCHING,
    payload

});

const quoteFetched = (payload) => ({
    type: QUOTE_FETCHED, 
    payload: "quote"
});

const quoteError = (payload) => ({
    type: QUOTE_ERROR,
    payload: "error"
});

export  {
    QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR,
    startFetching, quoteFetched, quoteError
}
