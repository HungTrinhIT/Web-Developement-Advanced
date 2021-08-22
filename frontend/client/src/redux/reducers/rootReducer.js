import { combineReducers } from "redux";
import CourseReducer from "./course.reducer";
import CategoryReducer from "./category.reducer";
import UserReducer from "./user.reducers";
const rootReducer = combineReducers({
  courses: CourseReducer,
  categories: CategoryReducer,
  users: UserReducer,
});

export default rootReducer;
