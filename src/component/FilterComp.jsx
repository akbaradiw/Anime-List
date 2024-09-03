import React from "react";
const FilterComp = ({filterAnime}) => {
  return (
    <div>
      <select
        onChange={(e) => filterAnime(e.target.value)}
        className="border ms-4 text-lg hover:shadow-2xl hover:cursor-pointer  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        defaultValue="all"
      >
        <option value="all">All Genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Slice of Life">Slice of Life</option>
      </select>
    </div>
  );
};

export default FilterComp;
