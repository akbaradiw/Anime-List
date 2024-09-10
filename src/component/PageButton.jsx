import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


const PageButton = ({handleNextPage, handlePrevPage, currentPage, totalPages }) => {

    return (
        <div className="pagination-controls flex justify-center mt-4">
        <span
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2  font-bold text-black hover:cursor-pointer"
        >
          <GrLinkPrevious />
        
        </span>

   

        <span
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2  font-bold text-black hover:cursor-pointer"
        >
          <GrLinkNext />
        </span>
      </div>
    )


    
}

export default PageButton