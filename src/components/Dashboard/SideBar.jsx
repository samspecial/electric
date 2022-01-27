import React from "react";
import styled from "styled-components";
import { useAuthState } from "../../context/auth/AuthProvider";
import {
  dashboard,
  quickMenu,
  notifications,
  staff,
} from "../../data/dashboardList";
import DashboardLink from "./DashboardLink";

const menuItem = [
  {
    id: 1,
    header: "Dashboard",
    menuData: dashboard,
    role: ["admin", "customer", "officer"],
  },
  {
    id: 2,
    header: "Quick Menu",
    menuData: quickMenu,
    role: ["admin", "customer"],
  },
  {
    id: 3,
    header: "Notification",
    menuData: notifications,
    role: ["admin", "customer", "officer"],
  },
  {
    id: 4,
    header: "Staff",
    menuData: staff,
    role: ["admin", "officer"],
  },
];

const SideBar = () => {
  const { user } = useAuthState();
  const connString = JSON.parse(localStorage.getItem("connId"));
  return (
    <Aside>
      <section>
        {menuItem.map(
          (item) =>
            item.role.includes(connString?.user.role) && (
              <div key={item.id}>
                <h3>{item.header}</h3>
                <DashboardLink dashboard={item.menuData} />
              </div>
            )
        )}
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
