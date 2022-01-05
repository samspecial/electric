import React from "react";

import HeroSection from "../sections/HeroSection";
import NavBar from "../Navigation/NavBar";
import CardPanel from "../sections/CardPanel";
import TimeLineContainer from "../HowItWorks/TimeLineContainer";
import PricePanel from "../sections/PricingPanel";
import TestimonialGroup from "../Testimonial/TestimonialGroup";
import FaqList from "../FAQ/FaqList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardPanel />
      <TimeLineContainer />
      <PricePanel />
      <TestimonialGroup />
      <FaqList />
    </div>
  );
};

export default Home;
