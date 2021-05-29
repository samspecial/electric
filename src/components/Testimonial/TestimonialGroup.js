import React from "react";
import testimonials from "../../data/testimonial";
import { Container, SectionHeading } from "../Styles";
import Testimonial from "./Testimonial";
import Slider from "react-slick";

const TestimonialGroup = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <SectionHeading>Testimonials</SectionHeading>
      <Slider {...settings}>
        {testimonials.map((testimonial) => {
          return <Testimonial key={testimonial.id} {...testimonial} />;
        })}
      </Slider>
    </Container>
  );
};

export default TestimonialGroup;
