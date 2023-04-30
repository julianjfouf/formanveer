import React, { useState } from "react";
import Carousel from "../components/Carousel";

const Home = ({ title }) => {
  return (
    <div className="text-black h-screen flex justify-center items-center">
      <Carousel />
    </div>
  );
};

export default Home;
