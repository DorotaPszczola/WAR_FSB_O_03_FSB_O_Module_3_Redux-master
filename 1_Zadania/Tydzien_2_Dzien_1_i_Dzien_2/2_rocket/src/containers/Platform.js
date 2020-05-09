import React from "react";
import { connect } from 'react-redux';
import { launch } from "../redux/actions";
import Platform from "../components/Platform"

const mapState = (state) => ({
    counter: state.rocket.counter,
    launched: state.rocket.launched
})

const mapDispatch = (dispatch) => ({
    deploy: () => dispatch(launch()),
    
})


export default connect(mapState, mapDispatch) (Platform);
