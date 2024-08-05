import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";

const index = () => {
  return (
    <div className="container">
      <HeroSection />
      <FeaturesSection />
      <Workflow />
      <Pricing />
    </div>
  );
};

export default index;
