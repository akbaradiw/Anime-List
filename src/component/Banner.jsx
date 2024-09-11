import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/anpu.png";
import "aos/dist/aos.css";
import AOS from "aos";


const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:pt-10 pt-5 ps-10" data-aos="fade-left" data-aos-duration="2000">
      <div className="flex justify-center gap-5">
        <h1 className="lg:text-3xl text-xl font-bold text-center">Welcome To!</h1>
        <h1 className="text-amber-700 text-center font-serif   underline decoration-wavy lg:text-3xl text-xl font-extrabold  hover:cursor-pointer">
          OH ANIME
        </h1>
      </div>

      <img src={image} alt="logo" className="lg:w-64 w-40 pt-5 mx-auto lg:pt-10 lg:pb-10 pb-5 " />
      <div className="text-center pe-10">
        <Link to="/anime-list">
          <button className="lg:text-2xl text-lg shadow-md  font-bold text-amber-200 bg-black hover:cursor-pointer rounded-md px-2 py-1">
            Explore Anime
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
