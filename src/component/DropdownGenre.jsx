import React from "react";
const DropdownGenre = ({ handleGenre }) => {

  return (
    <div>
      <select
        className="border ms-4 text-lg hover:shadow-2xl hover:cursor-pointer  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onChange={handleGenre}
      >
        <option value="all">Genre</option>
        <option value="1">Action</option>
        <option value="2">Adventure</option>
        <option value="3">Comedy</option>
        <option value="4">Drama</option>
        <option value="5">Fantasy</option>
        <option value="6">Horror</option>
        <option value="7">Mystery</option>
        <option value="8">Romance</option>
        <option value="9">Sci-Fi</option>
        <option value="10">Slice of Life</option>
      </select>
    </div>
  );
};

export default DropdownGenre;
