import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { Panel } from "./CardStyle";
import { FullWidth, SectionHeading } from "../Styles";

const CardList = ({ cardItems }) => {
  return (
    <FullWidth>
      <SectionHeading color="white">Why Choose Us</SectionHeading>
      <Panel>
        {cardItems.map((cardItem, i) => (
          <Card key={i} {...cardItem} />
        ))}
      </Panel>
    </FullWidth>
  );
};

export default CardList;

CardList.propTypes = {
  cardItems: PropTypes.array.isRequired,
};
