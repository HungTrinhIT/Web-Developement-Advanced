import React from "react";
import { Typography } from "antd";

const PageTitle = ({ title, ...props }) => {
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <Typography.Title level={2}>{title}</Typography.Title>
      {props.children}
    </div>
  );
};
export default PageTitle;
