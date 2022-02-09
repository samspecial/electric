import React from "react";
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import SideBar from "../Dashboard/SideBar";
import MainMenu from "../Dashboard/MainArea/Index.jsx";
import BenefitState from "../../context/benefit/BenefitState";

const Dashboard = () => {
  return (
    <BenefitState>
      <div>
        <TopBar />
        <DashboardBody>
          <SideBarArea />
          <MainArea>
            <MainMenu />
          </MainArea>
        </DashboardBody>
      </div>
    </BenefitState>
  );
};

export default Dashboard;

const DashboardBody = styled.section`
  display: flex;
`;
const SideBarArea = styled(SideBar)`
  flex: 1;
`;

const MainArea = styled.section`
  flex: 4;
`;
