import {ADD_FILTERED_LIST, ADD_PRODUCT_ITEM} from "./actionTypes/action";

const addProductItem = (value) => {
    return {
        type: ADD_PRODUCT_ITEM,
        payload: value
    }
};
const addFilteredList = (value) => {
    return {
        type: ADD_FILTERED_LIST,
        payload: value
    }

};
export {addProductItem, addFilteredList};