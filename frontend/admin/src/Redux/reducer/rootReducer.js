import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
  Category: CategoryReducer,
});

export default rootReducer;
