import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {registerReducer} from  "./registerReducer"
import {productReducer} from "./productReducer";

export default combineReducers({
    loginReducer,
    registerReducer,
    productReducer
})