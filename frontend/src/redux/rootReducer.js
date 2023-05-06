import { combineReducers } from "redux";
import  userAuth  from "./userAuth/reducer";
import  toastStatus from "./toastStatus/reducer";

const rootReducer = combineReducers({
   userAuth,
   toastStatus,
})

export default rootReducer;