import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 5px 7px;
  background-color: #880212;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin: 16px 0;
  cursor: pointer;

  :hover {
    background-color: white;
    color: #880212;
    outline: 1px solid #880212;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 0;
    height: 50px;
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
  ${(props) =>
    props.cta === "color"
      ? css`
          color: white;
          margin-right: 0;
          background: #880212;
        `
      : css`
          color: #880212;
          margin-right: 20px;
          background: white;
        `};
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;

  &:hover {
    color: ${(props) => (props.cta === "color" ? "#880212" : "white")};
    background: ${(props) => (props.cta === "color" ? "white" : "#880212")};
    outline: ${(props) =>
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
export const SectionHeading = styled.h3`
  width: 100%;
  font-weight: 900;
  text-align: left;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  color: ${(props) => (props.color === "white" ? "white" : "#d0021b")};
  text-transform: capitalize;

  &::after {
    content: "";
    position: relative;
    display: block;
    width: 10%;
    height: 3px;
    background: green;
    top: 10px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 1.15rem;
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
  padding: 3rem 10rem;
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

export const FullWidth = styled.section`
  padding: 3rem 10rem;
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
  padding: 3rem 10rem;
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
  margin-right: 30px;
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-end;
  font-size: 0.85rem;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #880212;
`;

export const FormComponent = styled.form`
  padding: 1.5rem 2.5rem;
  border-radius: 5px;
  background: white;
  width: 40%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.form === "signin"
      ? css`
          border: 1px solid #880212;
          margin: 3.5rem 0;
        `
      : css`
          border: 0 solid white;
        `}

  h4 {
    color: #880212;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  h5 {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    order: 2;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    ${(props) =>
      props.form === "signin"
        ? css`
            margin: 1.5rem 0;
            padding: 0 1rem;
            min-height: 350px;
          `
        : css`
            border: 0 solid white;
            padding: 0;
          `}
    h4 {
      margin-bottom: 18px;
      font-size: 1.2rem;
    }
    order: 2;
    width: 100%;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  display: flex;
  background: white;
  padding: 2rem 7rem;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;

    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    width: 100%;
    height: 100%;
  }
`;

export const Link = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  ${(props) =>
    props.display === "block"
      ? css`
          display: block;
        `
      : css`
          display: inline;
        `};
`;

export const ModalComponent = styled.form`
  ${(props) =>
    props.modalName === "add"
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          width: 40%;
          height: 45%;
        `};
  box-shadow: 0px 3px 15px -3px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  padding: 2.5rem 3rem;
  position: absolute;
  transform: translate(-50%, -50%);
  @media screen and (max-device-width: 480px) {
    padding: 1.5rem 1rem;
    width: 85%;
    height: 60%;
  }
`;

export const ModalBackground = styled.section`
  background: #999;
  width: 100%;
  height: calc(100vh - 50px);
  position: absolute;
  top: 0;
  left: 0;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  background: #f2f2f2;
  border-radius: 50%;
  padding: 7px;
  z-index: 10;
  color: #880212;
  @media screen and (max-device-width: 480px) {
    top: 5px;
    right: 5px;
    width: 14px;
    height: 14px;
  }
`;
