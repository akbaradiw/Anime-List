import React from "react";
import NavbarComp from "../component/NavbarComp";
import Banner from "../component/Banner";
import Upcoming from "../component/Upcoming";
import Carousel from "../component/Carousel";
const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Banner />
      <Carousel />
      <Upcoming />
    </div>
  );
};

export default Home;
