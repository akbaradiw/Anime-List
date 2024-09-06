import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import FilterComp from "./FilterComp";
import SearchComp from "./SearchComp";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";

const Card = () => {
  const {
    filteredAnime,
    loading,
    error,
    getAnime,
    filterAnime,
    resetFilter,
    searchAnime,
    currentPage,
    setCurrentPage,
    totalPages,
  } = animeStore();

  useEffect(() => {
    getAnime( currentPage);
  }, [getAnime, currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  

  return (
    <div className="pt-20">
      <div className="flex pt-20 justify-center">
        <SearchComp searchAnime={searchAnime} />
        <FilterComp filterAnime={filterAnime} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-10 my-2 gap-8">
        {filteredAnime.map((anime) => (
          <div key={anime.mal_id} className="border">
            <h3 className="text-center font-bold p-4">{anime.title}</h3>
            <div className="w-full flex justify-center  gap-4 bg-slate-200">
              <p className="font-semibold"> {anime.episodes} Episodes</p>
              <p className="font-semibold">
                {anime.aired?.from
                  ? new Date(anime.aired.from).toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>
            <div className="bg-slate-400 mb-6">
              <p className="text-center font-semibold">
                {anime.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="rounded-lg shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
              />
            </div>
            <Link
              to={`/detail/${anime.mal_id}`}
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
      <div>
        <PageButton
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Card;
