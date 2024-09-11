import React, { useEffect, useState } from "react";
import { animeStore } from "../stores/animeStore";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Header = () => {
  const { anime, getAnime } = animeStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getAnime();
  }, [getAnime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === anime.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [anime.length]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className=" hidden lg:block lg:pt-10 pt-7 px-10 lg:pe-40 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {anime.length > 0 && (
        <>
          <div className="lg:flex grid grid-cols-1  lg:justify-center relative  bg-amber-200 rounded-md shadow-md ">
            <div className=" lg:py-4 py-2 lg:px-6 ">
              <Link to={`/detail/${anime[currentIndex].mal_id}`}>
                <h1 className="lg:text-2xl text-lg  text-center py-2  font-bold hover:cursor-pointer hover:text-slate-600 ">
                  {anime[currentIndex].title}
                </h1>
              </Link>
              <p className="text-sm   text-center  ">
                {anime[currentIndex].synopsis}
              </p>
              {/* <p > {anime[currentIndex].genres.map((genre) => genre.name).join(", ")} </p> */}
            </div>

            <img
              src={anime[currentIndex].images.jpg.image_url}
              alt={anime[currentIndex].title}
              className="w-full px-10  lg:h-full py-2 lg:py-4 lg:px-6"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
