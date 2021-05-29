import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px 7px;
  background-color: #34628c;
  color: white;
  font-size: 12px;
  border: none;
  box-shadow: 4px 8px 8px grey, 2px 6px 6px #34628c;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 15px;
  opacity: 0;
  animation: fadeUp 0.2s ease-in-out 0.7s forwards;

  :hover {
    background-color: white;
    color: #34628c;
  }
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 120px;
    font-size: 16px;
    height: 40px;
  }

  @media only screen and (min-width: 769px) {
    width: auto;
    font-size: 12px;
    font-weight: 600;
    height: 30px;
    padding: 7px 10px;
  }
`;

export const MenuListGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: center;

  li {
    width: auto;
  }

  li a {
    text-decoration: none;
    color: #880212;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding-top: 8rem;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #ccc;
    align-items: flex-start;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 80%;
    transition: transform 0.3s ease-in-out;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 50px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.4rem;
  border-radius: 8px;
  color: ${(props) => (props.cta === "color" ? "white" : "#880212")};
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  background: ${(props) => (props.cta === "color" ? "#880212" : "white")};

  &:hover {
    color: ${(props) => (props.cta === "color" ? "#880212" : "white")};
    background: ${(props) => (props.cta === "color" ? "white" : "#880212")};
    border: ${(props) =>
    props.cta === "color" ? "0.05rem solid #880212" : "none"};
  }
  @media (max-width: 768px) {
    width: fit-content;
    text-align: left;
    padding: 0.6rem 0;
    background: transparent;
    color: #880212;
  }
`;

export const Heading = styled.h2`
  width: 100%;
  font-size: 3.5rem;
  font-weight: 900;
  color: #880212;
  text-align: left;
  line-height: 1.2;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.35;
  width: 350px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.section`
  padding: 3rem 6rem;
  width: 100%;
  min-height: 450px;
  background: ${(props) =>
    props.background === "white" ? "white" : "#F5F7FA"};

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const SectionHeading = styled.h3`
  width: 100%;
  font-weight: 900;
  text-align: center;
  line-height: 1.2;
  margin: 3.5rem 0;
  font-size: 1.75rem;
  color: ${(props) => (props.color === "white" ? "white" : "#d0021b")};
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 1.15rem;
  }
`;

export const FullWidth = styled.section`
  padding: 3rem 6rem 6rem 6rem;
  width: 100%;
  min-height: 450px;
  background: linear-gradient(60deg, #d0021b, #970214);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const BackgroundLight = styled.section`
  background: #eeecec;
  padding: 3rem 6rem;
  width: 100%;
  min-height: 450px;
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

//Avatar Image - Testimonial

export const AvatarImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right:30px;
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items:flex-end;
  font-size:0.85rem;
`;
