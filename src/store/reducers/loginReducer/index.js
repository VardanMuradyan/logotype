import {ADD_USER_LOGIN} from "../../actions/actionTypes/action";

const initialState = {
    loginList: ""
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_LOGIN:
            return {
                ...state,
                loginList: action.payload
            }
        default:
            return state;

    }

}