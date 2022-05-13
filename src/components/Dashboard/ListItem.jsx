import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "../Styles";

import { Link, useMatch } from "react-router-dom";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const ListItem = ({ icon, label, url }) => {
  const [dimension, setDimension] = useState(window.innerWidth);
  // const { path, url } = useMatch();
  // console.log(path, url);
  //window.matchMedia("(max-width:480px)").matches

  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      setDimension(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    return (_) => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  });
  return (
    <React.Fragment>
      <li>
        <NavLink to={url}>
          {icon} {dimension > 480 && label}
        </NavLink>
      </li>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ListItem;
