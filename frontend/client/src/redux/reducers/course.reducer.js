import { FETCH_ALL_COURSE } from "../action/type";

const initialState = {
  courses: [],
};

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_COURSE:
      state.courses = payload;
      return { ...state };
    default:
      return state;
  }
};

export default CourseReducer;
