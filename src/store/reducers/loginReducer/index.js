import {ADD_USER_LOGIN} from "../../actions/actionTypes/action";

const initialState = {
    email: "",
    password: ""
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_LOGIN:
            return {
                ...state,
                email: action.payload,
                password: action.payload,
            }
        default:
            return state;

    }

}