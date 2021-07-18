import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
const CustomInput = (props) => {
  const { title } = props;
  return (
    <div className="form-field">
      <Input className="customInputText" placeholder=" " {...props} />
      <label>{title}</label>
    </div>
  );
};
CustomInput.propTypes = {
  title: PropTypes.string,
};
CustomInput.defaultProps = {
  title: "",
};

export default CustomInput;
