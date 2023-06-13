const initialState = {
    email: "",
    password: ""
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-USER-LOGIN":
            return {
                ...state,
                email: action.payload,
                password: action.payload,
            }
        default:
            return state;

    }

}