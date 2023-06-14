import {ADD_USER_REGISTER} from "../../actions/actionTypes/action";

const initialState = {
    form: null
}
export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_REGISTER:
            return {
                ...state,
                form: action.payload
            }
        default:
            return state;
    }
}