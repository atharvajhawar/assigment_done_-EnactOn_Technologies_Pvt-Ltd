import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const StoreCard = ({ store, onEdit, refresh }) => {
  if (!store) return null; // Prevent rendering if store is undefined

  const {
    logo = "https://via.placeholder.com/300x200?text=No+Image",
    name = "Unnamed Store",
    homepage = "#",
    slug = "no-slug",
    cashback_type,
    cashback_percent = 0,
    cashback_amount = 0,
    category = {},
    id
  } = store;

  return (
    <div className="p-4 transition-all bg-white shadow-xl rounded-2xl dark:bg-gray-800">
      <img
        src={logo}
        alt={name}
        className="object-contain w-full h-40 mb-3 rounded-xl"
      />
      <h3 className="text-xl font-bold text-indigo-700 dark:text-white">{name}</h3>
      <p className="mt-1 mb-2 text-sm text-gray-500 dark:text-gray-300">
        Homepage:{" "}
        <a href={homepage} target="_blank" rel="noreferrer" className="text-indigo-500 underline">
          {slug}
        </a>
      </p>
      <p className="text-sm font-semibold text-green-600 dark:text-green-400">
        Cashback:{" "}
        {cashback_type === "cashback"
          ? `${cashback_percent}%`
          : `₹${cashback_amount}`}
      </p>

      {/* Safely rendering the category property */}
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Category: {category?.name ?? "No Category"}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={onEdit}
          className="flex items-center gap-1 px-3 py-1 text-sm text-indigo-700 bg-indigo-100 rounded-full shadow dark:bg-indigo-700 dark:text-white"
        >
          <PencilIcon className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={async () => {
            if (window.confirm("Are you sure to delete this store?")) {
              await fetch(`http://localhost:3001/stores/${id}`, {
                method: "DELETE",
              });
              refresh();
            }
          }}
          className="flex items-center gap-1 px-3 py-1 text-sm text-red-700 bg-red-100 rounded-full shadow dark:bg-red-700 dark:text-white"
        >
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
