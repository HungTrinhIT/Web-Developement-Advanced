import "./App.css";
import Homepage from "./pages/Homepage";
import CourseDetail from "./pages/CourseDetail";
import useScript from "./hooks/useScript";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AllCourse from "./pages/AllCourse";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  useScript("assets/js/jquery-3.5.1.min.js");
  useScript("assets/js/common_scripts.js");
  useScript("assets/js/wow.min.js");
  useScript("assets/js/owl.carousel.min.js");
  useScript("assets/js/main.js");

  return (
    <div id="page">
      <Router>
        <Route path="/login" component={Login} />
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/course-detail/:id" component={CourseDetail} />
          <Route path="/courses" component={AllCourse} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
