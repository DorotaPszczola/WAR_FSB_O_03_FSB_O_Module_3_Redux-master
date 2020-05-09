import React from 'react';
import { connect } from 'react-redux';

import ShoppingList from "../components/ShoppingList";
import { addProduct, changeOrder } from '../redux/actions';

const mapState = state => ({
    products: state.products
})

const mapDispatch = dispatch => ({
    addProduct: (product) => dispatch(addProduct(product)),
    changeOrder: (index, direction) => dispatch(changeOrder(index, direction)),
})




export default connect(mapState, mapDispatch)(ShoppingList);
