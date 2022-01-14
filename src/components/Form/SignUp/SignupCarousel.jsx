import React from "react";
import Slider from "react-slick";
import { carousels } from "../../../data/signupCarousel";
import SignupItem from "./SignupItem";

import styled from "styled-components";

const SignupCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {carousels.map((carousel) => (
          <SignupItem key={carousel.id} {...carousel} />
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default SignupCarousel;

const CarouselWrapper = styled.div`
  width: 60%;
  height: 80%;
  padding: 0 3rem;

  img {
    width: 100%;
    height: 350px;
    display: block;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  p {
    display: flex;
    height: 150px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #880212;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    order: 1;
    margin-bottom: 30px;
    width: 100%;
    p {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
    order: 1;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 220px;
    }
  }
`;
