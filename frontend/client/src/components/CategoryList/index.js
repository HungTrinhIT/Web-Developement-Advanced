import React from "react";
import CategoryItem from "../CategoryItem";

const CategoryList = (props) => {
  const {categories} = props;
  return (
    <div className="row">
      {categories.map((categoryItem, index) => {
        return <CategoryItem category = {categoryItem} key = {index}/>
      })}
      {/* /grid_item */}
    </div>
  );
};

export default CategoryList;
