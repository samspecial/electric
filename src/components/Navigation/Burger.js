import React, { useState } from "react";
import styled from "styled-components";
import { useAuthState, useAuthDispatch } from "../../context/auth/AuthProvider";
import { LinkStyle } from "../Styles";
import MenuList from "./MenuList";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logoutUser } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    logoutUser(dispatch);
  };
  return (
    <Div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <MenuList open={open}>
        <Span>
          {isAuthenticated ? (
            <>
              {" "}
              <LinkStyle cta="clear" onClick={logout} to="/">
                Logout
              </LinkStyle>
              <LinkStyle cta="color" to="/dashboard">
                Dashboard
              </LinkStyle>
            </>
          ) : (
            <>
              {" "}
              <LinkStyle cta="clear" to="/login">
                Sign In
              </LinkStyle>
              <LinkStyle cta="color" to="/register">
                Register
              </LinkStyle>
            </>
          )}
        </Span>
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
  }
`;

const Span = styled.span`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 0;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 1rem;
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
