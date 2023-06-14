export const productListSelector = (state) => {
    return state.productReducer.ProductList
}
export const filteredListSelector = (state) => {
    return state.productReducer.FilteredList
}

export const formListSelector = (state) => {
    console.log(state,"s")
    return state.registerReducer.form
}