import "./App.css";
import { Layout } from "antd";
import Sidebar from "./layouts/Sidebar";
import CustomBreadcrumb from "./layouts/Breadcrumb";
import Navbar from "./layouts/Navbar";
import CustomFooter from "./layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import AddNewCategory from "./pages/Categories/AddCategory";
const { Content } = Layout;

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/users",
    component: Users,
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
    exact: false,
    path: "/courses",
    component: Courses,
  },
  {
    exact: false,
    path: "**",
    component: PageNotFound,
  },
];

const App = () => {
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
                {routes.map(({ exact, path, component }, index) => {
                  return (
                    <Route
                      exact={exact}
                      path={path}
                      component={component}
                      key={index}
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

export default App;
