const ADD_ARTICLE = "[articles] add article";
const ADD_USER = "[user] add user";

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

const addUser = user => ({
    type: ADD_USER,
    user
})


export { ADD_ARTICLE, ADD_USER, addArticle, addUser };
