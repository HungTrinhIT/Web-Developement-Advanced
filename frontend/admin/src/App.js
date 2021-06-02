import "./App.css";
import React, { useState } from "react";
import { categoryService } from "./Services";
function App(props) {
  const [categories, setCategories] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const fetchAllCagories = async () => {
    const categoryList = await categoryService.fetchAllCategories();
    setCategories(categoryList.data);
  };

  return (
    <div className="App">
      <h1>
        {props.title} - {props.count}
      </h1>
      <button onClick={fetchAllCagories}>Click me to fetch categories</button>
    </div>
  );
}

export default App;
