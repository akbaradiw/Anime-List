import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="bg-blue-700 p-4 mb-4">
      <div className="container mx-auto flex items-center 0 justify-between">
        <Link to='/'>
        <button className='text-white text-2xl font-bold hover:cursor-pointer'> Anime List</button>
        </Link>
      </div>
 
    </nav>
  );
};

export default Navbar;

