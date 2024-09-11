import React from "react";
const SearchComp = ({searchAnime}) => {

    return (
        <div className="ms-1">
            <input
                type="text"
                placeholder="Search anime..."
                className="shadow-md p-2 my-4"
                onChange={(e) => searchAnime(e.target.value)}
            />
        </div>
    );
    
}

export default SearchComp