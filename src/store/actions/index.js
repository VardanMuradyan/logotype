import {ADD_FILTERED_LIST, ADD_PRODUCT_ITEM, ADD_USER_REGISTER} from "./actionTypes/action";

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
const register = (value) => {
    return {
        type: ADD_USER_REGISTER,
        payload: value
    }

};
export {addProductItem, addFilteredList,register};