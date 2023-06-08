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
                ProductList: action.payload,
                FilteredList: action.payload
            }
        case ADD_FILTERED_LIST:
            const dataListText = state.ProductList?.length && state.ProductList.filter((value) => {
                return action.payload.toLowerCase().includes(action.payload) === value.title.toLowerCase().includes(action.payload)
            })
            return {
                ...state,
                FilteredList: dataListText
            }
        default:
            return state;
    }

}