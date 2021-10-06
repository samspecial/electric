import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopBar = (props) => {
  return (
    <Topbar>
      <TopbarContainer>
        <div>Left</div>
        <div>Right</div>
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
`;
const TopbarContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 20px;
`;
