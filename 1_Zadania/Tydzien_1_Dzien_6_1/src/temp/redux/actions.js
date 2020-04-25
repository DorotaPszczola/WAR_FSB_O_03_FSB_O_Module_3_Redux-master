//tu wpisujemy action creators dla dispatchera

const ADD_ARTICLE = "[article] add article"; //bez kwadratowych nawiasów jeśli będzie combineReducer zbierający wszystkie reducery

const ADD_USER = "[user] add user";

// addArticle ma przyjąć dwie wartości , ktore ma przekazac jako payload, zwroci
const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

const addUser = user => ({
    type: ADD_USER,
    user
})



export { ADD_ARTICLE, ADD_USER, addArticle, addUser };
