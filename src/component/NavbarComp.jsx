import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <nav className="lg: bg-amber-200 border-b-2 border-black   py-2 lg:py-5  shadow-md fixed z-50  w-full">
        <div className="container mx-auto flex-row flex justify-between  items-center">
          <button className="text-amber-700 font-serif  underline decoration-wavy lg:text-3xl text-xl ps-4 lg:ps-0 font-extrabold  hover:cursor-pointer">
            {" "}
            OH ANIME{" "}
          </button>
          <div className="block lg:hidden">
            <button
              onClick={() => clickMenu()}
              className="text-black focus:outline-none absolute top-4 right-4 transition-opacity duration-200"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full lg:flex lg:items-center lg:static fixed left-4 top-11  bg-white lg:bg-transparent lg:z-auto animate-slide-in lg:animate-none lg:w-auto "
            id="navbar-links"
          >
            <ul className="text-lg  lg:pt-0 lg:flex text-center lg:justify-between   lg:items-center lg:space-x-4 lg:text-white  ">
              <li>
                <Link
                  to="/"
                  className="block rounded-xl text-black font-bold shadow-md border-2 border-black bg-amber-200  lg:hover:bg-amber-800  lg:p-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/anime-list"
                  className="block rounded-xl text-black font-bold border-2 border-black shadow-md se bg-amber-200  lg:hover:bg-amber-800  lg:p-1"
                >
                  Anime List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="py-9 px-4 lg:hidden">
        <div className="container mx-auto"></div>
        <div
          className={`fixed bottom-0 right-0 left-0 w-full z-50 bg-amber-200 border-t-2 border-black shadow-md p-4 font-bold   text-black transition-transform duration-400   ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className="flex justify-around md:justify-around">
            <li>
              <Link
                to="/"
                className="flex items-center flex-col  justify-center md:text-2xl hover:text-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7  md:w-10 md:h-10 md:pb-2 "
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#000000"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/anime-list"
                className="flex items-center flex-col justify-center md:text-2xl  hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7  md:w-10 md:h-10 md:pb-2 "
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#000000"
                    d="M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2l32 0c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-16-64 0 0 16c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-17.6c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2l0 10.8c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-76c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12l0 76c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-118.9L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1 7.2 0L256 64l32 0c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                  />
                </svg>
                Anime List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
