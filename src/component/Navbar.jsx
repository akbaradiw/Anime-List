import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="bg-amber-200 shadow-md p-4 mb-4">
      <div className="container mx-auto flex items-center  gap-20">
        <Link to='/'>
        <button className='text-amber-700 font-serif  underline decoration-wavy text-3xl font-extrabold  hover:cursor-pointer'> OH ANIME </button>
        </Link>
        <Link to ='/top-anime'>
        <button className='text-black text-2xl font-bold hover:cursor-pointer'> Top Anime</button>
        </Link>
        <Link to ='/all-anime'>
        <button className='text-black text-2xl font-bold hover:cursor-pointer'> All Anime</button>
        </Link>
      </div>
 
    </nav>
  );
};

export default Navbar;

