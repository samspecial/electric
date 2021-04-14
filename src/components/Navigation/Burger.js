import React, { useState } from "react";
import styled from "styled-components";
import { LinkStyle } from "../Styles";
import MenuList from "./MenuList";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const navButtonLinks = [
    { id: 1, name: "Sign In", path: "/login", type: "clear" },
    { id: 2, name: "Register", path: "/register", type: "color" },
  ];

  const linkStyles = {
    height: "100%",

    display: "flex",
    justifyContent: "flex-end",
    margin: { marginRight: "1rem", marginTop: "0px", height: "40px" },
    width: "60%",
    marginLeft: "auto",
  };
  return (
    <Div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <MenuList open={open}>
        <span style={linkStyles}>
          {navButtonLinks.map((link) => (
            <LinkStyle
              style={linkStyles.margin}
              cta={link.type}
              key={link.id}
              to={link.path}
            >
              {link.name}
            </LinkStyle>
          ))}
        </span>
      </MenuList>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  &:last-child {
    width: 95%;
    display: flex;
    align-items: center;
  }
`;
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#bbb" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export default Burger;
