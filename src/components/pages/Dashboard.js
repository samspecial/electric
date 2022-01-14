import React from "react";
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import SideBar from "../Dashboard/SideBar";
import MainMenu from "../Dashboard/MainArea/Index.jsx";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <DashboardBody>
        <SideBar />
        <MainArea>
          <MainMenu />
        </MainArea>
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
`;
