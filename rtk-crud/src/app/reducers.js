import { combineReducers } from "redux";
import todoReducer from "../features/todoSlice.js";

export default combineReducers({
  todos: todoReducer,
});
