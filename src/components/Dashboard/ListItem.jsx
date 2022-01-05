import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

const ListItem = ({ icon, label }) => {
  // const { path, url } = useMatch();
  // console.log(path, url);
  return (
    <React.Fragment>
      <li>
        <NavLink to="/">
          {icon}
          {label}
        </NavLink>
      </li>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ListItem;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #555;
  display: flex;
  align-items: center;
`;
