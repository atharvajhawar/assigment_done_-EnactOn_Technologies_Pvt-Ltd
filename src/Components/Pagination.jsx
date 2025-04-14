const Pagination = ({ total, limit, currentPage, onPageChange }) => {
    const pages = Math.ceil(total / limit);
  
    return (
      <div className="flex gap-2 mt-4">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-indigo-600 text-white" : ""}`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
export default Pagination;