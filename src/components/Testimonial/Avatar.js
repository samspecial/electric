import React from "react";
import PropTypes from "prop-types";
import { AvatarImage } from "../Styles";

const Avatar = ({ src }) => {
  return <AvatarImage src={src} alt="avatar" />;
};

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};
