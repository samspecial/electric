import React from "react";
import styled from "styled-components";
import { LinkStyle } from "../Styles";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5%;
  display: flex;
  align-items:center;
  justify-content: flex-start;

  .logo {
    padding: 15px 0;
    z-index:21;
    color:#880212;
    width:25%;
  }
  &:nth-child(2){
      width:75%;
  }
`;

const NavBar = () => {
  return (
    <Nav>
          <div className="logo"><LinkStyle to="/">Electric Rescue</LinkStyle></div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
