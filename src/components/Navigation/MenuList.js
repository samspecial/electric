import React from "react";
import PropTypes from "prop-types";

import { MenuListGroup, LinkStyle } from "../Styles";

const MenuList = ({ open }) => {
  return (
    <MenuListGroup open={open}>
          <LinkStyle to="/">Home</LinkStyle>
          <LinkStyle to="/about">About</LinkStyle>
          <LinkStyle to="/services">Services</LinkStyle>
          <LinkStyle to="/contact">Contact</LinkStyle>
    </MenuListGroup>
  );
};


MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
};
export default MenuList;
