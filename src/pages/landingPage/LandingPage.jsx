import React from "react";
import FeaturesSection from "../../components/featuresSections/FeaturesSection";
import PortfolioSection from "../../components/portfolioSection/PortfolioSection";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-300 via-slate-200 to-slate-200 ">
      <FeaturesSection />
      <PortfolioSection />
    </div>
  );
};

export default LandingPage;
