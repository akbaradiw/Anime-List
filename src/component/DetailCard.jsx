import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
const DetailCard = () => {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Fetching detail data API
  const getAnimeDetail = async () => {
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      setAnimeDetail(res.data.data);
    } catch (err) {
      setError("Error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnimeDetail();
  }, [id]);

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

      <div className="flex justify-center  ">
        <motion.div
          initial={{ opacity: 0, x: 68, y: -15 }}
          animate={{ opacity: 1, x: 2, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="lg:grid mx-10 mb-10 flex flex-col gap-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {animeDetail.images && animeDetail.images.jpg && (
              <img
                className=" ps-2 pt-5 object-cover  lg:mx-10  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={animeDetail.images.jpg.image_url}
                alt={animeDetail.title}
              />
            )}
            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {animeDetail.title}
              </h5>
              <p class="mb-3 text-sm text-gray-700 dark:text-gray-400 text-nowarp">
                {animeDetail.synopsis}
              </p>
              <p className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-400">
                Status : {animeDetail.status}
              </p>
              <p className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-400">
                Total Episodes : {animeDetail.episodes}
              </p>
              <p className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-400">
                Rating : {animeDetail.rating}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Link to="/">
        <button className="ps-10 hover:cursor-pointer hover:bg-blue-700 hover:text-white my-4 text-blue-700 font-bold rounded-sm bg-white px-1">
          Back
        </button>
      </Link>
    </div>
  );
};

export default DetailCard;
