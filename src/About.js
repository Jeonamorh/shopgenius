import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import React from 'react';
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Shop Genius",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
