import "./App.css";
import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "./layouts/Sidebar";
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
import { FETCH_ALL_CATEGORIES, FETCH_USER } from "./redux/action/type";
import CourseInfo from "./pages/Courses/CourseInfo";
import AddUser from "./pages/Users/AddNewUser";
import UserInfo from "./pages/Users/UserInfo";
import AddNewLesson from "./pages/Courses/CourseInfo/CourseInfoLesson/AddNewLesson";
import LessonDetail from "./pages/Courses/CourseInfo/CourseInfoLesson/LessonDetail";
import parseJwt from "./utils/parseJWT";

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
    exact: true,
    path: "/categories",
    component: Categories,
  },
  {
    exact: true,
    path: "/categories/add",
    component: AddNewCategory,
  },
  {
    exact: true,
    path: "/courses",
    component: Courses,
  },
  {
    exact: true,
    path: "/courses/add",
    component: AddCourse,
  },
  {
    exact: true,
    path: "/courses/:id",
    component: CourseInfo,
  },
  {
    exact: true,
    path: "/courses/:id/lessons/add",
    component: AddNewLesson,
  },
  {
    exact: true,
    path: "/courses/:id/lessons/:lesson_id",
    component: LessonDetail,
  },
  {
    exact: false,
    path: "**",
    component: PageNotFound,
  },
];

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("elearning_accessToken");
    if (accessToken) {
      const userInfo = parseJwt(accessToken);
      props.dispatch(
        createAction(FETCH_USER, {
          userInfo: userInfo.responseUser,
          token: accessToken,
        })
      );
      const fetchAllCategories = async () => {
        try {
          const response = await categoryApi.getAll();
          props.dispatch(createAction(FETCH_ALL_CATEGORIES, response.data));
        } catch (error) {
          throw error;
        }
      };
      fetchAllCategories();
    }
  }, []);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Sidebar collapsed={collapsed} onCollapse={onCollapse} />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: "0 16px" }}>
            {/* <CustomBreadcrumb /> */}
            <div
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
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
};
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
