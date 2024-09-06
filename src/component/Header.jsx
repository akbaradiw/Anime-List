import React, { useEffect, useState } from "react";
import { animeStore } from "../stores/animeStore";

const Header = () => {
  const { topAnime, loading, error, getTopAnime } = animeStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTopAnime();
  }, [getTopAnime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === topAnime.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, [topAnime.length]);

  

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative w-full h-64">
      {topAnime.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-40">
            <div className="ps-80">
              <h1 className="text-2xl font-bold">
                {topAnime[currentIndex].title}
              </h1>
              <p className="text-sm">{topAnime[currentIndex].synopsis}</p>
            </div>
            <img
              src={topAnime[currentIndex].images.jpg.image_url}
              alt={topAnime[currentIndex].title}
              className="w-64 object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
