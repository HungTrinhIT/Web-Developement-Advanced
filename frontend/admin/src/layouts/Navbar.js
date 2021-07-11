import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
const Navbar = () => {
  return (
    <Header className="site-layout-background" style={{ padding: "0 40px" }}>
      <h1>Mclass</h1>
    </Header>
  );
};

export default Navbar;
