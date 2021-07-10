import "./sidebar.css";
import {
  LineStyle,
  Redeem,
  AccountCircle,
  ImportContacts,
} from "@material-ui/icons";
import CustomLink from "./CustomLink";

const routes = [
  {
    url: "/",
    name: "Home",
    icon: <LineStyle className="sidebarIcon" />,
    activeOnlyWhenExact: true,
  },
  {
    url: "/users",
    name: "Users",
    icon: <AccountCircle className="sidebarIcon" />,
    activeOnlyWhenExact: false,
  },
  {
    url: "/categories",
    name: "Categories",
    icon: <Redeem className="sidebarIcon" />,
    activeOnlyWhenExact: true,
  },
  {
    url: "/courses",
    name: "Courses",
    icon: <ImportContacts className="sidebarIcon" />,
    activeOnlyWhenExact: true,
  },
];

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {routes.map(({ url, name, icon, activeOnlyWhenExact }, index) => {
              return (
                <CustomLink
                  key={index}
                  to={url}
                  label={name}
                  icon={icon}
                  activeOnlyWhenExact={activeOnlyWhenExact}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
