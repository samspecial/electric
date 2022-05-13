import React from "react";
import styled from "styled-components";
import { LinkStyle, Text, Heading } from "../Styles";
import lightbulb from "../../assets/lightbulb.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContent>
        <Heading>We believe in zero power failure</Heading>
        <Text>
          Getting you fix every power issue from the meter to everypart of your
          home.
        </Text>
        <LinkStyle cta="color" to="/register">
          Get Started
        </LinkStyle>
      </TextContent>
      <Img src={lightbulb} alt={lightbulb} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media screen only and (max-width: 480px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  width: 55%;
  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: ;
  }
`;
const Img = styled.img`
  width: 45%;
  display: block;
  height: 40%;

  @media screen only and (max-width: 480px) {
    // display: none;
    width: 100%;
  }
`;

export default Hero;
