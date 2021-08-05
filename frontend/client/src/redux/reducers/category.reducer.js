import { FETCH_ALL_CATEGORIES, FETCH_ALL_COURSE } from "../action/type";

const initialState = {
  categories: [],
  rootCategories: [],
  childrenCategories: [],
};

const CategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CATEGORIES:
      state.rootCategories = payload.filter((cat) => cat.cat_id === null);
      state.childrenCategories = payload.filter((cat) => cat.cat_id !== null);
      state.categories = payload;
      return { ...state };
    default:
      return state;
  }
};

export default CategoryReducer;
