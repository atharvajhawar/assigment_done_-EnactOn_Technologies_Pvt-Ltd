const Filters = ({ filters, setFilters }) => {
  // Add a defensive check to ensure filters is not undefined or null
  if (!filters) {
    return <div>Loading...</div>; // Or display a fallback UI
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <select
        value={filters.sort || ""} // Fallback to an empty string if sort is undefined
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="p-3 text-gray-800 bg-white border border-indigo-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl"
      >
        <option value="">Sort By</option>
        <option value="name">Name (A-Z)</option>
        <option value="-name">Category (Z-A)</option>
      </select>
    </div>
  );
};

export default Filters;
