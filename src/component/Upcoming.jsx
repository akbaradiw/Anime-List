import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Upcoming = () => {
  const { upComing, loading, error, getUpcoming } = animeStore();

  

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getUpcoming();
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [getUpcoming]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    
    <div className="py-10 px-10 lg:px-0">
      <h1 className="lg:text-3xl text-xl overline italic font-bold  text-center pt-6 pb-6">Coming Soon..</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-10 2xl:mx-20 mt-2 mb-4 gap-5 lg:gap-5"
      >
      {upComing.map((anime) => (
      <div
        key={anime.mal_id}
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="bg-amber-200 shadow-sm rounded-md mx-1 sm:mx-6 lg:mx-2">
          <Link to={`/detail/${anime.mal_id}`}>
            <p className="text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap hover:text-slate-600 px-4 py-2">
              {anime.title}
            </p>
          </Link>

          <div className="w-full flex justify-around bg-slate-200 p-2">
            <p className="font-semibold text-sm lg:text-base">
              {anime.episodes} Episodes
            </p>
            <p className="font-semibold text-sm lg:text-base">
              {anime.aired?.from
                ? new Date(anime.aired.from).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>

          <div className="bg-black p-2">
            <p className="text-center text-amber-200 font-semibold text-sm lg:text-base overflow-hidden whitespace-nowrap">
              {anime.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>

          <div className="flex justify-center pt-5 lg:px-2">
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="rounded-lg shadow-lg w-60 sm:w-40 lg:w-60 mb-6 hover:scale-110 transition-transform ease-in-out duration-300"
            />
          </div>
        </div>
      </div>

    ))}
    </div>
    </div>
  );
};

export default Upcoming;
