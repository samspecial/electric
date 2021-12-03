import React from "react";
import styled from "styled-components";
import {
  dashboard,
  quickMenu,
  notifications,
  staff,
} from "../../data/dashboardList";
import DashboardLink from "./DashboardLink";

const SideBar = () => {
  return (
    <Aside>
      <section>
        <div>
          <h3>Dashboard</h3>
          <DashboardLink dashboard={dashboard} />
        </div>
        <div>
          <h3>Quick Menu</h3>
          <DashboardLink dashboard={quickMenu} />
        </div>
        <div>
          <h3>Notification</h3>
          <DashboardLink dashboard={notifications} />
        </div>
        <div>
          <h3>Staff</h3>
          <DashboardLink dashboard={staff} />
        </div>
      </section>
    </Aside>
  );
};

SideBar.propTypes = {};

export default SideBar;

const Aside = styled.aside`
  flex: 1;
  height: calc(100vh - 50px);
  background: rgb(251, 251, 255);
  position: sticky;
  top: 50px;

  section {
    padding: 20px;
    color: #555;
  }
  div {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 14px;
  }
  ul {
    list-style: none;
    text-decoration: none;
  }
  li {
    padding: 5px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
  }

  li:hover,
  li:active {
    background: rgb(228, 228, 250);
  }
`;
