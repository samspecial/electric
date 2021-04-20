import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 4%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div.logo {
    z-index: 21;
    color: #880212;
    width: 15%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    div.logo {
      width: 40%;
    }
  }
`;

const linkStyle = {
  color: "#880212",
  textDecoration: "none",
  display: "block",
};

const NavBar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link style={linkStyle} to="/">
          Electric Rescue
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
