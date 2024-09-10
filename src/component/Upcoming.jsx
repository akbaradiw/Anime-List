import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const { upComing, loading, error, getUpcoming } = animeStore();

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center pb-10">Coming Soon</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-60 mt-2 mb-4 gap-10">
        {upComing.map((anime) => (
          <div key={anime.mal_id} className="bg-amber-200 shadow-sm rounded-md">
            <p className=" text-center text-ellipsis overflow-hidden whitespace-nowrap font-bold px-4 py-4 ">
              {anime.title}
            </p>
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
              <Link to={`/detail/${anime.mal_id}`}>
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="rounded-lg w-60 shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Upcoming;
