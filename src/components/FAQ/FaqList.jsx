import React, { useState } from "react";
import { SectionHeading } from "../Styles";
import styled from "styled-components";
import { FiMinus, FiPlus } from "react-icons/fi";
import faqs from "../../data/faq";
import "../../accordion.css";

const FaqList = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <Container>
      <SectionHeading>FAQ</SectionHeading>
      <>
        {faqs.map((faq, index) => {
          return (
            <div key={faq.id}>
              <span className="title" onClick={() => toggle(index)}>
                {" "}
                <h4>{faq.title}</h4>{" "}
                <span>
                  {clicked === index ? (
                    <FiMinus color="#d0021b" />
                  ) : (
                    <FiPlus color="green" />
                  )}
                </span>
              </span>

              <p className={clicked === index ? "content show" : "content"}>
                {faq.body}
              </p>
            </div>
          );
        })}
      </>
    </Container>
  );
};

export default FaqList;

const Container = styled.div`
  width: 40vw;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100vw;
    padding: 0 0.8rem;
  }
`;
