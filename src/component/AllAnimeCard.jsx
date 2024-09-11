import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import FilterComp from "./FilterComp";
import SearchComp from "./SearchComp";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";
import "aos/dist/aos.css";
import AOS from "aos";
const AllAnimeCard = () => {
  const {
    filteredAnime,
    loading,
    error,
    getAllAnime,
    filterAnime,
    searchAnime,
    currentPage,
    setCurrentPage,
    totalPages,
  } = animeStore();

  useEffect(() => {
    AOS.init();
  }, []);

  

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getAllAnime( currentPage);
    }, 666);
    return () => clearTimeout(timeOut);
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
      <div className="lg:py-40 md:py-4 py-10">
        <div className="lg:flex text-center md:flex md:justify-center md:gap-10 lg:justify-around pb-2">
          <SearchComp searchAnime={searchAnime} />
          <FilterComp  filterAnime={filterAnime} />
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

        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 mx-10 my-2 gap-8">
          {filteredAnime.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-amber-200 shadow-sm rounded-md"
              data-aos="flip-right" data-aos-duration="1000"
              data-aos-once="false"
            >
              <Link to={`/detail/${anime.mal_id}`}>
                <p className=" text-center text-ellipsis overflow-hidden whitespace-nowrap font-bold hover:text-slate-600 px-4 py-4">
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
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimeCard;
