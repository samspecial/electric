import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { FullWidth, InputText, ButtonOutline } from "../Styles";
import useForm from "../Form/useForm";

const Newsletter = () => {
  const initialState = {
    emailAddress: "",
  };
  const { onChange, values, setValues } = useForm(initialState);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FullWidth>
      <NewsletterWrapper>
        <h3>Newsletter Signup</h3>
        <form onSubmit={handleNewsletterSubmit}>
          <InputText
            placeholder="Your Email Address"
            type="email"
            name="email"
            value={values.emailAddress}
            onChange={onChange}
          />
          <ButtonOutline>
            <FaArrowRight />
          </ButtonOutline>
        </form>
      </NewsletterWrapper>
    </FullWidth>
  );
};

export default Newsletter;

const NewsletterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  color: #ffffff;

  h3 {
    font-size: 4rem;
    flex: 1;
    line-height: 4rem;
    position: relative;
  }

  h3:before {
    position: absolute;
    width: 100%;
    content: "";
    z-index: 8;
    top: -40%;
    left: 0;
    bottom: -40%;
    max-width: 90%;
    opacity: 0.9;
    background-image: radial-gradient(#ffffff 6%, transparent 0);
    background-size: 40px 40px;
  }

  form {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h3 {
      width: 100%;
    }
    h3:before {
      max-width: 100%;
      top: -25%;
      left: 0;
      bottom: -25%;
    }
    form {
      width: 100%;
      justify-content: flex-start;
      margin-top: 4.5rem;
    }
  }

  @media only screen and (min-width: 480px) and (min-width: 769px) {
  }
`;
