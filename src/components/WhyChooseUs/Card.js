import React from "react";
import { Title, PanelHorizontal, TextContainer, Img } from "./CardStyle";
import PropTypes from "prop-types";
import { Text } from "../Styles";

const Card = ({ title, icon, text }) => {
  return (
    <PanelHorizontal id={title}>
      <Img src={icon} alt="" />
      <TextContainer>
        <Title>{title}</Title>
        <Text style={{ width: "auto", fontSize: "0.9rem", color: "black" }}>
          {text}
        </Text>
      </TextContainer>
    </PanelHorizontal>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
