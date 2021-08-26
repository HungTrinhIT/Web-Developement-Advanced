import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import CourseDetail from "./pages/CourseDetail";
import useScript from "./hooks/useScript";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AllCourse from "./pages/AllCourse";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import { connect } from "react-redux";
import createAction from "./redux/action/createAction";
import parseJwt from "./utils/parseJWT";
import { FETCH_USER } from "./redux/action/type";
function App(props) {
  const { user } = props;

  // Load Script Static
  useScript("assets/js/jquery-3.5.1.min.js");
  useScript("assets/js/common_scripts.js");
  useScript("assets/js/wow.min.js");
  useScript("assets/js/owl.carousel.min.js");
  useScript("assets/js/main.js");

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
    }
  }, []);

  const { isAuthenticated } = user;

  const login = isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route path="/login" component={Login} />
  );

  const register = isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route path="/register" component={Register} />
  );
  return (
    <div id="page">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/courses/cart/:id" component={Cart} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/courses" component={AllCourse} />
          <PrivateRoute path="/profile" component={Profile} exact={false} />
          {login}
          {register}
          <Route path="**" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
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

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
export default connect(mapStateToProps)(App);
