import React from 'react';
import { connect } from 'react-redux';

import Counter from "../components/Counter";
import { increment, decrement } from '../redux/actions';

const mapState = state => ({
    value: state.counter,
})

const mapDispatch = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

export default connect(mapState, mapDispatch)(Counter);
