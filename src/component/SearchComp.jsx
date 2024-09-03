import React from "react";
const SearchComp = ({searchAnime}) => {

    return (
        <div>
            <input
                type="text"
                placeholder="Search anime..."
                className="border p-2 my-4"
                onChange={(e) => searchAnime(e.target.value)}
            />
        </div>
    );
    
}

export default SearchComp