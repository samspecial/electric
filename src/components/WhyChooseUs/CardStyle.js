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
  justify-content: space-between;
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