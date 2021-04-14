import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { Panel } from "./CardStyle";


const CardList = ({ cardItems }) => {
    return (
        <Panel>
        {cardItems.map((cardItem, i) => (
          <Card key={i} {...cardItem} />
        ))}
        </Panel>
  );
};

export default CardList;

CardList.propTypes = {
    cardItems: PropTypes.array.isRequired,
};
