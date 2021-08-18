import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "./Navbar.css";
import createAction from "../redux/action/createAction";
import { LOG_OUT } from "../redux/action/type";
import { useHistory } from "react-router-dom";
const { Header } = Layout;

const Navbar = (props) => {
  const history = useHistory();
  const { isAuthenticated, userInfo } = props.user;
  const onLogout = () => {
    localStorage.removeItem("elearning_accessToken");
    props.dispatch(createAction(LOG_OUT, null));
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout">
        <a target="_blank" rel="noopener noreferrer" onClick={onLogout}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  let avatar = null;
  if (isAuthenticated) {
    if (userInfo.avatar) {
      avatar = (
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <img
            src={userInfo.avatar}
            style={{
              height: "48px",
              width: "48px",
              objectFit: "cover",
              borderRadius: "100vh",
            }}
            alt={userInfo.fullName}
          />
        </Dropdown>
      );
    } else {
      avatar = (
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            className="icon"
          />
        </Dropdown>
      );
    }
  }

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className=" px-4 d-flex justify-content-between align-items-center">
        <p className="mb-0">
          <strong>UDEMA ADMIN</strong>
        </p>
        <div className="d-flex align-items-center">
          {isAuthenticated ? (
            <span className="userFullname">{userInfo.fullname}</span>
          ) : (
            ""
          )}
          {avatar}
        </div>
      </div>
    </Header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
export default connect(mapStateToProps)(Navbar);
