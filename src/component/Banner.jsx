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
<div className="pt-5 lg:pt-20 grid gap-8 grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-40" data-aos="fade-left" data-aos-duration="2000">
  <div className="lg:pt-20">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
      <h1 className="text-xl lg:text-3xl font-bold text-center">Welcome To!</h1>
      <h1 className="text-xl lg:text-3xl font-extrabold text-amber-700 underline decoration-wavy font-serif text-center hover:cursor-pointer">
        OH ANIME
      </h1>
    </div>
    <p className="text-sm lg:text-base mt-4 text-justify">
      Vestibulum aliquet nibh in libero placerat aliquet. Sed sit amet libero ac justo congue consequat. Cras vel bibendum tellus, sed laoreet sem. Nullam ut condimentum magna. Praesent placerat, tortor finibus tempor blandit, sapien diam laoreet metus, ac dignissim nibh quam et magna. Ut ut consectetur lectus, nec volutpat ipsum. Phasellus dui ante, imperdiet id auctor vel, placerat eu metus. Quisque sagittis ipsum eget turpis finibus bibendum. Morbi eget ipsum elit. Praesent venenatis vel sem et dictum. Phasellus a urna justo. Vivamus a rutrum dolor. Fusce id leo arcu.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img src={image} alt="logo" className="w-40 lg:w-64 mx-auto pt-5 lg:pt-10 lg:pb-10 pb-5" />
    <Link to="/anime-list">
      <button className="text-lg lg:text-2xl font-bold text-amber-200 bg-black hover:bg-amber-700 rounded-md px-6 py-2 shadow-md">
        Explore Anime
      </button>
    </Link>
  </div>
</div>


  )
};

export default Banner;
