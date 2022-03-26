import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import SideBar from "../Dashboard/SideBar";
import MainMenu from "../Dashboard/MainArea/Index.jsx";
import BenefitState from "../../context/benefit/BenefitState";
import PackageState from "../../context/package/PackageState";

import UserContext from "../../context/user/userContext";

const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("connId"));
  const { fetchUser } = useContext(UserContext);
  useEffect(() => {
    fetchUser(userDetails?.user?.id);
  }, []);

  // const loggedInUser = users.filter((u) => u.uuid === user?.id);

  return (
    <BenefitState>
      <PackageState>
        <div>
          <TopBar />
          <DashboardBody>
            <SideBarArea />
            <MainArea>
              <MainMenu />
            </MainArea>
          </DashboardBody>
        </div>
      </PackageState>
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
