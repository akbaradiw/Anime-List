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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-60 mt-2 mb-4 gap-5 lg:gap-10"
      >
        {upComing.map((anime) => (
          <div key={anime.mal_id} className="bg-amber-200 shadow-sm rounded-md"
          data-aos="flip-right" data-aos-duration="1000"
          data-aos-once="false">
            <Link to={`/detail/${anime.mal_id}`}>
              <p className=" text-center text-ellipsis overflow-hidden whitespace-nowrap font-bold hover:text-slate-600 px-4 py-4 ">
                {anime.title}
              </p>
            </Link>

            <div className="w-full flex justify-center  gap-4 bg-slate-200">
              <p className="font-semibold"> {anime.episodes} Episodes</p>
              <p className="font-semibold">
                {anime.aired?.from
                  ? new Date(anime.aired.from).toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>
            <div className="bg-black mb-6">
              <p className="text-center text-amber-200 overflow-hidden whitespace-nowrap px-4 font-semibold">
                {anime.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <div className="flex justify-center">
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="rounded-lg lg:w-60 w-40 shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
