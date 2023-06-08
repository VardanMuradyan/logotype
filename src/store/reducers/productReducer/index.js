import {ADD_FILTERED_LIST, ADD_PRODUCT_ITEM} from "../../actions/actionTypes/action";

const initialState = {
    ProductList: [],
    FilteredList: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_ITEM:
            return {
                ...state,
                ProductList: action.payload
            }
        case ADD_FILTERED_LIST:
            return {
                ...state,
                FilteredList: action.payload
            }
        default:
            return state;
    }

}