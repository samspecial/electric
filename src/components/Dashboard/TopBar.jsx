import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiBell, FiGlobe, FiSettings, FiKey, FiPower } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import userContext from "../../context/user/userContext";

import { Link } from "../Styles";
import SecondaryMenu from "./SecondaryMenu";

const TopBar = () => {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState(false);
  const { user } = useContext(userContext);

  const secondaryMenu = () => {
    setShowSecondaryMenu(!showSecondaryMenu);
  };
  const closeSecondaryMenu = () => {
    setShowSecondaryMenu(!showSecondaryMenu);
  };

  const userProfile = [
    { id: 1, name: "Update Profile", path: "/", icon: FaUserCircle },
    { id: 2, name: "Change Password", path: "/about", icon: FiKey },
    // { id: 3, name: "Services", path: "/services" },
  ];
  const logout = { id: 4, name: "Logout", path: "/", icon: FiPower };

  return (
    <Topbar>
      <Logo>
        <span>
          <Link to="/dashboard">Electric Admin</Link>
        </span>
      </Logo>
      <TopBarNav>
        <ul>
          <li>
            <Link padding="true" to="#!">
              {" "}
              <FiBell size="20" />
            </Link>
          </li>
          <li>
            <Link padding="true" to="#!">
              {" "}
              <FiGlobe size="20" />
            </Link>
          </li>
          <li onMouseEnter={secondaryMenu} onMouseLeave={closeSecondaryMenu}>
            <Link padding="true" to="#!">
              {" "}
              <FiSettings size="20" />
            </Link>
          </li>
          <li onMouseEnter={secondaryMenu} onMouseLeave={closeSecondaryMenu}>
            <Link padding="true" to="#!">
              {" "}
              <FaUserCircle size="20" />
            </Link>{" "}
            {showSecondaryMenu && (
              <SecondaryMenu
                user={user}
                userProfile={userProfile}
                {...logout}
              />
            )}
          </li>
        </ul>
      </TopBarNav>
    </Topbar>
  );
};

TopBar.propTypes = {};

export default TopBar;

const Topbar = styled.header`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  padding: 0px 40px;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const Logo = styled.div`
  margin-right: auto;
  span {
    font-weight: bold;
    font-size: 25px;
    color: #880212;
  }
`;
const TopBarNav = styled.nav`
  position: relative;
  margin: 0 15px;
  cursor: pointer;

  ul {
    list-style: none;
    display: flex;
    li {
      height: 100%;
    }
  }
  // span {
  //   position: absolute;
  //   top: -10px;
  //   right: 4px;
  //   font-size: 10px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 15px;
  //   height: 15px;
  //   background: #880212;
  //   color: white;
  //   border-radius: 50%;
  // }
`;
