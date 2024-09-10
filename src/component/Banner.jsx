import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-around pt-40">
      <div >
        <h1 className="text-3xl font-bold text-center">Welcome To!</h1>
        <h1 className="text-amber-700 font-serif  underline decoration-wavy text-3xl font-extrabold  hover:cursor-pointer">
          {" "}
          OH ANIME{" "}
        </h1>
      </div>
      <Link to="/all-anime">
        <button className="text-3xl shadow-md font-bold text-amber-200 bg-black hover:cursor-pointer rounded-md p-2">
          Explore Anime
        </button>
      </Link>
    </div>
  );
};

export default Banner;
