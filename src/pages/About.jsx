import React from "react";
import AboutSection from "../components/About/AboutSection";
import ExampleContent from "../components/About/ExampleContent";

const About = () => {
  return (
    <div className="bg-white">
      <AboutSection
        imgUrl="https://via.placeholder.com/600x400?text=Image+Here"
        subheading="Fresh Ingredients"
        heading="Quality You Can Taste"
      >
        <ExampleContent />
      </AboutSection>
      <AboutSection
        imgUrl="https://via.placeholder.com/600x400?text=Image+Here"
        subheading="Fast Delivery"
        heading="Hot & Fresh to Your Door"
      >
        <ExampleContent />
      </AboutSection>
      <AboutSection
        imgUrl="https://via.placeholder.com/600x400?text=Image+Here"
        subheading="Affordable Prices"
        heading="Pizza for Every Occasion"
      >
        <ExampleContent />
      </AboutSection>
    </div>
  

  );
};

export default About;
