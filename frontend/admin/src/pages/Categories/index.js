import React, { useEffect } from "react";
import { connect } from "react-redux";

import createAction from "../../redux/action/createAction";
import { FETCH_ALL_CATEGORIES } from "../../redux/action/type";

import categoryApi from "../../api/categoryApi";
const Categories = (props) => {
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await categoryApi.getAll();
        props.dispatch(createAction(FETCH_ALL_CATEGORIES, response));
      } catch (error) {}
    };

    fetchAllCategories();
  }, []);
  return <div>This is categories</div>;
};

export default connect()(Categories);
