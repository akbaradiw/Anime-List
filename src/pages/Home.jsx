import React from "react";
import Header from "../component/Header";
import NavbarComp from "../component/NavbarComp";
import Banner from "../component/Banner";
import Upcoming from "../component/Upcoming";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <div className="lg:pt-20 grid grid-cols-1 lg:grid-cols-2">
      <Banner />
        <Header />
      </div>
      <Upcoming />
    </div>
  );
};

export default Home;
