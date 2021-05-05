import React from "react";
import TimeLineItem from "./TimeLineItem";
import data from "../../data/howItWorks";
import styled from "styled-components";
import { SectionHeading, Container } from "../Styles";

const TimeLineContainer = () => (
  <Container background="white">
    <SectionHeading>How It Works</SectionHeading>

    <Div>
      {data.map((d) => (
        <TimeLineItem timeline={d} key={d.id}></TimeLineItem>
      ))}
    </Div>
  </Container>
);

export default TimeLineContainer;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 15px 0;

  div:nth-child(2) {
    div:nth-child(1) {
      order: 2;
      justify-self: flex-end;
    }

    div:nth-child(2) {
      order: 1;
      align-self: center;
    }
  }
`;
