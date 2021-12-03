import React from "react";
import PropTypes from "prop-types";
import { InputField } from "../Styles";
const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <InputField
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
};

export default Input;
