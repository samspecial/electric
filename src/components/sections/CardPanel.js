import React from "react";
import CardList from "../WhyChooseUs/CardList";
// import { Panel } from "../WhyChooseUs/CardStyle"
import data from "../../data/whyChooseUs.json";

const CardPanel = () => {
  return <CardList cardItems={data} />;
};

export default CardPanel;
