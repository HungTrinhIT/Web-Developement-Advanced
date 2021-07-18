import React from "react";
import { Typography } from "antd";

const PageTitle = ({ title, ...props }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-1">
      <Typography.Title level={2}>{title}</Typography.Title>
      {props.children}
    </div>
  );
};
export default PageTitle;
