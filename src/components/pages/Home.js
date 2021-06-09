import React from "react";

import HeroSection from "../sections/HeroSection";
import NavBar from "../Navigation/NavBar";
import CardPanel from "../sections/CardPanel";
import TimeLineContainer from "../HowItWorks/TimeLineContainer";
import Signup from "../Form/Signup/Signup";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardPanel />
      <TimeLineContainer />
      <Signup />
      <h3>
        Welcome to the best rescue home, we have got you covered on all grounds
      </h3>
    </div>
  );
};

export default Home;
