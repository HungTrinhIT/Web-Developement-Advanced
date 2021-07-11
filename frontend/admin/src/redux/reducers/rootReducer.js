import { combineReducers } from "redux";
import CategoriesReducer from "./categories.reducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});

export default rootReducer;
