import "./App.css";
import React, { useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "./layouts/Sidebar";
import CustomBreadcrumb from "./layouts/Breadcrumb";
import Navbar from "./layouts/Navbar";
import CustomFooter from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import AddNewCategory from "./pages/Categories/AddCategory";
import Login from "./pages/Login";
import AddCourse from "./pages/Courses/AddNewCourse";
import createAction from "./redux/action/createAction";
import categoryApi from "./api/categoryApi";
import { connect } from "react-redux";
import { FETCH_ALL_CATEGORIES } from "./redux/action/type";
import CourseInfo from "./pages/Courses/CourseInfo";
import AddUser from "./pages/Users/AddNewUser";
import UserInfo from "./pages/Users/UserInfo";
const { Content } = Layout;
const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/users",
    component: Users,
  },
  {
    exact: true,
    path: "/users/add",
    component: AddUser,
  },
  {
    exact: true,
    path: "/users/:id",
    component: UserInfo,
  },

  {
    exact: false,
    path: "/categories",
    component: Categories,
  },
  {
    exact: false,
    path: "/add-category",
    component: AddNewCategory,
  },
  {
    exact: true,
    path: "/courses",
    component: Courses,
  },
  {
    exact: false,
    path: "/courses/:id",
    component: CourseInfo,
  },
  {
    exact: false,
    path: "/add-course",
    component: AddCourse,
  },
  {
    eaxct: false,
    path: "**",
    component: PageNotFound,
  },
];

function App(props) {
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await categoryApi.getAll();
        props.dispatch(createAction(FETCH_ALL_CATEGORIES, response.data));
      } catch (error) {
        throw error;
      }
    };
    fetchAllCategories();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Sidebar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: "0 16px" }}>
            <CustomBreadcrumb />
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/login" component={Login} />
                {routes.map(({ component, exact, path }, index) => {
                  return (
                    <PrivateRoute
                      exact={exact}
                      path={path}
                      key={index}
                      component={component}
                    />
                  );
                })}
              </Switch>
            </div>
          </Content>
          <CustomFooter />
        </Layout>
      </Router>
    </Layout>
  );
}
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("elearning_accessToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default connect()(App);
