import { combineReducers } from "redux";
import articleReducers from "./articleReducers";

const RootReducer = combineReducers({
  articles: articleReducers
});

export default RootReducer;
