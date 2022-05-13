import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "../Styles";
import { useAuthDispatch, useAuthState } from "../../context/auth/AuthProvider";

const SecondaryMenu = ({ user, userProfile, name, path, icon }) => {
  const Icon = icon;
  const { logoutUser } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    logoutUser(dispatch);
  };
  return (
    <>
      <MenuWrapper>
        <li>{user.fullname}</li>
        <li>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</li>
        {userProfile.map((u) => (
          <li key={u.id}>
            <NavLink submenu="secondary" to={u.path}>
              <u.icon style={{ marginRight: "14px" }} />
              {u.name}
            </NavLink>
          </li>
        ))}
        <li onClick={logout}>
          <NavLink submenu="secondary" to={path}>
            <Icon style={{ marginRight: "14px" }} />
            {name}
          </NavLink>
        </li>
      </MenuWrapper>
    </>
  );
};

export default SecondaryMenu;

const MenuWrapper = styled.ul`

    min-width: 60px;
    height: auto;
    background:  #fffff1;
    position: absolute;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    top:38px;
    right:0;
    z-index:3;
    flex-direction:column;
    padding:1rem 2rem;
  }

  // .dropdown-menu {
  //   background: red;
  //   width: 200px;
  //   position: absolute;
  //   top: 80px;
  //   list-style: none;
  //   text-align: start;
  // }
  &:before {
    content: "";
    position: absolute;
    right: 8%;
    top: -6px;
    width: 0;
    z-index:1;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #fffff1;

     li {
      background: #1888ff;
      cursor: pointer;
    }
    
    li:hover {
      background: #5cabff;
    }
    
    &:clicked {
      display: none;
    }
    
  }
`;
