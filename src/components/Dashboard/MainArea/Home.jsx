import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import PricePanel from "../../sections/PricingPanel";
import { Panel } from "../../WhyChooseUs/CardStyle";
import pricingData from "../../../data/pricingData";
import Pricing from "../../Pricing/Pricing";
import userContext from "../../../context/user/userContext";
import PackageContext from "../../../context/package/PackageContext";
import SubscriptionContext from "../../../context/subscription/SubscriptionContext";

const Home = () => {
  const packageContext = useContext(PackageContext);
  const { packages, fetchPackages } = packageContext;
  const subscriptionContext = useContext(SubscriptionContext);
  const { subscriptions } = subscriptionContext;

  const { user } = useContext(userContext);
  useEffect(() => {
    fetchPackages();
  }, []);
  return user?.role === "customer" ? (
    <MainAreaWrapper>
      <SectionRow>
        <RowItem>
          <h4>Current plan</h4>
          <h5>{subscriptions[0]?.plans?.plan_name}</h5>
        </RowItem>
        <RowItem background="red">
          <h4>Resolved conflict</h4>
          <h5>Dynamic data</h5>
        </RowItem>
        <RowItem background="yellow">
          <h4>Expiry date</h4>
          <h5>{subscriptions[0]?.expired_date}</h5>
        </RowItem>
      </SectionRow>
      <section>
        <div>
          <h4>Expiry date</h4>
        </div>

        <Panel>
          {packages?.map((prices, index) => {
            return <Pricing key={index} {...prices} />;
          })}
        </Panel>
      </section>
      <section>
        <div>
          <h4>Ticket raised</h4>
        </div>
      </section>
    </MainAreaWrapper>
  ) : user?.role === "admin" ? (
    <div>
      <h3>Welcome Admin</h3>
    </div>
  ) : (
    <div>
      <h3>Welcome Officer</h3>
    </div>
  );
};

Home.propTypes = {};

export default Home;

const MainAreaWrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding: 20px;
  background: #f2f2f2;
`;

const SectionRow = styled.section`
  display: flex;
  width: 100%;
  height: 250px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const RowItem = styled.div`
  flex: 1;
  height: 184px;
  margin: 0 8px;
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  flex-direction: column;
  justify-content: space-between;
  animation: 1s ease-in-out forwards scaleDown;
  display: flex;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
  }

  ${(props) =>
    props.background === "red"
      ? css`
          background: linear-gradient(99.62deg, #f34060 32.66%, #d63263 98.58%);
        `
      : props.background === "yellow"
      ? css`
          background: linear-gradient(
            303.9deg,
            #e8663d,
            rgba(228, 144, 18, 0.9) 98.1%
          );
        `
      : css`
          background: linear-gradient(112.56deg, #853dfc 28.13%, #0f42c7);
        `};

  &:hover {
    animation: 1s ease-in-out forwards scaleUp;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    30%,
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes scaleDown {
    0% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }
  h5 {
    text-align: right;
  }
`;
