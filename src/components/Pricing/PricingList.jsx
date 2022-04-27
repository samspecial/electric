import React, { useContext, useEffect } from "react";
import Pricing from "./Pricing";
// import pricingData from "../../data/pricingData";
import { Panel } from "../WhyChooseUs/CardStyle";
import { BackgroundLight, SectionHeading } from "../Styles";
import PackageContext from "../../context/package/PackageContext";

const PricingList = () => {
  const packageContext = useContext(PackageContext);

  const { packages, fetchPackages } = packageContext;
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <BackgroundLight>
      <SectionHeading>Our Pricing</SectionHeading>
      <Panel>
        {packages?.map((prices, index) => {
          return <Pricing key={index} {...prices} />;
        })}
      </Panel>
    </BackgroundLight>
  );
};

export default PricingList;
