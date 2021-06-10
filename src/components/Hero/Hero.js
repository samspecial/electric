import React from "react";
import styled from "styled-components";
import { LinkStyle, Text, Heading } from "../Styles";
import { Img } from "../WhyChooseUs/CardStyle";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContent>
        <Heading>We believe in zero power failure</Heading>
        <Text>
          Getting you fix every power issue from the meter to everypart of your
          home.
        </Text>
        <LinkStyle cta="color" to="/about">
          Get Started
        </LinkStyle>
      </TextContent>
      <img />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  @media screen only and (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 45%;
  }

  @media screen only and (max-width: 480px) {
    display: none;
  }
`;

const TextContent = styled.div`
  width: 55%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Hero;
