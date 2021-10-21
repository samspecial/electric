import React from "react";
import PropTypes from "prop-types";

const SignupItem = ({ id, image, text }) => {
  return (
    <div>
      <img src={image} alt={image} />

      <p>{text}</p>
    </div>
  );
};

SignupItem.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SignupItem;
