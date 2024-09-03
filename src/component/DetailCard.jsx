import React, { useEffect } from "react";
import { animeStore } from "../stores/animeStore";

const DetailCard = ({ id }) => {
  const getAnimeDetail = animeStore((state) => state.getAnimeDetail);
  const animeDetail = animeStore((state) => state.animeDetail);
  const loading = animeStore((state) => state.loading);
  const error = animeStore((state) => state.error);

  useEffect(() => {
    if (id) {
      getAnimeDetail(id);
    }
  }, [id, getAnimeDetail]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {animeDetail && (
        <>
          <h1>{animeDetail.title}</h1>
          <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
          <p>{animeDetail.synopsis}</p>
        </>
      )}
    </div>
  );
};

export default DetailCard;
