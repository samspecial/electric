import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1.2rem;
  color: #d0021b;
  text-transform: capitalize;
`;

export const Panel = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  line-height: 1.5;
`;

export const PanelHorizontal = styled.div`
  display: flex;
  width: 23%;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
  background: rgb(238, 236, 236);

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 46%;
    margin: 0 0 0.85rem 0;
    padding: 2rem 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 2rem 1.5rem;
    margin: 0 0 0.85rem 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 20px;
`;
