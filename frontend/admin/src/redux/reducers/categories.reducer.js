import { FETCH_ALL_CATEGORIES } from "../action/type";

let initialState = {
  rootCategories: [],
  categories: [],
};

const CategoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CATEGORIES:
      let newCategory = payload;

      state.rootCategories = newCategory.filter(
        (category) => category.cat_id === null
      );
      state.categories = newCategory.map((cat) => {
        let parentId = cat.cat_id;
        if (parentId !== null) {
          let fIndex = state.rootCategories.findIndex(
            (cat) => cat.id === parentId
          );
          cat.parentCatName = state.rootCategories[fIndex].catName;
        } else {
          cat.parentCatName = "";
        }
        return cat;
      });
      return { ...state };

    default:
      return state;
  }
};

export default CategoriesReducer;
