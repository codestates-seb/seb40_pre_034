import { combineReducers } from "redux";
import search from "./searchReducer.js";
import answers from "./AnswerReducer.js";

const rootReducer = combineReducers({
  search,
  answers,
});

export default rootReducer;
