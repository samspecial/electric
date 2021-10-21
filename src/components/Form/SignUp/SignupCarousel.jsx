import React from "react";
import Slider from "react-slick";
import carousels from "../../../data/signupCarousel";
import SignupItem from "./SignupItem";

const SignupCarousel = () => {
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
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {carousels.map((carousel) => (
          <SignupItem key={carousel.id} {...carousel} />
        ))}
      </Slider>
    </>
  );
};

export default SignupCarousel;
