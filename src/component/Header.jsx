import React, { useEffect, useState } from "react";
import { animeStore } from "../stores/animeStore";

const Header = () => {
  const { topAnime, loading, error, getTopAnime, randomAnime, getRandomAnime } = animeStore();
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
    
    <div className=" pt-10 relative h-64 mb-20 w-full ">
      {topAnime.length > 0 && (
        <>
          <div className="flex justify-center  bg-amber-200 rounded-md shadow-md  mx-80">
            <div className="px-10 ">
              <h1 className="text-2xl py-6 font-bold">
                {topAnime[currentIndex].title}
              </h1>
              <p className="text-sm">{topAnime[currentIndex].synopsis}</p>
            </div>
            <img
              src={topAnime[currentIndex].images.jpg.image_url}
              alt={topAnime[currentIndex].title}
              className="w-64 p-4"
            />
          </div>
        </>
      )}
     
    </div>
  );
};

export default Header;
