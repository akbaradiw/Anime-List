import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import FilterComp from "./FilterComp";
import SearchComp from "./SearchComp";
import { Link } from "react-router-dom";

const Card = () => {
  const {
    filteredAnime,
    loading,
    error,
    getAnime,
    filterAnime,
    resetFilter,
    searchAnime,
  } = animeStore();

  useEffect(() => {
    getAnime();
  }, [getAnime]);

  return (
    <div>
      <div>
      <h1>Anime List</h1>
      <SearchComp searchAnime={searchAnime} />
      <FilterComp filterAnime={filterAnime} />

      {/* Loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-10 my-5 gap-8">
        {filteredAnime.map((anime) => (
          <div key={anime.mal_id} className="border p-4">
            <h3>{anime.title}</h3>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-full"
            />
            <Link
              to={`/detail/${anime.mal_id}`} // Corrected variable name
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See Anime
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Card;
