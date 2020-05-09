import { ROCKET_LAUNCH } from "./actions"
import { combineReducers } from "redux";


const initState = {
    launched: false,
    counter: 5
}

const rocket = (state = initState, action) => {
    switch (action.type) {
        case ROCKET_LAUNCH:

            return {
                ...state,
                launched: true
            };

        default:
            return state;
    }

}

export default combineReducers({
    rocket
})