const initialState = {
    name: "",
    lastName: "",
    date: "",
    email: "",
    password: ""
}
export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-USER-REGISTER":
            return {
                ...state,
                name: action.payload,
                lastName: action.payload,
                date: action.payload,
                email: action.payload,
                password: action.payload
            }
        default:
            return state;
    }
}