import { combineReducers } from "redux";
import search from "./searchReducer.js";

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
