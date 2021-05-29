import React from "react";
import CardList from "../WhyChooseUs/CardList";

import data from "../../data/whyChooseUs";

const CardPanel = () => {
  return <CardList cardItems={data} />;
};

export default CardPanel;
