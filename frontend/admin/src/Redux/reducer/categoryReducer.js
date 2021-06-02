import { FETCH_ALL_CATEGORIES } from "../action/type";

const initialState = {
  categories: [],
};

const CategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CATEGORIES:
      state.categories = payload;
      return { ...state };
    default:
      return state;
  }
};

export default CategoryReducer;
