import { combineReducers } from "redux";
import CourseReducer from "./course.reducer";
import CategoryReducer from "./category.reducer";

const rootReducer = combineReducers({
  courses: CourseReducer,
  categories: CategoryReducer,
});

export default rootReducer;
