import React from "react";
const FilterComp = ({filterAnime}) => {
  return (
    <div className="pt-6">
      <select
        onChange={(e) => filterAnime(e.target.value)}
        className="w-40 lg:ms-4 text-lg shadow-md hover:cursor-pointer  font-semibold text-center text-black bg-amber-200 rounded-md hover:bg-amber-300 focus:ring-4 focus:outline-none dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        defaultValue="all"
      >
        <option value="all">Select Genres</option>
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
