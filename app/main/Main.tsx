import React from "react";
import Carousel from "./components/carousel";
import Category from "./components/category";
import Navbar from "./components/navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Category />
    </>
  );
};

export default Main;
