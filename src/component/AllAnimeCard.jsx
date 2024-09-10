import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import FilterComp from "./FilterComp";
import SearchComp from "./SearchComp";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";
const AllAnimeCard = () => {
  const {
    filteredAnime,
    loading,
    error,
    getAllAnime,
    filterAnime,
    resetFilter,
    searchAnime,
    currentPage,
    setCurrentPage,
    totalPages,
  } = animeStore();

  useEffect(() => {
    getAllAnime(currentPage,);
  }, [getAllAnime, currentPage]);

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
    <div>
      <div className="pt-10">
        <div className="flex justify-around pb-2">
          <SearchComp searchAnime={searchAnime} />
          <FilterComp filterAnime={filterAnime} />
        </div>
        <div className="pb-3">
          <PageButton
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 mx-10 my-2 gap-8">
          {filteredAnime.map((anime) => (
            <div key={anime.mal_id} className="bg-amber-200 shadow-sm rounded-md">
              <p className=" text-center overflow-hidden whitespace-nowrap font-bold px-2 py-2 w-64">
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
                    className="rounded-lg shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimeCard;
