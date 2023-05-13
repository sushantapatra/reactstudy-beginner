import counter from "./counter";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
	counter,
	todoReducer
});

export default rootReducer;
