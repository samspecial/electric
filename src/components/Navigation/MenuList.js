import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { MenuListGroup } from "../Styles";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];

const MenuList = ({ children, open }) => {
  return (
    <MenuListGroup open={open}>
      {links.map((link) => (
        <li key={link.id}>
          {" "}
          <NavLink exact to={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
      {children}
    </MenuListGroup>
  );
};

MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};
export default MenuList;
