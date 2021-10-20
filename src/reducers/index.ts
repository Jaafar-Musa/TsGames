import { combineReducers } from "redux";
import { toggleNavReducer } from "./ToggleNav";

const rootReducer = () => {
  combineReducers({
    toggleNavReducer,
  });
};
export default rootReducer;
