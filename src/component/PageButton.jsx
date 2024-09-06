const PageButton = ({handlePageClick, handleNextPage, handlePrevPage, currentPage, totalPages }) => {

    return (
        <div className="pagination-controls flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`mx-1 px-4 py-2 ${
              currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'
            } rounded`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    )


    
}

export default PageButton