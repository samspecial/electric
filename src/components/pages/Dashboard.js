import React from "react";
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import SideBar from "../Dashboard/SideBar";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <DashboardBody>
        <SideBar />
        <MainArea>Other pages</MainArea>
      </DashboardBody>
    </div>
  );
};

export default Dashboard;

const DashboardBody = styled.section`
  display: flex;
`;

const MainArea = styled.section`
  flex: 4;
  background: steelblue;
`;
