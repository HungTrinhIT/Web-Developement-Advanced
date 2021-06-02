import "./App.css";
import React, { useState } from "react";
import { categoryService } from "./Services";
import { CourseItem } from "./Components/CourseItem";
import { FETCH_ALL_CATEGORIES } from "./Redux/action/type";
import { connect } from "react-redux";
import createAction from "./Redux/action";
import CategoryList from "./Components/CategoryList";
function App(props) {
  const [userInfo, setUserInfo] = useState({});

  const fetchAllCagories = async () => {
    const categoryList = await categoryService.fetchAllCategories();

    props.dispatch(createAction(FETCH_ALL_CATEGORIES, categoryList.data));
  };

  return (
    <div className="App">
      <CategoryList />
      <h1>Hello</h1>
      <button onClick={fetchAllCagories}>Click me to fetch categories</button>
    </div>
  );
}

export default connect()(App);
