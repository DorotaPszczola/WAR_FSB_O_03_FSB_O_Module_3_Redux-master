import { combineReducers } from "redux";
import { ADD_ARTICLE, ADD_USER } from "./actions"

const initUser = {
    jan: 0,
    gosia: 0
}

//state = ... domyślna wartość
// const users = (state = initUser, action) => {
//     return state
// }

const users = (state = initUser, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            const id = action.payload.userId
            const copy = {...state};
            copy[id] = copy[id] +1
            return copy;
        case ADD_USER:
            return {
                ...state,
                [action.user]: 0
            }
    
        default:
            return state;
    }
}

const articlesInit = [];


const articles = (state = articlesInit, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return ([...state, action.payload.title])
        default:
            return state;
    }
}

export default combineReducers({
    users,
    articles
  });
