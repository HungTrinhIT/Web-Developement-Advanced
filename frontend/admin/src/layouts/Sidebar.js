import React from "react";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";

import {
  HomeOutlined,
  AppstoreAddOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {
  const location = useLocation();
  const { collapsed, onCollapse } = props;
  const { userInfo } = props.user;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ background: "transparent" }}>
        <img src="assets/img/logo.png" alt="logo" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        {userInfo.role === 0
          ? <SubMenu key="/users-parent" icon={<UserOutlined />} title="Users">
            <Menu.Item key="/users">
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="/users/add">
              <Link to="/users/add">Add new user</Link>
            </Menu.Item>
          </SubMenu>
          : null
        }

        <Menu.Item key="/categories" icon={<AppstoreAddOutlined />}>
          <Link to="/categories">Category</Link>
        </Menu.Item>

        <SubMenu key="1" icon={<BookOutlined />} title="Course">
          <Menu.Item key="/courses">
            <Link to="/courses">All courses</Link>
          </Menu.Item>
          <Menu.Item key="/courses/add">
            <Link to="/courses/add">Add course</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
export default connect(mapStateToProps)(Sidebar);
