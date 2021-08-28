import { FETCH_ALL_CATEGORIES } from "../action/type";

const initialState = {
  categories: [],
  rootCategories: [],
  childrenCategories: [],
};

const CategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CATEGORIES:
      const rootCategories = payload.filter((cat) => cat.cat_id === null);
      const childrenCategories = payload.filter((cat) => cat.cat_id !== null);
      let categories = [];
      for (let rootCategory of rootCategories) {
        const childrenOfRootCategory = childrenCategories.filter(
          (cat) => cat.cat_id === rootCategory.id
        );
        categories.push({
          ...rootCategory,
          children: childrenOfRootCategory,
        });
      }

      return {
        ...state,
        rootCategories,
        childrenCategories,
        categories,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
