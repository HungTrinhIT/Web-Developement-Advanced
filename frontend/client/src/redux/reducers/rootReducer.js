import { combineReducers } from "redux";
import CourseReducer from "./course.reducer";

const rootReducer = combineReducers({
  courses: CourseReducer,
});

export default rootReducer;
