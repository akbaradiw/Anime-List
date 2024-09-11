import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";
import "aos/dist/aos.css";
import AOS from "aos";

const DetailCard = ({ id }) => {
  const getAnimeDetail = animeStore((state) => state.getAnimeDetail);
  const animeDetail = animeStore((state) => state.animeDetail);
  const loading = animeStore((state) => state.loading);
  const error = animeStore((state) => state.error);

  useEffect(() => {
    AOS.init();
    if (id) {
      getAnimeDetail(id);
    }
  }, [id, getAnimeDetail]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pb-20">
      <h1 className=" lg:pt-10 lg:text-3xl text-xl font-extrabold text-center">
        Detail Info
      </h1>

      {animeDetail && (
        <>
          <div className="grid lg:grid-cols-2  lg:px-80 lg:pt-20  ">
            <img
              src={animeDetail.images.jpg.image_url}
              alt={animeDetail.title}
              className="rounded-lg shadow-sm lg:ms-40  ms-20 mb-6 lg:pt-12 pt-4 lg:w-80 "
              data-aos="zoom-in"
              data-aos-duration="2000"
            />

            <div
              className="bg-amber-200 divide-y mx-10 lg:mx-0 divide-amber-950 divide-y-reverse rounded-lg shadow-lg p-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1 className="lg:text-xl underline decoration-double font-bold pb-5 text-center">
                {animeDetail.title}
              </h1>
              <div className="flex gap-2 text-sm  font-semibold lg:text-lg pb-2">
                <p className="  text-blue-700">Genres: </p>
                <p>
                  {animeDetail.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
              <div className="flex gap-2 text-sm  font-semibold lg:text-lg pb-2">
                <p className=" text-blue-700">Status: </p>
                <p> {animeDetail.status}</p>
              </div>
              <div className="flex gap-2 text-sm  font-semibold lg:text-lg pb-2">
                <p className=" text-blue-700">Episodes: </p>
                <p>{animeDetail.episodes}</p>
              </div>
              <div className="flex gap-2 text-sm  font-semibold lg:text-lg pb-2">
                <p className=" text-blue-700">Aired: </p>
                <p>{animeDetail.aired.string}</p>
              </div>
              <div className="flex gap-2 text-sm font-semibold lg:text-lg pb-2">
                <p className=" text-blue-700">Duration: </p>
                <p>{animeDetail.duration}</p>
              </div>
              <div className="flex gap-2 text-sm font-semibold lg:text-lg pb-2">
                <p className=" text-blue-700">Rating: </p>
                <p> {animeDetail.rating}</p>
              </div>

              <p className="lg:text-lg  text-sm">{animeDetail.synopsis}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCard;
