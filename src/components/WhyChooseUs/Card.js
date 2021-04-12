import React from "react";
import { Title, Panel, TextContainer } from "./CardStyle";
import PropTypes from "prop-types";
import { Text } from "../Styles";

const Card = ({ title, icon, text }) => {
  return (
    <Panel id={title}>
      <img src={icon} alt="" />
      <TextContainer>
        <Title>{title}</Title>
        <Text style={{ width: "auto" }}>{text}</Text>
      </TextContainer>
    </Panel>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
