import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TimeLineItem = ({ timeline }) => {
  return (
    <TimeLine>
      <div>
        <img src={timeline.illustration} alt={timeline.illustration} />
      </div>
      <div>
        <div>
          <h2>{timeline.heading}</h2>
          <h2>0{timeline.id}</h2>
          <p>{timeline.paragraph}</p>
        </div>
        <span></span>
      </div>
    </TimeLine>
  );
};

export default TimeLineItem;

TimeLineItem.propTypes = {
  timeline: PropTypes.object.isRequired,
};

const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  div:nth-child(2) {
    width: 40%;
    height: 100%;
    padding: 5rem 1.5rem;
    border-radius: 10px;
    background: #88021219;
    div {
      width: 100%;
      position: relative;
      height: 100%;
      h2 {
        margin-bottom: 1.5rem;
      }
      h2:nth-child(2) {
        position: absolute;
        font-size: 4.5rem;
        color: #fc0221;
        left: 65%;
        top: -50%;
        font-weight: 400;
        margin-bottom: 0;
      }
    }
  }
  div {
    width: 30%;
    img {
      width: 80%;
      display: block;
      height: 100%;
    }
  }

  img:nth-child(2) {
    margin-left: 100%;
  }
  div:nth-child(2) {
    order: 2;
  }

  span {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    border: 4px solid #880212;
    display: block;
    z-index: 100;
    left: calc(50% - 20px);
    top: calc(50% - 20px);

    &::after {
      content: "";
      width: 395px;
      height: 4px;
      background: #e17b77;
      display: block;
      position: absolute;
      z-index: 1;
      left: -182px;
      transform: rotate(270deg);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 4rem 3rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 0;
    div {
      img {
        display: none;
        width: 0px;
      }
    }
    div:nth-child(2) {
      width: 100%;
      div {
        padding: 2rem 0;
        h2:nth-child(2) {
          font-size: 1.3rem;
          left: 80%;
          top: -8%;
          font-weight: 400;
        }
      }
    }
    span {
      display: none;
    }
  }
`;
