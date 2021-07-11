import { FETCH_ALL_CATEGORIES } from "../action/type";

let initialState = {};

const CategoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CATEGORIES:
      return { ...state };
    default:
      return { state };
  }
};

export default CategoriesReducer;
