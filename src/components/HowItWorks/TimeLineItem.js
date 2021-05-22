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
  padding: 4rem 10rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  width:100%;


  div:nth-child(2) {
    width: 40%;
    height: 100%;
    padding:5rem 1.5rem;
    border-radius:10px;
    background:#88021219;
    div{
        width:100%;
        position:relative;
        height:100%;
        h2{
          margin-bottom:1.5rem;
        }
        h2:nth-child(2){
            position:absolute;
            font-size:4.5rem;
            color:#FC0221;
            left:65%;
            top:-50%;
            font-weight:400;
            margin-bottom:0;
        }
    }
  }
  div{
    width: 30%;
  img {
    width:80%;
    display:block;
    height: 100%;
  }

}

img:nth-child(2){
    margin-left:100%;
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
    z-index: 1000;
    left: calc(50% - 20px);
    top: calc(50% - 20px);

    &::after {
      content: "";
      width: 380px;
      height: 10px;
      background: transparent;
      transform:rotate(270deg);
      box-sizing: border-box;
      display: block;
      position: absolute;
      border-bottom: dashed 2px #e17b77;
      left:-180px;
      top:230px;
    }

    span:last-child::after{
      width:0;
      height:0;
    }
    
  }

  @media (min-width:481px) and (max-width:768px){
    padding:4rem 3rem;
  }
  @media (max-width:480px){
    flex-direction:column;
    padding: 1rem;
    div{
    img{
      display:none;
      width:0px;
    }
  }
    div:nth-child(2){
      width:100%;
      div{
        padding:2rem 0;
        h2:nth-child(2){
            font-size:2.3rem;
            left:85%;
            top:-10%;
            font-weight:400;
        }
      }
    }
    span{
      display:none;
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
