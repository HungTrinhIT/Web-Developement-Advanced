import React from "react";
import { Dropdown, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
const CustomBreadcrumb = (props) => {
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("elearning_accessToken");
    history.push("/");
  };
  const menu = (
    <Menu>
      <Menu.Item key="idx">
        <a onClick={onLogout}>Logout</a>
      </Menu.Item>
    </Menu>
  );
  const { user } = props;
  return (
    <div className="d-flex justify-content-between align-items-center py-2">
      <h1>MClass</h1>
      <Dropdown overlay={menu} placement="bottomRight">
        {user && user.avatar ? (
          <img
            src={user.avatar}
            style={{
              width: "48px",
              height: "48px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "1px solid white",
            }}
          />
        ) : (
          <div>
            <span className="mr-2">{user.fullname}</span>
            <Avatar size={64} icon={<UserOutlined />} className="icon" />
          </div>
        )}
      </Dropdown>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.users.userInfo,
  };
};
export default connect(mapStateToProps)(CustomBreadcrumb);
