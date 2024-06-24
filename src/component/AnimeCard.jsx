import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DropdownGenre from "./DropdownGenre";
const AnimeCard = () => {
  const [anime, setAnime] = useState([]);
  const [filterGenre, setFilterGenre] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetching API sekaligus mengambil data genres untuk keperluan membuat fungsi filter
  const getAnime = (genre) => {
    const genreParam = genre !== "all" ? `?genres=${genre}` : "";
    axios
      .get(`https://api.jikan.moe/v4/anime${genreParam}`)
      .then((res) => {
        setAnime(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAnime(filterGenre);
  }, [filterGenre]);

  // fungsi filter
  const handleGenre = (e) => {
    setFilterGenre(e.target.value);
    setLoading(true);
  };

  if (loading)
    return (
      <div className="flex justify-center">
        <img
          alt="loading"
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        />
        ;
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Feature filter by genre */}
      <DropdownGenre handleGenre={handleGenre} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-10 my-5 gap-8">
        {/* Data API yang ditampilkan ke dalam card */}
        {anime.map((animeItem) => (
          <motion.div
            initial={{ opacity: 0, x: 70, y: 20 }}
            animate={{ opacity: 1, x: 2, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              key={animeItem.mal_id}
              className="max-w-sm bg-white border hover:shadow-xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="flex justify-center">
                <img
                  className="rounded-t-lg w-1/2 mt-5"
                  src={animeItem.images.webp.image_url}
                  alt={animeItem.title}
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {animeItem.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {animeItem.genres.map((genre) => genre.name).join(", ")}
                </p>
                {/* Navigasi untuk melihat detail data API yang dipilih */}
                <Link
                  to={`/detail/${animeItem.mal_id}`}
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCard;
