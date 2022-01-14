import React from "react";
import { Title, PanelHorizontal, TextContainer, Wrapper } from "./CardStyle";
import PropTypes from "prop-types";
import { Text } from "../Styles";

const Card = ({ title, icon, text }) => {
  let Icon = icon;
  return (
    <PanelHorizontal id={title}>
      <Wrapper>
        <Icon style={{ fontSize: "13px", marginTop: "8px" }}></Icon>
      </Wrapper>

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
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
