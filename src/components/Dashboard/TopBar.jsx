import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiBell, FiGlobe, FiSettings } from "react-icons/fi";
import Avatar from "../Testimonial/Avatar";
import { Link } from "../Styles";

const TopBar = (props) => {
  return (
    <Topbar>
      <TopbarContainer>
        <Logo>
          <span>
            <Link to="/">Electric Admin</Link>
          </span>
        </Logo>
        <div>
          <TopBarIcon>
            <FiBell size="20" />
            <span>2</span>
          </TopBarIcon>
          <TopBarIcon>
            <FiGlobe size="20" />
            <span>2</span>
          </TopBarIcon>
          <TopBarIcon>
            <FiSettings size="20" />
          </TopBarIcon>
          <Avatar />
        </div>
      </TopbarContainer>
    </Topbar>
  );
};

TopBar.propTypes = {};

export default TopBar;

const Topbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopbarContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }
`;
const Logo = styled.div`
  span {
    font-weight: bold;
    font-size: 25px;
    color: #880212;
  }
`;
const TopBarIcon = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;

  span {
    position: absolute;
    top: -10px;
    right: 4px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    background: #880212;
    color: white;
    border-radius: 50%;
  }
`;
