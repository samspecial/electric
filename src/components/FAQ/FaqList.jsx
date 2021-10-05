import React from "react";
import { Container, SectionHeading } from "../Styles";

import faqs from "../../data/faq";
import "../../accordion.css";
import Accordion from "./Accordion";

const FaqList = () => {
  return (
    <Container background="white">
      <SectionHeading>FAQ</SectionHeading>
      <>
        {faqs.map((faq) => {
          return (
            <Accordion key={faq.id} {...faq}>
              <p className="accordion-text">{faq.body}</p>
            </Accordion>
          );
        })}
      </>
    </Container>
  );
};

export default FaqList;
