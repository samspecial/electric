import React from "react";
import styled from "styled-components";
import { LinkStyle, Text, Heading } from "../Styles";

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
    flex-flow: column wrap;
  }
`;

const TextContent = styled.div`
  width: 45%;
`;

export default Hero;
