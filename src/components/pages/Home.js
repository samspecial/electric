import React from "react";

import HeroSection from "../sections/HeroSection";
import NavBar from "../Navigation/NavBar";

const Home = () => {
  return (
    <div>
          <NavBar />
          <HeroSection />
          <h3>Welcome to the best rescue home, we have got you covered on all grounds</h3>
    </div>
  );
};

export default Home;
