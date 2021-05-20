import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { Panel } from "./CardStyle";
import { FullWidth } from "../Styles";

const CardList = ({ cardItems }) => {
  return (
    <FullWidth>
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
  cardItems: PropTypes.array.isRequired
};
