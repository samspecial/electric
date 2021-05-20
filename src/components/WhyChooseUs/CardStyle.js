import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1rem;
  color: #D0021B;
  text-transform:capitalize;
`;

export const Panel = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-around;
  align-items: flex-start;
  line-height: 1.5;
`;

export const PanelHorizontal = styled.div`
  display: flex;
  width:23%;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
  background: #dcd;

  @media only screen and (min-width:480px) and (max-width:768px){
    width:46%;
    margin-bottom:1.2rem;
    padding: 2rem 1.5rem;
  }
  @media only screen and (max-width:480px){
    width:100%;
    padding: 2rem 1.5rem;;
    margin-bottom:0.85rem;
  }
  //#ddc
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width:80%;
//   justify-content: center;
`;

export const Img = styled.img`
    display: block;
    margin: 0 auto;
    border-radius:50%;
    height:30px;
    width:30px;
    padding:20px;
`