import React from "react";
import CategoryItem from "./CategoryItem";
import { connect } from "react-redux";
const CategoryList = (props) => {
  const { categories } = props;
  return (
    <div className="row">
      {categories.map((categoryItem, index) => {
        return <CategoryItem category={categoryItem} key={index} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.rootCategories,
  };
};

export default connect(mapStateToProps)(CategoryList);
