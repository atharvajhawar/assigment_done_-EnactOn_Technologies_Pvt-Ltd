import React, { useState, useEffect, useCallback } from "react";
import { getStores } from "../api/api"; // Assuming getStores fetches store data
import StoreCard from "./StoreCard";
import Pagination from "./Pagination";
import Filters from "./Filters";
import StoreForm from "./StoreForm";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="p-4 bg-white border shadow-xl rounded-2xl animate-pulse">
        <div className="h-24 mb-4 bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="h-4 mt-2 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

const AllStores = () => {
  const [stores, setStores] = useState([]);
  const [filters, setFilters] = useState({ _page: 1, _limit: 6, category: "", search: "", sort: "" });
  const [total, setTotal] = useState(0);
  const [selectedStore, setSelectedStore] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStores = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getStores(filters);
      console.log(response);  // Log the response to check if it's correct
      if (Array.isArray(response.data)) {
        setStores(response.data);
        setTotal(response.total);
      } else {
        console.error("Response data is not an array:", response.data);
      }
    } catch (err) {
      console.error("Failed to fetch stores", err);
    }
    setLoading(false);
  }, [filters]);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return (
    <motion.div
      className="p-6 shadow-inner bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <SparklesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-300 animate-bounce" />
        <h2 className="text-3xl font-extrabold tracking-tight text-indigo-800 dark:text-white">Explore Stores</h2>
      </div>

      <Filters filters={filters} setFilters={setFilters} />

      <div className="flex flex-col gap-4 mb-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-3 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-white border border-indigo-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-xl"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value, _page: 1 })}
        />
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="p-3 text-gray-800 transition-all duration-200 bg-white border border-indigo-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl"
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="-name">Name (Z-A)</option>
        </select>
      </div>

      <StoreForm selected={selectedStore} refresh={fetchStores} />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <motion.div
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {stores && stores.length > 0 ? (
            stores.map((store) => (
              <StoreCard
                key={store.id}
                store={store}
                onEdit={() => setSelectedStore(store)}
                refresh={fetchStores}
              />
            ))
          ) : (
            <div>No stores available</div>
          )}
        </motion.div>
      )}

      <div className="mt-8">
        <Pagination
          total={total}
          limit={filters._limit}
          currentPage={filters._page}
          onPageChange={(page) => setFilters({ ...filters, _page: page })}
        />
      </div>
    </motion.div>
  );
};

export default AllStores;
