import React, { useState } from "react";
import { Layout, Menu } from "antd";

import {
  HomeOutlined,
  AppstoreAddOutlined,
  FileOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const location = useLocation();
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo"></div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu key="/users-parent" icon={<UserOutlined />} title="Users">
          <Menu.Item key="/users">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/users/add">
            <Link to="/users/add">Add new user</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/categories" icon={<AppstoreAddOutlined />}>
          <Link to="/categories">Category</Link>
        </Menu.Item>

        <SubMenu key="1" icon={<BookOutlined />} title="Course">
          <Menu.Item key="/courses">
            <Link to="/courses">All courses</Link>
          </Menu.Item>
          <Menu.Item key="/add-course">
            <Link to="/add-course">Add new course</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
