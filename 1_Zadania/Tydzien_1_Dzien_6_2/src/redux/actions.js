const INCREMENT = "[COUNTER] - INCREMENT";
const DECREMENT = "[COUNTER] - DECREMENT";
const ADD_PRODUCT = "[ShoppingList] - ADD_PRODUCT";
const CHANGE_ORDER = "[ShoppingList] - CHANGE_ORDER";

const increment = (payload) => ({
    type: INCREMENT,
    payload
});

const decrement = (payload) => ({
    type: DECREMENT,
    payload
})

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

const changeOrder = (index, direction) => ({
    type: CHANGE_ORDER,
    index,
    direction
})

export {
    INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
    increment, decrement, addProduct, changeOrder
};
