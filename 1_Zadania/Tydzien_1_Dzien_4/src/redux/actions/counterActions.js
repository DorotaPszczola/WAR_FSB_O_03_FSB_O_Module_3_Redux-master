// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.
const INCREMENT = "[counter] - increment";
//[tu jest loader] to służy tylko do wyświetlania
const DECREMENT = "[counter] - decrement"

const increment = (value) => ({
    type: INCREMENT,
    value
})
const decrement = (value) => ({
    type: DECREMENT,
    value
})

export { INCREMENT, DECREMENT, increment, decrement }
