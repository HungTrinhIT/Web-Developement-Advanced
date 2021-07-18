import React from "react";

import PropTypes from "prop-types";

const CustomSelect = (props) => {
  const { title } = props;
  return (
    <div className="form-field">
      <select className="customSelect" placeholder=" " {...props}>
        {props.children}
      </select>
      <label>{title}</label>
    </div>
  );
};

CustomSelect.propTypes = {
  title: PropTypes.string,
};
CustomSelect.defaultProps = {
  title: "",
};

export default CustomSelect;
