import React from "react";
import { connect } from "react-redux";
import Quote from "../components/Quote";
import { fetchQuote, addFav } from "../redux/actions";

const mapState = ({ quote }) => ({
    quote: quote.quote,
    loading: quote.loading,
    error: quote.error
    //można to zmienić na ...quote
})

const mapDispatch = dispatch => ({
    fetchQuoteProps: () => dispatch(fetchQuote()), //fetchQuote z "api"
    addToFavProps: (quote) => dispatch(addFav(quote))
})

export default connect(mapState, mapDispatch)(Quote)
