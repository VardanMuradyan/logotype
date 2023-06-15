import {loginReducer} from "../reducers/loginReducer";

export const productListSelector = (state) => {
    return state.productReducer.ProductList
}
export const filteredListSelector = (state) => {
    return state.productReducer.FilteredList
}

export const formListSelector = (state) => {
    return state.registerReducer.form
}
export const formLoginSelector = (state) => {
    return state.loginReducer.loginList
}