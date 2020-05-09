import React from "react";
import { connect } from "react-redux";
import Favourites from "../components/Favourites";

const mapState = (state) => ({
    quotes: state.favourites,
    // favs: quote.quote,
    //można to zmienić na ...quote
})

// const mapDispatch = dispatch => ({
//     addToFavProps: () => dispatch(addFav())
// })

export default connect(mapState)(Favourites)