import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
// import Card from "../component/Card";
import Banner from "../component/Banner";
import Upcoming from "../component/Upcoming";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <Upcoming />
    </div>
  );
};

export default Home;
