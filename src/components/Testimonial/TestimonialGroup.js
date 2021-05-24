import React from "react";
import testimonials from "../../data/testimonial";
import { Panel } from "../WhyChooseUs/CardStyle";
import { SectionHeading } from "../Styles";
import Testimonial from "./Testimonial";

const TestimonialGroup = () => {
  return (
    <>
      <SectionHeading>Testimonials</SectionHeading>
      <Panel>
        {testimonials.map((testimonial) => {
          return <Testimonial key={testimonial.id} {...testimonial} />;
        })}
      </Panel>
    </>
  );
};

export default TestimonialGroup;
