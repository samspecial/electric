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
          <InternalLink to="/products">{timeline.illustration}</InternalLink>
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
  margin-bottom:30px;

  div {
    width: 35%;
    height: 100%;
    padding:3rem 1.5rem;
    border-radius:10px;
    div{
        width:100%;
        position:relative;

        h2:nth-child(2){
            position:absolute;
            font-size:4.5rem;
            color:#FC0221;
            left:65%;
            top:-20%;
            font-weight:400;
        }
    }
  }

  img {
    width: 70%;
    height: 100%;
    margin: 0 auto;
  }

  div:nth-child(even) {
    order: 2;
    background:#F5F7FA;
  }

  span {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    border: 4px solid #880212;
    z-index: 1000;
    left: calc(50% - 20px);
    top: calc(50% - 20px);

    &::after {
      content: "";
      width: 250px;
      height: 40px;
      background: transparent;
      border: none;
      border-radius: 50%;
        transform:rotate(270deg);
      box-sizing: border-box;
      display: block;
      position: absolute;
      border-bottom: dashed 2px #e17b77;
      left:-115px;
      top:140px;
    }
    &:nth-child(2):after{
      transform:rotate(-270deg, 0);
    }  
    
  }
`;

const InternalLink = styled(Link)`

`;

// const TimeLineImage = styled.div`
// width:48%;
// height:100%;

// img{
// width:70%;
// height:100%;
// margin:0 auto
// ;
// img:nth-child(2){
//     order:2;
// }
// img:nth-child(4){
//     order:2;
// }
// }

// `;

// const ItemWrapper = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     padding-right: 30px;
//     position: relative;
//     margin: 10px 0;
//     width: 50%;

// `;