import React from "react";

const Quote = ({ quote, loading, error, fetchQuoteProps, addToFavProps }) => (
  <div>
    <button disabled={loading} onClick={fetchQuoteProps}>Pobierz cytat</button>
    {quote && <p>{quote.quote} / {quote.author} <button onClick={() => addToFavProps(quote.quote)} >Dodaj do ulubionych</button> </p>}
    {loading && "Ładuję cytat..."}
    {error && error}
  </div>
);

export default Quote;
