import { combineReducers } from "redux";
import CategoriesReducer from "./categories.reducer";
import CoursesReducer from "./courses.reducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  courses: CoursesReducer,
});

export default rootReducer;
