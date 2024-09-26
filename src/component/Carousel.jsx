import React, { useEffect, useState } from "react";
import { animeStore } from "../stores/animeStore";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const { anime, getAnime } = animeStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    getAnime();
  }, [getAnime]);

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className="pt-5 lg:pt-20 lg:mx-10 mx-4">
  <h1 className="text-xl lg:text-3xl font-bold italic overline text-center py-6">
    On Going
  </h1>

  <Slider {...settings}>
    {anime.map((anime) => (
      <div
        key={anime.mal_id}
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="bg-amber-200 shadow-sm rounded-md mx-4 sm:mx-6 lg:mx-2">
          <Link to={`/detail/${anime.mal_id}`}>
            <p className="text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap hover:text-slate-600 px-4 py-2">
              {anime.title}
            </p>
          </Link>

          <div className="w-full flex justify-around bg-slate-200 p-2">
            <p className="font-semibold text-sm lg:text-base">
              {anime.episodes} Episodes
            </p>
            <p className="font-semibold text-sm lg:text-base">
              {anime.aired?.from
                ? new Date(anime.aired.from).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>

          <div className="bg-black p-2">
            <p className="text-center text-amber-200 font-semibold text-sm lg:text-base overflow-hidden whitespace-nowrap">
              {anime.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>

          <div className="flex justify-center pt-5 lg:px-2">
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="rounded-lg shadow-lg w-60 sm:w-40 lg:w-60 mb-6 hover:scale-110 transition-transform ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Carousel;
