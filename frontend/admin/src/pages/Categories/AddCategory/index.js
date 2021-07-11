import React from "react";
import axiosClient from "../../../api/axiosClient";
import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

const AddNewCategory = (props) => {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <Button
        type="primary"
        icon={<RollbackOutlined />}
        style={{ marginRight: "8px" }}
        onClick={goBack}
        size="large"
      >
        Back to categories
      </Button>
    </div>
  );
};
export default AddNewCategory;
