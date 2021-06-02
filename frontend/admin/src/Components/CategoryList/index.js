import React from "react";
import { connect } from "react-redux";
const CategoryList = (props) => {
  console.log(props.categoryList);
  return (
    <div>
      {props.categoryList.map((cat) => (
         <h1>{cat.name}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryList: state.Category.categories,
  };
};

export default connect(mapStateToProps)(CategoryList);
