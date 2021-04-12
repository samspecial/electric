import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { Text } from "../Styles";

const CardList = ({ cardItems, title }) => {
  return (
    <div>
      <Text>{title}</Text>
      <>
        {cardItems.map((cardItem, i) => (
          <Card key={i} {...cardItem} />
        ))}
      </>
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  cardItems: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
