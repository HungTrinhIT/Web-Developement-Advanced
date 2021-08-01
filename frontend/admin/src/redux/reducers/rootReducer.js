import { combineReducers } from "redux";
import CategoriesReducer from "./categories.reducer";
import CoursesReducer from "./courses.reducer";
import UserReducer from "./user.reducers";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  courses: CoursesReducer,
  users: UserReducer,
});

export default rootReducer;
