import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import SideBar from "../Dashboard/SideBar";
import MainMenu from "../Dashboard/MainArea/Index.jsx";
import BenefitState from "../../context/benefit/BenefitState";

import userContext from "../../context/user/userContext";
import SubscriptionContext from "../../context/subscription/SubscriptionContext";

const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("connId"));
  const { fetchUser } = useContext(userContext);
  const subscriptionContext = useContext(SubscriptionContext);
  const { fetchSubscriptions } = subscriptionContext;
  useEffect(() => {
    fetchUser(userDetails?.user?.id);
    fetchSubscriptions();
  }, []);

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
