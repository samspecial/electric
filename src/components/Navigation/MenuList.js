import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MenuList = ({ open }) => {
  return (
    <MenuListGroup open={open}>
      <li>Home</li>
      <li>About</li>
      <li>Packages</li>
      <li>Contact</li>
    </MenuListGroup>
  );
};
const MenuListGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
};
export default MenuList;
